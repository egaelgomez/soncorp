import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Check, Target, Users, Cog, BarChart3, Wrench, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CONTACT_INFO } from "@/lib/constants";
import ContactForm from "@/components/shared/ContactForm";

const negociosChallengeOptions = [
  { value: "estrategia", label: "Planeación estratégica" },
  { value: "ventas", label: "Estrategia comercial y ventas" },
  { value: "procesos", label: "Optimización de procesos" },
  { value: "estructura", label: "Organización y roles" },
  { value: "otro", label: "Otro" },
];

const ConsultoriaDeNegociosPage = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  const areas = [
  {
    icon: Target,
    title: "Planeación estratégica",
    description: "Objetivos claros y un plan ejecutable para crecer."
  },
  {
    icon: BarChart3,
    title: "Estrategia comercial y ventas",
    description: "Proceso comercial que convierte prospectos en clientes."
  },
  {
    icon: Cog,
    title: "Optimización de procesos",
    description: "Orden y eficiencia para entregar mejor y más rápido."
  },
  {
    icon: Users,
    title: "Organización y roles",
    description: "Estructura y responsabilidades claras para ejecutar sin fricción interna."
  },
  {
    icon: TrendingUp,
    title: "Eficiencia operativa",
    description: "Reducimos desperdicio, retrabajo y fugas operativas."
  },
  {
    icon: Wrench,
    title: "Implementación de herramientas",
    description: "Seleccionamos e implementamos herramientas clave (CRM/automatización) para que el plan se ejecute."
  }];


  const problems = [
  "Ventas estancadas o impredecibles",
  "Prospectos se pierden por falta de seguimiento",
  "Operación desordenada y retrabajo",
  "Equipo sin claridad de prioridades",
  "Falta de métricas y control",
  "Crecimiento con caos (crece la carga, no el resultado)"];


  const benefits = [
  {
    title: "Aumento en ventas e ingreso",
    description: "Por proceso y enfoque comercial claro",
    large: true
  },
  {
    title: "Mejor conversión y seguimiento comercial",
    description: "Prospectos que se convierten en clientes"
  },
  {
    title: "Operación más eficiente y predecible",
    description: "Menos caos, más resultados"
  },
  {
    title: "Equipo alineado",
    description: "Con responsabilidades claras"
  },
  {
    title: "Decisiones más rápidas con indicadores simples",
    description: "Menos pérdidas por errores, retrabajo y desorden"
  }];


  const steps = [
  {
    number: "1",
    title: "Diagnóstico",
    description: "Entendemos su negocio, números y cuellos de botella"
  },
  {
    number: "2",
    title: "Plan accionable",
    description: "Prioridades claras y metas realistas"
  },
  {
    number: "3",
    title: "Acompañamiento",
    description: "Seguimiento cercano hasta ver resultados"
  }];


  const segments = [
  {
    title: "Negocios en crecimiento",
    description: "Busca orden y consistencia para crecer sin caos."
  },
  {
    title: "Empresas con volumen",
    description: "Necesitas control, calidad y seguimiento para mantener el ritmo."
  },
  {
    title: "Empresas grandes",
    description: "Estándares, capacitación y métricas para escalar con estructura."
  }];


  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Consultoría de Negocios | Soncorp"
        description="Impulsamos el crecimiento rentable de su empresa con estrategia, procesos y ejecución. Menos improvisación, más ventas y control."
        canonicalPath="/servicios/consultoria-de-negocios"
      />
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-20 bg-background relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link>
              <span>/</span>
              <Link to="/servicios" className="hover:text-foreground transition-colors">Servicios</Link>
              <span>/</span>
              <span className="text-foreground">Consultoría de Negocios</span>
            </div>
            
            {/* Back link */}
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              
              <ArrowLeft className="w-4 h-4" />
              Volver a servicios
            </Link>
            
            <div className="max-w-4xl">
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-secondary/20 border border-secondary/30">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Consultoría de Negocios
                </h1>
              </div>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
                Impulsamos el crecimiento rentable de su empresa con estrategia, procesos y ejecución.
                Menos improvisación, más ventas y control.
              </p>
              
              {/* Hero Bullets */}
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Aumento en ventas e ingreso (por claridad y ejecución)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Procesos más eficientes (menos retrabajo y caos)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Prioridades claras (qué hacer primero para impactar resultados)</span>
                </li>
              </ul>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  onClick={scrollToContact}>
                  
                  Agendar llamada
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-muted"
                  asChild>
                  
                  <a href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contacto / WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section - Grant Thornton Style */}
        <section className="py-16 bg-muted/10 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6 text-center">
              <p className="text-lg text-muted-foreground">
                Nuestro objetivo es que su empresa crezca de forma rentable. Sin rodeos: más ventas,
                costos bajo control y operación ordenada.
              </p>
              <p className="text-lg text-muted-foreground">No solo resolvemos problemas, identificamos oportunidades que está dejando pasar y riesgos que podría evitar. Todo con lenguaje simple y accionable.


              </p>
              <p className="text-lg text-muted-foreground">
                Trabajamos de la mano con usted. Definimos prioridades claras, establecemos metas
                medibles y le acompañamos hasta ver resultados.
              </p>
            </div>
          </div>
        </section>

        {/* Áreas de Consultoría - Grid 2×3 */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Áreas de Consultoría de Negocios
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trabajamos en las áreas clave que impactan directamente sus resultados.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {areas.map((area, index) =>
              <div
                key={index}
                className="group p-6 rounded-xl border border-border/50 bg-card hover:border-secondary/50 transition-all duration-300">
                
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                      <area.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Problemas que resolvemos */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Problemas comunes que resolvemos
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {problems.map((problem, index) =>
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span className="text-foreground">{problem}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Beneficios - Bento Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Lo que cambia para su negocio
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {/* Large card */}
              <div className="md:col-span-2 md:row-span-2 p-8 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30">
                <div className="h-full flex flex-col justify-center">
                  <Check className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {benefits[0].title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {benefits[0].description}
                  </p>
                </div>
              </div>
              
              {/* Small cards */}
              {benefits.slice(1).map((benefit, index) =>
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-secondary/30 transition-colors">
                
                  <Check className="w-5 h-5 text-secondary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Stat Card - ¿Sabías que...? */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium text-secondary mb-4 block">¿Sabías que...?</span>
              
              <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-card to-muted/30 border border-border">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <TrendingUp className="w-12 h-12 text-secondary" />
                </div>
                <p className="text-xl md:text-2xl font-medium text-foreground mb-4">
                  "Mejores prácticas de gestión se asocian con mayor crecimiento en ventas."
                </p>
                <p className="text-muted-foreground mb-6">
                  La gestión explica una parte importante de la productividad entre empresas.
                </p>
                <p className="text-sm text-muted-foreground">
                  Fuente: World Management Survey / investigación académica (WMS/AER)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo trabajamos - Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Cómo trabajamos
              </h2>
              <p className="text-muted-foreground">Tres pasos simples hacia resultados medibles.</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connection line */}
                <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50" />
                
                {steps.map((step, index) =>
                <div key={index} className="relative text-center">
                    {/* Step number */}
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/20 border-2 border-secondary flex items-center justify-center relative z-10">
                      <span className="text-2xl font-bold text-secondary">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Ideal para - Segments */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ideal para
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {segments.map((segment, index) =>
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-secondary/30 transition-all text-center">
                
                  <h3 className="font-semibold text-foreground mb-3">{segment.title}</h3>
                  <p className="text-sm text-muted-foreground">{segment.description}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Listo para ordenar su negocio y crecer con control?
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  onClick={scrollToContact}>
                  
                  Agendar llamada
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild>
                  
                  <Link to="/servicios">Ver otros servicios</Link>
                </Button>
              </div>
              
              {/* Contact Form */}
              <div className="max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  O déjenos sus datos y le contactamos
                </h3>
                <ContactForm
                  challengeLabel="¿Qué necesita mejorar? *"
                  challengeOptions={negociosChallengeOptions}
                  submitLabel="Agendar llamada"
                  serviceName="Consultoría de Negocios"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>);

};

export default ConsultoriaDeNegociosPage;