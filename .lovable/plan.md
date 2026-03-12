

## Plan: Refactorizar servicio TI a "Consultoría y Soluciones TI"

### Archivos a modificar

#### 1. `src/App.tsx`
- Cambiar ruta de `/servicios/mesa-ingenieria-ti-por-tickets` a `/servicios/consultoria-soluciones-ti`
- Agregar redirección `Navigate` desde la ruta antigua hacia la nueva

#### 2. `src/components/solutions/solutionsData.ts`
Reescribir el objeto `id: "it"`:
- **slug**: `"consultoria-soluciones-ti"`
- **title**: `"Consultoría y Soluciones TI"`
- **result**: `"Resuelva necesidades tecnológicas con consultoría, implementación y soporte especializado."`
- **chips**: `["Consultoría", "Implementación", "Soporte especializado"]`
- **headline**: actualizado al nuevo posicionamiento integral
- **heroBullets**: consultoría IT, sistemas, web, apps, automatización, infraestructura, soporte
- **techChips**: agregar "Active Directory", "Sitios web", "Apps empresariales", "Integraciones"
- **problems**: 8 nuevos dolores amplios (falta de claridad tecnológica, procesos manuales, necesidad de web/app, dependencia interna, falta de especialistas, backlog, procesos desconectados, modernización)
- **benefits**: alineados a la nueva oferta
- **scope**: 4 cards (Evaluación inicial → Definición de alcance → Implementación o soporte → Entrega y continuidad)
- **packages**: renombrar a 3 modalidades (Diagnóstico y consultoría / Implementación y desarrollo / Soporte especializado por tickets)
- **faq**: reescribir con preguntas relevantes al nuevo posicionamiento

#### 3. `src/pages/ConsultoriaTIPage.tsx` — Reescritura completa
Mantener estructura visual (hero, sections, form) pero reescribir todo el contenido:

- **SEO**: title "Consultoría y Soluciones TI | Soncorp", meta description amplia
- **Breadcrumb**: "Consultoría y Soluciones TI"
- **Hero**: nuevo título, subtítulo integral, bullets de capacidades (sistemas, web, apps, automatización, infra, cloud, BD, soporte)
- **Problemas**: 8 dolores amplios del brief
- **Qué hacemos**: nueva sección con 6 cards de oferta (Consultoría IT, Sistemas empresariales, Desarrollo web y apps, Automatización, Infraestructura/cloud/BD, Soporte por tickets)
- **Modalidades de servicio**: nueva sección con 3 modalidades (Diagnóstico y consultoría / Implementación y desarrollo / Soporte por tickets-bolsa de horas)
- **Tecnologías**: ampliar con Active Directory, sitios web, apps empresariales, integraciones/automatización
- **Seguridad**: mantener como está
- **Cómo trabajamos**: 4 pasos (Evaluación inicial → Definición de alcance/propuesta → Implementación o soporte → Entrega, documentación y continuidad)
- **Stat card**: mantener
- **CTA final**: "Convierta necesidades tecnológicas en soluciones ejecutables", formulario actualizado con campo "necesidad" (textarea con placeholder amplio) y "tecnologias" actualizado, "volumen" renombrado a "alcance estimado (opcional)"

#### 4. `index.html`
- Actualizar meta description si menciona "tickets" (verificar; probablemente ya es genérico)

### Sin cambios necesarios
- `Navigation.tsx`, `Footer.tsx`, `SolutionsSection.tsx`, `Servicios.tsx`: renderizan dinámicamente desde `solutionsData`, se actualizan automáticamente
- Otras páginas de servicio: no mencionan TI por tickets

### Resumen de impacto
- 3 archivos editados: `App.tsx`, `solutionsData.ts`, `ConsultoriaTIPage.tsx`
- Posiblemente `index.html` si contiene referencia a tickets
- Redirección SEO preservada desde la ruta antigua

