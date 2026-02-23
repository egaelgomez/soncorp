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
            En Soncorp le ayudamos a transformar la experiencia de sus clientes, optimizar sus procesos operativos y de TI, e impulsar su crecimiento con estrategias de marketing y desarrollo de negocios orientadas a resultados.
          </p>

          {/* Target audience text */}
          <p className="text-sm text-muted-foreground/80 mb-8 max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-250">
            Para dueños y directores de empresas que buscan resultados tangibles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
