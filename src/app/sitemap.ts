import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

export const dynamic = "force-static";

const siteUrl = "https://goutham0110.github.io/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  // Articles are sorted newest-first. Anchor the home and articles-list dates to
  // the latest published article so `lastModified` only changes when content does
  // (using `new Date()` would churn on every build and erode crawler trust).
  const latestArticleDate = articles[0]?.date ? new Date(articles[0].date) : new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: latestArticleDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/articles/`,
      lastModified: latestArticleDate,
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
