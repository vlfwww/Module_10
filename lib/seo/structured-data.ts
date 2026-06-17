import { siteConfig } from "@/lib/seo/site";

export function getWebApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.name,
    description: siteConfig.defaultDescription,
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Web",
    url: siteConfig.siteUrl,
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.defaultDescription,
    url: siteConfig.siteUrl,
  };
}
