import { createClient } from "npm:@supabase/supabase-js@2";

const DEFAULT_ALLOWED_ORIGINS = [
  "https://soncorp.com.mx",
  "https://www.soncorp.com.mx",
  "https://soncorp.lovable.app",
];
const DEFAULT_TURNSTILE_HOSTNAMES = [
  "soncorp.com.mx",
  "www.soncorp.com.mx",
  "soncorp.lovable.app",
];
const TURNSTILE_ACTION = "contact_form";
const TURNSTILE_SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const MAX_REQUEST_BYTES = 32_768;
const RATE_LIMIT_WINDOW_SECONDS = 600;
const RATE_LIMIT_MAX_REQUESTS = 5;

const baseCorsHeaders = {
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

const TAMANO_VALUES = new Set(["1-10", "11-50", "51-200", "201+"]);

interface ValidatedContact {
  nombre: string;
  empresa: string;
  rol: string | null;
  email: string;
  telefono: string;
  tamano: string;
  reto: string;
  mensaje: string | null;
  serviceName: string | null;
  attribution: {
    landingPath: string | null;
    formPath: string | null;
    referrer: string | null;
    utmSource: string | null;
    utmMedium: string | null;
    utmCampaign: string | null;
    utmTerm: string | null;
    utmContent: string | null;
    gclid: string | null;
    gbraid: string | null;
    wbraid: string | null;
    trafficSource: string;
  };
}

interface ValidationFailure {
  error: string;
}

interface TurnstileSiteverifyResponse {
  success?: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
}

type TurnstileCheck =
  | { ok: true }
  | { ok: false; unavailable: boolean };

type RateLimitCheck = "allowed" | "limited" | "unavailable";

function parseCsvEnv(name: string, defaults: string[]): Set<string> {
  const configured = Deno.env.get(name);
  const values = configured ? configured.split(",") : defaults;
  return new Set(values.map((value) => value.trim()).filter(Boolean));
}

function corsHeadersForRequest(req: Request): Record<string, string> {
  const headers: Record<string, string> = { ...baseCorsHeaders };
  const origin = req.headers.get("origin");
  const allowedOrigins = parseCsvEnv("CONTACT_ALLOWED_ORIGINS", DEFAULT_ALLOWED_ORIGINS);

  if (origin && allowedOrigins.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers.Vary = "Origin";
  }

  return headers;
}

function isOriginAllowed(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  return parseCsvEnv("CONTACT_ALLOWED_ORIGINS", DEFAULT_ALLOWED_ORIGINS).has(origin);
}

function jsonResponse(
  req: Request,
  body: Record<string, unknown>,
  status: number,
  extraHeaders?: Record<string, string>,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeadersForRequest(req),
      "Content-Type": "application/json",
      ...extraHeaders,
    },
  });
}

const MAX_PATH_LENGTH = 500;
const MAX_REFERRER_LENGTH = 2000;
const MAX_UTM_LENGTH = 200;
const MAX_CLICK_ID_LENGTH = 200;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function trimString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed || null;
}

function stripControlChars(value: string): string {
  let result = "";
  for (const char of value) {
    const code = char.charCodeAt(0);
    if (char === "\r" || char === "\n" || code < 32 || code === 127) {
      continue;
    }
    result += char;
  }
  return result.trim();
}

function normalizeAttributionText(value: unknown, max: number): string | null {
  const trimmed = trimString(value);
  if (!trimmed) return null;
  const sanitized = stripControlChars(trimmed);
  if (!sanitized || sanitized.length > max) return null;
  return sanitized;
}

/** Accept only path-like values starting with "/"; strip query and fragment. */
function normalizePath(value: unknown, max = MAX_PATH_LENGTH): string | null {
  const trimmed = trimString(value);
  if (!trimmed || !trimmed.startsWith("/")) return null;

  const path = trimmed.split("#", 1)[0].split("?", 1)[0].trim();
  if (!path.startsWith("/") || path.length > max) return null;
  return path;
}

/** Accept only HTTP(S) referrers; store origin + pathname without query, hash, or credentials. */
function normalizeReferrer(value: unknown, max = MAX_REFERRER_LENGTH): string | null {
  const trimmed = trimString(value);
  if (!trimmed) return null;

  try {
    const url = new URL(trimmed);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    if (url.username || url.password) return null;
    const sanitized = `${url.origin}${url.pathname}`;
    if (sanitized.length > max) return null;
    return sanitized;
  } catch {
    return null;
  }
}

function validationFailure(error: string): ValidationFailure {
  return { error };
}

function isValidationFailure(value: unknown): value is ValidationFailure {
  return isRecord(value) && typeof value.error === "string";
}

function requireField(value: unknown, max: number, fieldName: string): string | ValidationFailure {
  const trimmed = trimString(value);
  if (!trimmed) {
    return validationFailure(`Campo requerido: ${fieldName}`);
  }
  if (trimmed.length > max) {
    return validationFailure(`Campo demasiado largo: ${fieldName}`);
  }
  return trimmed;
}

function optionalField(
  value: unknown,
  max: number,
  fieldName: string,
): string | null | ValidationFailure {
  const trimmed = trimString(value);
  if (!trimmed) return null;
  if (trimmed.length > max) {
    return validationFailure(`Campo demasiado largo: ${fieldName}`);
  }
  return trimmed;
}

function isValidEmail(email: string): boolean {
  if (email.length > 255) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function deriveTrafficSource(attribution: Omit<ValidatedContact["attribution"], "trafficSource">): string {
  if (attribution.utmSource) {
    return attribution.utmSource.toLowerCase();
  }
  if (attribution.gclid || attribution.gbraid || attribution.wbraid) {
    return "google";
  }
  if (attribution.referrer) {
    try {
      const hostname = new URL(attribution.referrer).hostname.replace(/^www\./, "");
      if (hostname) return hostname.toLowerCase();
    } catch {
      // fall through to direct
    }
  }
  return "direct";
}

function validatePayload(raw: Record<string, unknown>): ValidatedContact | ValidationFailure {
  const nombreResult = requireField(raw.nombre, 100, "nombre");
  if (isValidationFailure(nombreResult)) return nombreResult;

  const empresaResult = requireField(raw.empresa, 100, "empresa");
  if (isValidationFailure(empresaResult)) return empresaResult;

  const emailResult = requireField(raw.email, 255, "email");
  if (isValidationFailure(emailResult)) return emailResult;
  if (!isValidEmail(emailResult)) {
    return validationFailure("Email inválido");
  }

  const telefonoResult = requireField(raw.telefono, 20, "telefono");
  if (isValidationFailure(telefonoResult)) return telefonoResult;

  const tamanoResult = requireField(raw.tamano, 20, "tamano");
  if (isValidationFailure(tamanoResult)) return tamanoResult;
  if (!TAMANO_VALUES.has(tamanoResult)) {
    return validationFailure("Tamaño de empresa inválido");
  }

  const retoResult = requireField(raw.reto, 100, "reto");
  if (isValidationFailure(retoResult)) return retoResult;

  const rolResult = optionalField(raw.rol, 100, "rol");
  if (isValidationFailure(rolResult)) return rolResult;

  const mensajeResult = optionalField(raw.mensaje, 1000, "mensaje");
  if (isValidationFailure(mensajeResult)) return mensajeResult;

  const serviceNameResult = optionalField(raw.serviceName, 200, "serviceName");
  if (isValidationFailure(serviceNameResult)) return serviceNameResult;

  const attr = isRecord(raw.attribution) ? raw.attribution : {};
  const formPath = normalizePath(attr.formPath);
  const landingPath = normalizePath(attr.landingPath) ?? formPath;

  const attributionBase = {
    landingPath,
    formPath,
    referrer: normalizeReferrer(attr.referrer),
    utmSource: normalizeAttributionText(attr.utmSource, MAX_UTM_LENGTH),
    utmMedium: normalizeAttributionText(attr.utmMedium, MAX_UTM_LENGTH),
    utmCampaign: normalizeAttributionText(attr.utmCampaign, MAX_UTM_LENGTH),
    utmTerm: normalizeAttributionText(attr.utmTerm, MAX_UTM_LENGTH),
    utmContent: normalizeAttributionText(attr.utmContent, MAX_UTM_LENGTH),
    gclid: normalizeAttributionText(attr.gclid, MAX_CLICK_ID_LENGTH),
    gbraid: normalizeAttributionText(attr.gbraid, MAX_CLICK_ID_LENGTH),
    wbraid: normalizeAttributionText(attr.wbraid, MAX_CLICK_ID_LENGTH),
  };

  return {
    nombre: nombreResult,
    empresa: empresaResult,
    rol: rolResult,
    email: emailResult.toLowerCase(),
    telefono: telefonoResult,
    tamano: tamanoResult,
    reto: retoResult,
    mensaje: mensajeResult,
    serviceName: serviceNameResult,
    attribution: {
      ...attributionBase,
      trafficSource: deriveTrafficSource(attributionBase),
    },
  };
}

function getClientIp(req: Request): string | null {
  const cfConnectingIp = trimString(req.headers.get("cf-connecting-ip"));
  if (cfConnectingIp) return cfConnectingIp.slice(0, 128);

  const forwardedFor = trimString(req.headers.get("x-forwarded-for"));
  if (forwardedFor) {
    const first = forwardedFor.split(",", 1)[0].trim();
    if (first) return first.slice(0, 128);
  }

  const realIp = trimString(req.headers.get("x-real-ip"));
  return realIp ? realIp.slice(0, 128) : null;
}

async function sha256Hex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function checkRateLimit(
  req: Request,
  supabase: ReturnType<typeof createClient>,
): Promise<RateLimitCheck> {
  const clientIp = getClientIp(req);
  if (!clientIp) {
    console.warn("Contact rate limit skipped because client IP was unavailable");
    return "allowed";
  }

  const keyHash = await sha256Hex(`soncorp-contact-v1:${clientIp}`);
  const { data, error } = await supabase.rpc("consume_contact_submission_rate_limit", {
    p_key_hash: keyHash,
    p_window_seconds: RATE_LIMIT_WINDOW_SECONDS,
    p_max_requests: RATE_LIMIT_MAX_REQUESTS,
  });

  if (error) {
    console.error("Contact rate limit check failed:", error.code ?? "unknown");
    return "unavailable";
  }

  return data === true ? "allowed" : "limited";
}

async function verifyTurnstile(
  token: string,
  secretKey: string,
  clientIp: string | null,
): Promise<TurnstileCheck> {
  try {
    const response = await fetch(TURNSTILE_SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: secretKey,
        response: token,
        ...(clientIp ? { remoteip: clientIp } : {}),
      }),
    });

    if (!response.ok) {
      console.error(`Turnstile Siteverify HTTP error: ${response.status}`);
      return { ok: false, unavailable: true };
    }

    const result = await response.json() as TurnstileSiteverifyResponse;
    if (!result.success) {
      console.warn("Turnstile verification rejected:", result["error-codes"]?.join(",") ?? "unknown");
      return { ok: false, unavailable: false };
    }

    if (result.action !== TURNSTILE_ACTION) {
      console.warn("Turnstile verification rejected because action did not match");
      return { ok: false, unavailable: false };
    }

    const allowedHostnames = parseCsvEnv(
      "TURNSTILE_ALLOWED_HOSTNAMES",
      DEFAULT_TURNSTILE_HOSTNAMES,
    );
    if (!result.hostname || !allowedHostnames.has(result.hostname)) {
      console.warn("Turnstile verification rejected because hostname was not allowed");
      return { ok: false, unavailable: false };
    }

    return { ok: true };
  } catch (error) {
    console.error(
      "Turnstile verification unavailable:",
      error instanceof Error ? error.message : "unknown",
    );
    return { ok: false, unavailable: true };
  }
}

function sanitizeSubjectPart(value: string): string {
  let result = "";
  for (const char of value) {
    const code = char.charCodeAt(0);
    if (char === "\r" || char === "\n" || code < 32 || code === 127) {
      result += " ";
    } else {
      result += char;
    }
  }
  return result.trim();
}

function leadShortId(leadId: string): string {
  return leadId.replace(/-/g, "").slice(0, 8).toUpperCase();
}

function buildEmailHtml(lead: ValidatedContact, leadId: string): string {
  const { attribution: attr } = lead;
  const attributionRows: string[] = [];

  const addRow = (label: string, value: string | null) => {
    if (value) {
      attributionRows.push(
        `<tr><td style="padding: 8px 12px; font-weight: bold; color: #555; width: 160px;">${label}</td><td style="padding: 8px 12px;">${escapeHtml(value)}</td></tr>`,
      );
    }
  };

  addRow("Traffic source", attr.trafficSource);
  addRow("Landing page", attr.landingPath);
  addRow("Form page", attr.formPath);
  addRow("Referrer", attr.referrer);
  addRow("UTM source", attr.utmSource);
  addRow("UTM medium", attr.utmMedium);
  addRow("UTM campaign", attr.utmCampaign);
  addRow("UTM term", attr.utmTerm);
  addRow("UTM content", attr.utmContent);
  addRow("GCLID", attr.gclid);
  addRow("GBRAID", attr.gbraid);
  addRow("WBRAID", attr.wbraid);

  const attributionSection = attributionRows.length > 0
    ? `
        <h3 style="color: #1a1a2e; margin-top: 24px; margin-bottom: 8px;">Atribución</h3>
        <table style="width: 100%; border-collapse: collapse;">
          ${attributionRows.join("")}
        </table>
      `
    : "";

  return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #e94560; padding-bottom: 10px;">
          ${lead.serviceName ? `Nuevo Lead: ${escapeHtml(lead.serviceName)}` : "Nuevo Lead desde el sitio web"}
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 12px; font-weight: bold; color: #555; width: 140px;">Lead ID</td><td style="padding: 8px 12px;">${escapeHtml(leadId)}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px 12px; font-weight: bold; color: #555;">Nombre</td><td style="padding: 8px 12px;">${escapeHtml(lead.nombre)}</td></tr>
          <tr><td style="padding: 8px 12px; font-weight: bold; color: #555;">Empresa</td><td style="padding: 8px 12px;">${escapeHtml(lead.empresa)}</td></tr>
          ${lead.rol ? `<tr style="background: #f9f9f9;"><td style="padding: 8px 12px; font-weight: bold; color: #555;">Rol / Cargo</td><td style="padding: 8px 12px;">${escapeHtml(lead.rol)}</td></tr>` : ""}
          <tr${lead.rol ? "" : ' style="background: #f9f9f9;"'}><td style="padding: 8px 12px; font-weight: bold; color: #555;">Email</td><td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a></td></tr>
          <tr${lead.rol ? ' style="background: #f9f9f9;"' : ""}><td style="padding: 8px 12px; font-weight: bold; color: #555;">Teléfono</td><td style="padding: 8px 12px;"><a href="tel:${escapeHtml(lead.telefono)}">${escapeHtml(lead.telefono)}</a></td></tr>
          <tr${lead.rol ? "" : ' style="background: #f9f9f9;"'}><td style="padding: 8px 12px; font-weight: bold; color: #555;">Tamaño</td><td style="padding: 8px 12px;">${escapeHtml(lead.tamano)}</td></tr>
          <tr${lead.rol ? ' style="background: #f9f9f9;"' : ""}><td style="padding: 8px 12px; font-weight: bold; color: #555;">Reto Principal</td><td style="padding: 8px 12px;">${escapeHtml(lead.reto)}</td></tr>
          ${lead.serviceName ? `<tr${lead.rol ? "" : ' style="background: #f9f9f9;"'}><td style="padding: 8px 12px; font-weight: bold; color: #555;">Servicio</td><td style="padding: 8px 12px;">${escapeHtml(lead.serviceName)}</td></tr>` : ""}
          ${lead.mensaje ? `<tr style="background: #f9f9f9;"><td style="padding: 8px 12px; font-weight: bold; color: #555;">Mensaje</td><td style="padding: 8px 12px;">${escapeHtml(lead.mensaje)}</td></tr>` : ""}
        </table>
        ${attributionSection}
        <p style="margin-top: 20px; font-size: 12px; color: #999;">Enviado desde soncorp.com.mx</p>
      </div>
    `;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeadersForRequest(req) });
  }

  if (req.method !== "POST") {
    return jsonResponse(req, { error: "Method not allowed" }, 405);
  }

  if (!isOriginAllowed(req)) {
    return jsonResponse(req, { error: "Origin not allowed" }, 403);
  }

  try {
    const contentLength = Number(req.headers.get("content-length"));
    if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
      return jsonResponse(req, { error: "Payload too large" }, 413);
    }

    let rawBody: unknown;
    try {
      const rawText = await req.text();
      if (new TextEncoder().encode(rawText).byteLength > MAX_REQUEST_BYTES) {
        return jsonResponse(req, { error: "Payload too large" }, 413);
      }
      rawBody = JSON.parse(rawText);
    } catch {
      return jsonResponse(req, { error: "Invalid JSON payload" }, 400);
    }

    if (!isRecord(rawBody)) {
      return jsonResponse(req, { error: "Invalid JSON payload" }, 400);
    }

    // Honeypot: pretend success so automated fillers receive no useful signal.
    if (trimString(rawBody.website)) {
      return jsonResponse(req, { success: true, notificationSent: false }, 200);
    }

    const turnstileTokenResult = requireField(rawBody.turnstileToken, 2048, "turnstileToken");
    if (isValidationFailure(turnstileTokenResult)) {
      return jsonResponse(req, { error: "Verificación de seguridad requerida" }, 403);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const turnstileSecretKey = Deno.env.get("TURNSTILE_SECRET_KEY");
    if (!supabaseUrl || !supabaseServiceKey || !turnstileSecretKey) {
      console.error("Missing server security configuration");
      return jsonResponse(req, { error: "Server configuration error" }, 500);
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const rateLimit = await checkRateLimit(req, supabase);
    if (rateLimit === "unavailable") {
      return jsonResponse(req, { error: "Servicio temporalmente no disponible" }, 503);
    }
    if (rateLimit === "limited") {
      return jsonResponse(
        req,
        { error: "Demasiados intentos. Intente nuevamente en unos minutos." },
        429,
        { "Retry-After": String(RATE_LIMIT_WINDOW_SECONDS) },
      );
    }

    const turnstile = await verifyTurnstile(
      turnstileTokenResult,
      turnstileSecretKey,
      getClientIp(req),
    );
    if (!turnstile.ok) {
      return turnstile.unavailable
        ? jsonResponse(req, { error: "Verificación de seguridad temporalmente no disponible" }, 503)
        : jsonResponse(req, { error: "Verificación de seguridad inválida" }, 403);
    }

    const validated = validatePayload(rawBody);
    if (isValidationFailure(validated)) {
      return jsonResponse(req, { error: validated.error }, 400);
    }

    const { data: leadRow, error: insertError } = await supabase
      .from("leads")
      .insert({
        status: "new",
        nombre: validated.nombre,
        empresa: validated.empresa,
        rol: validated.rol,
        email: validated.email,
        telefono: validated.telefono,
        tamano: validated.tamano,
        reto: validated.reto,
        mensaje: validated.mensaje,
        service_name: validated.serviceName,
        traffic_source: validated.attribution.trafficSource,
        landing_path: validated.attribution.landingPath,
        form_path: validated.attribution.formPath,
        referrer: validated.attribution.referrer,
        utm_source: validated.attribution.utmSource,
        utm_medium: validated.attribution.utmMedium,
        utm_campaign: validated.attribution.utmCampaign,
        utm_term: validated.attribution.utmTerm,
        utm_content: validated.attribution.utmContent,
        gclid: validated.attribution.gclid,
        gbraid: validated.attribution.gbraid,
        wbraid: validated.attribution.wbraid,
      })
      .select("id")
      .single();

    if (insertError || !leadRow?.id) {
      console.error("Lead insert failed:", insertError?.code ?? "unknown");
      return jsonResponse(req, { error: "Error al guardar la solicitud" }, 500);
    }

    const leadId = leadRow.id as string;
    let notificationSent = false;

    try {
      const resendApiKey = Deno.env.get("RESEND_API_KEY");
      if (!resendApiKey) {
        console.error("Missing RESEND_API_KEY after lead persisted:", leadId);
      } else {
        const shortId = leadShortId(leadId);
        const empresaPart = sanitizeSubjectPart(validated.empresa);
        const servicePart = validated.serviceName ? sanitizeSubjectPart(validated.serviceName) : null;
        const subject = servicePart
          ? `Nuevo lead [${shortId}] – ${servicePart} – ${empresaPart}`
          : `Nuevo lead [${shortId}] – ${empresaPart}`;

        const htmlBody = buildEmailHtml(validated, leadId);

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Soncorp Web <noreply@soncorp.com.mx>",
            to: ["hola@soncorp.com.mx"],
            subject,
            html: htmlBody,
          }),
        });

        if (!res.ok) {
          console.error(`Resend API error [${res.status}] for lead ${leadId}`);
        } else {
          notificationSent = true;
        }
      }
    } catch (error) {
      console.error(
        "Notification delivery failed for lead",
        leadId,
        error instanceof Error ? error.message : "unknown",
      );
    }

    return jsonResponse(req, { success: true, notificationSent, leadId }, 200);
  } catch (err) {
    console.error("Error processing contact submission:", err instanceof Error ? err.message : "unknown");
    return jsonResponse(req, { error: "Error al enviar el mensaje" }, 500);
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
