# UAT de producción: Edge Function `send-contact-email`

Verificación de runtime únicamente. Sin cambios en código, migraciones, esquema, frontend ni archivos del repositorio.

## Qué se hará

1. **Un solo POST** a la función desplegada `send-contact-email` (vía herramienta de prueba de Edge Functions) con este lead QA exacto:
   - nombre: `P0B QA Test`
   - empresa: `Soncorp QA`
   - rol: `QA`
   - email: `qa+p0b@soncorp.com.mx`
   - telefono: `6620000000`
   - tamano: `1-10`
   - reto: `Prueba UAT P0B`
   - mensaje: `Automated production UAT — safe to delete later`
   - serviceName: `P0B QA`
   - attribution: `{ landingPath: '/', formPath: '/servicios/customer-experience', referrer: null, utmSource: 'p0b_test', utmMedium: 'qa', utmCampaign: 'p0b_launch', utmTerm: null, utmContent: null, gclid: null, gbraid: null, wbraid: null }`

2. **Reportar** el HTTP status y el JSON de respuesta (`success`, `notificationSent`, `leadId`).

3. **Verificación de solo lectura (opcional, no destructiva):** consultar `public.leads` para confirmar que el registro QA quedó insertado con los campos de atribución correctos (`utm_source='p0b_test'`, `status='new'`).

## Reglas

- Exactamente **una** petición POST. Sin reintentos si la respuesta no es 2xx.
- Si algo falla, se reporta el fallo tal cual — **no se edita código** para corregirlo.
- No se toca `verify_jwt`, migraciones, ni ningún otro archivo.

## Nota

El POST insertará una fila real en `public.leads` (marcada claramente como QA, segura de borrar después) y disparará el envío de email vía Resend a `hola@soncorp.com.mx` si `RESEND_API_KEY` está configurada.
