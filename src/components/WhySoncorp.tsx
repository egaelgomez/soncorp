import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "Más de 10 años asesorando PYMEs en México con resultados medibles y casos de éxito documentados.",
  },
  {
    icon: Users,
    title: "Enfoque Personalizado",
    description: "Cada negocio es único. Diseñamos estrategias a la medida de tus necesidades, recursos y objetivos.",
  },
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description: "Implementamos soluciones que empiezan a generar resultados visibles desde las primeras semanas.",
  },
  {
    icon: CheckCircle,
    title: "Metodología Probada",
    description: "Utilizamos frameworks y herramientas de consultoría reconocidas internacionalmente adaptadas a México.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
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
