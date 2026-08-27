import type { DataLayerItem } from "@/lib/analytics";

const GTM_ID_PATTERN = /^GTM-[A-Z0-9]+$/;

let initialized = false;

function isValidGtmId(id: string): boolean {
  return GTM_ID_PATTERN.test(id);
}

function ensureDataLayer(): DataLayerItem[] {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  return window.dataLayer;
}

function gtmScriptAlreadyPresent(gtmId: string): boolean {
  return document.querySelector(`script[src*="googletagmanager.com/gtm.js?id=${gtmId}"]`) !== null;
}

export function initializeGoogleTagManager(): void {
  try {
    const gtmId = (import.meta.env.VITE_GTM_ID ?? "").trim();
    if (!gtmId || !isValidGtmId(gtmId)) return;

    if (initialized) return;

    if (gtmScriptAlreadyPresent(gtmId)) {
      initialized = true;
      return;
    }

    initialized = true;

    const dataLayer = ensureDataLayer();
    dataLayer.push({
      "gtm.start": Date.now(),
      event: "gtm.js",
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);
  } catch {
    // GTM failure must never break application startup.
  }
}
