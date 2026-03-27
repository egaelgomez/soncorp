

## Plan: Modernizar la página con animaciones inmersivas y micro-interacciones

### Enfoque
Agregar animaciones de entrada (scroll-triggered), efectos hover avanzados, cursor interactivo, y micro-interacciones sin dependencias pesadas como Three.js. Usaremos CSS + un hook de Intersection Observer para animaciones al hacer scroll.

### Nuevos archivos

**1. `src/hooks/useScrollAnimation.ts`** — Custom hook con IntersectionObserver
- Detecta cuando un elemento entra al viewport
- Retorna un `ref` y un booleano `isVisible`
- Configurable: threshold, rootMargin

**2. `src/components/AnimatedSection.tsx`** — Wrapper reutilizable
- Envuelve cualquier sección con animación de entrada (fade-up, fade-left, fade-right, scale)
- Usa `useScrollAnimation` internamente
- Props: `animation`, `delay`, `children`

**3. `src/components/CursorGlow.tsx`** — Efecto de cursor luminoso
- Div que sigue el mouse con un gradiente radial suave (silver glow)
- Solo en desktop (oculto en mobile)
- `pointer-events-none`, `fixed`, `z-0`

### Archivos modificados

**4. `tailwind.config.ts`** — Agregar keyframes
- `fade-up`: translateY(30px) + opacity 0 → 0 + 1
- `fade-left` / `fade-right`: translateX(±30px)
- `scale-up`: scale(0.9) → 1
- `float`: movimiento sutil arriba/abajo para elementos decorativos
- `shimmer`: efecto de brillo en bordes de cards

**5. `src/index.css`** — Agregar clases de utilidad
- `.animate-on-scroll` base class (opacity-0, transform)
- `.animate-on-scroll.visible` (transición suave a estado final)
- `.card-3d` para efecto de perspectiva 3D en hover (rotateX/Y basado en posición del mouse)
- `.glass-effect` para glassmorphism mejorado

**6. `src/components/Hero.tsx`** — Animaciones de entrada
- Badge: slide-in con delay
- Título: fade-up con stagger por línea
- Párrafo: fade-up con mayor delay
- Agregar partículas/puntos flotantes decorativos en el fondo (CSS puro con `@keyframes float`)
- Gradient animado en el fondo (movimiento sutil)

**7. `src/components/SolutionsSection.tsx`** — Cards interactivas
- Envolver en `AnimatedSection` con stagger (cada card aparece con delay incremental)
- Agregar efecto 3D tilt en hover (CSS perspective + transform on mousemove via onMouseMove handler)
- Shimmer en el borde al hacer hover
- Ícono que rota/escala sutilmente en hover

**8. `src/components/WhySoncorp.tsx`** — Entrada escalonada
- Cada card aparece con delay progresivo al entrar al viewport
- Efecto de "glow" en el ícono al hover
- Chips con animación de fade-in secuencial

**9. `src/components/Contact.tsx`** — Micro-interacciones
- Cards de info con efecto de elevación 3D en hover
- Formulario: inputs con animación de focus (borde que se ilumina, label que flota)
- Botón WhatsApp con efecto de ripple al click

**10. `src/components/Navigation.tsx`** — Transiciones mejoradas
- Links con underline animado (slide-in from left)
- Mobile menu con slide-down + fade animado (en lugar de aparecer instantáneo)
- Logo con hover scale sutil

**11. `src/components/Footer.tsx`** — Entrada con fade-up
- Envolver en AnimatedSection

**12. `src/pages/Index.tsx`** — Integrar CursorGlow
- Renderizar `CursorGlow` como primer hijo

### Detalles técnicos
- Sin dependencias nuevas pesadas (todo CSS + React hooks)
- Las animaciones de scroll usan `IntersectionObserver` (nativo, performante)
- El efecto 3D tilt en cards usa `onMouseMove` para calcular rotación basada en posición del cursor dentro de la card
- El cursor glow usa `mousemove` en `window` con `requestAnimationFrame`
- Todas las animaciones respetan `prefers-reduced-motion` (se desactivan)
- ~12 archivos tocados, 3 nuevos

