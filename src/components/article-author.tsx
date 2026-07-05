/** "About the author" card shown in the footer of an article page. */
export default function ArticleAuthor() {
    return (
        <section
            aria-label="About the author"
            className="flex items-center gap-4 sm:gap-5 rounded-2xl border border-beige/15 bg-beige/[0.03] p-5 sm:p-6"
        >
            <div
                className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center self-start rounded-full bg-beige font-mono text-lg sm:text-xl font-bold text-background"
                aria-hidden="true"
            >
                G/
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="font-mono font-bold text-beige">Goutham /</p>
                <p className="text-sm leading-relaxed text-darkbeige">
                    Allegedly an engineer. Probably learning somethin that I don&apos;t need.
                </p>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                    <a
                        href="https://github.com/Goutham0110"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-widest text-darkbeige transition-colors hover:text-beige"
                    >
                        GITHUB
                        <span
                            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                        >
                            ↗
                        </span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/goutham0110/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-widest text-darkbeige transition-colors hover:text-beige"
                    >
                        LINKEDIN
                        <span
                            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                        >
                            ↗
                        </span>
                    </a>
                </div>
            </div>
            <a
                href="https://goutham0110.github.io/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="group ml-auto inline-flex shrink-0 items-center gap-1.5 self-center rounded-full border border-beige/25 px-4 py-2 font-mono text-[11px] font-bold tracking-widest text-beige transition-colors hover:border-beige hover:bg-beige hover:text-background"
            >
                VISIT PAGE
                <span
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                >
                    ↗
                </span>
            </a>
        </section>
    );
}
