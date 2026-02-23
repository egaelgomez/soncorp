

## Plan: Optimizacion Soncorp CX - Landing de Customer Experience

Este plan transforma la pagina `/servicios/customer-experience` en una landing de conversion profesional para campanas de Google Ads, con tono formal ("usted"), 6 pilares KPMG, formulario completo, FAQ, tracking y ajustes de coherencia en el sitio.

---

### Alcance de cambios

| Archivo | Accion |
|---------|--------|
| `src/pages/CustomerExperiencePage.tsx` | **REESCRIBIR** - Landing completa nueva |
| `src/components/Navigation.tsx` | **MODIFICAR** - Agregar enlace "Soncorp CX" |
| `src/components/WhatsAppFloat.tsx` | **CREAR** - Boton flotante WhatsApp |
| `src/components/Footer.tsx` | **MODIFICAR** - Tono "usted", disclaimer, enlace CX |
| `src/components/Hero.tsx` | **MODIFICAR** - Quitar stats no verificables (+150, 95%, +40%) y claims sin evidencia |
| `src/components/solutions/solutionsData.ts` | **MODIFICAR** - Actualizar titulo CX a "Customer Experience" y result |
| `src/index.css` | **MODIFICAR** - Agregar estilos WhatsApp float |

---

### 1. CustomerExperiencePage.tsx (REESCRITURA COMPLETA)

**SEO Head:**
- Title: `Consultoria de Customer Experience | Soncorp CX`
- Meta description optimizada para "customer experience", "experiencia del cliente", "consultoria de atencion al cliente"
- Schema Organization + FAQ (JSON-LD)

**Seccion A - Hero:**
- H1: "Experiencia del Cliente que impulsa resultados"
- Subtitulo formal (usted): enfoque en retencion, satisfaccion, recomendacion, eficiencia operativa. Sin cifras inventadas.
- 3 bullets de valor: claridad en diagnostico, acompanamiento experto, enfoque integral (cliente interno/externo)
- CTA primario: "Agendar asesoria inicial"
- CTA secundario: "Hablar por WhatsApp"

**Seccion B - Problemas tipicos (grid 2x3):**
6 dolores para PyME y corporativo:
1. Quejas recurrentes y clientes que no regresan
2. Tiempos de respuesta lentos o sin seguimiento
3. Inconsistencia: cada area o empleado atiende diferente
4. Retrabajo y friccion entre areas (cliente interno)
5. Equipos desalineados y sin estandares de servicio
6. Falta de metricas: no se sabe que mejorar

**Seccion C - Que hacemos (solucion integral):**
Texto introductorio: no es solo "atencion al cliente", es un enfoque integral.
5 cards (grid):
1. Diagnostico de journey y puntos de contacto
2. Medicion (CSAT, NPS, CES o equivalentes)
3. Diseno de procesos y estandares de servicio
4. Cultura y capacitacion
5. Gobernanza y mejora continua

**Seccion D - 6 Pilares de CX Excellence (KPMG):**
Bloque premium con los 6 pilares, cada uno con titulo + 1 linea empresarial:
- Personalizacion: "Adaptar la experiencia a las necesidades de cada cliente."
- Integridad: "Generar confianza a traves de transparencia y coherencia."
- Expectativas: "Gestionar y superar lo que el cliente espera."
- Resolucion: "Convertir problemas en oportunidades de fidelizacion."
- Tiempo y esfuerzo: "Reducir la friccion en cada interaccion."
- Empatia: "Comprender la situacion del cliente y actuar en consecuencia."

Texto elegante: "Utilizamos los 6 pilares de Customer Experience Excellence (KPMG) como marco de referencia para evaluar, disenar y mejorar la experiencia de sus clientes."

**Seccion E - Como trabajamos (3 pasos, timeline):**
1. Asesoria inicial / diagnostico - captura de informacion, entendimiento del negocio
2. Hallazgos y plan de mejora - priorizacion de acciones, ruta clara
3. Implementacion guiada - acompanamiento por etapas, adaptado a tamano y madurez

Nota: "El alcance y profundidad se adaptan al tamano y madurez de cada organizacion."

**Seccion F - Paquetes / Oferta (3 niveles, sin precios):**
- A) Diagnostico CX: punto de partida rapido, evaluacion inicial
- B) Plan CX: ruta de mejora y priorizacion de acciones
- C) Acompanamiento CX: implementacion guiada por etapas (opcional)

Texto: "Honorarios definidos segun alcance y complejidad; se presenta propuesta despues de la asesoria inicial."

**Seccion G - FAQ (8 preguntas, accordion):**
1. Sirve para PyMEs?
2. Cuanto tiempo toma ver mejoras?
3. Trabajan cliente interno y externo?
4. Que metricas usan?
5. Requiere software?
6. Ofrecen capacitacion?
7. Como se define el alcance?
8. Cual es la inversion?

**Seccion H - Stat Card (dato Salesforce, ya existente):**
Mantener el dato del 80% de Salesforce (es verificable).

**Seccion I - CTA Final + Formulario completo:**
- Titulo: "Agende su asesoria inicial"
- Form: Nombre, Empresa, Rol, Email, Tel/WhatsApp, Tamano de empresa (dropdown: 1-10, 11-50, 51-200, 201+), Principal reto (dropdown), Mensaje
- Confirmacion al enviar + orientar a WhatsApp
- Botones: "Agendar asesoria inicial" + "WhatsApp"

**Microdisclaimer visible:**
"Servicio de consultoria. No garantizamos resultados. Las decisiones de implementacion dependen de cada organizacion."

**Tracking events (dataLayer.push):**
- Click CTA "Agendar asesoria inicial"
- Envio de formulario
- Click WhatsApp
- Scroll 75% de landing

---

### 2. WhatsAppFloat.tsx (NUEVO)

Boton flotante en esquina inferior derecha, visible en toda la landing:
- Icono WhatsApp verde
- Numero configurable via constante
- Mensaje precargado formal: "Hola, solicito una asesoria inicial de Soncorp CX. Me interesa mejorar la experiencia del cliente (interno/externo). Podemos agendar una llamada?"
- Evento de tracking al click

---

### 3. Navigation.tsx (MODIFICAR)

- Agregar enlace "Soncorp CX" que apunte a `/servicios/customer-experience`
- Tanto en desktop como mobile menu
- Mantener estilo actual

---

### 4. Hero.tsx (MODIFICAR)

- Eliminar stats no verificables: "+150 PyMEs Asesoradas", "95% Satisfaccion", "+40% Crecimiento Promedio"
- Reemplazar con bullets de valor o eliminar la seccion de stats
- Cambiar "estrategias comprobadas" por lenguaje sin claims no verificables

---

### 5. Footer.tsx (MODIFICAR)

- Agregar enlace "Soncorp CX" en enlaces rapidos
- Cambiar "estrategias comprobadas" por texto sin claims
- Agregar microdisclaimer en footer

---

### 6. solutionsData.ts (MODIFICAR)

- Cambiar title de "Atencion al Cliente" a "Customer Experience"
- Actualizar result y headline con tono formal

---

### Seccion tecnica

**Tracking (Google Ads / GA4):**
Se implementa via `window.dataLayer?.push()` con eventos:
- `cta_click` (label: "agendar_asesoria")
- `form_submit` (label: "cx_landing_form")
- `whatsapp_click` (label: "cx_whatsapp")
- `scroll_75` (via IntersectionObserver en un div sentinel al 75%)

No se instala GTM (requiere script externo), solo se prepara el dataLayer para que funcione cuando se agregue GTM.

**Schema JSON-LD:**
Se agrega via react-helmet-async:
- Organization schema
- FAQPage schema con las 8 preguntas

**WhatsApp numero:**
Se define como constante central en `WhatsAppFloat.tsx` y se reutiliza. Placeholder: `5215512345678`.

**Formulario:**
Validacion con Zod. Campos con dropdowns nativos (`<select>` estilizado). Al enviar: toast de confirmacion + sugerencia de WhatsApp.

