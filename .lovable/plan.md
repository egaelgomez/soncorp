# Contact form failure — diagnosis (2026-09-07)

## Verdict

The contact form code is not broken. The hosted backend that receives the form is currently **paused**, so the browser's request never reaches the contact function at all. The frontend catches the network failure and shows the generic "Error al enviar" toast.

## Evidence collected (read-only)

| Check | Result |
| --- | --- |
| Backend lifecycle status | **Paused** (`INACTIVE`) |
| Database query on `public.leads` | Failed: connection pooler unavailable / project paused |
| Edge function logs for `send-contact-email` | No logs found |
| Edge HTTP request logs, last 24 h | Zero rows |
| Direct `OPTIONS` to the function endpoint | curl exit 6 (host unresolvable), HTTP `000` |
| Direct call to the REST endpoint | curl exit 6, HTTP `000` |

Zero edge-request rows plus an unresolvable host means the submission was never received server-side. That is consistent with the earlier observation that Resend shows no recent activity: the flow stopped long before origin checks, Turnstile, the rate-limit RPC, the `leads` insert, or the email step.

This also means the submitted lead was **not** saved — it is not recoverable from the database.

## Failure point in the flow

```text
Browser form  ->  supabase.functions.invoke('send-contact-email')
                     |
                     X  network request fails: backend paused, host not reachable
                        (origin check / Turnstile / rate limit / leads insert / Resend never run)
```

## Remediation steps (safest order, nothing done yet)

1. Resume the paused backend, then poll status until it reports healthy.
2. Re-verify reachability read-only: `OPTIONS` to the function endpoint should return 204, and a `select count(*) from public.leads` should succeed.
3. Confirm the deployed `send-contact-email` function is still present and that `TURNSTILE_SECRET_KEY` / `RESEND_API_KEY` are still bound after resume.
4. Run one controlled QA submission through the live form and confirm: HTTP 200, a new row in `public.leads`, and `notificationSent: true`.
5. If step 4 returns 200 but `notificationSent: false`, the residual issue is Resend sender-domain verification for `noreply@soncorp.com.mx` — investigate separately.

## Hardening to consider afterwards (optional, separate approval)

- The current toast is identical for every failure mode. Distinguishing "no pudimos conectar" (network/backend down) from "hubo un problema al procesar" would make future incidents diagnosable from the user's report alone.
- Pausing recurs when the backend is idle for long periods. Worth deciding whether an uptime check on the public form endpoint is wanted, so an outage is detected before a real prospect hits it.

## No changes made

No code, database, migration, secret, configuration, or deployment was modified during this investigation.
