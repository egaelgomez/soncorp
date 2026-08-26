export const SITE_URL = "https://soncorp.com.mx";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const normalizePath = (path: string): string => {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path.replace(/\/+$/, "") || "/" : `/${path.replace(/\/+$/, "")}`;
};

export const buildCanonicalUrl = (canonicalPath: string): string => {
  const normalized = normalizePath(canonicalPath);
  return normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
};
