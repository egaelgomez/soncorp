import { CONTACT_INFO } from "@/lib/constants";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, me interesa conocer más sobre los servicios de Soncorp"
);

const WhatsAppFloat = () => {
  const handleClick = () => {
    (window as any).dataLayer?.push({ event: "whatsapp_click", label: "whatsapp_float_global" });
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 animate-whatsapp-pulse"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.498 1.128 6.738 3.046 9.372L1.06 31.44l6.318-1.964A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.826 32 16S24.826 0 16.004 0Zm9.32 22.598c-.39 1.1-1.932 2.014-3.17 2.28-.848.18-1.956.324-5.684-1.222-4.772-1.978-7.84-6.816-8.076-7.132-.228-.316-1.912-2.548-1.912-4.86 0-2.314 1.21-3.45 1.64-3.922.39-.428 1.028-.612 1.638-.612.198 0 .376.01.536.018.47.02.706.048 1.016.788.388.926 1.332 3.24 1.448 3.476.118.236.232.548.076.86-.148.316-.278.512-.514.788-.236.276-.458.488-.694.784-.216.258-.458.534-.196.996.262.458 1.164 1.916 2.5 3.104 1.716 1.526 3.162 1.998 3.612 2.22.348.172.762.138 1.034-.156.342-.374.766-.994 1.196-1.606.306-.436.692-.492 1.076-.334.388.15 2.456 1.16 2.876 1.37.42.216.7.316.804.496.1.176.1 1.042-.29 2.144Z" />
      </svg>
    </button>
  );
};

export default WhatsAppFloat;
