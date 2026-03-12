import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import soncorpLogo from "@/assets/soncorp-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <nav
      aria-label="Menú de navegación principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex-shrink-0 transition-smooth hover:opacity-80"
          >
            <img 
              src={soncorpLogo} 
              alt="Soncorp - Consultoría para PYMEs" 
              className="h-8 md:h-10 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground/80 hover:text-secondary transition-smooth font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground/80 hover:text-secondary transition-smooth font-medium"
            >
              Servicios
            </button>
            <a
              href="/servicios/customer-experience"
              className="text-foreground/80 hover:text-secondary transition-smooth font-medium"
            >
              Soncorp CX
            </a>
            <button
              onClick={() => scrollToSection("por-que-soncorp")}
              className="text-foreground/80 hover:text-secondary transition-smooth font-medium"
            >
              ¿Por qué Soncorp?
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-secondary text-secondary-foreground hover:bg-accent-hover font-semibold"
            >
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-secondary transition-smooth"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
            <div className="flex flex-col gap-4 p-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground/80 hover:text-secondary transition-smooth font-medium py-2"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-left text-foreground/80 hover:text-secondary transition-smooth font-medium py-2"
              >
                Servicios
              </button>
              <a
                href="/servicios/customer-experience"
                className="text-left text-foreground/80 hover:text-secondary transition-smooth font-medium py-2 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Soncorp CX
              </a>
              <button
                onClick={() => scrollToSection("por-que-soncorp")}
                className="text-left text-foreground/80 hover:text-secondary transition-smooth font-medium py-2"
              >
                ¿Por qué Soncorp?
              </button>
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-secondary text-secondary-foreground hover:bg-accent-hover w-full font-semibold"
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
