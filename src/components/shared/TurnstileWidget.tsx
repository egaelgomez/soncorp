import { useEffect, useRef } from "react";

type TurnstileOptions = {
  sitekey: string;
  action?: string;
  appearance?: "always" | "execute" | "interaction-only";
  language?: string;
  size?: "normal" | "flexible" | "compact";
  theme?: "auto" | "light" | "dark";
  callback: (token: string) => void;
  "error-callback"?: (errorCode?: string) => void;
  "expired-callback"?: () => void;
  "timeout-callback"?: () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileOptions) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_ID = "cloudflare-turnstile-script";
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

interface TurnstileWidgetProps {
  siteKey: string;
  onToken: (token: string | null) => void;
  resetKey?: number;
}

const TurnstileWidget = ({ siteKey, onToken, resetKey = 0 }: TurnstileWidgetProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenRef = useRef(onToken);

  useEffect(() => {
    onTokenRef.current = onToken;
  }, [onToken]);

  useEffect(() => {
    if (!siteKey) return;

    let disposed = false;
    let script: HTMLScriptElement | null = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    const renderWidget = () => {
      if (disposed || widgetIdRef.current || !containerRef.current || !window.turnstile) return;

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        action: "contact_form",
        appearance: "interaction-only",
        language: "es",
        size: "flexible",
        theme: "dark",
        callback: (token) => onTokenRef.current(token),
        "error-callback": () => {
          onTokenRef.current(null);
        },
        "expired-callback": () => {
          onTokenRef.current(null);
        },
        "timeout-callback": () => {
          onTokenRef.current(null);
        },
      });
    };

    if (window.turnstile) {
      renderWidget();
    } else if (script) {
      script.addEventListener("load", renderWidget);
    } else {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      script.addEventListener("load", renderWidget);
      script.addEventListener("error", () => onTokenRef.current(null));
      document.head.appendChild(script);
    }

    return () => {
      disposed = true;
      script?.removeEventListener("load", renderWidget);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
    };
  }, [siteKey]);

  useEffect(() => {
    if (resetKey <= 0 || !widgetIdRef.current || !window.turnstile) return;
    onTokenRef.current(null);
    window.turnstile.reset(widgetIdRef.current);
  }, [resetKey]);

  return <div ref={containerRef} className="min-h-[65px] w-full" aria-label="Verificación de seguridad" />;
};

export default TurnstileWidget;
