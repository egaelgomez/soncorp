import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-2xl md:text-3xl font-bold text-primary hover:text-accent transition-smooth"
          >
            Soncorp
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("por-que-soncorp")}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              ¿Por qué Soncorp?
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-secondary hover:bg-secondary/90"
            >
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-accent transition-smooth"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="flex flex-col gap-4 p-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-accent transition-smooth font-medium py-2"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-left text-foreground hover:text-accent transition-smooth font-medium py-2"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("por-que-soncorp")}
                className="text-left text-foreground hover:text-accent transition-smooth font-medium py-2"
              >
                ¿Por qué Soncorp?
              </button>
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-secondary hover:bg-secondary/90 w-full"
              >
                Contacto
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
