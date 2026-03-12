

## Plan: Configurar envío de email automático al enviar formulario de contacto

Cuando un cliente llene cualquier formulario del sitio y presione enviar, se mandará un email automático a **hola@soncorp.com.mx** con todos los datos capturados (nombre, empresa, rol, email, teléfono, tamaño, reto principal, mensaje).

### Cambios técnicos

#### 1. Habilitar Lovable Cloud
Necesario para poder crear edge functions y enviar emails.

#### 2. Crear edge function `send-contact-email`
- Recibe los datos del formulario vía POST
- Envía un email formateado a hola@soncorp.com.mx con todos los campos
- Incluye el nombre del servicio (si aplica) en el asunto
- Usa el sistema de email integrado de Lovable (scaffold transactional email)

#### 3. Actualizar `src/components/shared/ContactForm.tsx`
- En `handleSubmit`, después de la validación Zod, hacer `supabase.functions.invoke('send-contact-email', { body: formData })`
- Mostrar toast de éxito solo si el email se envió correctamente
- Mostrar toast de error si falla el envío
- Mantener el estado de éxito visual actual (con botón WhatsApp)

### Resultado
- El cliente llena el formulario → presiona enviar → llega email a hola@soncorp.com.mx
- Funciona en todos los formularios del sitio (Home, CX, TI, Marketing, Negocios) porque todos usan el componente `ContactForm`

