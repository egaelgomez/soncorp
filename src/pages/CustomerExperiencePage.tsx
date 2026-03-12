import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  HeartHandshake,
  Check,
  MessageSquare,
  AlertTriangle,
  Search,
  BarChart3,
  Settings,
  GraduationCap,
  Shield,
  Users,
  Target,
  Clock,
  Heart,
  Star,
  HandshakeIcon,
  ChevronRight,
  BookOpen,
  MessageCircle,
  Handshake,
  ArrowDownToLine,
  RefreshCw,
  Network } from
"lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_INFO } from "@/lib/constants";
import ContactForm from "@/components/shared/ContactForm";

const faqItems = [
{ question: "¿La consultoría en Experiencia del Cliente sirve para cualquier tipo de empresa?", answer: "Sí. Adaptamos el alcance y profundidad al tamaño y madurez de cada organización. Desde negocios con 5 empleados hasta corporativos con cientos." },
{ question: "¿Cuánto tiempo toma ver mejoras en la atención al cliente y la experiencia?", answer: "Depende del alcance. Algunas mejoras en la atención al cliente se notan en semanas; una transformación profunda de la experiencia puede tomar meses. Se definen hitos claros desde el inicio." },
{ question: "¿Trabajan la experiencia del cliente interno y externo?", answer: "Sí. La experiencia del cliente externo depende directamente de la experiencia del cliente interno. Abordamos ambos de forma integral." },
{ question: "¿Qué métricas de Customer Experience utilizan?", answer: "Dependiendo del contexto: CSAT (satisfacción), NPS (recomendación), CES (esfuerzo), tiempos de respuesta, tasa de resolución al primer contacto, entre otros indicadores relevantes para medir la atención al cliente y la experiencia global." },
{ question: "¿Se requiere software para mejorar la experiencia del cliente?", answer: "No necesariamente. Trabajamos con las herramientas que usted ya utiliza. Si se identifica la necesidad, recomendamos opciones adecuadas al presupuesto." },
{ question: "¿Ofrecen capacitación en atención al cliente y Customer Experience?", answer: "Sí. La capacitación y el desarrollo de cultura de servicio son parte fundamental de nuestro enfoque de Experiencia del Cliente." },
{ question: "¿Cómo se define el alcance de un proyecto de CX?", answer: "En la asesoría inicial capturamos su situación actual, objetivos y recursos disponibles. Con esa información se presenta una propuesta de alcance y honorarios." },
{ question: "¿Cuál es la inversión en consultoría de Customer Experience?", answer: "Los honorarios se definen según el alcance y complejidad de cada proyecto. Después de la asesoría inicial se presenta una propuesta formal." },
{ question: "¿Incluye capacitación para personal de atención al cliente?", answer: "Sí. Nuestro enfoque incluye entrenamiento y coaching para las personas que tienen contacto directo con clientes. Trabajamos guiones, estándares, manejo de objeciones, empatía y comunicación profesional, adaptados a los canales y contexto de su organización." },
{ question: "¿También aplica para cliente interno (áreas que se atienden entre sí)?", answer: "Sí. La coordinación entre áreas impacta directamente en la experiencia del cliente externo. Incluimos entrenamiento en comunicación inter-áreas, reducción de handoffs innecesarios y estándares de colaboración interna." }];


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer }
  }))
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Soncorp",
  url: "https://soncorp.com.mx",
  description: "Consultoría especializada en Experiencia del Cliente (Customer Experience, CX) y mejora de atención al cliente para empresas en México."
};

const cxChallengeOptions = [
  { value: "atencion", label: "Atención al cliente / servicio" },
  { value: "procesos", label: "Procesos y tiempos de respuesta" },
  { value: "cliente-interno", label: "Cliente interno (colaboración entre áreas)" },
  { value: "metricas", label: "Medición y métricas (NPS/CSAT/CES)" },
  { value: "entrenamiento", label: "Entrenamiento y estandarización" },
  { value: "otro", label: "Otro" },
];

const CustomerExperiencePage = () => {
  const { toast } = useToast();
  const [defaultChallenge, setDefaultChallenge] = useState("");
  const sentinelRef = useRef<HTMLDivElement>(null);
  const scrollTracked = useRef(false);

  // Scroll 75% tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !scrollTracked.current) {
          scrollTracked.current = true;
          (window as any).dataLayer?.push({ event: "scroll_75", page: "cx_landing" });
        }
      },
      { threshold: 0.1 }
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  const trackEvent = (event: string, label: string) => {
    (window as any).dataLayer?.push({ event, label });
  };

  const scrollToCTA = () => {
    trackEvent("cta_click", "agendar_asesoria");
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", "cx_whatsapp");
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hola, solicito una asesoría inicial de Soncorp CX. Me interesa mejorar la experiencia del cliente (interno/externo). ¿Podemos agendar una llamada?")}`, "_blank");
  };

  const problems = [
  { title: "Quejas recurrentes", desc: "Clientes insatisfechos que no regresan y afectan su reputación." },
  { title: "Tiempos de respuesta lentos", desc: "Sin seguimiento real ni resolución oportuna." },
  { title: "Inconsistencia en el servicio", desc: "Cada área o empleado atiende de manera diferente." },
  { title: "Retrabajo y fricción interna", desc: "Problemas entre áreas que afectan al cliente interno y externo." },
  { title: "Equipos sin estándares", desc: "Personal desalineado, sin protocolos ni capacitación." },
  { title: "Falta de métricas", desc: "No se mide la experiencia: no se sabe qué mejorar." }];


  const solutions = [
  { icon: Search, title: "Diagnóstico de journey", desc: "Mapeo de puntos de contacto e identificación de oportunidades de mejora." },
  { icon: BarChart3, title: "Medición", desc: "Implementación de indicadores como CSAT, NPS y CES para tomar decisiones basadas en datos." },
  { icon: Settings, title: "Procesos y estándares", desc: "Diseño de protocolos de servicio consistentes y escalables." },
  { icon: GraduationCap, title: "Cultura y capacitación", desc: "Desarrollo de habilidades y mentalidad orientada al cliente en su equipo." },
  { icon: Shield, title: "Gobernanza y mejora continua", desc: "Estructura de seguimiento para sostener y escalar los avances." }];


  const pillars = [
  { icon: Users, title: "Personalización", desc: "Adaptar la experiencia a las necesidades de cada cliente." },
  { icon: HandshakeIcon, title: "Integridad", desc: "Generar confianza a través de transparencia y coherencia." },
  { icon: Target, title: "Expectativas", desc: "Gestionar y superar lo que el cliente espera." },
  { icon: Settings, title: "Resolución", desc: "Convertir problemas en oportunidades de fidelización." },
  { icon: Clock, title: "Tiempo y esfuerzo", desc: "Reducir la fricción en cada interacción." },
  { icon: Heart, title: "Empatía", desc: "Comprender la situación del cliente y actuar en consecuencia." }];


  const inputClass = "w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary/60 transition-colors text-sm";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";
  const errorClass = "text-xs text-destructive mt-1";

  return (
    <>
      <Helmet>
        <title>Consultoría en Experiencia del Cliente (Customer Experience) | Soncorp CX</title>
        <meta name="description" content="Consultoría en experiencia del cliente (customer experience) para empresas en México. Mejore la atención al cliente, retención y satisfacción con un enfoque integral de CX. Mejora de atención al cliente, diagnóstico, medición y acompañamiento." />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navigation />

      {/* HERO */}
      <section className="pt-28 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-secondary transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/servicios" className="hover:text-secondary transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-foreground">Experiencia del Cliente (CX)</span>
          </nav>
          <Link to="/servicios" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors mb-10">
            <ArrowLeft className="h-4 w-4" />
            Volver a servicios
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 border border-secondary/20">
                <HeartHandshake className="h-7 w-7 text-secondary" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Experiencia del Cliente{" "}
                <span className="text-secondary">(Customer Experience, CX)</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 max-w-3xl">Fortalezca la retención, satisfacción y recomendación de sus clientes externos e internos, impulsa la eficiencia operativa de su organización. Un enfoque integral que conecta cada punto de contacto con resultados empresariales concretos.



            </p>
            <p className="text-sm md:text-base text-muted-foreground/80 italic mb-8 max-w-3xl">
              La atención al cliente es parte de la Experiencia del Cliente; nuestro enfoque es integral y abarca tanto al cliente interno como al externo.
            </p>

            <ul className="space-y-3 mb-10 max-w-2xl">
              {[
              "Diagnóstico integral: identifique oportunidades en la experiencia de su cliente externo y en la colaboración entre áreas.",
              "Acompañamiento experto adaptado a su organización: desde la estrategia hasta la ejecución.",
              "Resultados empresariales: mayor retención, mejor satisfacción, eficiencia operativa y equipos alineados."].
              map((bullet, i) =>
              <li key={i} className="flex items-start gap-3 text-foreground/90">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{bullet}</span>
                </li>
              )}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToCTA} className="gap-2 bg-secondary text-secondary-foreground hover:bg-accent-hover font-semibold">
                Agendar asesoría inicial
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={handleWhatsAppClick} className="gap-2 border-secondary/50 text-secondary hover:bg-secondary/10">
                <MessageSquare className="h-4 w-4" />
                Hablar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Problemas típicos en la experiencia y atención al cliente
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Situaciones comunes en empresas que afectan la experiencia y retención de clientes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {problems.map((p, idx) =>
            <div key={idx} className="flex items-start gap-3 p-5 rounded-lg bg-card/50 border border-border/50 hover:border-destructive/30 transition-colors">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                  <AlertTriangle className="h-3 w-3 text-destructive" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm mb-1">{p.title}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* QUÉ HACEMOS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Qué hacemos: más allá de la atención al cliente
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            La atención al cliente es fundamental, pero la Experiencia del Cliente (CX) va más allá: conecta procesos, personas, métricas y cultura para transformar cada interacción de forma sostenible. La atención al cliente es parte de la Experiencia del Cliente; por ello, además de procesos y medición, trabajamos con entrenamiento y estándares de atención.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {solutions.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className={`p-6 rounded-xl bg-card border border-border/50 hover:border-secondary/30 transition-colors ${idx === 0 ? "lg:col-span-1" : ""}`}>
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* 6 PILARES KPMG */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20 mb-6">
                <Star className="h-4 w-4 text-secondary" />
                <span className="text-xs font-medium text-secondary uppercase tracking-wider">Marco de referencia</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                6 Pilares de Customer Experience Excellence
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Utilizamos los 6 pilares de Customer Experience Excellence (KPMG) como marco de referencia
                para evaluar, diseñar y mejorar la experiencia de sus clientes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="p-5 rounded-xl bg-card border border-border/50 hover:border-secondary/30 transition-colors group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                        <Icon className="h-4 w-4 text-secondary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{p.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>);

              })}
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-16 text-center">
            Cómo trabajamos
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="hidden md:flex items-start justify-between relative">
              <div className="absolute top-8 left-[15%] right-[15%] h-px bg-border" />
              {[
              { n: "01", t: "Asesoría inicial", d: "Captura de información, entendimiento del negocio y sus objetivos." },
              { n: "02", t: "Hallazgos y plan", d: "Priorización de acciones y ruta clara de mejora." },
              { n: "03", t: "Implementación guiada", d: "Acompañamiento por etapas, adaptado a su organización." }].
              map((step, idx) =>
              <div key={idx} className="flex flex-col items-center text-center relative z-10 w-1/3 px-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 border-2 border-secondary/40 flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-secondary">{step.n}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.t}</h3>
                  <p className="text-sm text-muted-foreground">{step.d}</p>
                </div>
              )}
            </div>
            <div className="md:hidden space-y-6">
              {[
              { n: "01", t: "Asesoría inicial", d: "Captura de información, entendimiento del negocio y sus objetivos." },
              { n: "02", t: "Hallazgos y plan", d: "Priorización de acciones y ruta clara de mejora." },
              { n: "03", t: "Implementación guiada", d: "Acompañamiento por etapas, adaptado a su organización." }].
              map((step, idx) =>
              <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-secondary">{step.n}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{step.t}</h3>
                    <p className="text-sm text-muted-foreground">{step.d}</p>
                  </div>
                </div>
              )}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-10">
              El alcance y profundidad se adaptan al tamaño y madurez de cada organización.
            </p>
          </div>
        </div>
      </section>

      {/* ENTRENAMIENTO */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20 mb-6">
                <GraduationCap className="h-4 w-4 text-secondary" />
                <span className="text-xs font-medium text-secondary uppercase tracking-wider">Capacitación</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Entrenamiento para equipos de contacto con clientes
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Capacitación y coaching para fortalecer habilidades, consistencia y criterios de atención en cada interacción, tanto con cliente externo como interno.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
              { icon: BookOpen, title: "Guiones y estándares de servicio", desc: "Tono, protocolos y escalamiento definidos para cada canal y punto de contacto." },
              { icon: MessageCircle, title: "Manejo de objeciones y conversaciones difíciles", desc: "Técnicas para responder con profesionalismo y convertir situaciones complejas en oportunidades." },
              { icon: Handshake, title: "Empatía y comunicación profesional", desc: "Habilidades para la interacción presencial, telefónica y por chat con enfoque en el cliente." },
              { icon: RefreshCw, title: "Resolución y recuperación del servicio", desc: "Service recovery: cómo actuar cuando algo falla para restaurar la confianza del cliente." },
              { icon: ArrowDownToLine, title: "Reducción de esfuerzo del cliente", desc: "Simplificación de pasos y handoffs para que el cliente resuelva con menos fricción." },
              { icon: Network, title: "Coordinación inter-áreas (cliente interno)", desc: "Estándares de colaboración entre departamentos para evitar fricción y mejorar la experiencia global." }].
              map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-5 rounded-xl bg-card border border-border/50 hover:border-secondary/30 transition-colors group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                        <Icon className="h-4 w-4 text-secondary" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>);

              })}
            </div>
            <div className="text-center mt-10">
              <Button
                size="lg"
                onClick={() => {
                  trackEvent("cta_click", "cx_training_cta_click");
                  setDefaultChallenge("entrenamiento");
                  document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="gap-2 bg-secondary text-secondary-foreground hover:bg-accent-hover font-semibold">
                
                Agendar asesoría inicial de entrenamiento
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PAQUETES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Opciones de servicio
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Tres niveles diseñados para distintas necesidades y etapas de madurez en Experiencia del Cliente (CX).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
            { name: "Diagnóstico CX", desc: "Evaluación inicial de la experiencia actual, identificación de oportunidades, recomendaciones prioritarias e identificación de brechas de capacitación y consistencia.", tag: "Punto de partida" },
            { name: "Plan CX", desc: "Priorización de acciones, estándares de servicio, hoja de ruta con hitos claros, plan de entrenamiento por roles y playbooks de atención.", tag: "Ruta de mejora" },
            { name: "Acompañamiento CX", desc: "Implementación guiada por etapas junto a su equipo, coaching por etapas con observación y retroalimentación, medición y mejora continua.", tag: "Implementación" }].
            map((pkg, idx) =>
            <div key={idx} className={`p-6 rounded-xl border transition-colors ${idx === 1 ? "bg-gradient-to-br from-secondary/15 to-secondary/5 border-secondary/30" : "bg-card border-border/50 hover:border-secondary/30"}`}>
                <span className="inline-block text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-4">{pkg.tag}</span>
                <h3 className="text-lg font-semibold text-foreground mb-3">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pkg.desc}</p>
              </div>
            )}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-lg mx-auto">
            Honorarios definidos según alcance y complejidad; se presenta propuesta después de la asesoría inicial.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              Preguntas frecuentes sobre Customer Experience
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, idx) =>
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-border rounded-lg bg-card px-6 data-[state=open]:border-secondary/40">
                
                  <AccordionTrigger className="text-left text-foreground hover:text-secondary hover:no-underline py-5 text-sm md:text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 75% scroll sentinel */}
      <div ref={sentinelRef} className="h-px" aria-hidden="true" />

      {/* STAT CARD */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">¿Sabía que…?</p>
            <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-secondary mb-6 silver-text-glow">80%</div>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              de los clientes afirma que la experiencia de atención es tan importante como la calidad del producto o servicio.
            </p>
            <p className="text-sm text-muted-foreground">Fuente: Salesforce (State of the Connected Consumer)</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL + FORMULARIO */}
      <section id="cta-final" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
              Agende su asesoría inicial
            </h2>
            <p className="text-muted-foreground mb-10 text-center">
              Cuéntenos sobre su organización y sus retos. Sin compromiso.
            </p>

            {submitted ?
            <div className="text-center p-10 rounded-xl bg-card border border-secondary/30">
                <Check className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Solicitud recibida</h3>
                <p className="text-muted-foreground mb-6">Nos pondremos en contacto con usted a la brevedad.</p>
                <Button onClick={handleWhatsAppClick} variant="outline" className="gap-2 border-secondary/50 text-secondary">
                  <MessageSquare className="h-4 w-4" />
                  También puede escribirnos por WhatsApp
                </Button>
              </div> :

            <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-xl bg-card border border-border/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Nombre completo *</label>
                    <input className={inputClass} placeholder="Su nombre" value={formData.nombre} onChange={(e) => updateField("nombre", e.target.value)} />
                    {errors.nombre && <p className={errorClass}>{errors.nombre}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Empresa *</label>
                    <input className={inputClass} placeholder="Nombre de su empresa" value={formData.empresa} onChange={(e) => updateField("empresa", e.target.value)} />
                    {errors.empresa && <p className={errorClass}>{errors.empresa}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Rol / Cargo</label>
                    <input className={inputClass} placeholder="Director, Gerente, etc. (opcional)" value={formData.rol} onChange={(e) => updateField("rol", e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input className={inputClass} type="email" placeholder="correo@empresa.com" value={formData.email} onChange={(e) => updateField("email", e.target.value)} />
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Teléfono / WhatsApp *</label>
                    <input className={inputClass} placeholder="+52 55 1234 5678" value={formData.telefono} onChange={(e) => updateField("telefono", e.target.value)} />
                    {errors.telefono && <p className={errorClass}>{errors.telefono}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Tamaño de empresa *</label>
                    <select className={inputClass} value={formData.tamano} onChange={(e) => updateField("tamano", e.target.value)}>
                      <option value="">Seleccione</option>
                      <option value="1-10">1–10 empleados</option>
                      <option value="11-50">11–50 empleados</option>
                      <option value="51-200">51–200 empleados</option>
                      <option value="201+">201+ empleados</option>
                    </select>
                    {errors.tamano && <p className={errorClass}>{errors.tamano}</p>}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>¿Qué desea mejorar? *</label>
                  <select className={inputClass} value={formData.reto} onChange={(e) => updateField("reto", e.target.value)}>
                    <option value="">Seleccione</option>
                    <option value="atencion">Atención al cliente / servicio</option>
                    <option value="procesos">Procesos y tiempos de respuesta</option>
                    <option value="cliente-interno">Cliente interno (colaboración entre áreas)</option>
                    <option value="metricas">Medición y métricas (NPS/CSAT/CES)</option>
                    <option value="entrenamiento">Entrenamiento y estandarización</option>
                    <option value="otro">Otro</option>
                  </select>
                  {errors.reto && <p className={errorClass}>{errors.reto}</p>}
                </div>
                {!showMessage ?
              <button type="button" onClick={() => setShowMessage(true)} className="text-sm text-secondary hover:text-secondary/80 transition-colors underline underline-offset-2">
                    + Agregar mensaje (opcional)
                  </button> :

              <div>
                    <label className={labelClass}>Mensaje (opcional)</label>
                    <textarea className={`${inputClass} min-h-[80px] resize-none`} placeholder="Cuéntenos brevemente sobre su situación." value={formData.mensaje} onChange={(e) => updateField("mensaje", e.target.value)} />
                  </div>
              }
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button type="submit" size="lg" className="bg-secondary text-secondary-foreground hover:bg-accent-hover font-semibold flex-1">
                    Agendar asesoría inicial
                  </Button>
                  <Button type="button" variant="outline" size="lg" onClick={handleWhatsAppClick} className="gap-2 border-secondary/50 text-secondary hover:bg-secondary/10">
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            }

            {/* Microdisclaimer */}
            <p className="text-xs text-muted-foreground text-center mt-6">
              Servicio de consultoría. No garantizamos resultados. Las decisiones de implementación dependen de cada organización.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>);

};

export default CustomerExperiencePage;