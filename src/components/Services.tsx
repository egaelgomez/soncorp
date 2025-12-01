import { Card, CardContent } from "@/components/ui/card";
import { Headphones, TrendingUp, Monitor, Target, Check, AlertTriangle, X } from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Atención al Cliente y Customer Experience",
    painPointsTitle: "¿Cómo afecta una mala atención al cliente a tu negocio?",
    painPoints: [
      "Ventas perdidas por respuestas lentas o atención fría",
      "Clientes que se van con la competencia por sentirse ignorados",
      "Reseñas negativas en internet que espantan a nuevos clientes",
      "Más quejas y retrabajo para tu equipo",
      "Desgaste y estrés constante para ti como dueño o director",
      "Mala reputación que tarda años en reconstruirse",
    ],
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
    <section id="servicios" className="section-padding bg-muted/30">
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
              <CardContent className="p-5 md:p-6">
                <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                
                {service.painPoints && (
                  <div className="bg-destructive/5 border-l-4 border-destructive/30 rounded-r-lg p-4 mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      <h4 className="font-semibold text-destructive text-sm">
                        {service.painPointsTitle}
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {service.painPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-sm text-muted-foreground flex items-start">
                          <X className="h-4 w-4 text-destructive/70 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.painPoints && (
                  <p className="text-sm font-medium text-primary mb-3">
                    Lo que hacemos por ti:
                  </p>
                )}
                
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
