import { getAllArticles } from "@/lib/articles";

// Rendered once at build time and exported as a static feed.xml file.
export const dynamic = "force-static";

const siteUrl = "https://goutham0110.github.io";

function escapeXml(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&apos;");
}

export function GET() {
    const articles = getAllArticles();

    const items = articles
        .map((article) => {
            const url = `${siteUrl}/articles/${article.slug}/`;
            const categories = article.keywords
                .map((keyword) => `<category>${escapeXml(keyword)}</category>`)
                .join("");
            return (
                `<item>` +
                `<title>${escapeXml(article.title)}</title>` +
                `<link>${url}</link>` +
                `<guid isPermaLink="true">${url}</guid>` +
                `<pubDate>${new Date(article.date).toUTCString()}</pubDate>` +
                `<description>${escapeXml(article.description)}</description>` +
                categories +
                `</item>`
            );
        })
        .join("");

    const xml =
        `<?xml version="1.0" encoding="UTF-8"?>` +
        `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">` +
        `<channel>` +
        `<title>Articles | Goutham S</title>` +
        `<link>${siteUrl}/articles/</link>` +
        `<atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>` +
        `<description>Writing on distributed systems, databases, and building for the web.</description>` +
        `<language>en</language>` +
        `<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>` +
        items +
        `</channel>` +
        `</rss>`;

    return new Response(xml, {
        headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
    });
}
