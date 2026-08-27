import { pushDataLayerItem } from "@/lib/analytics";

const GTM_ID_PATTERN = /^GTM-[A-Z0-9]+$/;

let initialized = false;

export const initializeGoogleTagManager = (): void => {
  try {
    if (initialized) return;
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const gtmId = (import.meta.env.VITE_GTM_ID ?? "").trim();
    if (!gtmId || !GTM_ID_PATTERN.test(gtmId)) return;

    const scriptSrcFragment = `googletagmanager.com/gtm.js?id=${gtmId}`;
    const existing = Array.from(
      document.querySelectorAll<HTMLScriptElement>("script[src]")
    ).some((script) => script.src.includes(scriptSrcFragment));

    if (existing) {
      initialized = true;
      return;
    }

    pushDataLayerItem({ "gtm.start": Date.now(), event: "gtm.js" });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);

    initialized = true;
  } catch {
    // Never break app startup.
  }
};
