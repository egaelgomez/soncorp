import { MessageSquare } from "lucide-react";

const WHATSAPP_NUMBER = "5215512345678";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, solicito una asesoría inicial de Soncorp CX. Me interesa mejorar la experiencia del cliente (interno/externo). ¿Podemos agendar una llamada?"
);

const WhatsAppFloat = () => {
  const handleClick = () => {
    (window as any).dataLayer?.push({ event: "whatsapp_click", label: "cx_whatsapp_float" });
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
    >
      <MessageSquare className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppFloat;
