"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/animation-variants";
import { withBasePath } from "@/lib/base-path";
import type { ArticleMeta } from "@/lib/articles";

function formatDate(iso: string): string {
    if (!iso) return "";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function ArticleCard({
    article,
    index,
    isLatest,
    onSelectCategory,
}: {
    article: ArticleMeta;
    /** Position in the currently filtered list; drives the entrance stagger. */
    index: number;
    isLatest: boolean;
    onSelectCategory: (category: string) => void;
}) {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2, ease: "easeIn" } }}
            transition={{
                layout: { duration: 0.35, ease: easeOutSoft },
                duration: 0.45,
                ease: easeOutSoft,
                delay: Math.min(index * 0.07, 0.35),
            }}
            className="group relative flex flex-col sm:flex-row sm:items-stretch gap-5 sm:gap-8 rounded-lg border border-beige/15 bg-beige/[0.03] p-4 sm:p-5 text-beige transition-colors duration-200 hover:border-beige/40 hover:bg-beige/[0.06] focus-within:border-beige/50"
        >
            {/* Cover image, on the left (stacks on top on mobile). Cover
                images are always 1280x720 (16:9), so the container keeps that
                ratio at a definite width, which makes it the card's height
                driver. The text column then stretches to match, so the image
                spans the full card height with no crop or distortion. */}
            <div className="relative shrink-0 w-full sm:w-80 lg:w-96 aspect-[16/9] overflow-hidden rounded-xl bg-beige/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={withBasePath(`/articles/${article.coverImage}`)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                {isLatest && (
                    <span className="absolute left-3 top-3 rounded-full bg-beige px-2.5 py-1 font-mono text-[9px] font-bold tracking-widest text-background">
                        LATEST
                    </span>
                )}
            </div>

            {/* Content: title top, 3-line description, date/category row at the bottom. */}
            <div className="flex flex-1 flex-col gap-3 min-w-0 py-2 sm:py-3">
                <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-3">
                        <h2 className="font-mono font-bold text-xl sm:text-2xl lg:text-3xl leading-tight">
                            {/* Stretched link makes the whole card open the article. */}
                            <Link
                                href={`/articles/${article.slug}`}
                                className="text-left after:absolute after:inset-0 after:rounded-2xl"
                            >
                                {article.title}
                            </Link>
                        </h2>
                        <span
                            className="mt-1 hidden shrink-0 text-xl sm:inline-block sm:text-2xl font-black text-darkbeige opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                        >
                            ↗
                        </span>
                    </div>
                    <p className="text-sm sm:text-base text-darkbeige line-clamp-3">{article.description}</p>
                </div>

                <div className="flex items-center justify-between gap-3 mt-auto pt-2">
                    <span className="font-mono text-[10px] sm:text-xs tracking-widest text-neutral-400 uppercase">
                        <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readingMinutes} min read
                    </span>
                    {/* Sits above the stretched link and applies the filter instead of navigating. */}
                    <button
                        type="button"
                        onClick={() => onSelectCategory(article.category)}
                        className="relative z-10 font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase text-beige/70 transition-colors hover:text-beige"
                    >
                        {article.category}
                    </button>
                </div>
            </div>
        </motion.article>
    );
}
