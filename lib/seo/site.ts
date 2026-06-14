import type { Metadata } from "next";

function normalizeSiteUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  const publicUrl = process.env.PUBLIC_URL || "/Module_10";

  if (publicUrl === "/") {
    return "https://vlfwww.github.io";
  }

  return normalizeSiteUrl(`https://vlfwww.github.io${publicUrl}`);
}

export const siteConfig = {
  name: "Notes App",
  defaultTitle: "Notes App",
  titleTemplate: "%s | Notes App",
  defaultDescription: "The best app for taking notes and managing tasks.",
  siteUrl: getSiteUrl(),
  locale: "en_US",
  keywords: ["notes", "task management", "productivity", "archive"],
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;

  return {
    title,
    description,
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(`${siteConfig.siteUrl}/`),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.defaultDescription,
  keywords: siteConfig.keywords,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
  alternates: {
    canonical: "/",
  },
};
