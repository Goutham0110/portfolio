"use client";

import { useEffect, useRef, useState } from "react";

const chipClass =
    "rounded-full border border-beige/25 px-3 py-1 font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase text-darkbeige transition-colors hover:border-beige/60 hover:text-beige";

/** Quiet share strip: copy link + share intents, styled like the keyword chips. */
export default function ShareRow({ url, title }: { url: string; title: string }) {
    const [copied, setCopied] = useState(false);
    const resetTimer = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
        };
    }, []);

    const copyLink = () => {
        navigator.clipboard
            .writeText(url)
            .then(() => {
                setCopied(true);
                if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
                resetTimer.current = window.setTimeout(() => setCopied(false), 2000);
            })
            .catch(() => {});
    };

    const targets = [
        {
            label: "X",
            href: `https://x.com/intent/post?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        },
        {
            label: "LINKEDIN",
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        },
    ];

    return (
        <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[10px] sm:text-xs tracking-widest text-neutral-400">SHARE</span>
            <button type="button" onClick={copyLink} className={chipClass} aria-live="polite">
                {copied ? "LINK COPIED" : "COPY LINK"}
            </button>
            {targets.map((target) => (
                <a
                    key={target.label}
                    href={target.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${chipClass} group inline-flex items-center gap-1.5`}
                >
                    {target.label}
                    <span
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                    >
                        ↗
                    </span>
                </a>
            ))}
        </div>
    );
}
