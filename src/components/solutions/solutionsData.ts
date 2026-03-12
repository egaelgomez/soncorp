import { HeartHandshake, TrendingUp, Monitor, Megaphone, LucideIcon } from "lucide-react";

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
    icon: HeartHandshake,
    title: "Customer Experience",
    result: "Mejore la retención, satisfacción y recomendación de sus clientes.",
    chips: ["Diagnóstico", "Entrenamiento", "Métricas"],
    headline: "Diseñamos experiencias consistentes que reducen fricción y aumentan confianza y lealtad.",
    heroBullets: [
      "Estandarización de atención y experiencia",
      "Entrenamiento y ejecución con tu equipo",
      "Métricas de experiencia (NPS/CSAT/CES)"
    ],
    badge: "Basado en Six Pillars: Personalización, Integridad, Expectativas, Resolución, Tiempo & Esfuerzo, Empatía.",
    audiences: ["Negocio en crecimiento", "Mid-market", "Enterprise"],
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
        idealFor: "Empresas iniciando en CX"
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
    slug: "consultoria-de-negocios",
    icon: TrendingUp,
    title: "Consultoría de Negocios",
    result: "Crece con estrategia, orden y ejecución medible.",
    chips: ["Estrategia", "Procesos", "Ventas"],
    headline: "Impulsamos el crecimiento rentable de tu empresa con estrategia, procesos y ejecución.",
    heroBullets: [
      "Aumento en ventas e ingreso",
      "Procesos más eficientes",
      "Prioridades claras para impactar resultados"
    ],
    audiences: ["Negocio en crecimiento", "Mid-market", "Enterprise"],
    problems: [
      "Ventas estancadas o impredecibles",
      "Prospectos se pierden por falta de seguimiento",
      "Operación desordenada y retrabajo",
      "Equipo sin claridad de prioridades",
      "Falta de métricas y control"
    ],
    benefits: [
      "Aumento en ventas e ingreso",
      "Mejor conversión y seguimiento comercial",
      "Operación más eficiente y predecible",
      "Equipo alineado con responsabilidades claras",
      "Decisiones más rápidas con indicadores simples"
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
        idealFor: "Empresas que buscan orden"
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
    slug: "consultoria-soluciones-ti",
    icon: Monitor,
    title: "Consultoría y Soluciones TI",
    result: "Resuelva necesidades tecnológicas con consultoría, implementación y soporte especializado.",
    chips: ["Consultoría", "Implementación", "Soporte especializado"],
    headline: "Ayudamos a su empresa a resolver necesidades tecnológicas con consultoría, implementación y soporte especializado.",
    heroBullets: [
      "Consultoría IT y arquitectura tecnológica",
      "Sistemas empresariales, web y aplicaciones",
      "Automatización, infraestructura, cloud y soporte"
    ],
    audiences: ["Negocio en crecimiento", "Mid-market", "Enterprise"],
    techChips: ["ServiceNow", "Linux/Windows", "Azure", "Citrix", "Oracle", "Microsoft SQL", "Active Directory", "Sitios web", "Apps empresariales", "Integraciones"],
    problems: [
      "Falta de claridad sobre qué tecnología implementar",
      "Sistemas o procesos manuales que frenan la operación",
      "Necesidad de una página web o aplicación sin saber cómo estructurar el proyecto",
      "Dependencia excesiva del equipo interno para iniciativas tecnológicas",
      "Falta de especialistas para proyectos puntuales",
      "Backlog de requerimientos técnicos y tickets sin resolver",
      "Procesos desconectados entre áreas y herramientas",
      "Necesidad de modernizar infraestructura o plataformas"
    ],
    benefits: [
      "Claridad tecnológica con consultoría especializada",
      "Implementación de sistemas, web y apps alineados al negocio",
      "Automatización de procesos para reducir trabajo manual",
      "Infraestructura moderna y escalable (cloud, BD, servidores)",
      "Soporte especializado bajo demanda sin inflar nómina",
      "Un solo partner para múltiples necesidades tecnológicas"
    ],
    scope: [
      {
        title: "Evaluación inicial",
        description: "Diagnóstico de necesidades y contexto tecnológico",
        bullets: ["Análisis de situación actual", "Identificación de oportunidades"]
      },
      {
        title: "Definición de alcance",
        description: "Propuesta técnica y plan de acción",
        bullets: ["Arquitectura y roadmap", "Presupuesto y tiempos"]
      },
      {
        title: "Implementación o soporte",
        description: "Ejecución del proyecto o servicio continuo",
        bullets: ["Desarrollo e integración", "Soporte por tickets/SLA"]
      },
      {
        title: "Entrega y continuidad",
        description: "Documentación y acompañamiento post-entrega",
        bullets: ["Documentación técnica", "Capacitación y soporte"]
      }
    ],
    packages: [
      {
        name: "Diagnóstico y consultoría",
        description: "Evaluación tecnológica y plan de acción",
        bullets: ["Diagnóstico de infraestructura y sistemas", "Roadmap tecnológico", "Recomendaciones priorizadas"],
        idealFor: "Empresas que necesitan claridad tecnológica"
      },
      {
        name: "Implementación y desarrollo",
        description: "Ejecución de proyectos tecnológicos",
        bullets: ["Desarrollo web y aplicaciones", "Implementación de sistemas", "Automatización e integraciones"],
        idealFor: "Empresas con proyectos definidos"
      },
      {
        name: "Soporte especializado",
        description: "Capacidad técnica bajo demanda por tickets",
        bullets: ["Bolsa de horas con SLA", "Multitecnología", "Reportes y mejora continua"],
        idealFor: "Empresas que necesitan soporte continuo"
      }
    ],
    faq: [
      {
        question: "¿Qué tipo de proyectos tecnológicos realizan?",
        answer: "Consultoría IT, desarrollo de páginas web y aplicaciones, implementación de sistemas empresariales, automatización de procesos, infraestructura cloud y soporte técnico especializado."
      },
      {
        question: "¿También ofrecen soporte por tickets o bolsa de horas?",
        answer: "Sí, el soporte especializado por tickets es una de nuestras modalidades. Operamos con SLAs definidos, reportes periódicos y multitecnología."
      },
      {
        question: "¿Qué tecnologías cubren?",
        answer: "ServiceNow, Linux, Windows Server, Azure, Citrix, Oracle, SQL Server, Active Directory, desarrollo web, aplicaciones empresariales e integraciones."
      },
      {
        question: "¿Pueden desarrollar una página web o aplicación para mi empresa?",
        answer: "Sí, desde sitios corporativos hasta aplicaciones empresariales a medida, incluyendo integraciones con sus sistemas actuales."
      },
      {
        question: "¿Cómo inicia un proyecto con Soncorp?",
        answer: "Con una evaluación inicial donde entendemos sus necesidades, definimos el alcance y le presentamos una propuesta técnica con tiempos y presupuesto."
      }
    ]
  },
  {
    id: "marketing",
    slug: "marketing-automatizacion",
    icon: Megaphone,
    title: "Marketing & Automatización",
    result: "Genera más leads y ventas con campañas + automatización.",
    chips: ["Campañas", "Automatización", "Métricas"],
    headline: "Genera más leads y ventas con campañas + automatización del seguimiento.",
    heroBullets: [
      "Contenido y campañas en redes",
      "Automatización (ManyChat/flows)",
      "Optimización por métricas"
    ],
    audiences: ["Negocio en crecimiento", "Mid-market", "Enterprise"],
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
