import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  ArrowLeft, 
  HeartHandshake, 
  Check, 
  MessageSquare,
  Users,
  Building2,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CustomerExperiencePage = () => {
  const scrollToCTA = () => {
    const element = document.getElementById("cta-final");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const problems = [
    "Clientes que se van por una mala experiencia (y no regresan)",
    "Quejas constantes y reseñas negativas",
    "Respuestas tardías o seguimiento inexistente",
    "Cada empleado atiende 'a su manera' (inconsistencia)",
    "Tus empleados no saben tratar a tus clientes (trato frío, discusiones)",
    "Falta de control: no hay métricas claras para mejorar"
  ];

  const benefits = [
    { 
      title: "Más clientes que regresan y recomiendan", 
      description: "La retención y el boca a boca se convierten en tu mejor canal de crecimiento.",
      featured: true 
    },
    { title: "Menos quejas y menos estrés operativo", description: "Procesos claros = menos problemas." },
    { title: "Equipo más profesional y seguro al atender", description: "Saben qué decir y cómo actuar." },
    { title: "Respuestas más rápidas y mejor seguimiento", description: "Nada se pierde en el camino." },
    { title: "Mejor reputación: reseñas, referencias y confianza", description: "Tu marca habla por sí sola." }
  ];

  const steps = [
    { number: "01", title: "Diagnóstico rápido", description: "Entendemos tu operación y puntos de dolor" },
    { number: "02", title: "Entrenamiento + estándares", description: "Guías claras, lenguaje, protocolos" },
    { number: "03", title: "Seguimiento con métricas", description: "Medimos, ajustamos y mejoramos" }
  ];

  const audiences = [
    { 
      icon: Rocket, 
      title: "Negocios en crecimiento (PyME)", 
      description: "Quieres orden y consistencia en la atención" 
    },
    { 
      icon: Users, 
      title: "Empresas con volumen de clientes", 
      description: "Necesitas control, calidad y seguimiento" 
    },
    { 
      icon: Building2, 
      title: "Empresas grandes", 
      description: "Estándares, capacitación y métricas para escalar" 
    }
  ];

  return (
    <>
      <Helmet>
        <title>Atención al Cliente | Soncorp</title>
        <meta 
          name="description" 
          content="Mejora tu atención al cliente para retener, vender más y reducir quejas. Diagnóstico + entrenamiento + estandarización + métricas." 
        />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-background relative overflow-hidden">
        {/* Glow decorativo */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-secondary transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/servicios" className="hover:text-secondary transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-foreground">Atención al Cliente</span>
          </nav>

          {/* Back link */}
          <Link 
            to="/servicios" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a servicios
          </Link>

          <div className="max-w-4xl">
            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 border border-secondary/20">
                <HeartHandshake className="h-7 w-7 text-secondary" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Atención al Cliente que hace que tus clientes regresen
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              Te ayudamos a mantener a tus clientes, mejorar reseñas y evitar pérdidas por mala atención. 
              Entrenamos a tu equipo y estandarizamos la atención para que el servicio sea consistente y memorable.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToCTA} className="gap-2">
                Solicitar diagnóstico
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2"
                asChild
              >
                <a 
                  href="https://wa.me/5212345678901" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="h-4 w-4" />
                  Hablar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas que resolvemos */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            Problemas que resolvemos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {problems.map((problem, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-3 p-5 rounded-lg bg-card/50 border border-border/50 hover:border-secondary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                  <span className="text-destructive text-xs font-medium">✕</span>
                </div>
                <p className="text-foreground/90 text-sm leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lo que cambia para tu negocio - Bento Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            Lo que cambia para tu negocio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* Featured large card */}
            <div className="md:col-span-2 md:row-span-2 p-8 rounded-xl bg-gradient-to-br from-secondary/15 to-secondary/5 border border-secondary/20 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Check className="h-6 w-6 text-secondary" />
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  {benefits[0].title}
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {benefits[0].description}
              </p>
            </div>

            {/* Smaller cards */}
            {benefits.slice(1).map((benefit, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-card border border-border/50 hover:border-secondary/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat Card - ¿Sabías que...? */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
              ¿Sabías que...?
            </p>
            <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-secondary mb-6 silver-text-glow">
              80%
            </div>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              de los clientes dice que la experiencia de atención es tan importante como la calidad del producto/servicio.
            </p>
            <p className="text-sm text-muted-foreground">
              Fuente: Salesforce (State of the Connected Consumer)
            </p>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos - Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-16 text-center">
            Cómo trabajamos
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:flex items-start justify-between relative">
              {/* Connection line */}
              <div className="absolute top-8 left-[15%] right-[15%] h-px bg-border" />
              
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative z-10 w-1/3 px-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 border-2 border-secondary/40 flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-secondary">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-secondary">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal para */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            Ideal para
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {audiences.map((audience, idx) => {
              const Icon = audience.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-secondary/30 transition-colors text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground">{audience.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Convirtamos tu atención al cliente en una ventaja competitiva
            </h2>
            <p className="text-muted-foreground mb-10">
              Agenda una llamada de diagnóstico sin costo y descubre cómo mejorar tu atención.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a 
                  href="https://calendly.com/soncorp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Solicitar diagnóstico
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/servicios">
                  Ver otros servicios
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CustomerExperiencePage;
