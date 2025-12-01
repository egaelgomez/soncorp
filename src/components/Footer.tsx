import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <p className="text-2xl font-bold mb-4">Soncorp</p>
            <p className="text-primary-foreground/80 mb-4">
              Consultoría especializada para PYMEs mexicanas. Transformamos negocios con estrategias comprobadas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-lg font-semibold mb-4">Enlaces Rápidos</p>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("inicio");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("servicios");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("por-que-soncorp");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  ¿Por qué Soncorp?
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contacto");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-lg font-semibold mb-4">Contacto</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">contacto@soncorp.mx</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+52 (55) 1234-5678</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Ciudad de México, México</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            &copy; {currentYear} Soncorp. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
