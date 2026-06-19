import type { MetadataRoute } from "next";

const siteUrl = "https://hari27om.online";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/portfolio-hero.png`],
    },
  ];
}
