import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
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

function jsonResponse(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
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

function requireField(value: unknown, max: number, fieldName: string): string | Response {
  const trimmed = trimString(value);
  if (!trimmed) {
    return jsonResponse({ error: `Campo requerido: ${fieldName}` }, 400);
  }
  if (trimmed.length > max) {
    return jsonResponse({ error: `Campo demasiado largo: ${fieldName}` }, 400);
  }
  return trimmed;
}

function optionalField(value: unknown, max: number, fieldName: string): string | null | Response {
  const trimmed = trimString(value);
  if (!trimmed) return null;
  if (trimmed.length > max) {
    return jsonResponse({ error: `Campo demasiado largo: ${fieldName}` }, 400);
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

function validatePayload(raw: Record<string, unknown>): ValidatedContact | Response {
  const nombreResult = requireField(raw.nombre, 100, "nombre");
  if (nombreResult instanceof Response) return nombreResult;

  const empresaResult = requireField(raw.empresa, 100, "empresa");
  if (empresaResult instanceof Response) return empresaResult;

  const emailResult = requireField(raw.email, 255, "email");
  if (emailResult instanceof Response) return emailResult;
  if (!isValidEmail(emailResult)) {
    return jsonResponse({ error: "Email inválido" }, 400);
  }

  const telefonoResult = requireField(raw.telefono, 20, "telefono");
  if (telefonoResult instanceof Response) return telefonoResult;

  const tamanoResult = requireField(raw.tamano, 20, "tamano");
  if (tamanoResult instanceof Response) return tamanoResult;
  if (!TAMANO_VALUES.has(tamanoResult)) {
    return jsonResponse({ error: "Tamaño de empresa inválido" }, 400);
  }

  const retoResult = requireField(raw.reto, 100, "reto");
  if (retoResult instanceof Response) return retoResult;

  const rolResult = optionalField(raw.rol, 100, "rol");
  if (rolResult instanceof Response) return rolResult;

  const mensajeResult = optionalField(raw.mensaje, 1000, "mensaje");
  if (mensajeResult instanceof Response) return mensajeResult;

  const serviceNameResult = optionalField(raw.serviceName, 200, "serviceName");
  if (serviceNameResult instanceof Response) return serviceNameResult;

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
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      return jsonResponse({ error: "Invalid JSON payload" }, 400);
    }

    if (!isRecord(rawBody)) {
      return jsonResponse({ error: "Invalid JSON payload" }, 400);
    }

    const validated = validatePayload(rawBody);
    if (validated instanceof Response) return validated;

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Missing Supabase server credentials");
      return jsonResponse({ error: "Server configuration error" }, 500);
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

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
      return jsonResponse({ error: "Error al guardar la solicitud" }, 500);
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

    return jsonResponse({ success: true, notificationSent, leadId }, 200);
  } catch (err) {
    console.error("Error processing contact submission:", err instanceof Error ? err.message : "unknown");
    return jsonResponse({ error: "Error al enviar el mensaje" }, 500);
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
