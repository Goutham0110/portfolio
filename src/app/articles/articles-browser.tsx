"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ArticleMeta } from "@/lib/articles";
import ArticleCard from "./article-card";

const ALL = "All";

export default function ArticlesBrowser({
    articles,
    categories,
}: {
    articles: ArticleMeta[];
    categories: string[];
}) {
    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<string>(ALL);
    const [isMac, setIsMac] = useState(false);
    const searchRef = useRef<HTMLInputElement>(null);

    // Restore filters from the URL so category/search deep links are shareable.
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const category = params.get("category");
        const q = params.get("q");
        if (category && categories.includes(category)) setActiveCategory(category);
        if (q) setQuery(q);
        setIsMac(/mac|iphone|ipad/i.test(navigator.platform));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Keep the URL in sync with the active filters.
    useEffect(() => {
        const params = new URLSearchParams();
        if (activeCategory !== ALL) params.set("category", activeCategory);
        if (query.trim()) params.set("q", query.trim());
        const search = params.toString();
        window.history.replaceState(null, "", `${window.location.pathname}${search ? `?${search}` : ""}`);
    }, [query, activeCategory]);

    // Ctrl+K / Cmd+K focuses the search; Escape clears + blurs it.
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
                event.preventDefault();
                searchRef.current?.focus();
                searchRef.current?.select();
            } else if (event.key === "Escape" && document.activeElement === searchRef.current) {
                setQuery("");
                searchRef.current?.blur();
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return articles.filter((article) => {
            const matchesCategory = activeCategory === ALL || article.category === activeCategory;
            if (!matchesCategory) return false;
            if (!q) return true;
            const haystack = [
                article.title,
                article.description,
                article.category,
                ...article.keywords,
            ]
                .join(" ")
                .toLowerCase();
            return haystack.includes(q);
        });
    }, [articles, query, activeCategory]);

    const chips = [ALL, ...categories];
    const latestSlug = articles[0]?.slug;

    const clearFilters = () => {
        setQuery("");
        setActiveCategory(ALL);
    };

    return (
        <div className="flex flex-col gap-7">
            {/* Search */}
            <div className="relative">
                <span
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-darkbeige"
                    aria-hidden="true"
                >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </span>
                <input
                    ref={searchRef}
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search articles..."
                    aria-label="Search articles"
                    className="w-full rounded-2xl border border-beige/20 bg-beige/[0.04] py-3 pl-12 pr-24 font-mono text-sm sm:text-base text-beige placeholder:text-darkbeige focus:border-beige/50 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
                />
                {query ? (
                    <button
                        type="button"
                        onClick={() => {
                            setQuery("");
                            searchRef.current?.focus();
                        }}
                        aria-label="Clear search"
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-darkbeige transition-colors hover:text-beige"
                    >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                ) : (
                    <kbd
                        aria-hidden="true"
                        className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 rounded border border-beige/25 px-2 py-1 font-mono text-[10px] tracking-widest text-darkbeige sm:block"
                    >
                        {isMac ? "⌘ K" : "CTRL K"}
                    </kbd>
                )}
            </div>

            {/* Category filter + result count */}
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
                <div className="flex flex-wrap gap-2">
                    {chips.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                aria-pressed={isActive}
                                className={`rounded-full border px-4 py-1.5 font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-colors ${
                                    isActive
                                        ? "border-beige bg-beige text-background"
                                        : "border-beige/25 text-darkbeige hover:border-beige/60 hover:text-beige"
                                }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>
                <p
                    role="status"
                    aria-live="polite"
                    className="whitespace-nowrap font-mono text-[10px] sm:text-xs tracking-[0.2em] text-neutral-400"
                >
                    {filtered.length} {filtered.length === 1 ? "ARTICLE" : "ARTICLES"}
                </p>
            </div>

            {/* Results */}
            {filtered.length > 0 ? (
                <motion.div layout className="flex flex-col gap-5">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((article, index) => (
                            <ArticleCard
                                key={article.slug}
                                article={article}
                                index={index}
                                isLatest={article.slug === latestSlug}
                                onSelectCategory={setActiveCategory}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            ) : (
                <div className="flex flex-col items-center gap-5 py-16 text-center">
                    <p className="font-mono text-darkbeige">
                        No articles match{query ? ` "${query}"` : ""}
                        {activeCategory !== ALL ? ` in ${activeCategory}` : ""}.
                    </p>
                    <button
                        type="button"
                        onClick={clearFilters}
                        className="rounded-full border border-beige/30 px-6 py-2 font-mono text-xs font-bold tracking-widest text-beige transition-colors hover:bg-beige hover:text-background"
                    >
                        CLEAR FILTERS
                    </button>
                </div>
            )}
        </div>
    );
}
