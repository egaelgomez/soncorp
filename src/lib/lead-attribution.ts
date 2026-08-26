export const LEAD_ATTRIBUTION_STORAGE_KEY = "soncorp_lead_attribution_v1";

const MAX_PATH_LENGTH = 500;
const MAX_REFERRER_LENGTH = 2000;
const MAX_UTM_LENGTH = 200;
const MAX_CLICK_ID_LENGTH = 200;

export interface LeadAttribution {
  landingPath: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
}

export interface LeadAttributionPayload extends LeadAttribution {
  formPath: string;
}

function trimMax(value: string | null | undefined, max: number): string | undefined {
  if (value == null) return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return trimmed.length > max ? trimmed.slice(0, max) : trimmed;
}

/** Store only origin + pathname from HTTP(S) referrers; omit query, hash, and credentials. */
function sanitizeReferrer(value: string | null | undefined): string | undefined {
  const trimmed = trimMax(value, MAX_REFERRER_LENGTH);
  if (!trimmed) return undefined;

  try {
    const url = new URL(trimmed);
    if (url.protocol !== "http:" && url.protocol !== "https:") return undefined;
    if (url.username || url.password) return undefined;
    return trimMax(`${url.origin}${url.pathname}`, MAX_REFERRER_LENGTH);
  } catch {
    return undefined;
  }
}

function parseAttributionFromSearch(search: string): Partial<Omit<LeadAttribution, "landingPath">> {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  return {
    utmSource: trimMax(params.get("utm_source"), MAX_UTM_LENGTH),
    utmMedium: trimMax(params.get("utm_medium"), MAX_UTM_LENGTH),
    utmCampaign: trimMax(params.get("utm_campaign"), MAX_UTM_LENGTH),
    utmTerm: trimMax(params.get("utm_term"), MAX_UTM_LENGTH),
    utmContent: trimMax(params.get("utm_content"), MAX_UTM_LENGTH),
    gclid: trimMax(params.get("gclid"), MAX_CLICK_ID_LENGTH),
    gbraid: trimMax(params.get("gbraid"), MAX_CLICK_ID_LENGTH),
    wbraid: trimMax(params.get("wbraid"), MAX_CLICK_ID_LENGTH),
  };
}

function getSessionStorage(): Storage | null {
  try {
    if (typeof window === "undefined") return null;
    return window.sessionStorage;
  } catch {
    return null;
  }
}

function buildAttributionRecord(
  landingPath: string,
  referrer: string | undefined,
  queryAttribution: Partial<Omit<LeadAttribution, "landingPath">>,
): LeadAttribution {
  const record: LeadAttribution = { landingPath };
  if (referrer) record.referrer = referrer;
  if (queryAttribution.utmSource) record.utmSource = queryAttribution.utmSource;
  if (queryAttribution.utmMedium) record.utmMedium = queryAttribution.utmMedium;
  if (queryAttribution.utmCampaign) record.utmCampaign = queryAttribution.utmCampaign;
  if (queryAttribution.utmTerm) record.utmTerm = queryAttribution.utmTerm;
  if (queryAttribution.utmContent) record.utmContent = queryAttribution.utmContent;
  if (queryAttribution.gclid) record.gclid = queryAttribution.gclid;
  if (queryAttribution.gbraid) record.gbraid = queryAttribution.gbraid;
  if (queryAttribution.wbraid) record.wbraid = queryAttribution.wbraid;
  return record;
}

/** Capture first-touch attribution for the current browser session. */
export function captureLeadAttribution(): void {
  const storage = getSessionStorage();
  if (!storage) return;

  try {
    if (storage.getItem(LEAD_ATTRIBUTION_STORAGE_KEY)) return;

    const landingPath = trimMax(window.location.pathname || "/", MAX_PATH_LENGTH) ?? "/";
    const referrer = sanitizeReferrer(document.referrer);
    const queryAttribution = parseAttributionFromSearch(window.location.search);
    const record = buildAttributionRecord(landingPath, referrer, queryAttribution);

    storage.setItem(LEAD_ATTRIBUTION_STORAGE_KEY, JSON.stringify(record));
  } catch {
    // sessionStorage unavailable or quota exceeded — form must still work
  }
}

export function getStoredLeadAttribution(): LeadAttribution | null {
  const storage = getSessionStorage();
  if (!storage) return null;

  try {
    const raw = storage.getItem(LEAD_ATTRIBUTION_STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;

    const data = parsed as Record<string, unknown>;
    const landingPath = trimMax(
      typeof data.landingPath === "string" ? data.landingPath : undefined,
      MAX_PATH_LENGTH,
    );
    if (!landingPath) return null;

    return buildAttributionRecord(landingPath, sanitizeReferrer(
      typeof data.referrer === "string" ? data.referrer : undefined,
    ), {
      utmSource: trimMax(typeof data.utmSource === "string" ? data.utmSource : undefined, MAX_UTM_LENGTH),
      utmMedium: trimMax(typeof data.utmMedium === "string" ? data.utmMedium : undefined, MAX_UTM_LENGTH),
      utmCampaign: trimMax(typeof data.utmCampaign === "string" ? data.utmCampaign : undefined, MAX_UTM_LENGTH),
      utmTerm: trimMax(typeof data.utmTerm === "string" ? data.utmTerm : undefined, MAX_UTM_LENGTH),
      utmContent: trimMax(typeof data.utmContent === "string" ? data.utmContent : undefined, MAX_UTM_LENGTH),
      gclid: trimMax(typeof data.gclid === "string" ? data.gclid : undefined, MAX_CLICK_ID_LENGTH),
      gbraid: trimMax(typeof data.gbraid === "string" ? data.gbraid : undefined, MAX_CLICK_ID_LENGTH),
      wbraid: trimMax(typeof data.wbraid === "string" ? data.wbraid : undefined, MAX_CLICK_ID_LENGTH),
    });
  } catch {
    return null;
  }
}

/** Build attribution payload for form submission, including current form page path. */
export function buildLeadAttributionPayload(): { formPath: string } & Partial<LeadAttribution> {
  const formPath = trimMax(
    typeof window !== "undefined" ? window.location.pathname : undefined,
    MAX_PATH_LENGTH,
  ) ?? "/";

  const stored = getStoredLeadAttribution();
  if (!stored) {
    return { formPath };
  }

  return { ...stored, formPath };
}
