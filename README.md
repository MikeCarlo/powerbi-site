# PowerBI.tips Website

The official PowerBI.tips blog and resources site, built with [Astro](https://astro.build).

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** (comes with Node.js)
- **Git**

### Clone and Install

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/powerbi-tips-site.git
cd powerbi-tips-site

# Install dependencies
npm install
```

### Run Locally

```bash
# Start the development server
npm run dev
```

Open [http://localhost:4321/powerbi-tips-site/](http://localhost:4321/powerbi-tips-site/) in your browser.

### Build for Production

```bash
# Build the site
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
powerbi-tips-site/
├── public/                     # Static assets (favicon, images)
├── src/
│   ├── components/
│   │   ├── Header.astro        # Site header with navigation
│   │   └── Footer.astro        # Site footer
│   ├── content/
│   │   └── blog/               # Blog posts (MDX files)
│   │       └── YYYY/MM/DD/     # Date-based folder structure
│   │           └── post-slug/
│   │               └── index.mdx
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Base HTML layout
│   │   └── BlogPost.astro      # Blog post layout
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── search.astro        # Search page (Pagefind)
│   │   ├── podcast.astro       # Podcast page
│   │   ├── power-designer.astro
│   │   ├── events.astro
│   │   ├── training.astro
│   │   ├── about.astro
│   │   ├── category/           # Category pages
│   │   └── [...slug].astro     # Dynamic blog post routes
│   ├── styles/
│   │   └── global.css          # Global styles (Tailwind)
│   └── content.config.ts       # Content collection schema
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── astro.config.mjs            # Astro configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json
```

---

## ✍️ Writing Blog Posts

Blog posts are written in **MDX** (Markdown with JSX support).

### File Location

Posts must follow this folder structure to match the URL pattern:

```
src/content/blog/YYYY/MM/DD/post-slug/index.mdx
```

For example:
- URL: `/2025/07/21/power-query-with-alex-powers/`
- File: `src/content/blog/2025/07/21/power-query-with-alex-powers/index.mdx`

### Frontmatter

Every post needs frontmatter at the top:

```mdx
---
title: "Your Post Title"
date: "2025-07-21"
authors:
  - "Author Name"
  - "Co-Author Name"    # Optional: multiple authors supported
categories:
  - "Power Query"
  - "Data Prep"
tags:
  - "M"
  - "ETL"
  - "Best Practices"
featuredImage: "/images/your-image.jpg"  # Optional
excerpt: "A brief description of the post for previews and SEO."
---

Your content goes here...

## Headings Work

- Bullet points
- Work too

1. Numbered lists
2. Also work

**Bold** and *italic* text supported.
```

### Adding Images

There are two common cases: **MDX/Markdown content** and **Astro pages/components**.

#### 1) Blog posts (MDX / Markdown)

1. Put images in `public/images/` (or a subfolder like `public/images/podcast/`).
2. Reference them like this:

```md
![Alt text](/images/your-image.jpg)
```

Astro will automatically apply the GitHub Pages base path at build time.

#### 2) Astro pages / components (`.astro`)

Because this site is deployed on GitHub Pages under a base path (see `astro.config.mjs`), **avoid hard-coding absolute paths** like:

```html
<img src="/images/podcast/mailbag.jpg" />
```

On GitHub Pages that can break because `/images/...` resolves at the domain root.

Instead, prefix static-asset paths with Astro’s base URL:

```astro
---
const base = import.meta.env.BASE_URL; // e.g. "/powerbi-site/"
---

<img src={`${base}/images/podcast/mailbag.jpg`} alt="Mail Bag" />
```

Notes:
- `import.meta.env.BASE_URL` usually **includes a trailing slash** (example: `/powerbi-site/`).
- To be safe, use `${base}/images/...` (ensures you don’t accidentally create `/powerbi-siteimages/...`).


---

## 🔍 Search

The site uses [Pagefind](https://pagefind.app/) for search. It's automatically built during the GitHub Actions deployment.

For local search testing:

```bash
npm run build
npx pagefind --site dist
npm run preview
```

---

## 🚀 Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

**First-time setup:**

1. Go to your GitHub repo → **Settings** → **Pages**
2. Under "Build and deployment", set **Source** to **GitHub Actions**
3. Push to `main` — the site will build and deploy automatically

### Custom Domain

To use a custom domain (e.g., `powerbi.tips`):

1. Add a `CNAME` file to the `public/` folder containing your domain:
   ```
   powerbi.tips
   ```

2. Update `astro.config.mjs`:
   ```js
   export default defineConfig({
     site: 'https://powerbi.tips',
     base: '/',  // Change from '/powerbi-tips-site' to '/'
     // ... rest of config
   });
   ```

3. Configure DNS with your domain provider to point to GitHub Pages

---

## 🧞 Commands

| Command             | Action                                       |
| :------------------ | :------------------------------------------- |
| `npm install`       | Install dependencies                         |
| `npm run dev`       | Start dev server at `localhost:4321`         |
| `npm run build`     | Build production site to `./dist/`           |
| `npm run preview`   | Preview production build locally             |
| `npm run astro ...` | Run Astro CLI commands                       |

---

## 🛠️ Configuration

### Changing the Base URL

The site is configured for GitHub Pages with a base path. To change it:

1. Edit `astro.config.mjs`:
   ```js
   const site = 'https://your-username.github.io';
   const base = '/your-repo-name';
   ```

2. Or use environment variables:
   ```bash
   SITE=https://powerbi.tips BASE_PATH=/ npm run build
   ```

### Adding New Navigation Links

Edit `src/components/Header.astro` and `src/components/Footer.astro` to modify navigation.

---

## 📝 Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[MDX](https://mdxjs.com)** - Markdown with components
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS
- **[Pagefind](https://pagefind.app)** - Static search
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD

---

## 🤖 AEO (Answer Engine Optimization)

The site is optimized for AI crawlers and answer engines (ChatGPT, Perplexity, Google AI Overviews, etc.).

### What's in Place

| Feature | Status | Details |
| :--- | :--- | :--- |
| `llms.txt` | ✅ | AI-friendly site summary (`public/llms.txt`) |
| `llms-full.txt` | ✅ | Extended content for LLM ingestion (`public/llms-full.txt`) |
| `robots.txt` AI crawlers | ✅ | Explicitly welcomes GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc. |
| `Sitemap` for `llms.txt` | ✅ | Proper `Sitemap:` directives in `robots.txt` for AI discovery |
| Organization schema | ✅ | JSON-LD on every page (`BaseLayout.astro`) |
| WebSite schema | ✅ | JSON-LD with SearchAction on every page |
| Article schema | ✅ | JSON-LD on every blog post (`BlogPost.astro`) |
| BreadcrumbList schema | ✅ | JSON-LD on every blog post (Home → Category → Post) |
| FAQ schema (FAQPage) | ✅ | Auto-generated from question-like H2/H3 headings (~110 posts) |
| HowTo schema | ✅ | Auto-generated for tutorial posts with step patterns |

### How FAQ Schema Works

The build automatically scans blog post markdown for H2/H3 headings that look like questions:
- Contains `?` — e.g., `## What is Direct Lake?`
- Starts with question words — `What`, `How`, `Why`, `When`, `Can`, `Should`, etc.

The first paragraph after the heading becomes the answer. No manual frontmatter needed — just write good headings and it works.

### How HowTo Schema Works

Posts in tutorial/guide/walkthrough categories with `Step N:` heading patterns automatically get HowTo structured data. Each step heading becomes a `HowToStep`.

### Files

- `src/utils/schema-helpers.ts` — FAQ and HowTo extraction utilities
- `src/layouts/BlogPost.astro` — Schema assembly (Article + BreadcrumbList + FAQ + HowTo)
- `src/layouts/BaseLayout.astro` — Organization + WebSite schema, supports JSON-LD arrays
- `public/llms.txt` — Concise site description for AI agents
- `public/llms-full.txt` — Extended content with topic coverage and tool descriptions

---

## 🤝 Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test locally: `npm run dev`
4. Commit: `git commit -m "Add your feature"`
5. Push: `git push origin feature/your-feature`
6. Open a Pull Request

---

## 📄 License

© PowerBI.tips LLC. All rights reserved.
