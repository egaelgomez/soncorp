import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Monitor, Check, ArrowRight, Lock, Key, FileText, FolderOpen, Server, Cloud, Database, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ConsultoriaTIPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    tecnologias: "",
    volumen: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "¡Solicitud enviada!",
      description: "Te contactaremos pronto con una propuesta.",
    });
    setFormData({ nombre: "", empresa: "", email: "", telefono: "", tecnologias: "", volumen: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  const problems = [
    "Backlog de tickets que crece y nadie alcanza a atender",
    "No tienes especialistas en ciertas tecnologías (y contratar es caro)",
    "Incidentes repetitivos que consumen tiempo y frenan al negocio",
    "Cambios y solicitudes que se atrasan por falta de capacidad",
    "Proyectos pequeños que nunca se ejecutan por 'prioridades del día a día'",
    "Falta de control: tiempos, SLAs y visibilidad real del servicio"
  ];

  const benefits = [
    {
      title: "Ahorro vs. contratar personal especializado",
      description: "Por cada tecnología que necesitas",
      large: true
    },
    {
      title: "Gasto flexible, no costo fijo alto",
      description: "Pagas por horas/capacidad realmente usada"
    },
    {
      title: "Menos tiempo muerto",
      description: "Menos impacto al negocio por tickets críticos"
    },
    {
      title: "Talento certificado sin reclutamiento",
      description: "Acceso inmediato sin procesos largos"
    },
    {
      title: "Un solo partner multitecnología",
      description: "Soporte unificado para distintas plataformas"
    },
    {
      title: "Transparencia total",
      description: "Reportes, SLAs, priorización y seguimiento"
    }
  ];

  const technologies = [
    { category: "ServiceNow (ITSM)", items: ["Incidentes", "Cambios", "Requests", "Catálogo", "Flujos"] },
    { category: "Infraestructura", items: ["Linux", "Windows", "Servidores"] },
    { category: "Cloud & VDI", items: ["Azure", "Citrix"] },
    { category: "Bases de datos", items: ["Oracle", "Microsoft SQL"] },
    { category: "Identity/Accesos", items: ["IDM", "Active Directory"] }
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
      description: "Principio de mínimo privilegio para cada ticket.",
      badge: "Least Privilege"
    },
    {
      icon: FileText,
      title: "Trazabilidad y evidencia",
      description: "Cada ticket con historial completo y auditable.",
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
      title: "Onboarding & NDA",
      description: "Alcance, accesos, reglas y SLAs definidos"
    },
    {
      number: "2",
      title: "Triage y resolución",
      description: "Priorización inteligente + ejecución por SLA"
    },
    {
      number: "3",
      title: "Cierre con evidencia",
      description: "Documentación + reporte + mejoras sugeridas"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Consultoría TI por Tickets | Soncorp</title>
        <meta 
          name="description" 
          content="Resuelve tickets críticos sin contratar especialistas full-time. Bolsa de horas, SLAs claros y soporte multitecnología con NDA." 
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
              <span className="text-foreground">Consultoría TI por Tickets</span>
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
                  Consultoría TI por Tickets
                  <span className="block text-xl md:text-2xl font-normal text-muted-foreground mt-2">
                    (Bolsa de horas)
                  </span>
                </h1>
              </div>
              
              {/* Headline */}
              <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Resuelve tickets críticos sin contratar especialistas full-time.
              </p>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl">
                Tu equipo TI ampliado bajo demanda: ingenieros altamente capacitados para resolver 
                e implementar tickets en distintas tecnologías, con operación por SLA y confidencialidad (NDA).
              </p>
              
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

        {/* Problemas molestos - Grid 2×3 */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Problemas molestos que resolvemos
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-5 rounded-xl bg-card/50 border border-destructive/20 hover:border-destructive/40 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span className="text-foreground">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios - Bento Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Beneficios (en dinero y en operación)
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {/* Large card */}
              <div className="md:col-span-2 md:row-span-2 p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                <div className="h-full flex flex-col justify-center">
                  <Check className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {benefits[0].title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {benefits[0].description}
                  </p>
                </div>
              </div>
              
              {/* Small cards */}
              {benefits.slice(1).map((benefit, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <Check className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tecnologías que cubrimos */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tecnologías que cubrimos
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {/* Main tech chips */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {["ServiceNow", "Linux", "Windows", "Azure", "Citrix", "Oracle", "SQL Server", "IDM"].map((tech) => (
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
                      {index === 0 && <Server className="w-4 h-4 text-primary" />}
                      {index === 1 && <Monitor className="w-4 h-4 text-primary" />}
                      {index === 2 && <Cloud className="w-4 h-4 text-primary" />}
                      {index === 3 && <Database className="w-4 h-4 text-primary" />}
                      {index === 4 && <Shield className="w-4 h-4 text-primary" />}
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
                ¿Tu tecnología no aparece? La evaluamos y te decimos si podemos cubrirla por SLA.
              </p>
            </div>
          </div>
        </section>

        {/* Seguridad y Confidencialidad - Grid 2×2 */}
        <section className="py-20">
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

        {/* Cómo funciona - Timeline */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Cómo funciona
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connection line */}
                <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                
                {steps.map((step, index) => (
                  <div key={index} className="relative text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center relative z-10">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stat Card - ¿Sabías que...? */}
        <section className="py-20">
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
                Convierte tickets en operación estable
                <span className="block text-lg md:text-xl font-normal text-muted-foreground mt-2">
                  (sin inflar tu nómina)
                </span>
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
                  Cuéntanos sobre tu operación
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
                  <input
                    type="text"
                    name="tecnologias"
                    placeholder="Tecnologías que usas (ej: ServiceNow, Linux, Azure...)"
                    value={formData.tecnologias}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  />
                  <input
                    type="text"
                    name="volumen"
                    placeholder="Volumen estimado de tickets/mes (opcional)"
                    value={formData.volumen}
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
