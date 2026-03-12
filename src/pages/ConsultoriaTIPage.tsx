import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Monitor, Check, ArrowRight, Lock, Key, FileText, FolderOpen, Server, Cloud, Database, Shield, Globe, Cpu, Settings, Headphones, Code, Workflow, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CONTACT_INFO } from "@/lib/constants";
import ContactForm from "@/components/shared/ContactForm";

const tiChallengeOptions = [
  { value: "consultoria", label: "Consultoría IT / arquitectura" },
  { value: "sistema", label: "Sistemas empresariales" },
  { value: "web-app", label: "Desarrollo web / aplicaciones" },
  { value: "automatizacion", label: "Automatización de procesos" },
  { value: "infraestructura", label: "Infraestructura / cloud / BD" },
  { value: "soporte", label: "Soporte especializado por tickets" },
  { value: "otro", label: "Otro" },
];

const ConsultoriaTIPage = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  const problems = [
    "Falta de claridad sobre qué tecnología implementar",
    "Sistemas o procesos manuales que frenan la operación",
    "Necesidad de una página web o aplicación sin saber cómo estructurar el proyecto",
    "Dependencia excesiva del equipo interno para iniciativas tecnológicas",
    "Falta de especialistas para proyectos puntuales",
    "Backlog de requerimientos técnicos y tickets sin resolver",
    "Procesos desconectados entre áreas y herramientas",
    "Necesidad de modernizar infraestructura o plataformas"
  ];

  const serviceCards = [
    {
      icon: Cpu,
      title: "Consultoría IT y arquitectura tecnológica",
      description: "Diagnóstico, estrategia y roadmap para alinear tecnología con objetivos de negocio."
    },
    {
      icon: Settings,
      title: "Sistemas empresariales",
      description: "Implementación y mejora de sistemas que soportan la operación de su empresa."
    },
    {
      icon: Globe,
      title: "Desarrollo de páginas web y aplicaciones",
      description: "Sitios corporativos, aplicaciones a medida e integraciones con sus plataformas."
    },
    {
      icon: Workflow,
      title: "Automatización de procesos",
      description: "Eliminamos trabajo manual conectando sistemas, flujos y herramientas."
    },
    {
      icon: Cloud,
      title: "Infraestructura, cloud y bases de datos",
      description: "Servidores, Azure, bases de datos Oracle/SQL y modernización de plataformas."
    },
    {
      icon: Headphones,
      title: "Soporte especializado por tickets",
      description: "Bolsa de horas con SLAs definidos para resolver requerimientos técnicos bajo demanda."
    }
  ];

  const modalities = [
    {
      icon: Code,
      title: "Diagnóstico y consultoría",
      description: "Evaluamos su situación tecnológica actual, identificamos oportunidades y definimos un plan de acción con prioridades claras.",
      bullets: ["Análisis de infraestructura y sistemas", "Roadmap tecnológico", "Recomendaciones priorizadas"]
    },
    {
      icon: Settings,
      title: "Implementación y desarrollo",
      description: "Ejecutamos proyectos tecnológicos: desde desarrollo web y aplicaciones hasta integración de sistemas y automatización.",
      bullets: ["Desarrollo web y apps", "Implementación de sistemas", "Automatización e integraciones"]
    },
    {
      icon: Headphones,
      title: "Soporte especializado por tickets",
      description: "Capacidad técnica bajo demanda con bolsa de horas y SLAs. Ideal para resolver backlog sin contratar especialistas full-time.",
      bullets: ["Bolsa de horas con SLA", "Multitecnología", "Reportes y mejora continua"]
    }
  ];

  const technologies = [
    { category: "ServiceNow (ITSM)", items: ["Incidentes", "Cambios", "Requests", "Catálogo", "Flujos"], icon: Server },
    { category: "Infraestructura", items: ["Linux", "Windows", "Servidores"], icon: Monitor },
    { category: "Cloud & VDI", items: ["Azure", "Citrix"], icon: Cloud },
    { category: "Bases de datos", items: ["Oracle", "Microsoft SQL"], icon: Database },
    { category: "Identity / Accesos", items: ["Active Directory", "IDM"], icon: Shield },
    { category: "Web & Apps", items: ["Sitios corporativos", "Apps empresariales", "Integraciones"], icon: Globe }
  ];

  const securityCards = [
    {
      icon: Lock,
      title: "NDA y confidencialidad",
      description: "Firmamos acuerdos de confidencialidad desde el inicio.",
      badge: "NDA"
    },
    {
      icon: Key,
      title: "Control de accesos",
      description: "Principio de mínimo privilegio en cada proyecto.",
      badge: "Least Privilege"
    },
    {
      icon: FileText,
      title: "Trazabilidad y evidencia",
      description: "Cada proyecto o ticket con historial completo y auditable.",
      badge: "Audit Trail"
    },
    {
      icon: FolderOpen,
      title: "Documentación y handover",
      description: "Entregamos documentación para continuidad operativa.",
      badge: "Knowledge Transfer"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Evaluación inicial",
      description: "Entendemos su contexto, necesidades y prioridades tecnológicas"
    },
    {
      number: "2",
      title: "Definición de alcance",
      description: "Propuesta técnica con arquitectura, tiempos y presupuesto"
    },
    {
      number: "3",
      title: "Implementación o soporte",
      description: "Ejecución del proyecto o servicio continuo con seguimiento"
    },
    {
      number: "4",
      title: "Entrega y continuidad",
      description: "Documentación, capacitación y acompañamiento post-entrega"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Consultoría y Soluciones TI | Soncorp</title>
        <meta 
          name="description" 
          content="Consultoría TI, desarrollo web, aplicaciones empresariales, automatización, infraestructura cloud y soporte técnico especializado. Resuelva necesidades tecnológicas con Soncorp." 
        />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-20 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 blur-3xl rounded-full" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link>
              <span>/</span>
              <Link to="/servicios" className="hover:text-foreground transition-colors">Servicios</Link>
              <span>/</span>
              <span className="text-foreground">Consultoría y Soluciones TI</span>
            </div>
            
            {/* Back link */}
            <Link 
              to="/servicios" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a servicios
            </Link>
            
            <div className="max-w-4xl">
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/20 border border-primary/30">
                  <Monitor className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  Consultoría y Soluciones TI
                </h1>
              </div>
              
              {/* Headline */}
              <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Resuelva necesidades tecnológicas con consultoría, implementación y soporte especializado.
              </p>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl">
                Ayudamos a empresas a tomar mejores decisiones tecnológicas y ejecutarlas: 
                desde sistemas empresariales y desarrollo web hasta automatización, infraestructura cloud y soporte técnico especializado.
              </p>

              {/* Capability chips */}
              <div className="flex flex-wrap gap-2 mb-10">
                {["Sistemas empresariales", "Páginas web", "Aplicaciones", "Automatización", "Infraestructura y cloud", "Bases de datos", "Soporte técnico"].map((cap) => (
                  <span key={cap} className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-sm text-foreground font-medium">
                    {cap}
                  </span>
                ))}
              </div>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={scrollToContact}
                >
                  Solicitar propuesta
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-border hover:bg-muted"
                  asChild
                >
                  <a href="https://wa.me/521234567890" target="_blank" rel="noopener noreferrer">
                    Hablar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problemas que resolvemos */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Problemas que resolvemos
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-5 rounded-xl bg-card/50 border border-destructive/20 hover:border-destructive/40 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span className="text-foreground text-sm">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué hacemos - 6 cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Qué hacemos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Una oferta integral de tecnología para cubrir las necesidades de su empresa.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {serviceCards.map((card, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modalidades de servicio */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Modalidades de servicio
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {modalities.map((mod, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors flex flex-col"
                >
                  <div className="p-3 rounded-xl bg-primary/20 border border-primary/30 w-fit mb-4">
                    <mod.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{mod.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{mod.description}</p>
                  <ul className="space-y-2">
                    {mod.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tecnologías y capacidades */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tecnologías y capacidades
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {/* Main tech chips */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {["ServiceNow", "Linux", "Windows", "Azure", "Citrix", "Oracle", "SQL Server", "Active Directory", "Sitios web", "Apps empresariales"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Categories breakdown */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {technologies.map((cat, index) => (
                  <div key={index} className="p-4 rounded-xl bg-card border border-border/50">
                    <div className="flex items-center gap-2 mb-3">
                      <cat.icon className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground text-sm">{cat.category}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span 
                          key={item}
                          className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground text-sm">
                ¿Su tecnología no aparece? La evaluamos y le indicamos si podemos cubrirla.
              </p>
            </div>
          </div>
        </section>

        {/* Seguridad y Confidencialidad */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Seguridad y confidencialidad
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {securityCards.map((card, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{card.description}</p>
                      <span className="inline-block text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                        {card.badge}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
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
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 relative">
                {/* Connection line */}
                <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                
                {steps.map((step, index) => (
                  <div key={index} className="relative text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center relative z-10">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stat Card */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium text-primary mb-4 block">¿Sabías que...?</span>
              
              <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-card to-muted/30 border border-border">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  $5.5 billones
                </p>
                <p className="text-lg md:text-xl text-foreground mb-4">
                  IDC estima que para 2026, más del 90% de organizaciones sentirá el impacto 
                  de la crisis de habilidades TI, con pérdidas globales asociadas a retrasos 
                  y competitividad por ~US$5.5 billones.
                </p>
                <p className="text-sm text-muted-foreground">
                  Fuente: IDC
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="contacto" className="py-20 bg-gradient-to-b from-muted/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Convierta necesidades tecnológicas en soluciones ejecutables
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Solicitar propuesta
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                >
                  <Link to="/servicios">Ver otros servicios</Link>
                </Button>
              </div>
              
              {/* Contact Form */}
              <div id="form" className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Cuéntenos sobre su necesidad tecnológica
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="Teléfono (opcional)"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <textarea
                    name="necesidad"
                    placeholder="¿Qué necesita resolver? (consultoría, sistema, página web, app, automatización, soporte, infraestructura, etc.)"
                    value={formData.necesidad}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                  />
                  <input
                    type="text"
                    name="tecnologias"
                    placeholder="Tecnologías o contexto actual (ej: Azure, ServiceNow, WordPress...)"
                    value={formData.tecnologias}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  />
                  <input
                    type="text"
                    name="alcance"
                    placeholder="Alcance estimado o volumen (opcional)"
                    value={formData.alcance}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Solicitar propuesta"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ConsultoriaTIPage;
