import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

export const dynamic = "force-static";

const siteUrl = "https://goutham0110.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/articles/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...articles.map((article) => ({
      url: `${siteUrl}/articles/${article.slug}/`,
      lastModified: article.date ? new Date(article.date) : new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
