const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactPayload {
  nombre: string;
  empresa: string;
  rol?: string;
  email: string;
  telefono: string;
  tamano: string;
  reto: string;
  mensaje?: string;
  serviceName?: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload: ContactPayload = await req.json();

    const required = ["nombre", "empresa", "email", "telefono", "tamano", "reto"] as const;
    for (const field of required) {
      if (!payload[field]?.trim()) {
        return new Response(
          JSON.stringify({ error: `Campo requerido: ${field}` }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const subject = payload.serviceName
      ? `Nuevo lead – ${payload.serviceName} – ${payload.empresa}`
      : `Nuevo lead – ${payload.empresa}`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #e94560; padding-bottom: 10px;">
          ${payload.serviceName ? `Nuevo Lead: ${payload.serviceName}` : "Nuevo Lead desde el sitio web"}
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 12px; font-weight: bold; color: #555; width: 140px;">Nombre</td><td style="padding: 8px 12px;">${escapeHtml(payload.nombre)}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px 12px; font-weight: bold; color: #555;">Empresa</td><td style="padding: 8px 12px;">${escapeHtml(payload.empresa)}</td></tr>
          ${payload.rol ? `<tr><td style="padding: 8px 12px; font-weight: bold; color: #555;">Rol / Cargo</td><td style="padding: 8px 12px;">${escapeHtml(payload.rol)}</td></tr>` : ""}
          <tr style="background: #f9f9f9;"><td style="padding: 8px 12px; font-weight: bold; color: #555;">Email</td><td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
          <tr><td style="padding: 8px 12px; font-weight: bold; color: #555;">Teléfono</td><td style="padding: 8px 12px;"><a href="tel:${escapeHtml(payload.telefono)}">${escapeHtml(payload.telefono)}</a></td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px 12px; font-weight: bold; color: #555;">Tamaño</td><td style="padding: 8px 12px;">${escapeHtml(payload.tamano)}</td></tr>
          <tr><td style="padding: 8px 12px; font-weight: bold; color: #555;">Reto Principal</td><td style="padding: 8px 12px;">${escapeHtml(payload.reto)}</td></tr>
          ${payload.mensaje ? `<tr style="background: #f9f9f9;"><td style="padding: 8px 12px; font-weight: bold; color: #555;">Mensaje</td><td style="padding: 8px 12px;">${escapeHtml(payload.mensaje)}</td></tr>` : ""}
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #999;">Enviado desde soncorp.com.mx</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
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
      const errBody = await res.text();
      console.error(`Resend API error [${res.status}]:`, errBody);
      throw new Error(`Resend error: ${res.status}`);
    }

    const data = await res.json();
    console.log("Email sent successfully, id:", data.id);

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error sending email:", err);
    return new Response(
      JSON.stringify({ error: "Error al enviar el mensaje" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
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
