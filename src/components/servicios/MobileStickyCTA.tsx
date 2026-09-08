import { useEffect, useState } from "react";
import { MessageSquare, ChevronRight } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { pushAnalyticsEvent } from "@/lib/analytics";

interface MobileStickyCTAProps {
  targetId?: string;
  serviceName?: string;
  whatsappMessage?: string;
}

const MobileStickyCTA = ({
  targetId = "cta-final",
  serviceName,
  whatsappMessage = CONTACT_INFO.whatsappMessage,
}: MobileStickyCTAProps) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId]);

  const handleForm = () => {
    pushAnalyticsEvent({
      event: "sticky_cta_click",
      cta: "solicitar_asesoria",
      ...(serviceName ? { service_name: serviceName } : {}),
      page_path: window.location.pathname,
    });
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    pushAnalyticsEvent({
      event: "sticky_cta_click",
      cta: "whatsapp",
      ...(serviceName ? { service_name: serviceName } : {}),
      page_path: window.location.pathname,
    });
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Spacer so the bar never covers page content */}
      <div className="md:hidden h-20" aria-hidden="true" />
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-border/60 bg-background/95 backdrop-blur transition-all duration-300 ${
          hidden ? "translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        <div className="flex items-center gap-2 px-3 pt-2">
          <button
            type="button"
            onClick={handleForm}
            className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm py-3 hover:bg-accent-hover transition-colors"
          >
            Solicitar asesoría
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-1 rounded-lg border border-secondary/50 text-secondary text-sm font-medium px-4 py-3 hover:bg-secondary/10 transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            WhatsApp
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileStickyCTA;
