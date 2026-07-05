"use client";

import { useEffect, useState } from "react";
import type { ArticleHeading } from "@/lib/articles";

/**
 * Scroll-spy: the active heading is the last one whose top has crossed the
 * upper quarter of the viewport. Deterministic in both scroll directions,
 * unlike a plain IntersectionObserver.
 */
function useActiveHeading(headings: ArticleHeading[], enabled: boolean): string {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        if (!enabled || headings.length === 0) return;

        let ticking = false;
        const update = () => {
            ticking = false;
            const threshold = window.innerHeight * 0.25;
            let current = "";
            for (const heading of headings) {
                const el = document.getElementById(heading.id);
                if (el && el.getBoundingClientRect().top <= threshold) current = heading.id;
            }
            setActiveId(current || headings[0].id);
        };
        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(update);
            }
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [headings, enabled]);

    return activeId;
}

export default function TableOfContents({
    headings,
    variant,
}: {
    headings: ArticleHeading[];
    /** "sidebar" is the sticky desktop rail with scroll-spy; "inline" is the mobile disclosure. */
    variant: "sidebar" | "inline";
}) {
    const activeId = useActiveHeading(headings, variant === "sidebar");

    if (headings.length === 0) return null;

    if (variant === "inline") {
        return (
            <details className="group rounded-2xl border border-beige/15 bg-beige/[0.03]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-mono text-xs font-bold tracking-widest text-beige [&::-webkit-details-marker]:hidden">
                    ON THIS PAGE
                    <svg
                        className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <ul className="flex flex-col gap-2.5 border-t border-beige/10 px-5 pb-5 pt-4">
                    {headings.map((heading) => (
                        <li key={heading.id} className={heading.depth === 3 ? "pl-4" : ""}>
                            <a
                                href={`#${heading.id}`}
                                className="text-sm leading-snug text-darkbeige transition-colors hover:text-beige"
                            >
                                {heading.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </details>
        );
    }

    return (
        <nav aria-label="On this page">
            <p className="font-mono text-[11px] font-bold tracking-[0.2em] text-neutral-400">ON THIS PAGE</p>
            <ul className="mt-4 flex flex-col">
                {headings.map((heading) => {
                    const isActive = heading.id === activeId;
                    return (
                        <li key={heading.id}>
                            <a
                                href={`#${heading.id}`}
                                aria-current={isActive ? "true" : undefined}
                                className={`block border-l-2 py-1.5 pr-2 text-[13px] leading-snug transition-colors duration-200 ${
                                    heading.depth === 3 ? "pl-8" : "pl-4"
                                } ${
                                    isActive
                                        ? "border-beige text-beige"
                                        : "border-beige/15 text-darkbeige hover:border-beige/40 hover:text-beige"
                                }`}
                            >
                                {heading.text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
