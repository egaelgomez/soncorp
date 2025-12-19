import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 md:pt-20 hero-gradient">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6 border border-secondary/30 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">Consultoría Especializada para PYMEs</span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            Consultoría integral para PYMEs que quieren{" "}
            <span className="text-secondary silver-text-glow">mejorar su atención al cliente</span>{" "}
            y hacer crecer su negocio
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            En Soncorp te ayudamos a transformar la experiencia de tus clientes, optimizar tus procesos operativos y de TI, e impulsar tu crecimiento con estrategias de marketing y desarrollo de negocios que generan resultados medibles.
          </p>

          {/* Target audience text */}
          <p className="text-sm text-muted-foreground/80 mb-8 max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-250">
            Diseñado especialmente para dueños y directores de PYMEs que buscan resultados tangibles.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-7 duration-700 delay-300">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-secondary hover:bg-accent-hover text-secondary-foreground px-8 silver-glow font-semibold"
            >
              Agenda una Consultoría
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById("servicios");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary"
            >
              Ver Servicios
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">+150</div>
              <div className="text-sm md:text-base text-muted-foreground">PYMEs Asesoradas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">95%</div>
              <div className="text-sm md:text-base text-muted-foreground">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">+40%</div>
              <div className="text-sm md:text-base text-muted-foreground">Crecimiento Promedio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
