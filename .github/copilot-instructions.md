# Copilot Instructions for `powerbi-site`

## Build, test, and lint commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run astro check
```

- There is currently **no test runner configured** in `package.json` (no `npm test` / single-test command).
- There is currently **no lint script configured** in `package.json`.
- Production parity for search indexing (same as CI):

```bash
npm run build
npx pagefind --site dist
npm run preview
```

## High-level architecture

- This is an **Astro static site** with MDX content collections. Blog content lives in `src/content/blog/YYYY/MM/DD/slug/index.mdx`, and routes are generated from that content ID structure.
- `src/pages/[...slug].astro` is the main blog post route: it renders collection entries, computes prev/next/more posts, and passes structured-data inputs to `BlogPost.astro`.
- `src/layouts/BaseLayout.astro` centralizes global page shell + SEO defaults (canonical, OG/Twitter tags, Organization/WebSite JSON-LD). `src/layouts/BlogPost.astro` adds post-specific JSON-LD (Article, BreadcrumbList, optional FAQ/HowTo).
- FAQ/HowTo JSON-LD is derived from MDX body text via `src/utils/schema-helpers.ts` (question-like headings and step patterns).
- Taxonomy and archive pages (`author`, `category`, `tag`, `posts`, paginated `page/[page]`) are statically generated from the same blog collection.
- Build pipeline: `npm run build` creates the static site, custom integration `src/integrations/organized-sitemap.mjs` writes WordPress-style sitemap files, then Pagefind indexes `dist`. GitHub Actions deploys `dist` to GitHub Pages.
- Podcast page flow includes a prerendered API endpoint (`src/pages/api/agentic-thinking-episodes.json.ts`) that fetches/parses upstream episodes via `src/lib/agenticThinkingEpisodes.ts` at build time.
- `src/components/PodcastPlayer.astro` progressively enhances episode posts: clicking a transcript line seeks the embedded YouTube player, the active line highlights, and the video becomes a sticky mini-player. `BlogPost.astro` includes it only for posts whose body has both a YouTube embed and `watch?v=ID&t=Ns` transcript links. It rewrites existing markup at runtime — posts need no special frontmatter.

## Key conventions in this repo

- **Podcast transcript markup is load-bearing.** Episode posts must keep the episode embed as the first YouTube iframe, transcript links on the episode's own video ID, one entry per paragraph, and bare `M:SS` labels matching their `t=` seconds. Verify with `python3 scripts/verify-podcast-post.py <post>` (or `--all`); see `.github/skills/tips-pod-post/SKILL.md`.
- **Component styles that target rendered markdown use `is:inline`, not `is:global`.** Astro hoists bundled component CSS into every page importing the layout, even where the component never renders (see `PodcastPlayer.astro`).
- **If a content edit doesn't appear after a rebuild**, clear Astro's content-layer cache: `rm -f node_modules/.astro/data-store.json`.
- **Always base-prefix internal links/assets in Astro files** with:
  - `const base = import.meta.env.BASE_URL.replace(/\/$/, '')`
  - then use `${base}/.../` paths.
- **Slug cleanup from content IDs** consistently uses:
  - `id.replace(/\/index\.mdx?$/, '').replace(/\.mdx?$/, '')`
- **Taxonomy slug rules differ by type**:
  - Categories: lowercase + spaces to `-`
  - Tags/authors: lowercase + spaces to `-` + strip non-alphanumeric/hyphen
- In `getStaticPaths`, props must be serializable; do not pass raw content entries with image metadata as props. Convert to plain objects first (see author page pattern).
- Blog frontmatter is validated by `src/content.config.ts`:
  - required: `title`, `date`
  - defaults: `authors`, `categories`, `tags`
  - optional: `featuredImage`, `excerpt`
