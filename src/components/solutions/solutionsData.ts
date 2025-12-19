import { Headphones, TrendingUp, Monitor, Megaphone, LucideIcon } from "lucide-react";

export interface Solution {
  id: string;
  icon: LucideIcon;
  title: string;
  result: string;
  chips: string[];
}

export const solutions: Solution[] = [
  {
    id: "cx",
    icon: Headphones,
    title: "Customer Experience (CX)",
    result: "Experiencias consistentes que aumentan lealtad y reducen fricción.",
    chips: ["Diagnóstico CX", "Estándares + entrenamiento", "Métricas NPS/CSAT"],
  },
  {
    id: "business",
    icon: TrendingUp,
    title: "Negocio, Finanzas e Inversión",
    result: "Decisiones con números: rentabilidad, costos y crecimiento.",
    chips: ["Diagnóstico financiero", "Plan de crecimiento", "Prep. inversión"],
  },
  {
    id: "it",
    icon: Monitor,
    title: "Mesa de Ingeniería TI",
    result: "Capacidad técnica on-demand sin elevar costos fijos.",
    chips: ["Operación + SLAs", "Soporte multitecnología", "Mejora continua"],
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing & Automatización",
    result: "Más leads con seguimiento automatizado y medible.",
    chips: ["Contenido + campañas", "Automatización", "Optimización métricas"],
  },
];
