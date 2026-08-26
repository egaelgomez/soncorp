import { Calendar } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

interface ServiceCTAProps {
  serviceName: string;
  challengeOptions?: { value: string; label: string }[];
  challengeLabel?: string;
  defaultChallenge?: string;
}

const defaultOptions = [
  { value: "consultoria", label: "Consultoría y diagnóstico" },
  { value: "implementacion", label: "Implementación" },
  { value: "acompanamiento", label: "Acompañamiento continuo" },
  { value: "otro", label: "Otro" },
];

const ServiceCTA = ({
  serviceName,
  challengeOptions = defaultOptions,
  challengeLabel = "¿Qué necesita? *",
  defaultChallenge = "",
}: ServiceCTAProps) => {
  return (
    <section id="service-cta" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Copy */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                ¿Listo para empezar?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Solicite una evaluación inicial sin compromiso. Conozcamos su situación actual
                y definamos prioridades con quick wins y resultados medibles.
              </p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>Llamada de 30 minutos • Sin compromiso</span>
              </div>
            </div>

            {/* Right: Form */}
            <ContactForm
              challengeLabel={challengeLabel}
              challengeOptions={challengeOptions}
              defaultChallenge={defaultChallenge}
              submitLabel="Solicitar evaluación inicial"
              serviceName={serviceName}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
