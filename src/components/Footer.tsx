import { Mail, Phone, MapPin } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import soncorpLogo from "@/assets/soncorp-logo.png";
import { CONTACT_INFO } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <img
                src={soncorpLogo}
                alt="Soncorp"
                className="h-10 w-auto mb-4"
              />
              <p className="text-muted-foreground mb-4">
                Consultoría empresarial especializada en México. Le ayudamos a mejorar la experiencia de sus clientes y hacer crecer su negocio.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-lg font-semibold text-primary mb-4">Enlaces Rápidos</p>
              <ul className="space-y-2">
                {[
                  { label: "Inicio", id: "inicio" },
                  { label: "Servicios", id: "servicios" },
                  { label: "¿Por qué Soncorp?", id: "por-que-soncorp" },
                  { label: "Contacto", id: "contacto" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="nav-link-underline text-muted-foreground hover:text-secondary transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li>
                  <a
                    href="/servicios/customer-experience"
                    className="nav-link-underline text-muted-foreground hover:text-secondary transition-colors duration-200"
                  >
                    Soncorp CX
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-lg font-semibold text-primary mb-4">Contacto</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-secondary" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-muted-foreground hover:text-secondary transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-secondary" />
                  <a href={CONTACT_INFO.phoneLink} className="text-muted-foreground hover:text-secondary transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-secondary" />
                  <span className="text-muted-foreground">{CONTACT_INFO.fullAddress}</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Copyright + Disclaimer */}
        <div className="border-t border-border pt-8 text-center space-y-2">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Soncorp. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            Servicio de consultoría. No garantizamos resultados. Las decisiones de implementación dependen de cada organización.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
