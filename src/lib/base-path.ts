// The site is served from the domain root, so there is no basePath to prepend.
// This helper is kept so raw string URLs (e.g. an <img src> built from markdown
// frontmatter) are still normalized to a leading-slash, root-relative form.

export const BASE_PATH = "";

/**
 * Normalize a root-relative path. Absolute URLs (http/https) and data URIs are
 * returned untouched; everything else gets a leading slash.
 */
export function withBasePath(path: string): string {
    if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${BASE_PATH}${normalized}`;
}
