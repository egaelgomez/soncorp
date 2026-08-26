import { Target, BarChart3, Wrench, Layers, Clock, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const whyCards = [
  {
    icon: Target,
    title: "Marcos y estándares",
    headline: "Metodología + estándares operativos.",
    chips: ["Six Pillars", "SLAs"],
  },
  {
    icon: BarChart3,
    title: "Resultados medibles",
    headline: "KPIs para demostrar avance.",
    chips: ["NPS/CSAT", "MTTR"],
  },
  {
    icon: Wrench,
    title: "Ejecución hands-on",
    headline: "Implementamos junto a su equipo, no solo consultamos.",
    chips: ["Playbooks", "Training"],
  },
  {
    icon: Layers,
    title: "Visión integral",
    headline: "CX + Negocios + TI + Marketing.",
    chips: ["Menos proveedores"],
  },
  {
    icon: Clock,
    title: "Capacidad flexible",
    headline: "Bolsa de horas para escalar rápido.",
    chips: ["Ticket-based"],
  },
  {
    icon: Zap,
    title: "Automatización",
    headline: "Menos trabajo repetitivo, más velocidad.",
    chips: ["Flows", "Bots"],
  },
];

const WhySoncorp = () => {
  return (
    <section id="por-que-soncorp" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Por qué elegir Soncorp?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Consultoría empresarial en México con método, ejecución y métricas en cada proyecto.
          </p>
        </AnimatedSection>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {whyCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <AnimatedSection key={index} animation="fade-up" delay={index * 80} as="article">
                <div className="group relative p-6 rounded-xl bg-card border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5 hover:-translate-y-1 h-full">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-secondary/20">
                      <Icon className="h-4 w-4 text-secondary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {card.title}
                    </h3>
                  </div>

                  {/* Headline */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {card.headline}
                  </p>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2">
                    {card.chips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border transition-colors duration-200 group-hover:border-secondary/30"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySoncorp;
