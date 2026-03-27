import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const FloatingOrb = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "absolute rounded-full opacity-[0.04] bg-secondary blur-3xl pointer-events-none",
      className
    )}
    aria-hidden="true"
  />
);

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 md:pt-20 hero-gradient overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30 animate-gradient-shift" style={{ backgroundSize: "200% 200%" }}></div>

      {/* Floating orbs */}
      <FloatingOrb className="w-96 h-96 -top-20 -right-20 animate-float" />
      <FloatingOrb className="w-72 h-72 bottom-10 -left-16 animate-float-slow" />
      <FloatingOrb className="w-48 h-48 top-1/3 right-1/4 animate-float" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6 border border-secondary/30 transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">Consultoría Empresarial en Hermosillo, Sonora</span>
          </div>

          {/* Main heading */}
          <h1
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight transition-all duration-700 ease-out delay-150",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Consultoría integral para empresas que quieren{" "}
            <span className="text-secondary silver-text-glow">mejorar su atención al cliente</span>{" "}
            y hacer crecer su negocio
          </h1>

          {/* Subheading */}
          <p
            className={cn(
              "text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto transition-all duration-700 ease-out delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            En Soncorp le ayudamos a transformar la experiencia de sus clientes, optimizar sus procesos operativos y de TI, e impulsar su crecimiento con estrategias de marketing y desarrollo de negocios orientadas a resultados. Trabajamos con empresas pequeñas, medianas y grandes en Hermosillo, Sonora y todo México.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
