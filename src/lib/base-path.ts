// The site is served from a sub-path ("/portfolio"), so this must match the
// basePath in next.config.ts. Next prefixes next/link and Next-managed assets
// automatically, but raw string URLs (e.g. an <img src> built from markdown
// frontmatter) are not touched, so this helper prepends the base path to them.

export const BASE_PATH = "/portfolio";

/**
 * Normalize a root-relative path. Absolute URLs (http/https) and data URIs are
 * returned untouched; everything else gets a leading slash.
 */
export function withBasePath(path: string): string {
    if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${BASE_PATH}${normalized}`;
}
