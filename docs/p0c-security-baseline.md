# P0C Contact Form Security Baseline

This phase hardens the public `send-contact-email` flow without changing lead attribution or notification semantics.

## Controls

- Off-screen honeypot field (`website`) with server-side silent drop.
- Cloudflare Turnstile Managed widget with mandatory server-side Siteverify validation.
- Turnstile action binding: `contact_form`.
- Turnstile hostname allow list.
- Database-backed rolling IP rate limit: 5 attempts per 10 minutes.
- Only a SHA-256 rate-limit key is stored; raw IP addresses are not persisted.
- Browser CORS allow list instead of `Access-Control-Allow-Origin: *`.
- 32 KB request-body ceiling.
- Existing server-side field validation and Resend-after-persistence behavior remain in place.

## Required configuration before production deployment

### Frontend build variable

Set:

```text
VITE_TURNSTILE_SITE_KEY=<Cloudflare Turnstile site key>
```

### Edge Function secret

Set:

```text
TURNSTILE_SECRET_KEY=<Cloudflare Turnstile secret key>
```

### Optional Edge Function configuration

Defaults are production-safe for the current Soncorp hosts. Override only when another trusted preview or test host is intentionally used.

```text
CONTACT_ALLOWED_ORIGINS=https://soncorp.com.mx,https://www.soncorp.com.mx,https://soncorp.lovable.app
TURNSTILE_ALLOWED_HOSTNAMES=soncorp.com.mx,www.soncorp.com.mx,soncorp.lovable.app
```

For local Turnstile testing, use Cloudflare's official test sitekey/secret pair and explicitly add the local hostname to `TURNSTILE_ALLOWED_HOSTNAMES`. Never use test credentials in production.

## Deployment order

1. Create the Turnstile widget and restrict it to the intended Soncorp hostnames.
2. Configure `VITE_TURNSTILE_SITE_KEY` for the production frontend build.
3. Configure `TURNSTILE_SECRET_KEY` in the production Edge Function environment.
4. Apply the P0C rate-limit migration.
5. Deploy `send-contact-email`.
6. Publish the frontend.
7. Run controlled UAT for valid submission, honeypot silent drop, invalid/missing Turnstile token, origin rejection, and rate limiting.

Do not deploy the hardened Edge Function before the rate-limit migration and Turnstile secret exist. Do not publish the hardened frontend before the public Turnstile site key is configured.
