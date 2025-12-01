import { Card, CardContent } from "@/components/ui/card";
import { Layers, MessageCircle, Briefcase, Wallet, Target } from "lucide-react";

const benefits = [
  {
    icon: Layers,
    title: "Enfoque integral",
    description: "Cliente, procesos, tecnología y marketing: todo en un solo lugar. No necesitas contratar 4 proveedores diferentes.",
  },
  {
    icon: MessageCircle,
    title: "Lenguaje claro",
    description: "Te explicamos las cosas sin tecnicismos innecesarios. Entenderás cada paso y cada decisión que tomamos juntos.",
  },
  {
    icon: Briefcase,
    title: "Experiencia práctica",
    description: "Conocemos la realidad de las PYMEs mexicanas y también los estándares de empresas grandes. Lo mejor de ambos mundos.",
  },
  {
    icon: Wallet,
    title: "Planes ajustados a tu presupuesto",
    description: "Empezamos con lo que hoy puedes invertir. Crecemos contigo, sin compromisos que no puedas cumplir.",
  },
  {
    icon: Target,
    title: "Pensado para resultados",
    description: "Priorizamos acciones que impactan directamente en ventas, servicio al cliente y reputación. Nada de teoría sin aplicación.",
  },
];

const WhySoncorp = () => {
  return (
    <section id="por-que-soncorp" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ¿Por qué Elegir Soncorp?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos el socio estratégico que tu PYME necesita para alcanzar el siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-border bg-card hover:shadow-lg transition-smooth"
            >
              <CardContent className="p-6 flex gap-4">
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial-style section */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <p className="text-xl md:text-2xl font-semibold mb-4 italic">
            "Trabajar con Soncorp transformó completamente nuestra forma de atender clientes. En 6 meses aumentamos nuestras ventas en un 45%"
          </p>
          <p className="text-primary-foreground/80">
            — María González, Directora General de Soluciones Tech MX
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySoncorp;
