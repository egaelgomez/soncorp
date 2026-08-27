export interface GenerateLeadEvent {
  event: "generate_lead";
  lead_method: "contact_form";
  service_name?: string;
  form_path?: string;
}

export interface WhatsAppClickEvent {
  event: "whatsapp_click";
  placement: string;
  service_name?: string;
  page_path?: string;
}

export interface GtmBootstrapItem {
  "gtm.start": number;
  event: "gtm.js";
}

export type AnalyticsEvent = GenerateLeadEvent | WhatsAppClickEvent;
export type DataLayerItem = AnalyticsEvent | GtmBootstrapItem;

declare global {
  interface Window {
    dataLayer?: DataLayerItem[];
  }
}

export const pushDataLayerItem = (item: DataLayerItem): void => {
  try {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(item);
  } catch {
    // Analytics must never break the app.
  }
};

export const pushAnalyticsEvent = (event: AnalyticsEvent): void => {
  pushDataLayerItem(event);
};
