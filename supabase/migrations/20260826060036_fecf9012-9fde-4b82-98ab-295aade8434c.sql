-- P0B: Lead Intelligence & Attribution
-- Creates public.leads for CRM-style lead persistence with acquisition attribution.
-- Browser access is denied; only service_role (Edge Functions) may read/write.

CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  -- CRM fields (server-controlled only)
  status TEXT NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'contacted', 'qualified', 'proposal', 'won', 'lost', 'spam')),
  potential_value NUMERIC(12, 2),
  currency TEXT NOT NULL DEFAULT 'MXN',
  notes TEXT,

  -- Contact / form fields
  nombre TEXT NOT NULL,
  empresa TEXT NOT NULL,
  rol TEXT,
  email TEXT NOT NULL,
  telefono TEXT NOT NULL,
  tamano TEXT NOT NULL,
  reto TEXT NOT NULL,
  mensaje TEXT,
  service_name TEXT,

  -- Acquisition / attribution
  traffic_source TEXT,
  landing_path TEXT,
  form_path TEXT,
  referrer TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  gclid TEXT,
  gbraid TEXT,
  wbraid TEXT
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access to leads"
  ON public.leads FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

REVOKE ALL ON public.leads FROM anon, authenticated;
GRANT ALL ON public.leads TO service_role;

CREATE OR REPLACE FUNCTION public.set_leads_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER leads_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.set_leads_updated_at();

CREATE INDEX idx_leads_created_at ON public.leads (created_at DESC);
CREATE INDEX idx_leads_status ON public.leads (status);
CREATE INDEX idx_leads_service_name ON public.leads (service_name);
CREATE INDEX idx_leads_email ON public.leads (email);
CREATE INDEX idx_leads_gclid ON public.leads (gclid) WHERE gclid IS NOT NULL;