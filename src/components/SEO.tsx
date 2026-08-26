import { Helmet } from "react-helmet-async";
import { buildCanonicalUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  children?: React.ReactNode;
}

const SEO = ({
  title,
  description,
  canonicalPath,
  ogTitle,
  ogDescription,
  ogType = "website",
  children,
}: SEOProps) => {
  const canonicalUrl = buildCanonicalUrl(canonicalPath);
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDescription = ogDescription ?? description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDescription} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

      {children}
    </Helmet>
  );
};

export default SEO;
