import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/signin", "/signup", "/profile", "/archive", "/trash"],
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
