"use client";

// Renders the build-time-compiled article HTML. The markup is produced by the
// remark/rehype pipeline in src/lib/articles.ts (server-side only), so there is
// no client-side markdown parsing here. Styling lives under `.article-prose`
// in globals.css. The only client behavior is delegated clicks for the
// build-time-injected code copy buttons.
export default function ArticleContent({ html }: { html: string }) {
    const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const button = (event.target as HTMLElement).closest<HTMLButtonElement>("button.code-copy");
        if (!button) return;
        const pre = button.closest("figure")?.querySelector("pre");
        if (!pre) return;

        navigator.clipboard
            .writeText(pre.innerText)
            .then(() => {
                button.classList.add("copied");
                button.textContent = "COPIED";
                window.setTimeout(() => {
                    button.classList.remove("copied");
                    button.textContent = "COPY";
                }, 2000);
            })
            .catch(() => {});
    };

    return <div className="article-prose" onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />;
}
