import { Headphones, TrendingUp, Monitor, Megaphone, LucideIcon } from "lucide-react";

export interface Package {
  name: string;
  desc: string;
}

export interface Solution {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  outcome: string;
  targetAudience: string[];
  deliverables: string[];
  process: string[];
  metrics: string[];
  timeframe: string;
  tools: string[];
  categories?: string[];
  packages: Package[];
}

export const solutions: Solution[] = [
  {
    id: "cx",
    icon: Headphones,
    title: "Customer Experience (CX) Excellence",
    shortDesc: "Experiencias que generan lealtad",
    outcome: "Menos fricción, más lealtad: experiencias consistentes que elevan NPS/CSAT y reducen quejas.",
    targetAudience: ["PyME", "Mid-market", "Enterprise"],
    deliverables: [
      "Diagnóstico CX (puntos de dolor, journey, momentos de la verdad)",
      "Mapa de Customer Journey + blueprint operativo",
      "Protocolos/SOPs de atención (front + back office)",
      "Diseño de métricas: NPS/CSAT/CES + tablero + cadencia",
      "Playbooks de resolución y recuperación de servicio",
      "Capacitación: guiones, calidad, coaching y QA",
    ],
    process: [
      "Descubrimiento + auditoría de canales",
      "Journey & fricciones + priorización por impacto/esfuerzo",
      "Diseño de estándares + entrenamiento",
      "Implementación + medición + ciclos de mejora",
    ],
    metrics: ["NPS", "CSAT", "CES", "FCR", "TTR", "Quejas/mes", "Retención"],
    timeframe: "Diagnóstico 1–2 sem | Implementación 2–8 sem",
    tools: ["Six Pillars", "Journey Mapping", "SOPs", "QA Framework"],
    packages: [
      { name: "Starter", desc: "Diagnóstico + quick wins" },
      { name: "Growth", desc: "Implementación + métricas" },
      { name: "Enterprise", desc: "Escala + gobernanza" },
    ],
  },
  {
    id: "business",
    icon: TrendingUp,
    title: "Consultoría de Negocio, Finanzas e Inversión",
    shortDesc: "Decisiones basadas en datos",
    outcome: "Decisiones con números: rentabilidad, costos y crecimiento con un plan ejecutable.",
    targetAudience: ["PyME", "Mid-market"],
    deliverables: [
      "Diagnóstico financiero (márgenes, costos, cashflow)",
      "Plan de crecimiento (escenarios + unit economics)",
      "Estructura de precios y márgenes",
      "Preparación para inversión/crédito (deck, métricas, narrativa)",
      "OKRs + plan 30/60/90 días",
    ],
    process: [
      "Análisis de situación actual + datos",
      "Modelado de escenarios",
      "Diseño de plan de acción",
      "Implementación + seguimiento",
    ],
    metrics: ["Margen", "CAC/LTV", "EBITDA", "Cash runway", "Conversión"],
    timeframe: "1–6 semanas por módulo",
    tools: ["Unit Economics", "OKRs", "Financial Modeling"],
    packages: [
      { name: "Starter", desc: "Diagnóstico financiero" },
      { name: "Growth", desc: "Plan + métricas" },
      { name: "Enterprise", desc: "Inversión + escala" },
    ],
  },
  {
    id: "it",
    icon: Monitor,
    title: "Mesa de Ingeniería TI por Tickets",
    shortDesc: "Capacidad técnica on-demand",
    outcome: "Capacidad técnica on-demand: resolvemos tickets críticos sin contratar un equipo completo.",
    targetAudience: ["PyME", "Mid-market", "Enterprise"],
    deliverables: [
      "Modelo operativo por tickets + SLAs",
      "Backlog triage + priorización",
      "Resolución / cambios / automatizaciones pequeñas",
      "Reporte mensual (volumen, tiempos, causa raíz, mejoras)",
    ],
    process: [
      "Onboarding + accesos",
      "Triage de backlog inicial",
      "Operación por tickets",
      "Reporteo + mejora continua",
    ],
    metrics: ["SLA", "TTR", "MTTR", "Backlog burn", "% reabiertos"],
    timeframe: "Arranque 3–5 días | Operación continua",
    tools: ["ServiceNow", "Azure", "Linux/Windows", "Oracle/MS SQL"],
    categories: ["ServiceNow ITSM", "Infra", "Cloud/VDI", "Bases de datos", "IDM"],
    packages: [
      { name: "Starter", desc: "Bolsa 20 hrs/mes" },
      { name: "Growth", desc: "Bolsa 40 hrs/mes" },
      { name: "Enterprise", desc: "Dedicado + SLAs" },
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing & Automatización",
    shortDesc: "Leads con menos esfuerzo",
    outcome: "Más leads con menos esfuerzo: campañas + automatización + seguimiento medible.",
    targetAudience: ["PyME", "Mid-market"],
    deliverables: [
      "Estrategia de contenido (calendario + formatos)",
      "Campañas en redes (creativos, copy, segmentación)",
      "Automatización: ManyChat/flows, respuestas, calificación de leads",
      "Integración ligera con CRM / Google Sheets / email",
      "Reporte y optimización semanal",
    ],
    process: [
      "Diagnóstico de canales actuales",
      "Diseño de estrategia + automatizaciones",
      "Implementación + lanzamiento",
      "Optimización continua",
    ],
    metrics: ["Leads", "CPL", "CTR", "Conversión", "Tiempo de respuesta", "ROAS"],
    timeframe: "Setup 1–2 sem | Optimización continua",
    tools: ["ManyChat", "Meta Ads", "CRM Integration", "Analytics"],
    packages: [
      { name: "Starter", desc: "1 canal + básico" },
      { name: "Growth", desc: "Multi-canal + flows" },
      { name: "Enterprise", desc: "Full stack + reporting" },
    ],
  },
];
