import type { Metadata } from "next";
import { getAllArticles, getAllCategories } from "@/lib/articles";
import ArticlesBrowser from "./articles-browser";

const siteUrl = "https://goutham0110.github.io";
const pageTitle = "Articles | Goutham's Portfolio";
const pageDescription =
    "Writing on distributed systems, databases, and building for the web. Browse and search articles by Goutham S.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: `${siteUrl}/articles/`,
        types: { "application/rss+xml": `${siteUrl}/feed.xml` },
    },
    openGraph: {
        type: "website",
        url: `${siteUrl}/articles/`,
        title: pageTitle,
        description: pageDescription,
        siteName: "Goutham's Portfolio",
        images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Goutham-portfolio" }],
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: [`${siteUrl}/og-image.png`],
    },
};

export default function ArticlesPage() {
    const articles = getAllArticles();
    const categories = getAllCategories();

    const collectionJsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Articles by Goutham S",
        description: pageDescription,
        url: `${siteUrl}/articles/`,
        isPartOf: { "@type": "WebSite", name: "Goutham's Portfolio", url: siteUrl },
        mainEntity: {
            "@type": "ItemList",
            itemListElement: articles.map((article, position) => ({
                "@type": "ListItem",
                position: position + 1,
                name: article.title,
                url: `${siteUrl}/articles/${article.slug}/`,
            })),
        },
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
            { "@type": "ListItem", position: 2, name: "Articles", item: `${siteUrl}/articles/` },
        ],
    };

    return (
        <div className="min-h-dvh px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <main className="mx-auto w-full max-w-7xl pt-2 sm:pt-4 pb-24">
                <div className="mb-10 sm:mb-14">
                    <h1 className="anim-fade-up anim-delay-1 mt-3 font-mono font-bold text-5xl sm:text-7xl lg:text-8xl">
                        ARTICLES /
                    </h1>
                    <p className="anim-fade-up anim-delay-2 mt-4 font-mono w-full text-md text-darkbeige font-medium tracking-[0.3em] text-neutral-400">
                        NOTES / CASE STUDIES / LESSONS FROM PRODUCTION ISSUES
                    </p>
                </div>

                <div className="anim-fade-up anim-delay-3">
                    <ArticlesBrowser articles={articles} categories={categories} />
                </div>
            </main>
        </div>
    );
}
