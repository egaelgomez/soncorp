export type GenerateLeadEvent = {
  event: "generate_lead";
  lead_method: "contact_form";
  service_name?: string;
  form_path: string;
};

export type WhatsAppClickEvent = {
  event: "whatsapp_click";
  placement: string;
  service_name?: string;
  page_path: string;
};

export type AnalyticsEvent = GenerateLeadEvent | WhatsAppClickEvent;

export type GtmBootstrapEvent = {
  "gtm.start": number;
  event: "gtm.js";
};

export type DataLayerItem = AnalyticsEvent | GtmBootstrapEvent;

declare global {
  interface Window {
    dataLayer?: DataLayerItem[];
  }
}

function ensureDataLayer(): DataLayerItem[] | undefined {
  try {
    if (typeof window === "undefined") return undefined;
    if (!window.dataLayer) {
      window.dataLayer = [];
    }
    return window.dataLayer;
  } catch {
    return undefined;
  }
}

export function pushAnalyticsEvent<E extends AnalyticsEvent>(event: E): void {
  try {
    ensureDataLayer()?.push(event);
  } catch {
    // Analytics must never block business functionality.
  }
}
