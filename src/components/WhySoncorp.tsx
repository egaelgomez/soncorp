import { Target, BarChart3, Wrench, Layers, Clock, Zap } from "lucide-react";

const whyCards = [
  {
    icon: Target,
    title: "Marco probado",
    headline: "CX con metodología Six Pillars + estándares operativos.",
    bullets: ["Diagnóstico + journeys", "Playbooks de resolución"],
    chip: "Six Pillars",
  },
  {
    icon: BarChart3,
    title: "Resultados medibles",
    headline: "KPIs desde el día 1 para demostrar avance.",
    bullets: ["NPS/CSAT/CES", "SLAs, MTTR, backlog"],
    chip: "Dashboards",
  },
  {
    icon: Wrench,
    title: "Ejecución hands-on",
    headline: "Implementamos con tu equipo, no solo recomendamos.",
    bullets: ["SOPs + training", "Governance y seguimiento"],
    chip: "SOPs",
  },
  {
    icon: Layers,
    title: "Enfoque integral",
    headline: "CX + TI + Marketing + Finanzas: menos proveedores.",
    bullets: ["Un plan conectado", "Prioridades claras"],
    chip: "Integral",
  },
  {
    icon: Clock,
    title: "Capacidad flexible",
    headline: "Soporte por tickets y bolsa de horas para escalar.",
    bullets: ["Multitecnología", "Operación por SLAs"],
    chip: "SLAs",
  },
  {
    icon: Zap,
    title: "Automatización inteligente",
    headline: "Automatizamos lo repetitivo para liberar tiempo.",
    bullets: ["ManyChat/flows", "Optimización continua"],
    chip: "Automation",
  },
];

const WhySoncorp = () => {
  return (
    <section id="por-que-soncorp" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Por qué elegir Soncorp?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Método, ejecución y métricas. No teoría.
          </p>
        </div>

        {/* 6 Cards Grid: 2x3 on desktop, 2x3 on tablet, 1 col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {whyCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <article
                key={index}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5 hover:-translate-y-0.5"
              >
                {/* Icon & Title row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Headline */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {card.headline}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-5">
                  {card.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Chip */}
                <div className="pt-4 border-t border-border">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border">
                    {card.chip}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySoncorp;
