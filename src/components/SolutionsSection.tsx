import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { solutions } from "./solutions/solutionsData";
import Chip from "./solutions/Chip";
import { Button } from "./ui/button";
import AnimatedSection from "./AnimatedSection";
import { useCallback, useRef } from "react";

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.2s ease-out" }}
    >
      {children}
    </div>
  );
};

const SolutionsSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicios" className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluciones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados claros, ejecución medible.
          </p>
        </AnimatedSection>

        {/* Grid 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <AnimatedSection key={solution.id} animation="fade-up" delay={index * 100} className="h-full">
                <TiltCard className="group relative p-6 lg:p-8 rounded-xl bg-card border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 h-full flex flex-col">
                  {/* Shimmer overlay on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-border animate-shimmer pointer-events-none" />

                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4 relative">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-all duration-300 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-4 w-4 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground leading-tight">
                      {solution.title}
                    </h3>
                  </div>

                  {/* Result */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 relative">
                    {solution.result}
                  </p>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2 mb-6 relative flex-grow">
                    {solution.chips.map((chip, idx) => (
                      <Chip key={idx}>{chip}</Chip>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/servicios/${solution.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded relative group/link"
                    aria-label={`Ver detalles de ${solution.title}`}
                  >
                    Ver detalles
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </TiltCard>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Tagline */}
        <AnimatedSection animation="fade-in" delay={400}>
          <p className="text-center text-sm text-muted-foreground mt-10 mb-8">
            Empezamos con quick wins (Starter) y escalamos a Enterprise conforme crece su empresa.
          </p>
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection animation="fade-up" delay={500}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 hover:scale-105 transition-transform duration-200" onClick={scrollToContact}>
              <Calendar className="h-4 w-4" />
              Solicitar evaluación inicial
            </Button>
            <Button variant="outline" size="lg" className="gap-2 group/btn hover:scale-105 transition-transform duration-200" asChild>
              <Link to="/servicios">
                Ver todos los servicios
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SolutionsSection;
