import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle, Lock } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import ContactForm from "@/components/shared/ContactForm";

const generalChallengeOptions = [
  { value: "cx", label: "Experiencia del cliente (CX)" },
  { value: "ti", label: "Consultoría o soluciones TI" },
  { value: "marketing", label: "Marketing y automatización" },
  { value: "negocios", label: "Consultoría de negocios" },
  { value: "otro", label: "Otro" },
];

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <section id="contacto" className="py-20 bg-muted">
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
            aria-label="Contactar por WhatsApp para respuesta rápida"
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
            <Card className="border-border bg-card hover:border-secondary/50 transition-smooth">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-muted-foreground hover:text-secondary transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-secondary/50 transition-smooth">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Teléfono</h3>
                  <a href={CONTACT_INFO.phoneLink} className="text-muted-foreground hover:text-secondary transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-secondary/50 transition-smooth">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">{CONTACT_INFO.address}</p>
                  <p className="text-muted-foreground">{CONTACT_INFO.city}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm
              challengeLabel="¿Qué le interesa? *"
              challengeOptions={generalChallengeOptions}
              submitLabel="Enviar solicitud"
            />
            <div className="flex items-start gap-2 text-xs text-muted-foreground mt-4 px-2">
              <Lock className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <p>
                Tu información será utilizada únicamente para contactarte sobre los servicios de Soncorp. 
                No compartimos tus datos con terceros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
