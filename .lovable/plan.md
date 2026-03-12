

## Plan: Optimizacion final de conversion y SEO en /servicios/customer-experience

Archivo unico a modificar: `src/pages/CustomerExperiencePage.tsx`

---

### Cambios (4 ediciones puntuales)

**1. CTA de Entrenamiento - texto + scroll con preseleccion (lineas 433-444)**

Cambiar el texto del boton de "Solicitar informacion de entrenamiento" a **"Agendar asesoria inicial de entrenamiento"**.

Modificar el onClick para que, ademas de hacer scroll al formulario y disparar el tracking `cx_training_cta_click`, preseleccione automaticamente el dropdown "Que desea mejorar?" en el valor `"entrenamiento"` (Entrenamiento y estandarizacion).

Implementacion: llamar `updateField("reto", "entrenamiento")` antes del scrollIntoView.

**2. SEO en H2 - variantes de "atencion al cliente" (ya cubiertas)**

Verificacion: los H2 actuales ya contienen las variantes necesarias:
- Linea 262: "Problemas tipicos en la experiencia y atencion al cliente" (incluye "atencion al cliente")
- Linea 287: "Que hacemos: mas alla de la atencion al cliente" (incluye "atencion al cliente")
- Linea 482: "Preguntas frecuentes sobre Customer Experience"

Las FAQ ya incluyen variantes de "atencion al cliente" en preguntas 2, 6, 9 y 10. **No se requieren cambios adicionales en H2 ni FAQ.**

**3. Formulario - verificacion de campos (maximo 6 visibles)**

Campos actuales visibles:
1. Nombre completo
2. Empresa
3. Rol / Cargo
4. Email
5. Telefono / WhatsApp
6. Tamano de empresa
7. Que desea mejorar?
8. Mensaje (opcional)

Son 8 campos, 2 mas del limite solicitado. Se hara:
- **Mover "Rol / Cargo" a opcional** (quitar asterisco, remover validacion required en Zod: cambiar a `.optional().or(z.literal(""))`)
- **Mover "Mensaje" a colapsable** con un enlace "Agregar mensaje (opcional)" que muestre/oculte el textarea. De esta forma solo 6 campos son visibles por defecto: Nombre, Empresa, Email, Telefono, Tamano, Que desea mejorar.

Cambios en Zod schema (linea 50): `rol` pasa de `z.string().trim().min(1)` a `z.string().trim().max(100).optional().or(z.literal(""))`.

Agregar un estado `showMessage` para controlar la visibilidad del campo Mensaje.

---

### Resumen de cambios

| Seccion | Cambio |
|---------|--------|
| CTA Entrenamiento | Texto "Agendar asesoria inicial de entrenamiento" + preseleccion dropdown |
| SEO H2/FAQ | Sin cambios (ya cubiertos) |
| Formulario | Rol pasa a opcional, Mensaje colapsable -> 6 campos visibles por defecto |
| Zod schema | `rol` deja de ser required |

---

### Detalle tecnico

**Preseleccion del dropdown:**
```
onClick={() => {
  trackEvent("cta_click", "cx_training_cta_click");
  updateField("reto", "entrenamiento");
  document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
}}
```

**Estado para Mensaje colapsable:**
Se agrega `const [showMessage, setShowMessage] = useState(false);` y se envuelve el campo Mensaje en un condicional con un toggle link.

