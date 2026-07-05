import Link from "next/link";

/** Minimal top strip for the articles pages: wordmark, plus a back-to-catalog link on article pages. */
export default function SiteHeader() {
    return (
        <header className="flex items-center gap-6">
            <Link
                href="/articles"
                className="group inline-flex items-center gap-2 font-mono text-beige text-md"
            >
                <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
                    ←
                </span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                    ALL ARTICLES
                </span>
            </Link>
        </header>
    );
}
