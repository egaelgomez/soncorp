import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle, Lock, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  email: z.string()
    .trim()
    .email("Por favor ingresa un correo válido")
    .max(255, "El email no puede exceder 255 caracteres"),
  company: z.string()
    .trim()
    .max(100, "El nombre de empresa no puede exceder 100 caracteres")
    .optional(),
  message: z.string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede exceder 1000 caracteres"),
});

const WHATSAPP_NUMBER = "5215512345678"; // Placeholder
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, me interesa una consultoría inicial para mi negocio. ¿Podrían darme más información?"
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validar con Zod
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulación de envío (aquí se conectaría con un backend real)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarnos. Te responderemos en menos de 24 horas.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ¿Listo para Mejorar tu Negocio?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Solicita tu consultoría o diagnóstico inicial sin compromiso. 
            Analizamos tu situación actual y te damos recomendaciones concretas 
            para mejorar tu atención al cliente, procesos o ventas.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <div className="max-w-md mx-auto mb-12">
          <Button
            onClick={handleWhatsAppClick}
            className="w-full h-auto py-4 px-6 bg-[#25D366] hover:bg-[#20BA5A] text-white text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            <MessageCircle className="h-6 w-6 mr-3" />
            <div className="text-left">
              <div>Escríbenos por WhatsApp</div>
              <div className="text-xs font-normal opacity-90">Respuesta en menos de 24 horas</div>
            </div>
          </Button>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-2xl mx-auto mb-12">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-muted-foreground text-sm">o déjanos un mensaje</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="border-border bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <p className="text-muted-foreground">contacto@soncorp.mx</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Teléfono</h3>
                  <p className="text-muted-foreground">+52 (55) 1234-5678</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">Ciudad de México, México</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border-border bg-card">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan@empresa.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Empresa (opcional)
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Mi Empresa S.A."
                    className={errors.company ? "border-destructive" : ""}
                  />
                  {errors.company && (
                    <p className="text-destructive text-xs mt-1">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu negocio y cómo podemos ayudarte..."
                    className={`w-full min-h-[120px] ${errors.message ? "border-destructive" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Mensaje"
                  )}
                </Button>

                <div className="flex items-start gap-2 text-xs text-muted-foreground mt-4">
                  <Lock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <p>
                    Tu información será utilizada únicamente para contactarte sobre los servicios de Soncorp. 
                    No compartimos tus datos con terceros.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
