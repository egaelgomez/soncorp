

## Plan: Botón flotante de WhatsApp global con animación de pulso

### Situación actual
Ya existe `src/components/WhatsAppFloat.tsx` pero solo se usa en `CustomerExperiencePage`. El componente usa `MessageSquare` de Lucide en lugar del ícono oficial de WhatsApp, y no tiene animación de pulso.

### Cambios

**1. Actualizar `src/components/WhatsAppFloat.tsx`**
- Cambiar el mensaje predefinido a: "Hola, me interesa conocer más sobre los servicios de Soncorp"
- Reemplazar el ícono `MessageSquare` por un SVG del ícono oficial de WhatsApp
- Agregar animación de pulso CSS al botón (`animate-pulse` o keyframe personalizado)
- Ajustar posición en móvil (`bottom-20 right-4`) para no tapar contenido
- Mantener `z-50` para visibilidad global

**2. Mover el componente a `src/App.tsx`**
- Importar y renderizar `WhatsAppFloat` dentro del `BrowserRouter` para que aparezca en todas las páginas
- Eliminar la importación duplicada en `CustomerExperiencePage.tsx`

**3. Agregar keyframe de pulso en `tailwind.config.ts`** (si no existe uno adecuado)
- Pulso suave tipo "ring" verde que se expande desde el botón

### Detalles técnicos
- El número de WhatsApp ya está centralizado en `CONTACT_INFO.whatsappNumber` en `src/lib/constants.ts`
- El botón usará `bottom-6 right-6` en desktop y `bottom-20 right-4` en móvil (con clases responsive) para no tapar la navegación inferior
- La animación será un `box-shadow` pulsante verde, no un cambio de escala, para no ser intrusivo

