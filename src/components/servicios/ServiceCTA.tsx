import { useState } from "react";
import { Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ServiceCTAProps {
  serviceName: string;
}

const ServiceCTA = ({ serviceName }: ServiceCTAProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "¡Solicitud enviada!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    setFormData({ name: "", company: "", email: "", phone: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="service-cta" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                ¿Listo para empezar?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Agenda una llamada de diagnóstico sin costo. Evaluamos tu situación actual 
                y te proponemos un plan con quick wins y resultados medibles.
              </p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>Llamada de 30 minutos • Sin compromiso</span>
              </div>
            </div>

            {/* Right: Form */}
            <form 
              onSubmit={handleSubmit}
              className="p-6 lg:p-8 rounded-xl bg-card border border-border"
            >
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">Nombre</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1.5"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-foreground">Empresa</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1.5"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1.5"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground">Teléfono (opcional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1.5"
                    placeholder="+52 55 1234 5678"
                  />
                </div>
                <input type="hidden" name="service" value={serviceName} />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full mt-6 gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Solicitar diagnóstico
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
