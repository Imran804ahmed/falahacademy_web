import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { news } from "@/content/school";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;
  const staticRoutes = siteConfig.pages.map((item) => (item.href === "/" ? "" : item.href));
  const newsRoutes = news.map((n) => `/news-events/${n.slug}`);

  return [...staticRoutes, ...newsRoutes].map((route) => ({
    url: `${base}${route}/`, // trailingSlash: true
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
