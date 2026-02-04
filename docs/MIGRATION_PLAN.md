# PowerBI.tips Content Migration Plan

## Overview

This document outlines the comprehensive plan to migrate all content from the WordPress site (powerbi.tips) to our Astro static site. The migration will preserve URL structure, download all images, and convert content to MDX format.

---

## 📊 Site Statistics (from sitemap)

| Content Type | Count | Source |
|-------------|-------|--------|
| Blog Posts | ~200 | `wp-sitemap-posts-post-1.xml` |
| Static Pages | ~19 | `wp-sitemap-posts-page-1.xml` |
| Categories | TBD | `wp-sitemap-taxonomies-category-1.xml` |
| Tags | TBD | `wp-sitemap-taxonomies-post_tag-1.xml` |
| Authors | TBD | `wp-sitemap-users-1.xml` |

---

## 📁 Folder Structure

### Content Organization

```
powerbi-tips-site/
├── src/
│   └── content/
│       ├── blog/                        # Blog posts (dated URLs)
│       │   └── YYYY/
│       │       └── MM/
│       │           └── DD/
│       │               └── post-slug/
│       │                   ├── index.mdx
│       │                   └── assets/          # Images live WITH the post!
│       │                       ├── featured.jpg
│       │                       ├── diagram.png
│       │                       └── screenshot.gif
│       │
│       └── pages/                       # Static pages (non-dated URLs)
│           ├── about/
│           │   ├── index.mdx            # /about/
│           │   ├── assets/              # Page-specific images
│           │   ├── owners.mdx           # /about/owners/
│           │   ├── contributors.mdx     # /about/contributors/
│           │   ├── terms-of-use.mdx
│           │   ├── privacy.mdx
│           │   └── copyright.mdx
│           ├── tools/
│           │   ├── index.mdx            # /tools/
│           │   ├── assets/
│           │   ├── layouts.mdx          # /tools/layouts-5/
│           │   └── scrims.mdx           # /tools/scrims/
│           ├── training/
│           │   ├── index.mdx
│           │   └── assets/
│           └── podcast/
│               ├── index.mdx            # /explicit-measures-power-bi-podcast/
│               └── assets/
│
├── public/
│   └── images/
│       └── global/                      # Site-wide images (logo, icons, etc.)
│           ├── logo.svg
│           └── default-og.jpg
```

### Why This Structure?

1. **Blog posts** use `src/content/blog/YYYY/MM/DD/slug/index.mdx`
   - Mirrors URL: `/2024/07/26/exploring-the-power-of-semantic-link/`
   - File: `src/content/blog/2024/07/26/exploring-the-power-of-semantic-link/index.mdx`
   - Easy for AI to find/edit: just follow the URL path

2. **Images** live in `assets/` folder **next to** the MDX file
   - Everything for a post is in ONE folder
   - Easy to manage: move/delete a post = move/delete one folder
   - Reference with relative paths: `./assets/featured.jpg`
   - Astro optimizes images automatically during build

3. **Static pages** use `src/content/pages/` with logical grouping
   - Non-dated URLs like `/about/`, `/training/`, `/tools/`
   - Each page can have its own `assets/` folder
   - Nested pages follow folder structure

4. **Global images** go in `public/images/global/`
   - Site-wide assets like logo, default OG image
   - Things used across multiple pages

---

## 📝 MDX File Format

### Blog Post Template

```mdx
---
# Required fields
title: "Your Post Title Here"
date: "2024-07-26"                      # YYYY-MM-DD format
slug: "exploring-the-power-of-semantic-link"

# Authors (supports multiple)
authors:
  - name: "Mike Carlo"
    slug: "mike-carlo"                  # For author pages
  - name: "Seth Bauer"
    slug: "seth-bauer"

# Taxonomy
categories:
  - "Building Reports"
  - "Power Query"
tags:
  - "Semantic Link"
  - "Python"
  - "Fabric"

# Media
featuredImage: "./assets/featured.jpg"   # Relative path to assets folder
featuredImageAlt: "Semantic Link diagram"

# SEO & Meta
excerpt: "Learn how to leverage Semantic Link in Microsoft Fabric to connect Power BI with Python notebooks."
seoTitle: "Exploring Semantic Link in Power BI | PowerBI.tips"  # Optional, defaults to title
seoDescription: "..."                   # Optional, defaults to excerpt

# WordPress migration metadata (for reference/debugging)
wpPostId: 12345                         # Original WordPress post ID
wpLastModified: "2025-10-22T19:14:42+00:00"
migratedAt: "2026-02-03"
---

Your content here in Markdown...

## Headings Work

Regular markdown content with **bold** and *italic*.

![Image alt text](./assets/diagram.png)

### Code Blocks

```dax
Total Sales = SUM(Sales[Amount])
```

### Embedded Videos

<YouTube id="dQw4w9WgXcQ" />

### Callouts/Tips

:::tip
This is a helpful tip!
:::

:::warning
Be careful with this approach.
:::
```

### Static Page Template

```mdx
---
title: "About PowerBI.tips"
slug: "about"
layout: "page"                          # Different from blog
lastUpdated: "2025-05-16"

# SEO
excerpt: "Learn about PowerBI.tips and our mission."
---

Content here...
```

---

## 🔄 Migration Script Workflow

### Phase 1: Sitemap Parsing

```
1. Fetch all sitemaps:
   - wp-sitemap-posts-post-1.xml (blog posts)
   - wp-sitemap-posts-page-1.xml (static pages)
   - wp-sitemap-taxonomies-category-1.xml (categories)
   - wp-sitemap-taxonomies-post_tag-1.xml (tags)
   - wp-sitemap-users-1.xml (authors)

2. Parse each URL and extract:
   - Full URL
   - Last modified date
   - URL type (post, page, category, etc.)
```

### Phase 2: Content Scraping (Per URL)

```
For each blog post URL:

1. FETCH the page HTML

2. EXTRACT metadata:
   - Title (from <h1> or og:title)
   - Date (from URL path or meta)
   - Author(s) (from byline)
   - Categories (from category links)
   - Tags (from tag links)
   - Featured image (from og:image or first image)
   - Excerpt (from meta description or first paragraph)

3. EXTRACT content:
   - Main article body
   - Remove header/footer/sidebar
   - Preserve headings, lists, code blocks
   - Find all <img> tags

4. DOWNLOAD images:
   - Featured image
   - All inline images
   - Save to: src/content/blog/YYYY/MM/DD/slug/assets/
   - Generate clean filenames (featured.jpg, diagram-001.png, etc.)

5. CONVERT to MDX:
   - HTML → Markdown
   - Update image paths to relative: ./assets/filename.ext
   - Add frontmatter (with featuredImage as relative path)
   - Handle embeds (YouTube, etc.)

6. SAVE files:
   - MDX: src/content/blog/YYYY/MM/DD/slug/index.mdx
   - Images: src/content/blog/YYYY/MM/DD/slug/assets/
```

### Phase 3: Validation

```
For each migrated post:

1. Verify file exists
2. Validate frontmatter schema
3. Check all image references resolve
4. Verify no broken internal links
5. Generate migration report
```

---

## 🖼️ Image Handling

### Image Sources to Capture

1. **Featured images** - Usually from `og:image` meta tag
2. **Inline images** - All `<img>` tags in post body
3. **CDN images** - Currently on `powerbitips03.blob.core.windows.net`

### Image Processing

```
For each image:

1. Download original
2. Determine type (jpg, png, gif, webp)
3. Generate local path based on post date/slug
4. Optionally optimize (resize, compress)
5. Update MDX to use local path
```

### Image Path Mapping

| Original URL | Local Path |
|-------------|------------|
| `https://powerbitips03.blob.core.windows.net/.../semantic-link.png` | `src/content/blog/2024/07/26/exploring-the-power-of-semantic-link/assets/semantic-link.png` |
| `https://powerbi.tips/wp-content/uploads/2024/07/featured.jpg` | `src/content/blog/2024/07/26/exploring-the-power-of-semantic-link/assets/featured.jpg` |

### Referencing Images in MDX

```mdx
---
title: "My Post"
featuredImage: "./assets/featured.jpg"   # Relative path in frontmatter
---

Content with an inline image:

![Diagram showing the flow](./assets/diagram.png)

Or using Astro's Image component for optimization:

import { Image } from 'astro:assets';
import diagram from './assets/diagram.png';

<Image src={diagram} alt="Diagram" />
```

---

## 🤖 AI-Friendly Conventions

### Finding a Post by URL

```
URL: /2024/07/26/exploring-the-power-of-semantic-link/

Content: src/content/blog/2024/07/26/exploring-the-power-of-semantic-link/index.mdx
Images:  src/content/blog/2024/07/26/exploring-the-power-of-semantic-link/assets/
```

### Creating a New Post

```
1. Determine the publish date (e.g., 2026-02-03)
2. Create slug from title (lowercase, hyphens)
3. Create folder: src/content/blog/2026/02/03/my-new-post/
4. Create subfolder: src/content/blog/2026/02/03/my-new-post/assets/
5. Add index.mdx with frontmatter template
6. Add images to the assets/ folder
7. Reference images with relative paths: ./assets/image.png
```

### Editing an Existing Post

```
1. URL tells you the path: /2024/07/26/post-slug/ 
   → src/content/blog/2024/07/26/post-slug/index.mdx

2. Edit the MDX file

3. If adding images, place in the same folder's assets/ subfolder:
   → src/content/blog/2024/07/26/post-slug/assets/

4. Reference with relative path: ./assets/new-image.png
```

### Frontmatter Field Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Post title |
| `date` | string | ✅ | Publish date (YYYY-MM-DD) |
| `slug` | string | ✅ | URL slug |
| `authors` | array | ✅ | Author objects with name/slug |
| `categories` | array | ❌ | Category names |
| `tags` | array | ❌ | Tag names |
| `featuredImage` | string | ❌ | Path to featured image |
| `featuredImageAlt` | string | ❌ | Alt text for featured image |
| `excerpt` | string | ❌ | Short description |
| `seoTitle` | string | ❌ | Custom SEO title |
| `seoDescription` | string | ❌ | Custom meta description |

---

## 📋 Migration Checklist

### Pre-Migration
- [ ] Set up local dev environment
- [ ] Backup existing project
- [ ] Create migration script folder
- [ ] Test with single post first

### During Migration
- [ ] Parse all sitemaps
- [ ] Scrape all blog posts (~200)
- [ ] Scrape all static pages (~19)
- [ ] Download all images
- [ ] Convert to MDX
- [ ] Validate all files

### Post-Migration
- [ ] Test build (`npm run build`)
- [ ] Test local preview
- [ ] Check random sample of posts
- [ ] Verify all images load
- [ ] Check internal links
- [ ] Update navigation if needed
- [ ] Set up redirects for changed URLs (if any)

---

## 🛠️ Scraper Script Location

```
powerbi-tips-site/
├── scripts/
│   └── migrate/
│       ├── index.ts              # Main migration runner
│       ├── sitemap-parser.ts     # Parse WordPress sitemaps
│       ├── content-scraper.ts    # Scrape individual pages
│       ├── image-downloader.ts   # Download and save images
│       ├── html-to-mdx.ts        # Convert HTML to MDX
│       ├── validators.ts         # Validate output
│       └── utils.ts              # Helper functions
```

---

## ⚠️ Edge Cases to Handle

1. **Embedded videos** - YouTube, Vimeo iframes → MDX components
2. **Code blocks** - Preserve language hints
3. **Tables** - HTML tables → Markdown tables
4. **Shortcodes** - WordPress shortcodes → MDX components
5. **Internal links** - Update to relative paths
6. **Special characters** - Proper encoding
7. **Missing images** - Log and skip gracefully
8. **Duplicate slugs** - Add date prefix if needed
9. **Draft posts** - Skip or mark as draft
10. **Redirects** - Handle URL changes

---

## 🚀 Execution Plan

### Option A: Full Automation (Recommended)
1. Build Node.js migration script
2. Run against all URLs
3. Review output
4. Fix edge cases manually

### Option B: Semi-Automated
1. Generate URL list from sitemaps
2. Use AI to process each URL
3. Human review each batch
4. Iterate until complete

### Option C: Hybrid
1. Automated scrape and image download
2. AI-assisted content conversion
3. Human validation

---

## 📊 Progress Tracking

Create `scripts/migrate/progress.json`:

```json
{
  "startedAt": "2026-02-03T20:00:00Z",
  "totalUrls": 219,
  "completed": 0,
  "failed": 0,
  "skipped": 0,
  "posts": [
    {
      "url": "https://powerbi.tips/2024/07/26/exploring-the-power-of-semantic-link/",
      "status": "completed",
      "outputPath": "src/content/blog/2024/07/26/exploring-the-power-of-semantic-link/index.mdx",
      "imagesDownloaded": 5,
      "processedAt": "2026-02-03T20:05:00Z"
    }
  ]
}
```

---

## Next Steps

1. **Review this plan** - Let me know if anything needs adjustment
2. **Approve approach** - Confirm folder structure and MDX format
3. **Build scraper** - I'll create the migration scripts
4. **Test run** - Migrate 5-10 posts as a test
5. **Full migration** - Run the complete migration
6. **Validation** - Review and fix any issues

Ready to start building the scraper?
