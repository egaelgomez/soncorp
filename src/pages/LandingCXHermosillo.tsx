import { Link } from "react-router-dom";
import {
  MapPin,
  MessageSquare,
  ChevronRight,
  Check,
  AlertTriangle,
  Search,
  ClipboardList,
  ListChecks,
  Gauge,
  Users,
  Route as RouteIcon,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactForm from "@/components/shared/ContactForm";
import MobileStickyCTA from "@/components/servicios/MobileStickyCTA";
import { CONTACT_INFO } from "@/lib/constants";
import { pushAnalyticsEvent } from "@/lib/analytics";
import logo from "@/assets/soncorp-logo.png";

const SERVICE_NAME = "Customer Experience - Hermosillo Ads";

const WHATSAPP_TEXT =
  "Hola, solicito un diagnóstico inicial de Experiencia y Atención al Cliente con Soncorp.";

const challengeOptions = [
  { value: "atencion", label: "Atención al cliente / servicio" },
  { value: "procesos", label: "Procesos y tiempos de respuesta" },
  { value: "cliente-interno", label: "Cliente interno (colaboración entre áreas)" },
  { value: "metricas", label: "Medición y métricas (NPS/CSAT/CES)" },
  { value: "entrenamiento", label: "Entrenamiento y estandarización" },
  { value: "otro", label: "Otro" },
];

const painPoints = [
  { title: "Quejas recurrentes", desc: "Clientes insatisfechos que no regresan y afectan su reputación." },
  { title: "Respuestas lentas", desc: "Solicitudes sin seguimiento claro ni resolución oportuna." },
  { title: "Servicio inconsistente", desc: "Cada área o persona atiende de manera distinta." },
  { title: "Fricción entre áreas", desc: "Retrabajo y pases de pelota que terminan afectando al cliente." },
  { title: "Sin estándares de atención", desc: "Equipos sin protocolos, guiones ni capacitación definida." },
  { title: "Sin métricas", desc: "No se mide la experiencia, por lo que no se sabe qué priorizar." },
];

const deliverables = [
  { icon: Search, title: "Revisión de la situación actual", desc: "Análisis del recorrido del cliente (Customer Journey) y de los puntos de contacto clave." },
  { icon: ListChecks, title: "Hallazgos priorizados", desc: "Identificación de fricciones ordenadas por impacto y facilidad de atención." },
  { icon: ClipboardList, title: "Siguientes pasos recomendados", desc: "Ruta práctica de mejora con acciones concretas para su organización." },
  { icon: Gauge, title: "Estándares y medición sugeridos", desc: "Propuesta de estándares de servicio, capacitación y forma de medir la experiencia, cuando aplique." },
];

const faqItems = [
  {
    question: "¿Para qué tipo de empresas es este diagnóstico?",
    answer:
      "Adaptamos el alcance a la madurez y tamaño de cada organización, desde equipos pequeños hasta corporativos con varias áreas de contacto con el cliente.",
  },
  {
    question: "¿Necesito comprar software?",
    answer:
      "No necesariamente. Trabajamos con las herramientas que su empresa ya utiliza y, si se identifica una necesidad, recomendamos opciones acordes al presupuesto.",
  },
  {
    question: "¿Qué métricas utilizan?",
    answer:
      "Según el contexto: CSAT (satisfacción), NPS (recomendación), CES (esfuerzo), tiempos de respuesta y resolución al primer contacto, entre otros indicadores relevantes.",
  },
  {
    question: "¿Cómo se define el alcance y la inversión?",
    answer:
      "En la conversación inicial capturamos su situación, objetivos y recursos. Con esa información se presenta una propuesta formal de alcance y honorarios.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const trackCta = (label: string) => {
  pushAnalyticsEvent({
    event: "cta_click",
    label,
    service_name: SERVICE_NAME,
    page_path: window.location.pathname,
  });
};

const LandingCXHermosillo = () => {
  const scrollToForm = (label: string) => {
    trackCta(label);
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = (label: string) => {
    trackCta(label);
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(WHATSAPP_TEXT)}`,
      "_blank"
    );
  };

  return (
    <>
      <SEO
        title="Consultoría de Experiencia y Atención al Cliente en Hermosillo | Soncorp"
        description="Diagnóstico de experiencia y atención al cliente para empresas en Hermosillo, Sonora: identifique fricciones, estandarice el servicio y defina un plan de mejora."
        canonicalPath="/servicios/customer-experience"
      >
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </SEO>
      <Helmet>
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      {/* HEADER LIGERO */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/90 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Soncorp" className="h-8 w-auto" />
            <span className="sr-only">Soncorp</span>
          </Link>
          <button
            type="button"
            onClick={() => openWhatsApp("lp_cx_header_whatsapp")}
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            WhatsApp
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-background pt-12 pb-14 md:pt-20 md:pb-20">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1.5 mb-5">
              <MapPin className="h-3.5 w-3.5 text-secondary" />
              <span className="text-xs font-medium text-secondary">
                Hermosillo, Sonora · Atención a empresas en México
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-5">
              Consultoría de Experiencia y Atención al Cliente en Hermosillo
            </h1>

            <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-7 max-w-2xl">
              Identificamos las fricciones que afectan a sus clientes, estandarizamos la forma de
              atender y definimos un plan de mejora práctico para su equipo.
            </p>

            <ul className="space-y-2.5 mb-8 max-w-xl">
              {[
                "Diagnóstico de fricciones en la experiencia y la atención.",
                "Estándares de servicio y capacitación para su equipo.",
                "Métricas y plan de acción priorizado.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/90">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={() => scrollToForm("lp_cx_hero_form")}
                className="gap-2 bg-secondary text-secondary-foreground hover:bg-accent-hover font-semibold"
              >
                Solicitar diagnóstico inicial
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => openWhatsApp("lp_cx_hero_whatsapp")}
                className="gap-2 border-secondary/50 text-secondary hover:bg-secondary/10"
              >
                <MessageSquare className="h-4 w-4" />
                Hablar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* A) PAIN POINTS */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            ¿Qué podemos ayudarle a resolver?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {painPoints.map((p, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-5 rounded-lg bg-card/50 border border-border/50"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                  <AlertTriangle className="h-3 w-3 text-destructive" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm mb-1">{p.title}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B) QUÉ RECIBE */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            Qué recibe en el diagnóstico
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {deliverables.map((d, idx) => {
              const Icon = d.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-secondary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* C) ENFOQUE */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              Nuestro enfoque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: Users,
                  title: "Cliente interno y externo",
                  desc: "La experiencia del cliente externo depende de cómo colaboran las áreas internamente.",
                },
                {
                  icon: RouteIcon,
                  title: "Recorrido del cliente",
                  desc: "Analizamos el Customer Journey completo, no interacciones aisladas.",
                },
                {
                  icon: Gauge,
                  title: "Medición práctica",
                  desc: "Indicadores como NPS, CSAT y CES para decidir con datos.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-5 rounded-xl bg-card border border-border/50">
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                      <Icon className="h-4 w-4 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
              Utilizamos como marco de referencia los 6 pilares de Customer Experience Excellence
              (KPMG): personalización, integridad, expectativas, resolución, tiempo y esfuerzo, y
              empatía. Soncorp es una firma independiente y no está afiliada a KPMG.
            </p>
          </div>
        </div>
      </section>

      {/* D) CÓMO EMPEZAMOS */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            Cómo empezamos
          </h2>
          <div className="max-w-3xl mx-auto space-y-5 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
            {[
              { n: "01", t: "Solicitud y conversación inicial", d: "Nos comparte su situación y objetivos." },
              { n: "02", t: "Diagnóstico y hallazgos", d: "Revisamos la experiencia actual y priorizamos oportunidades." },
              { n: "03", t: "Propuesta y ruta de implementación", d: "Definimos alcance y acompañamiento por etapas." },
            ].map((step, idx) => (
              <div key={idx} className="flex md:flex-col items-start md:items-center gap-4 md:text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-secondary">{step.n}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{step.t}</h3>
                  <p className="text-sm text-muted-foreground">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E) FAQ */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Preguntas frecuentes
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border border-border rounded-lg bg-card px-6 data-[state=open]:border-secondary/40"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-secondary hover:no-underline py-5 text-sm md:text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* F) FORMULARIO FINAL */}
      <section id="cta-final" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">
              Solicite su diagnóstico inicial
            </h2>
            <p className="text-muted-foreground mb-8 text-center">
              Cuéntenos sobre su organización y sus retos. Sin compromiso.
            </p>

            <ContactForm
              challengeLabel="¿Qué desea mejorar? *"
              challengeOptions={challengeOptions}
              submitLabel="Solicitar diagnóstico inicial"
              serviceName={SERVICE_NAME}
            />

            <p className="text-xs text-muted-foreground text-center mt-6">
              Servicio de consultoría. No garantizamos resultados. Las decisiones de implementación
              dependen de cada organización.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER MÍNIMO */}
      <footer className="border-t border-border/50 bg-background py-8">
        <div className="container mx-auto px-4 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Soncorp · {CONTACT_INFO.fullAddress}
          </p>
          <p className="text-sm text-muted-foreground">
            <a href={CONTACT_INFO.phoneLink} className="hover:text-secondary transition-colors">
              {CONTACT_INFO.phone}
            </a>
            {" · "}
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-secondary transition-colors">
              {CONTACT_INFO.email}
            </a>
          </p>
          <p className="text-sm">
            <Link to="/" className="text-secondary hover:text-secondary/80 transition-colors">
              Ir al sitio principal de Soncorp
            </Link>
          </p>
        </div>
      </footer>

      <MobileStickyCTA
        serviceName={SERVICE_NAME}
        primaryLabel="Solicitar diagnóstico"
        whatsappMessage={WHATSAPP_TEXT}
      />
    </>
  );
};

export default LandingCXHermosillo;
