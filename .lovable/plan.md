

## Plan: Corregir simetría de cards en Soluciones

### Problema
Las cards tienen alturas diferentes porque el contenido varía en longitud. El grid CSS no fuerza alturas iguales porque los hijos internos (AnimatedSection → TiltCard) no heredan `h-full`.

### Solución — `src/components/SolutionsSection.tsx`

Agregar `h-full` en cascada para que cada card ocupe toda la altura de su celda:

1. `AnimatedSection` → agregar `className="h-full"`
2. `TiltCard` → agregar `h-full flex flex-col` a su className
3. El contenido intermedio (chips/result) puede usar `flex-grow` para empujar el CTA "Ver detalles" al fondo de todas las cards por igual

Esto hace que CSS Grid iguale las alturas por fila y el contenido interno se distribuya uniformemente.

### Archivos
- 1 archivo editado: `src/components/SolutionsSection.tsx` (~3 líneas cambiadas)

