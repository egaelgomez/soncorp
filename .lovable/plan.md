

## Plan: Actualizar datos de contacto y unificar formularios en todo el sitio

### Datos oficiales a configurar

| Dato | Valor |
|------|-------|
| Email | hola@soncorp.com.mx |
| Teléfono / WhatsApp | +52 (662) 471-3286 |
| WhatsApp link | `https://wa.me/526624713286` |
| Dirección | Blvd. Morelos 307, Col. Zona Militar, 83144, Hermosillo, Sonora, México |

### Parte 1: Actualizar datos de contacto (7 archivos)

| Archivo | Cambios |
|---------|---------|
| `src/components/Contact.tsx` | Email → hola@soncorp.com.mx, teléfono → +52 (662) 471-3286, dirección → Hermosillo, WHATSAPP_NUMBER → 526624713286 |
| `src/components/Footer.tsx` | Email, teléfono y dirección actualizados |
| `src/components/WhatsAppFloat.tsx` | WHATSAPP_NUMBER → 526624713286 |
| `src/pages/CustomerExperiencePage.tsx` | WHATSAPP_NUMBER → 526624713286 |
| `src/pages/MarketingAutomatizacionPage.tsx` | WhatsApp link → wa.me/526624713286 |
| `src/pages/ConsultoriaTIPage.tsx` | (si tiene WhatsApp links) |
| `src/components/servicios/ServiceHero.tsx` | WhatsApp link → wa.me/526624713286 |

### Parte 2: Unificar formularios al estilo CX (4 archivos)

El formulario de CX tiene: nombre, empresa, rol (opcional), email, teléfono, tamaño de empresa, reto principal (select contextual), mensaje (toggle opcional), botón WhatsApp junto al submit, Zod validation, estado de éxito con botón WhatsApp.

Se replicará este patrón en cada página, adaptando solo el campo "reto" al contexto del servicio:

| Archivo | Formulario actual | Cambio |
|---------|------------------|--------|
| `src/components/Contact.tsx` | Nombre, email, empresa, mensaje | Reemplazar con estilo CX: agregar teléfono, tamaño, reto (opciones generales: CX, TI, Marketing, Negocios, Otro), rol opcional, mensaje toggle, Zod, estado éxito, botón WhatsApp |
| `src/components/servicios/ServiceCTA.tsx` | Nombre, empresa, email, teléfono | Reemplazar con estilo CX: agregar tamaño, reto (contextual al servicio via prop), rol opcional, mensaje toggle, Zod, estado éxito, botón WhatsApp |
| `src/pages/ConsultoriaTIPage.tsx` | Nombre, empresa, email, teléfono, necesidad, tecnologías, alcance | Reemplazar con estilo CX: campos estándar + reto con opciones TI (consultoría, sistema, web/app, automatización, infraestructura, soporte), botón WhatsApp |
| `src/pages/MarketingAutomatizacionPage.tsx` | Nombre, empresa, contacto, canal, objetivo | Reemplazar con estilo CX: campos estándar + reto con opciones marketing (leads, ventas, retención, automatización, presencia digital), botón WhatsApp |
| `src/pages/ConsultoriaDeNegociosPage.tsx` | Nombre, empresa, email, teléfono, comentarios (sin JS logic) | Reemplazar con estilo CX completo: campos estándar + reto con opciones negocios (estrategia, ventas, procesos, estructura, otro), Zod, estado éxito, botón WhatsApp |

### Resumen de archivos a editar

1. `src/components/Contact.tsx` — datos + formulario CX
2. `src/components/Footer.tsx` — datos de contacto
3. `src/components/WhatsAppFloat.tsx` — número WhatsApp
4. `src/pages/CustomerExperiencePage.tsx` — número WhatsApp
5. `src/pages/ConsultoriaTIPage.tsx` — formulario CX + WhatsApp
6. `src/pages/MarketingAutomatizacionPage.tsx` — formulario CX + WhatsApp
7. `src/pages/ConsultoriaDeNegociosPage.tsx` — formulario CX + WhatsApp
8. `src/components/servicios/ServiceHero.tsx` — enlace WhatsApp
9. `src/components/servicios/ServiceCTA.tsx` — formulario CX + WhatsApp

