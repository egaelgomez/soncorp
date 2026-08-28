# P0C Analytics Baseline

This phase adds a typed frontend analytics layer for Soncorp. Google Tag Manager (GTM) is the single tagging entry point; GA4 and Google Ads are configured downstream in GTM, not in application code.

## Architecture

```text
Browser (Soncorp SPA) -> GTM -> GA4 -> Google Ads
```

The application pushes structured events to `window.dataLayer`. GTM listens for those events and forwards them to GA4. Google Ads later imports qualified GA4 conversions after account linking.

## Required configuration

Set at frontend build time:

```text
VITE_GTM_ID=GTM-XXXXXXX
```

- Use the real GTM container ID for production builds.
- If `VITE_GTM_ID` is missing or does not match `GTM-[A-Z0-9]+`, analytics safely no-ops and the site works normally.
- Do not hard-code container IDs in source code.
- Do not add GA4 `gtag.js` directly to the application.

See also `.env.example` for local development documentation.

## Event contract

### `generate_lead`

Primary business conversion. Fires **only after** the Supabase `send-contact-email` Edge Function succeeds. It does not fire on submit click, validation failure, Turnstile failure, or Edge Function errors.

| Parameter     | Required | Description                                      |
|---------------|----------|--------------------------------------------------|
| `event`       | yes      | `"generate_lead"`                                |
| `lead_method` | yes      | `"contact_form"`                                 |
| `service_name`| no       | Service context when ContactForm receives it     |
| `form_path`   | yes      | `window.location.pathname` at conversion time    |

### `whatsapp_click`

Engagement / microconversion. Not equivalent to a confirmed lead.

| Parameter      | Required | Description                                   |
|----------------|----------|-----------------------------------------------|
| `event`        | yes      | `"whatsapp_click"`                            |
| `placement`    | yes      | UI placement identifier (see below)           |
| `service_name` | no       | Service context when available                |
| `page_path`    | yes      | `window.location.pathname` at click time        |

Known `placement` values:

- `floating_global` — global floating WhatsApp button
- `homepage_contact_section` — homepage contact section CTA
- `contact_form` — WhatsApp button on the contact form
- `contact_form_success` — WhatsApp button on post-submit success state

## Prohibited PII

Never send the following to Google analytics tags:

- Name
- Email
- Phone number
- Company
- Role
- Message or other free-text field values
- Challenge / dropdown selection values tied to user input
- Lead UUID or any backend lead identifier
- Honeypot or Turnstile tokens

Allowed parameters are limited to the event contract above.

## Application integration points

1. `src/lib/google-tag-manager.ts` — loads GTM when `VITE_GTM_ID` is valid.
2. `src/lib/analytics.ts` — typed `pushAnalyticsEvent` helper; never throws.
3. `src/main.tsx` — initializes GTM after lead attribution capture, before React render.
4. `src/components/shared/ContactForm.tsx` — fires `generate_lead` on successful Edge Function response; fires `whatsapp_click` from WhatsApp CTAs.
5. `src/components/WhatsAppFloat.tsx` — fires `whatsapp_click` for the global floating button.
6. `src/components/Contact.tsx` — fires `whatsapp_click` for the homepage contact section CTA.

Lead attribution (`captureLeadAttribution`, session storage, Supabase payload) is unchanged and remains separate from analytics events.

## Future GTM configuration

Configure the following in the GTM container (not in application code):

### Google Tag / GA4

- Create a Google Tag pointing at the production GA4 measurement ID.
- Fire an initial page view on container load through the Google Tag.

### SPA page views

- Add a **History Change** trigger for client-side route changes in the React SPA.
- Fire page views from that trigger.
- In GA4, **disable** automatic browser-history page change tracking when GTM History Change pageviews are enabled, to prevent duplicate page views.

### Custom events

- **Custom Event** trigger: event name equals `generate_lead`.
- **Custom Event** trigger: event name equals `whatsapp_click`.

### GA4 key events and Google Ads

- Mark `generate_lead` as a GA4 key event after validation in GA4 reporting.
- After GA4 ↔ Google Ads linking and auto-tagging are enabled, import `generate_lead` into Google Ads as a primary conversion.
- Keep `whatsapp_click` as a secondary/micro conversion until business quality is validated; do not treat it as equivalent to `generate_lead`.

## Deployment order

1. Create/configure the GTM container, GA4 property, and (later) Google Ads linking in the Google UI — outside this repository.
2. Set `VITE_GTM_ID` for production frontend builds.
3. Deploy the frontend with this baseline.
4. Configure GTM tags, triggers, and variables per the sections above.
5. Validate events in GTM Preview and GA4 DebugView before treating conversions as authoritative.
