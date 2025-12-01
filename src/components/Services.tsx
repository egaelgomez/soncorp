import { Card, CardContent } from "@/components/ui/card";
import { Headphones, TrendingUp, Monitor, Target, Check } from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Atención al Cliente y Customer Experience",
    bullets: [
      "Diagnóstico de la experiencia actual de tu cliente",
      "Implementación de protocolos de atención y seguimiento",
      "Capacitación a tu equipo en servicio al cliente",
      "Diseño de encuestas de satisfacción y métricas NPS",
    ],
    benefit: "Menos quejas, más clientes que regresan y te recomiendan",
  },
  {
    icon: TrendingUp,
    title: "Consultoría de Negocios e Inversión",
    bullets: [
      "Análisis financiero y diagnóstico de rentabilidad",
      "Planes de crecimiento y expansión a nuevos mercados",
      "Asesoría para búsqueda de inversión o crédito",
      "Optimización de estructura de costos y márgenes",
    ],
    benefit: "Decisiones más inteligentes que protegen y hacen crecer tu capital",
  },
  {
    icon: Monitor,
    title: "Servicios de IT y Soporte por Tickets",
    bullets: [
      "Mesa de ayuda y soporte técnico por tickets",
      "Administración de infraestructura y servidores",
      "Implementación de herramientas de productividad",
      "Seguridad informática y respaldos",
    ],
    benefit: "Menos estrés técnico, más tiempo para tu negocio",
  },
  {
    icon: Target,
    title: "Marketing y Automatización",
    bullets: [
      "Estrategias de marketing digital y redes sociales",
      "Automatización de procesos de venta y seguimiento",
      "Campañas de email marketing y nutrición de leads",
      "Análisis de métricas y optimización de conversiones",
    ],
    benefit: "Más leads calificados y ventas sin duplicar esfuerzos",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales diseñadas específicamente para las necesidades de PYMEs mexicanas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-smooth hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-6">
                <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2 mb-5">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-muted-foreground leading-relaxed flex items-start">
                      <span className="text-accent mr-2 mt-1 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-start gap-2 bg-accent/10 rounded-lg p-3 mt-4">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-accent leading-relaxed">
                    {service.benefit}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
