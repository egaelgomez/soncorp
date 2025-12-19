import { Headphones, TrendingUp, Monitor, Megaphone, LucideIcon } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ScopeCard {
  title: string;
  description: string;
  bullets: string[];
}

export interface PackageCard {
  name: string;
  description: string;
  bullets: string[];
  idealFor: string;
}

export interface Solution {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  result: string;
  chips: string[];
  // Detail page content
  headline: string;
  heroBullets: string[];
  badge?: string;
  audiences: string[];
  techChips?: string[];
  problems: string[];
  benefits: string[];
  scope: ScopeCard[];
  packages: PackageCard[];
  faq: FAQItem[];
}

export const solutions: Solution[] = [
  {
    id: "cx",
    slug: "customer-experience",
    icon: Headphones,
    title: "Customer Experience (CX)",
    result: "Experiencias consistentes que aumentan lealtad y reducen fricción.",
    chips: ["Diagnóstico CX", "Estándares + entrenamiento", "Métricas NPS/CSAT"],
    headline: "Diseñamos experiencias consistentes que reducen fricción y aumentan confianza y lealtad.",
    heroBullets: [
      "Estandarización de atención y experiencia",
      "Entrenamiento y ejecución con tu equipo",
      "Métricas de experiencia (NPS/CSAT/CES)"
    ],
    badge: "Basado en Six Pillars: Personalización, Integridad, Expectativas, Resolución, Tiempo & Esfuerzo, Empatía.",
    audiences: ["PyME", "Mid-market", "Enterprise"],
    problems: [
      "Quejas recurrentes y mala reputación",
      "Respuestas lentas o procesos inconsistentes",
      "Clientes se van con la competencia",
      "Falta de métricas y seguimiento real",
      "Equipos saturados y sin protocolos claros"
    ],
    benefits: [
      "Atención consistente en todos los canales",
      "Menos fricción y retrabajo",
      "Mejor percepción de marca y confianza",
      "Equipos alineados con estándares",
      "Medición y mejora continua"
    ],
    scope: [
      {
        title: "Diagnóstico",
        description: "Evaluación inicial de experiencia actual",
        bullets: ["Mapeo de journey", "Identificación de pain points"]
      },
      {
        title: "Plan / Propuesta",
        description: "Estrategia personalizada de mejora",
        bullets: ["Estándares de servicio", "Protocolos de atención"]
      },
      {
        title: "Implementación",
        description: "Ejecución junto a tu equipo",
        bullets: ["Entrenamiento", "Acompañamiento en campo"]
      },
      {
        title: "Medición",
        description: "Seguimiento continuo de resultados",
        bullets: ["NPS/CSAT/CES", "Reportes periódicos"]
      }
    ],
    packages: [
      {
        name: "Starter",
        description: "Quick wins para mejorar atención básica",
        bullets: ["Diagnóstico inicial", "Protocolos esenciales", "1 entrenamiento"],
        idealFor: "PyMEs iniciando en CX"
      },
      {
        name: "Growth",
        description: "Estándares completos y medición",
        bullets: ["Journey mapping", "Entrenamientos mensuales", "Métricas NPS/CSAT"],
        idealFor: "Empresas en crecimiento"
      },
      {
        name: "Enterprise",
        description: "Transformación integral de experiencia",
        bullets: ["Six Pillars completo", "Consultoría continua", "Dashboard ejecutivo"],
        idealFor: "Organizaciones con múltiples canales"
      }
    ],
    faq: [
      {
        question: "¿Cuánto tiempo toma ver resultados?",
        answer: "Los primeros quick wins se ven en 2-4 semanas. Una transformación completa toma 3-6 meses dependiendo del alcance."
      },
      {
        question: "¿Cómo iniciamos?",
        answer: "Con una llamada de diagnóstico gratuita donde evaluamos tu situación actual y definimos prioridades."
      },
      {
        question: "¿Qué necesito preparar?",
        answer: "Acceso a métricas actuales (si las tienes), disponibilidad del equipo clave y apertura para cambiar procesos."
      },
      {
        question: "¿Cómo se mide el éxito?",
        answer: "Definimos KPIs específicos: NPS, CSAT, tiempos de respuesta, tasa de resolución al primer contacto."
      },
      {
        question: "¿Trabajan presencial o remoto?",
        answer: "Híbrido. Diagnóstico y entrenamientos clave presenciales, seguimiento y reportes remotos."
      }
    ]
  },
  {
    id: "business",
    slug: "negocio-finanzas-inversion",
    icon: TrendingUp,
    title: "Negocio, Finanzas e Inversión",
    result: "Decisiones con números: rentabilidad, costos y crecimiento.",
    chips: ["Diagnóstico financiero", "Plan de crecimiento", "Prep. inversión"],
    headline: "Claridad financiera y estrategia para crecer con decisiones respaldadas por datos.",
    heroBullets: [
      "Diagnóstico y rentabilidad",
      "Estrategia de crecimiento",
      "Preparación para inversión/crédito"
    ],
    audiences: ["PyME", "Mid-market", "Enterprise"],
    problems: [
      "Márgenes bajos o desconocidos",
      "Costos desordenados o sin control",
      "Crecimiento sin estrategia clara",
      "Falta de claridad para invertir o pedir crédito",
      "Falta de prioridades ejecutables"
    ],
    benefits: [
      "Visibilidad de números clave",
      "Priorización de acciones con impacto",
      "Mejor estructura de costos y precios",
      "Plan realista por etapas",
      "Decisiones más rápidas y seguras"
    ],
    scope: [
      {
        title: "Diagnóstico",
        description: "Análisis financiero y operativo",
        bullets: ["Estructura de costos", "Análisis de rentabilidad"]
      },
      {
        title: "Plan / Propuesta",
        description: "Estrategia con prioridades claras",
        bullets: ["OKRs financieros", "Roadmap de ejecución"]
      },
      {
        title: "Implementación",
        description: "Acompañamiento en la ejecución",
        bullets: ["Seguimiento semanal", "Ajustes tácticos"]
      },
      {
        title: "Medición",
        description: "Control de avance y resultados",
        bullets: ["Dashboard de KPIs", "Reportes mensuales"]
      }
    ],
    packages: [
      {
        name: "Starter",
        description: "Claridad básica de números",
        bullets: ["Diagnóstico financiero", "Estructura de costos", "1 sesión estratégica"],
        idealFor: "PyMEs que quieren orden"
      },
      {
        name: "Growth",
        description: "Plan de crecimiento estructurado",
        bullets: ["Análisis completo", "OKRs", "Seguimiento mensual"],
        idealFor: "Empresas buscando escalar"
      },
      {
        name: "Enterprise",
        description: "Preparación para inversión",
        bullets: ["Due diligence", "Pitch deck financiero", "Acompañamiento a fondos"],
        idealFor: "Empresas buscando capital"
      }
    ],
    faq: [
      {
        question: "¿Cuánto tiempo toma el diagnóstico?",
        answer: "El diagnóstico inicial toma 1-2 semanas dependiendo de la información disponible."
      },
      {
        question: "¿Necesito tener contador?",
        answer: "No es obligatorio, pero sí acceso a información financiera básica (ventas, costos, flujo)."
      },
      {
        question: "¿Ayudan a conseguir inversión?",
        answer: "Preparamos tu empresa para inversión: estructura, métricas y pitch. La conexión con fondos es un servicio adicional."
      },
      {
        question: "¿Trabajan con startups?",
        answer: "Sí, especialmente en preparación para levantar capital y estructura de crecimiento."
      },
      {
        question: "¿Cuál es la modalidad de trabajo?",
        answer: "Sesiones semanales de seguimiento + trabajo asíncrono. Presencial para talleres clave."
      }
    ]
  },
  {
    id: "it",
    slug: "mesa-ingenieria-ti-por-tickets",
    icon: Monitor,
    title: "Mesa de Ingeniería TI",
    result: "Capacidad técnica on-demand sin elevar costos fijos.",
    chips: ["Operación + SLAs", "Soporte multitecnología", "Mejora continua"],
    headline: "Capacidad técnica flexible para resolver tickets sin incrementar costos fijos.",
    heroBullets: [
      "Operación por tickets + SLAs",
      "Soporte multitecnología",
      "Reportes y mejora continua"
    ],
    audiences: ["PyME", "Mid-market", "Enterprise"],
    techChips: ["ServiceNow", "Linux/Windows", "Azure", "Citrix", "Oracle", "Microsoft SQL", "IDM"],
    problems: [
      "Backlog de tickets crece sin control",
      "No hay expertos internos para ciertas tecnologías",
      "Costos de contratación fija son altos",
      "Incidentes repetitivos sin mejora",
      "Falta de SLAs y visibilidad del servicio"
    ],
    benefits: [
      "Escalas capacidad bajo demanda",
      "Reduces presión del equipo interno",
      "Priorización y orden del backlog",
      "Mejor control operativo (SLA/tiempos)",
      "Continuidad y documentación"
    ],
    scope: [
      {
        title: "Diagnóstico",
        description: "Evaluación del backlog y prioridades",
        bullets: ["Inventario de tickets", "Clasificación por urgencia"]
      },
      {
        title: "Plan / Propuesta",
        description: "Definición de SLAs y bolsa de horas",
        bullets: ["Acuerdo de servicio", "Prioridades claras"]
      },
      {
        title: "Operación",
        description: "Ejecución y resolución de tickets",
        bullets: ["Atención por SLA", "Escalación definida"]
      },
      {
        title: "Medición",
        description: "Reportes y mejora continua",
        bullets: ["MTTR/SLA cumplimiento", "Análisis de tendencias"]
      }
    ],
    packages: [
      {
        name: "Starter",
        description: "Bolsa de horas para emergencias",
        bullets: ["20 horas/mes", "SLA estándar", "1 tecnología"],
        idealFor: "PyMEs con soporte básico"
      },
      {
        name: "Growth",
        description: "Soporte continuo multitecnología",
        bullets: ["60 horas/mes", "SLA prioritario", "Hasta 3 tecnologías"],
        idealFor: "Empresas con equipo TI pequeño"
      },
      {
        name: "Enterprise",
        description: "Mesa dedicada con SLAs premium",
        bullets: ["Horas ilimitadas", "SLA crítico 24/7", "Multitecnología"],
        idealFor: "Operaciones críticas"
      }
    ],
    faq: [
      {
        question: "¿Qué tecnologías soportan?",
        answer: "ServiceNow, Linux, Windows Server, Azure, Citrix, bases de datos Oracle/SQL, gestión de identidades y más."
      },
      {
        question: "¿Cómo funcionan los SLAs?",
        answer: "Definimos tiempos de respuesta y resolución según criticidad. Reportamos cumplimiento mensualmente."
      },
      {
        question: "¿Puedo escalar horas en el mes?",
        answer: "Sí, las horas adicionales se facturan al mismo precio o con descuento según volumen."
      },
      {
        question: "¿Cómo se reportan los tickets?",
        answer: "Dashboard en tiempo real + reporte semanal de avance y backlog."
      },
      {
        question: "¿Trabajan con nuestro sistema de tickets?",
        answer: "Sí, nos adaptamos a tu herramienta (ServiceNow, Jira, Freshdesk, etc.) o usamos la nuestra."
      }
    ]
  },
  {
    id: "marketing",
    slug: "marketing-automatizacion",
    icon: Megaphone,
    title: "Marketing & Automatización",
    result: "Más leads con seguimiento automatizado y medible.",
    chips: ["Contenido + campañas", "Automatización", "Optimización métricas"],
    headline: "Más visibilidad y leads con campañas y automatización del seguimiento.",
    heroBullets: [
      "Contenido y campañas en redes",
      "Automatización (ManyChat/flows)",
      "Optimización por métricas"
    ],
    audiences: ["PyME", "Mid-market", "Enterprise"],
    techChips: ["ManyChat", "Meta Ads", "Google Ads", "HubSpot", "ActiveCampaign"],
    problems: [
      "Publicas pero no conviertes",
      "Leads sin seguimiento rápido",
      "Mensajes inconsistentes o sin estrategia",
      "No hay sistema para calificar prospectos",
      "Mucho trabajo manual repetitivo"
    ],
    benefits: [
      "Mejor respuesta y seguimiento",
      "Más leads calificados",
      "Mensaje consistente en canales",
      "Menos trabajo manual",
      "Mejora continua basada en datos"
    ],
    scope: [
      {
        title: "Diagnóstico",
        description: "Auditoría de presencia y conversión",
        bullets: ["Análisis de canales", "Funnel actual"]
      },
      {
        title: "Plan / Propuesta",
        description: "Estrategia de contenido y automatización",
        bullets: ["Calendario editorial", "Flujos de seguimiento"]
      },
      {
        title: "Implementación",
        description: "Ejecución de campañas y bots",
        bullets: ["Contenido + pauta", "ManyChat/flows"]
      },
      {
        title: "Medición",
        description: "Optimización continua por datos",
        bullets: ["CPL/CAC", "Conversión por canal"]
      }
    ],
    packages: [
      {
        name: "Starter",
        description: "Presencia básica y automatización simple",
        bullets: ["8 posts/mes", "1 flujo ManyChat", "Reporte mensual"],
        idealFor: "Negocios iniciando digital"
      },
      {
        name: "Growth",
        description: "Campañas + automatización completa",
        bullets: ["16 posts/mes", "Pauta gestionada", "Flujos avanzados"],
        idealFor: "Empresas buscando leads"
      },
      {
        name: "Enterprise",
        description: "Marketing integral multicanal",
        bullets: ["Contenido ilimitado", "Multicampaña", "CRM integrado"],
        idealFor: "Operaciones de ventas grandes"
      }
    ],
    faq: [
      {
        question: "¿Manejan las redes sociales completas?",
        answer: "Sí, desde estrategia y contenido hasta publicación y pauta pagada."
      },
      {
        question: "¿Qué plataformas de automatización usan?",
        answer: "ManyChat, HubSpot, ActiveCampaign, Make/Zapier según tus necesidades."
      },
      {
        question: "¿Cuánto tarda en verse resultados?",
        answer: "Primeros leads en 2-4 semanas. Optimización significativa en 2-3 meses."
      },
      {
        question: "¿Necesito tener CRM?",
        answer: "No es obligatorio. Podemos implementar uno básico o integrarnos al tuyo."
      },
      {
        question: "¿Incluyen diseño gráfico?",
        answer: "Sí, diseño de posts, stories y materiales para campañas está incluido."
      }
    ]
  }
];

export const getSolutionBySlug = (slug: string): Solution | undefined => {
  return solutions.find(s => s.slug === slug);
};
