import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Settings, Headphones, BarChart3, Target } from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Atención al Cliente",
    description: "Mejoramos la experiencia de tus clientes con estrategias de servicio excepcional que aumentan la fidelización y las recomendaciones.",
  },
  {
    icon: TrendingUp,
    title: "Estrategias de Crecimiento",
    description: "Diseñamos planes de expansión personalizados para escalar tu negocio de forma sostenible y rentable.",
  },
  {
    icon: Settings,
    title: "Optimización de Procesos",
    description: "Identificamos y eliminamos ineficiencias para reducir costos y aumentar la productividad de tu equipo.",
  },
  {
    icon: Users,
    title: "Desarrollo Organizacional",
    description: "Fortalecemos tu equipo con capacitación y estructuras que mejoran el clima laboral y los resultados.",
  },
  {
    icon: BarChart3,
    title: "Análisis y Diagnóstico",
    description: "Evaluamos tu negocio con herramientas especializadas para detectar oportunidades de mejora e inversión.",
  },
  {
    icon: Target,
    title: "Marketing y Ventas",
    description: "Implementamos estrategias de marketing digital y ventas que generan más leads y aumentan tus conversiones.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-smooth hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-6">
                <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
