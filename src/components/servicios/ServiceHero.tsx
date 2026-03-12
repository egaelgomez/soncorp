import { Calendar, MessageCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Chip from "@/components/solutions/Chip";
import { Solution } from "@/components/solutions/solutionsData";
import { CONTACT_INFO } from "@/lib/constants";

interface ServiceHeroProps {
  solution: Solution;
}

const ServiceHero = ({ solution }: ServiceHeroProps) => {
  const Icon = solution.icon;

  const scrollToContact = () => {
    const element = document.getElementById("service-cta");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Inicio</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/servicios">Servicios</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{solution.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Back link */}
        <Link 
          to="/servicios" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Servicios
        </Link>

        <div className="max-w-4xl">
          {/* Icon + Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10">
              <Icon className="h-6 w-6 text-secondary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {solution.title}
            </h1>
          </div>

          {/* Headline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            {solution.headline}
          </p>

          {/* Hero Bullets */}
          <ul className="space-y-3 mb-8" role="list">
            {solution.heroBullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Badge */}
          {solution.badge && (
            <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg px-4 py-3 mb-8 border border-border/50">
              {solution.badge}
            </p>
          )}

          {/* Tech Chips */}
          {solution.techChips && solution.techChips.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {solution.techChips.map((tech, idx) => (
                <Chip key={idx}>{tech}</Chip>
              ))}
            </div>
          )}

          {/* Audience badges */}
          <div className="flex flex-wrap gap-2 mb-10">
            {solution.audiences.map((audience, idx) => (
              <span 
                key={idx}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20"
              >
                {audience}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2" onClick={scrollToContact}>
              <Calendar className="h-4 w-4" />
              Agendar llamada
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Hablar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
