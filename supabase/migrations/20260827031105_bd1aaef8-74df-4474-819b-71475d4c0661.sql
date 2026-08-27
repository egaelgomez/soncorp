-- P0C: Contact form security baseline
-- Adds a service-role-only rolling rate limit store for the public contact Edge Function.
-- No raw IP addresses are persisted; the Edge Function stores only a SHA-256 key hash.

CREATE TABLE public.contact_submission_rate_limits (
  key_hash TEXT PRIMARY KEY
    CHECK (length(key_hash) = 64),
  window_started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  request_count INTEGER NOT NULL DEFAULT 1
    CHECK (request_count > 0),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submission_rate_limits ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON public.contact_submission_rate_limits FROM PUBLIC, anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_submission_rate_limits TO service_role;

CREATE INDEX idx_contact_submission_rate_limits_updated_at
  ON public.contact_submission_rate_limits (updated_at);

CREATE OR REPLACE FUNCTION public.consume_contact_submission_rate_limit(
  p_key_hash TEXT,
  p_window_seconds INTEGER DEFAULT 600,
  p_max_requests INTEGER DEFAULT 5
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_now TIMESTAMPTZ := clock_timestamp();
  v_count INTEGER;
BEGIN
  IF p_key_hash IS NULL
     OR length(p_key_hash) <> 64
     OR p_window_seconds < 60
     OR p_window_seconds > 86400
     OR p_max_requests < 1
     OR p_max_requests > 100 THEN
    RETURN FALSE;
  END IF;

  INSERT INTO public.contact_submission_rate_limits (
    key_hash,
    window_started_at,
    request_count,
    updated_at
  )
  VALUES (
    p_key_hash,
    v_now,
    1,
    v_now
  )
  ON CONFLICT (key_hash) DO UPDATE
  SET
    window_started_at = CASE
      WHEN contact_submission_rate_limits.window_started_at <=
           v_now - make_interval(secs => p_window_seconds)
        THEN v_now
      ELSE contact_submission_rate_limits.window_started_at
    END,
    request_count = CASE
      WHEN contact_submission_rate_limits.window_started_at <=
           v_now - make_interval(secs => p_window_seconds)
        THEN 1
      ELSE contact_submission_rate_limits.request_count + 1
    END,
    updated_at = v_now
  RETURNING request_count INTO v_count;

  RETURN v_count <= p_max_requests;
END;
$$;

REVOKE ALL ON FUNCTION public.consume_contact_submission_rate_limit(TEXT, INTEGER, INTEGER)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.consume_contact_submission_rate_limit(TEXT, INTEGER, INTEGER)
  TO service_role;

-- Close the mutable-search-path warning carried forward from the P0B trigger helper.
ALTER FUNCTION public.set_leads_updated_at()
  SET search_path = public, pg_temp;