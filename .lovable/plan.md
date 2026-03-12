

## Plan: Eliminar enfoque PYME y corregir navegacion en CX

### Parte 1: Reemplazar todas las referencias a PYME/PyME

Se cambiara "PYMEs" por terminologia general como "empresas", "organizaciones" o "su empresa" segun contexto. Archivos afectados:

| Archivo | Cambio |
|---------|--------|
| **index.html** (lineas 9-12, 18-19, 24-27) | Title: "Soncorp - Consultoria Empresarial" / meta descriptions sin "PYMEs mexicanas" / OG y Twitter tags actualizados |
| **src/components/Hero.tsx** (lineas 22, 27) | Badge: "Consultoria Empresarial Especializada" / H1: "Consultoria integral para empresas que quieren..." |
| **src/components/Navigation.tsx** (linea 42) | Alt logo: "Soncorp - Consultoria Empresarial" |
| **src/pages/Servicios.tsx** (linea 21) | Title: "Servicios \| Soncorp - Consultoria Empresarial" |
| **src/components/solutions/solutionsData.ts** | 4x `audiences`: cambiar "PyME" a "Negocio en crecimiento" / 3x `idealFor`: "PyMEs iniciando en CX" → "Empresas iniciando en CX", "PyMEs que quieren orden" → "Empresas que buscan orden", "PyMEs con soporte basico" → "Empresas con soporte basico" |
| **src/pages/CustomerExperiencePage.tsx** | FAQ pregunta 1: "...sirve para PyMEs?" → "...sirve para cualquier tipo de empresa?" / Linea 266: "Situaciones comunes en PyMEs y empresas" → "Situaciones comunes en empresas" |
| **src/pages/ConsultoriaDeNegociosPage.tsx** (linea 99) | "Negocios en crecimiento (PyME)" → "Negocios en crecimiento" |

### Parte 2: Corregir navegacion en pagina CX

**Problema:** El componente `Navigation` usa `scrollToSection()` con `document.getElementById()`, pero las secciones "inicio", "servicios", "por-que-soncorp" y "contacto" solo existen en la pagina Index. En `/servicios/customer-experience` los botones no hacen nada.

**Solucion:** Modificar `Navigation.tsx` para detectar si esta en la pagina principal (`/`). Si no esta en `/`, navegar a `/#seccion` usando `useNavigate` de react-router. Si ya esta en `/`, hacer scroll directo.

```text
scrollToSection(id) {
  if (location.pathname === "/") {
    document.getElementById(id)?.scrollIntoView(...)
  } else {
    navigate("/#" + id)
  }
}
```

Tambien aplicar la misma logica en **Footer.tsx** que tiene el mismo problema con sus enlaces rapidos.

### Resumen de archivos a editar

1. `index.html` — SEO meta tags
2. `src/components/Hero.tsx` — badge y H1
3. `src/components/Navigation.tsx` — alt logo + navegacion cross-page
4. `src/components/Footer.tsx` — alt texto si aplica + enlaces cross-page
5. `src/pages/Servicios.tsx` — title meta
6. `src/components/solutions/solutionsData.ts` — audiences e idealFor
7. `src/pages/CustomerExperiencePage.tsx` — FAQ y subtitulo problemas
8. `src/pages/ConsultoriaDeNegociosPage.tsx` — segmento PyME

