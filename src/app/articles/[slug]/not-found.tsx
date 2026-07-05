import Link from "next/link";

export default function ArticleNotFound() {
    return (
        <div className="flex min-h-dvh flex-col items-center justify-center gap-6 px-4 text-center">
            <h1 className="font-mono font-bold text-4xl sm:text-6xl text-beige">404 /</h1>
            <p className="text-darkbeige">This article could not be found.</p>
            <Link
                href="/articles"
                className="rounded-full border border-beige/30 px-6 py-2 font-mono text-sm tracking-widest text-beige transition-colors hover:bg-beige hover:text-background"
            >
                ALL ARTICLES
            </Link>
        </div>
    );
}
