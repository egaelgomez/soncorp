import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Megaphone,
  ArrowLeft,
  ChevronRight,
  X,
  CheckCircle2,
  MessageSquare,
  Clock,
  Bot,
  Calendar,
  ShoppingCart,
  Star,
  Search,
  Zap,
  Settings,
  TrendingUp,
  BarChart3 } from
"lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import ContactForm from "@/components/shared/ContactForm";

const marketingChallengeOptions = [
  { value: "leads", label: "Generar más leads" },
  { value: "ventas", label: "Aumentar ventas" },
  { value: "retencion", label: "Mejorar retención" },
  { value: "automatizacion", label: "Automatizar seguimiento" },
  { value: "presencia", label: "Presencia digital" },
  { value: "otro", label: "Otro" },
];

const MarketingAutomatizacionPage = () => {
  const scrollToForm = () => {
    document.getElementById("marketing-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hola, me interesa saber más sobre Marketing y Automatización")}`, "_blank");
  };

  const problems = [
  "Invierte en anuncios pero no convierten (no hay seguimiento real)",
  "Leads que llegan y nadie responde a tiempo",
  "Contenido inconsistente (publicación irregular)",
  "Mucho trabajo manual: mensajes, recordatorios, respuestas repetidas",
  "No hay medición clara: no sabe qué funciona y qué no",
  "Prospectos abandonan porque el proceso es lento o confuso"];


  const benefits = [
  {
    title: "Más leads calificados y más ventas",
    description: "Por seguimiento constante y automatizado",
    large: true
  },
  {
    title: "Menor desperdicio publicitario",
    description: "Mejor conversión de su inversión en ads"
  },
  {
    title: "Respuesta más rápida = más cierres",
    description: "Automatizamos el primer contacto"
  },
  {
    title: "Ahorro de tiempo del equipo",
    description: "Automatizamos tareas repetitivas"
  },
  {
    title: "Menos errores humanos",
    description: "En mensajes, recordatorios y segmentación"
  },
  {
    title: "Resultados medibles",
    description: "Sabe qué campaña genera leads y cuál no"
  }];


  const automations = [
  {
    icon: MessageSquare,
    title: "Captura y calificación de leads",
    description: "Pregunta, clasifica y envía al equipo correcto.",
    channels: ["WhatsApp", "IG", "Web"]
  },
  {
    icon: Clock,
    title: "Respuestas rápidas 24/7",
    description: "FAQ + orientación + captura de datos.",
    channels: ["WhatsApp", "Web"]
  },
  {
    icon: Bot,
    title: "Seguimiento automático",
    description: "Recordatorios y mensajes para que no se enfríe el prospecto.",
    channels: ["WhatsApp", "Email"]
  },
  {
    icon: Calendar,
    title: "Agendado / citas",
    description: "Automatiza confirmaciones y recordatorios.",
    channels: ["WhatsApp", "Email", "SMS"]
  },
  {
    icon: ShoppingCart,
    title: "Carrito abandonado / reactivación",
    description: "Recupera oportunidades con mensajes oportunos.",
    channels: ["WhatsApp", "Email"]
  },
  {
    icon: Star,
    title: "Reseñas y reputación",
    description: "Pide reseñas a clientes satisfechos y mejora confianza.",
    channels: ["WhatsApp", "Email"]
  }];


  const marketingStrategy = [
  "Calendario de contenido",
  "Copy y creativos",
  "Branding coherente"];


  const marketingCampaigns = [
  "Campañas en Meta/IG/Facebook",
  "Segmentación y pruebas A/B",
  "Reporte: leads, CPL, CTR, conversiones"];


  const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Auditoría rápida de canales + objetivos"
  },
  {
    number: "02",
    title: "Implementación",
    description: "Campañas + automatizaciones"
  },
  {
    number: "03",
    title: "Optimización",
    description: "Medición, ajustes y mejora continua"
  }];


  const channelColors: Record<string, string> = {
    "WhatsApp": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    "IG": "bg-pink-500/20 text-pink-400 border-pink-500/30",
    "Web": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Email": "bg-amber-500/20 text-amber-400 border-amber-500/30",
    "SMS": "bg-violet-500/20 text-violet-400 border-violet-500/30"
  };

  return (
    <>
      <SEO
        title="Marketing & Automatización | Soncorp"
        description="Genere más leads y ventas con campañas digitales y automatización del seguimiento. WhatsApp, email y redes sociales con resultados medibles."
        canonicalPath="/servicios/marketing-automatizacion"
      />
      <Navigation />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/servicios" className="hover:text-foreground transition-colors">Servicios</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Marketing & Automatización</span>
            </nav>

            {/* Back Link */}
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              
              <ArrowLeft className="w-4 h-4" />
              Volver a servicios
            </Link>

            <div className="max-w-4xl">
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Megaphone className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                  Marketing & Automatización
                </h1>
              </div>

              {/* Headline */}
              <p className="text-xl md:text-2xl text-foreground/90 font-medium mb-4">
                Genera más leads y ventas con campañas + automatización del seguimiento.
              </p>

              {/* Subheadline */}
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                Creamos contenido y campañas, y automatizamos el seguimiento (WhatsApp/chat/email) para que no se le escapen prospectos y su inversión rinda más.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={scrollToForm} className="gap-2">
                  Solicitar estrategia
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" onClick={openWhatsApp} className="gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Hablar por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section - Grid 2x3 */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Problemas molestos que resolvemos
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Si alguno de estos problemas le resulta familiar, podemos ayudarle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {problems.map((problem, index) =>
              <div
                key={index}
                className="p-5 rounded-xl bg-card/50 border border-border/50 hover:border-destructive/30 transition-all duration-300">
                
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-destructive/10 shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <p className="text-foreground/90 text-sm leading-relaxed">{problem}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Benefits Section - Bento Grid */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Beneficios (en dinero y operación)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Resultados tangibles que impactan su negocio directamente.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {/* Large Card */}
              <div className="md:col-span-2 md:row-span-2 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 flex flex-col justify-center">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {benefits[0].title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {benefits[0].description}
                </p>
              </div>

              {/* Smaller Cards */}
              {benefits.slice(1).map((benefit, index) =>
              <div
                key={index}
                className="p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300">
                
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-primary/10 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* What is Marketing Automation? - Mini Guide */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                ¿Qué es la automatización de marketing?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>Automatizar marketing significa usar tecnología para ejecutar tareas repetitivas: enviar mensajes de seguimiento, responder preguntas frecuentes, recordar citas y clasificar prospectos, todo sin intervención manual constante.

                </p>
                <p>
                  El resultado: responda más rápido, personalice a escala, reduzca errores y pueda medir exactamente qué funciona y qué no.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Use Cases - Grid 2x3 */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Automatizaciones típicas (casos de uso)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ejemplos de lo que podemos automatizar para su negocio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {automations.map((automation, index) =>
              <div
                key={index}
                className="p-6 rounded-xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
                
                  <div className="p-2.5 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <automation.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{automation.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{automation.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {automation.channels.map((channel, idx) =>
                  <span
                    key={idx}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium border ${channelColors[channel]}`}>
                    
                        {channel}
                      </span>
                  )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Marketing Digital - 2 Columns */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Marketing Digital (lo que hacemos)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                El marketing digital le permite tener presencia donde están sus clientes, crecer con medición constante y optimizar para mejorar resultados.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Strategy & Content */}
              <div className="p-6 rounded-xl bg-card/50 border border-border/50">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Settings className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Estrategia & Contenido</h3>
                </div>
                <ul className="space-y-3">
                  {marketingStrategy.map((item, index) =>
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  )}
                </ul>
              </div>

              {/* Campaigns & Measurement */}
              <div className="p-6 rounded-xl bg-card/50 border border-border/50">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Campañas & Medición</h3>
                </div>
                <ul className="space-y-3">
                  {marketingCampaigns.map((item, index) =>
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stat Card - Nucleus Research */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20 text-center">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">¿Sabías que...?</p>
                <div className="flex items-center justify-center gap-4 md:gap-8 mb-6">
                  <div>
                    <span className="text-4xl md:text-5xl font-bold text-primary">+14.5%</span>
                    <p className="text-sm text-muted-foreground mt-1">productividad en ventas</p>
                  </div>
                  <div className="h-16 w-px bg-border" />
                  <div>
                    <span className="text-4xl md:text-5xl font-bold text-emerald-500">-12.2%</span>
                    <p className="text-sm text-muted-foreground mt-1">costos de marketing</p>
                  </div>
                </div>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  "La automatización de marketing se asocia con +14.5% de productividad en ventas y -12.2% de costos/overhead de marketing."
                </p>
                <p className="text-sm text-muted-foreground/60 mt-4">Fuente: Nucleus Research</p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work - Timeline 3 Steps */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Cómo trabajamos
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Un proceso simple y efectivo para resultados reales.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {steps.map((step, index) =>
                <div key={index} className="relative">
                    <div className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                      <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    {index < steps.length - 1 &&
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                        <ChevronRight className="w-6 h-6 text-primary/30" />
                      </div>
                  }
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <section id="marketing-cta" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                {/* Left - Copy */}
                <div className="md:sticky md:top-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Haga que su marketing deje de depender de perseguir prospectos
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Automatice el seguimiento, mejore sus conversiones y mida lo que realmente funciona. Solicite una evaluación inicial para definir su estrategia.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" onClick={openWhatsApp} className="gap-2">
                      <MessageSquare className="w-4 h-4" />
                      WhatsApp
                    </Button>
                    <Link to="/#contacto">
                      <Button variant="ghost" className="gap-2">
                        Ir a contacto
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right - Form */}
                <div className="p-2 md:p-0">
                  <h3 className="text-lg font-semibold text-foreground mb-6">Solicitar estrategia</h3>
                  <ContactForm
                    challengeLabel="Objetivo principal *"
                    challengeOptions={marketingChallengeOptions}
                    submitLabel="Solicitar estrategia"
                    serviceName="Marketing y Automatización"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>);

};

export default MarketingAutomatizacionPage;