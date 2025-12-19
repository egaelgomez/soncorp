import { ArrowRight, Calendar } from "lucide-react";
import { solutions } from "./solutions/solutionsData";
import Chip from "./solutions/Chip";
import { Button } from "./ui/button";

const SolutionsSection = () => {
  return (
    <section id="servicios" className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluciones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados claros, ejecución medible.
          </p>
        </div>

        {/* Grid 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <article
                key={solution.id}
                className="group relative p-6 lg:p-8 rounded-xl bg-card border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5 hover:-translate-y-0.5"
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                    <Icon className="h-4 w-4 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-tight">
                    {solution.title}
                  </h3>
                </div>

                {/* Result */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {solution.result}
                </p>

                {/* Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                {solution.chips.map((chip, idx) => (
                    <Chip key={idx}>{chip}</Chip>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                  aria-label={`Ver detalles de ${solution.title}`}
                >
                  Ver detalles
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </article>
            );
          })}
        </div>

        {/* Tagline */}
        <p className="text-center text-sm text-muted-foreground mt-10 mb-8">
          Empezamos con quick wins (Starter) y escalamos a Enterprise conforme creces.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="gap-2">
            <Calendar className="h-4 w-4" />
            Agendar llamada
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            Ver todos los servicios
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
