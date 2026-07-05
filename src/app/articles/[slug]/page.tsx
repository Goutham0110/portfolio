import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticles, getAllSlugs, getArticleBySlug } from "@/lib/articles";
import { withBasePath } from "@/lib/base-path";
import ArticleAuthor from "@/components/article-author";
import ArticleContent from "@/components/article-content";
import ReadingProgress from "@/components/reading-progress";
import SiteHeader from "@/components/site-header";
import TableOfContents from "@/components/table-of-contents";

const siteUrl = "https://goutham0110.github.io/portfolio";

export function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);
    if (!article) return { title: "Article not found" };

    const { meta } = article;
    const url = `${siteUrl}/articles/${meta.slug}/`;
    const ogImage = `${siteUrl}/articles/${meta.coverImage}`;

    return {
        title: `${meta.title} | Goutham S`,
        description: meta.description,
        keywords: meta.keywords,
        authors: [{ name: "Goutham S", url: siteUrl }],
        alternates: {
            canonical: url,
            types: { "application/rss+xml": `${siteUrl}/feed.xml` },
        },
        openGraph: {
            type: "article",
            url,
            title: meta.title,
            description: meta.description,
            siteName: "Goutham's Portfolio",
            publishedTime: meta.date,
            modifiedTime: meta.date,
            section: meta.category,
            tags: meta.keywords,
            authors: [siteUrl],
            images: [{ url: ogImage, width: 1200, height: 628, alt: meta.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
            images: [ogImage],
        },
    };
}

function formatDate(iso: string): string {
    if (!iso) return "";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

const neighborCardClass =
    "group flex flex-1 flex-col gap-2 rounded-2xl border border-beige/15 bg-beige/[0.03] p-5 transition-colors duration-200 hover:border-beige/40 hover:bg-beige/[0.06]";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);
    if (!article) notFound();

    const { meta, html, headings } = article;

    // Neighbors for prev/next navigation; the list is sorted newest first.
    const all = getAllArticles();
    const index = all.findIndex((a) => a.slug === slug);
    const newer = index > 0 ? all[index - 1] : null;
    const older = index >= 0 && index < all.length - 1 ? all[index + 1] : null;

    const url = `${siteUrl}/articles/${meta.slug}/`;

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: meta.title,
        description: meta.description,
        datePublished: meta.date,
        dateModified: meta.date,
        keywords: meta.keywords.join(", "),
        articleSection: meta.category,
        wordCount: meta.wordCount,
        timeRequired: `PT${meta.readingMinutes}M`,
        inLanguage: "en",
        image: `${siteUrl}/articles/${meta.coverImage}`,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: {
            "@type": "Person",
            name: "Goutham S",
            url: siteUrl,
            sameAs: [
                "https://github.com/Goutham0110",
                "https://www.linkedin.com/in/goutham0110/",
            ],
        },
        publisher: { "@type": "Person", name: "Goutham S", url: siteUrl },
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
            { "@type": "ListItem", position: 2, name: "Articles", item: `${siteUrl}/articles/` },
            { "@type": "ListItem", position: 3, name: meta.title, item: url },
        ],
    };

    return (
        <div className="min-h-dvh px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
            <ReadingProgress />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <SiteHeader />

            <div className="mx-auto flex w-full max-w-7xl justify-center gap-12 xl:gap-16 pt-10 sm:pt-16 pb-24">
                <article className="w-full min-w-0">
                    <header className="flex flex-col gap-5">
                        <div className="anim-fade-up flex flex-wrap items-center gap-x-4 gap-y-3">
                            <p className="font-mono text-xs sm:text-sm tracking-widest text-neutral-400 uppercase">
                                <time dateTime={meta.date}>{formatDate(meta.date)}</time> · {meta.readingMinutes} min read
                            </p>
                        </div>

                        <h1 className="anim-fade-up anim-delay-1 font-mono font-bold text-3xl sm:text-5xl leading-tight text-balance text-beige">
                            {meta.title}
                        </h1>

                        <p className="anim-fade-up anim-delay-2 text-lg sm:text-xl leading-relaxed text-darkbeige">
                            {meta.description}
                        </p>

                        <ArticleAuthor />

                        {/* Fixed aspect ratio reserves the space before the image loads (no CLS). */}
                        <div className="anim-fade-up anim-delay-3 relative mt-3 aspect-[1200/628] overflow-hidden rounded-2xl border border-beige/12 bg-beige/[0.04]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={withBasePath(`/articles/${meta.coverImage}`)}
                                alt={`Cover illustration for "${meta.title}"`}
                                fetchPriority="high"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </header>

                    {headings.length > 1 && (
                        <div className="anim-fade-up anim-delay-4 mt-8 xl:hidden">
                            <TableOfContents headings={headings} variant="inline" />
                        </div>
                    )}

                    <div className="anim-fade-up anim-delay-4 mt-8 sm:mt-10">
                        <ArticleContent html={html} />
                    </div>

                    <footer className="mt-14 flex flex-col gap-10 border-t border-beige/15 pt-10">
                        <div className="flex justify-end pt-2">
                            <Link
                                href="/articles"
                                className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 font-mono text-xs sm:text-sm tracking-widest uppercase text-beige transition-colors duration-200"
                            >
                                View all articles
                                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>
                    </footer>
                </article>

                {headings.length > 1 && (
                    <aside className="hidden w-64 shrink-0 xl:block">
                        <div className="anim-fade-up anim-delay-4 sticky top-24">
                            <TableOfContents headings={headings} variant="sidebar" />
                        </div>
                    </aside>
                )}
            </div>
        </div>
    );
}
