import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { MessageSquare, Check, Loader2 } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  nombre: z.string().trim().min(1, "Nombre requerido").max(100),
  empresa: z.string().trim().min(1, "Empresa requerida").max(100),
  rol: z.string().trim().max(100).optional().or(z.literal("")),
  email: z.string().trim().email("Email inválido").max(255),
  telefono: z.string().trim().min(1, "Teléfono requerido").max(20),
  tamano: z.string().min(1, "Seleccione tamaño"),
  reto: z.string().min(1, "Seleccione reto principal"),
  mensaje: z.string().trim().max(1000).optional(),
});

interface ChallengeOption {
  value: string;
  label: string;
}

interface ContactFormProps {
  challengeLabel?: string;
  challengeOptions: ChallengeOption[];
  defaultChallenge?: string;
  submitLabel?: string;
  serviceName?: string;
}

const ContactForm = ({
  challengeLabel = "¿Qué desea mejorar? *",
  challengeOptions,
  defaultChallenge = "",
  submitLabel = "Agendar asesoría inicial",
  serviceName,
}: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    rol: "",
    email: "",
    telefono: "",
    tamano: "",
    reto: defaultChallenge,
    mensaje: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [sending, setSending] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`,
      "_blank"
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSending(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: { ...formData, serviceName },
      });

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: "Solicitud recibida",
        description: "Nos pondremos en contacto con usted a la brevedad.",
      });
    } catch (err) {
      console.error("Error sending contact email:", err);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema. Intente de nuevo o escríbanos por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary/60 transition-colors text-sm";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";
  const errorClass = "text-xs text-destructive mt-1";

  if (submitted) {
    return (
      <div className="text-center p-10 rounded-xl bg-card border border-secondary/30">
        <Check className="h-12 w-12 text-secondary mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-3">Solicitud recibida</h3>
        <p className="text-muted-foreground mb-6">
          Nos pondremos en contacto con usted a la brevedad.
        </p>
        <Button
          onClick={handleWhatsAppClick}
          variant="outline"
          className="gap-2 border-secondary/50 text-secondary"
        >
          <MessageSquare className="h-4 w-4" />
          También puede escribirnos por WhatsApp
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-xl bg-card border border-border/50">
      {serviceName && <input type="hidden" name="service" value={serviceName} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Nombre completo *</label>
          <input
            className={inputClass}
            placeholder="Su nombre"
            value={formData.nombre}
            onChange={(e) => updateField("nombre", e.target.value)}
          />
          {errors.nombre && <p className={errorClass}>{errors.nombre}</p>}
        </div>
        <div>
          <label className={labelClass}>Empresa *</label>
          <input
            className={inputClass}
            placeholder="Nombre de su empresa"
            value={formData.empresa}
            onChange={(e) => updateField("empresa", e.target.value)}
          />
          {errors.empresa && <p className={errorClass}>{errors.empresa}</p>}
        </div>
        <div>
          <label className={labelClass}>Rol / Cargo</label>
          <input
            className={inputClass}
            placeholder="Director, Gerente, etc. (opcional)"
            value={formData.rol}
            onChange={(e) => updateField("rol", e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            className={inputClass}
            type="email"
            placeholder="correo@empresa.com"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
        <div>
          <label className={labelClass}>Teléfono / WhatsApp *</label>
          <input
            className={inputClass}
            placeholder="+52 662 471 3286"
            value={formData.telefono}
            onChange={(e) => updateField("telefono", e.target.value)}
          />
          {errors.telefono && <p className={errorClass}>{errors.telefono}</p>}
        </div>
        <div>
          <label className={labelClass}>Tamaño de empresa *</label>
          <select
            className={inputClass}
            value={formData.tamano}
            onChange={(e) => updateField("tamano", e.target.value)}
          >
            <option value="">Seleccione</option>
            <option value="1-10">1–10 empleados</option>
            <option value="11-50">11–50 empleados</option>
            <option value="51-200">51–200 empleados</option>
            <option value="201+">201+ empleados</option>
          </select>
          {errors.tamano && <p className={errorClass}>{errors.tamano}</p>}
        </div>
      </div>
      <div>
        <label className={labelClass}>{challengeLabel}</label>
        <select
          className={inputClass}
          value={formData.reto}
          onChange={(e) => updateField("reto", e.target.value)}
        >
          <option value="">Seleccione</option>
          {challengeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.reto && <p className={errorClass}>{errors.reto}</p>}
      </div>
      {!showMessage ? (
        <button
          type="button"
          onClick={() => setShowMessage(true)}
          className="text-sm text-secondary hover:text-secondary/80 transition-colors underline underline-offset-2"
        >
          + Agregar mensaje (opcional)
        </button>
      ) : (
        <div>
          <label className={labelClass}>Mensaje (opcional)</label>
          <textarea
            className={`${inputClass} min-h-[80px] resize-none`}
            placeholder="Cuéntenos brevemente sobre su situación."
            value={formData.mensaje}
            onChange={(e) => updateField("mensaje", e.target.value)}
          />
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <Button
          type="submit"
          size="lg"
          className="bg-secondary text-secondary-foreground hover:bg-accent-hover font-semibold flex-1"
        >
          {submitLabel}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={handleWhatsAppClick}
          className="gap-2 border-secondary/50 text-secondary hover:bg-secondary/10"
        >
          <MessageSquare className="h-4 w-4" />
          WhatsApp
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
