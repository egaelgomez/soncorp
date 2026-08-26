import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Chip from "@/components/solutions/Chip";
import { solutions } from "@/components/solutions/solutionsData";

const Servicios = () => {
  return (
    <>
      <SEO
        title="Servicios | Soncorp — Consultoría empresarial"
        description="Customer Experience, Consultoría de Negocios, Consultoría y Soluciones TI, y Marketing & Automatización. Soluciones prácticas, medibles y escalables para empresas en México."
        canonicalPath="/servicios"
      />

      <Navigation />
      
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Servicios Soncorp
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones prácticas, medibles y escalables: Customer Experience, Consultoría de Negocios, Consultoría y Soluciones TI, y Marketing & Automatización.
            </p>
          </div>
        </section>

        {/* Grid 2×2 */}
        <section className="pb-16 md:pb-20 bg-background">
          <div className="container mx-auto px-4">
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
                      <h2 className="text-lg font-semibold text-foreground leading-tight">
                        {solution.title}
                      </h2>
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
                    <Link
                      to={`/servicios/${solution.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                      aria-label={`Ver detalles de ${solution.title}`}
                    >
                      Ver detalles
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Solicite una evaluación inicial sin compromiso y conozca cómo podemos ayudarle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/#contacto">
                  <Calendar className="h-4 w-4" />
                  Solicitar evaluación inicial
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <Link to="/#contacto">
                  Contacto
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Servicios;
