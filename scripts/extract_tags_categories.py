#!/usr/bin/env python3
"""
Extract tags and categories from legacy HTML files and update blog post frontmatter.
Uses surgical edits to preserve original formatting.
"""

import os
import re
import html
from pathlib import Path
from datetime import datetime

# Paths
BLOG_DIR = Path("/home/mikecarlo/projects/powerbi-tips-site/src/content/blog")
LEGACY_HTML_DIR = Path("/home/mikecarlo/projects/powerbi-tips-site/legacy-mirror/html")

# Stats
stats = {
    "posts_processed": 0,
    "tags_updated": 0,
    "categories_updated": 0,
    "no_legacy_match": 0,
    "already_has_tags": 0,
    "already_has_categories": 0,
    "errors": []
}


def slugify(text):
    """Convert text to a slug."""
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text.strip('-')


def title_case_from_slug(slug):
    """Convert slug to Title Case."""
    # Handle special cases
    special = {
        'power-bi': 'Power BI',
        'powerbi': 'Power BI',
        'dax': 'DAX',
        'm': 'M',
        'sql': 'SQL',
        'api': 'API',
        'bi': 'BI',
        'csv': 'CSV',
        'q&a': 'Q&A',
        'qa': 'Q&A',
        'ai': 'AI',
    }
    
    words = slug.replace('-', ' ').split()
    result = []
    for word in words:
        if word.lower() in special:
            result.append(special[word.lower()])
        else:
            result.append(word.title())
    return ' '.join(result)


def extract_tags_from_html(html_content):
    """Extract tags from rel="tag" links."""
    # Pattern: rel="tag">TagName</a>
    pattern = r'rel="tag">([^<]+)</a>'
    matches = re.findall(pattern, html_content)
    
    # Decode HTML entities and clean up
    tags = []
    for tag in matches:
        decoded = html.unescape(tag).strip()
        if decoded and decoded not in tags:
            tags.append(decoded)
    
    return tags


def extract_categories_from_html(html_content):
    """Extract categories from category URLs."""
    # Pattern: category/category-slug/
    pattern = r'category/([^/"]+)/'
    matches = re.findall(pattern, html_content)
    
    # Convert slugs to Title Case and dedupe
    categories = []
    seen = set()
    for slug in matches:
        # Skip common non-category slugs
        if slug in ['feed', 'page']:
            continue
        
        cat_name = title_case_from_slug(slug)
        if cat_name.lower() not in seen:
            categories.append(cat_name)
            seen.add(cat_name.lower())
    
    return categories


def find_legacy_html(post_date, post_slug):
    """Find matching legacy HTML file."""
    # Legacy format: YYYY_MM_DD_post-slug.html
    date_prefix = post_date.replace('-', '_')
    
    # Try exact match first
    for html_file in LEGACY_HTML_DIR.glob(f"{date_prefix}_*.html"):
        return html_file
    
    # Try with slug matching
    for html_file in LEGACY_HTML_DIR.glob(f"{date_prefix}_*.html"):
        file_slug = html_file.stem[11:]  # Remove date prefix
        if slugify(post_slug) in slugify(file_slug) or slugify(file_slug) in slugify(post_slug):
            return html_file
    
    return None


def format_yaml_array(items, indent=2):
    """Format items as YAML array."""
    lines = []
    for item in items:
        # Quote strings that might have special chars
        lines.append(' ' * indent + f'- "{item}"')
    return '\n'.join(lines)


def has_empty_tags(content):
    """Check if tags field is empty."""
    # Match tags: [] or tags:\n followed by non-list content
    if re.search(r'^tags:\s*\[\s*\]\s*$', content, re.MULTILINE):
        return True
    # Match tags: followed by newline and then a non-dash line
    match = re.search(r'^tags:\s*$\n(?!\s*-)', content, re.MULTILINE)
    if match:
        return True
    return False


def has_empty_categories(content):
    """Check if categories field is empty."""
    if re.search(r'^categories:\s*\[\s*\]\s*$', content, re.MULTILINE):
        return True
    match = re.search(r'^categories:\s*$\n(?!\s*-)', content, re.MULTILINE)
    if match:
        return True
    return False


def update_field(content, field_name, values):
    """Update a frontmatter field with new values."""
    yaml_array = format_yaml_array(values)
    new_field = f'{field_name}:\n{yaml_array}'
    
    # Pattern 1: field: []
    pattern1 = re.compile(rf'^{field_name}:\s*\[\s*\]\s*$', re.MULTILINE)
    if pattern1.search(content):
        return pattern1.sub(new_field, content)
    
    # Pattern 2: field: (empty, followed by newline)
    pattern2 = re.compile(rf'^{field_name}:\s*$', re.MULTILINE)
    if pattern2.search(content):
        return pattern2.sub(new_field, content)
    
    return content


def update_post(post_path):
    """Update a single post with extracted tags/categories."""
    global stats
    
    # Read the post
    content = post_path.read_text(encoding='utf-8')
    
    # Get date and slug from path
    # Path: .../YYYY/MM/DD/slug/index.md
    parts = post_path.parts
    try:
        year = parts[-5]
        month = parts[-4]
        day = parts[-3]
        slug = parts[-2]
        post_date = f"{year}-{month}-{day}"
    except (IndexError, ValueError):
        stats["errors"].append(f"Failed to parse path: {post_path}")
        return False
    
    # Check if we need to update
    needs_tags = has_empty_tags(content)
    needs_categories = has_empty_categories(content)
    
    if not needs_tags:
        stats["already_has_tags"] += 1
    if not needs_categories:
        stats["already_has_categories"] += 1
    
    if not needs_tags and not needs_categories:
        return False
    
    # Find legacy HTML
    legacy_file = find_legacy_html(post_date, slug)
    
    if legacy_file is None:
        stats["no_legacy_match"] += 1
        return False
    
    # Read legacy HTML
    try:
        html_content = legacy_file.read_text(encoding='utf-8', errors='replace')
    except Exception as e:
        stats["errors"].append(f"Failed to read legacy file {legacy_file}: {e}")
        return False
    
    # Extract tags and categories
    updated = False
    new_content = content
    
    if needs_tags:
        tags = extract_tags_from_html(html_content)
        if tags:
            new_content = update_field(new_content, 'tags', tags)
            stats["tags_updated"] += 1
            updated = True
    
    if needs_categories:
        categories = extract_categories_from_html(html_content)
        if categories:
            new_content = update_field(new_content, 'categories', categories)
            stats["categories_updated"] += 1
            updated = True
    
    if updated:
        post_path.write_text(new_content, encoding='utf-8')
        stats["posts_processed"] += 1
    
    return updated


def main():
    """Main function."""
    print("Starting tag/category extraction...")
    print(f"Blog directory: {BLOG_DIR}")
    print(f"Legacy HTML directory: {LEGACY_HTML_DIR}")
    print()
    
    # Find all blog posts
    posts = list(BLOG_DIR.glob("**/index.md"))
    print(f"Found {len(posts)} blog posts")
    
    # Process each post
    for i, post in enumerate(sorted(posts)):
        if (i + 1) % 50 == 0:
            print(f"Processed {i + 1}/{len(posts)}...")
        
        try:
            update_post(post)
        except Exception as e:
            stats["errors"].append(f"Error processing {post}: {e}")
    
    # Print summary
    print()
    print("=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"Posts updated:        {stats['posts_processed']}")
    print(f"Tags added:           {stats['tags_updated']}")
    print(f"Categories added:     {stats['categories_updated']}")
    print(f"Already had tags:     {stats['already_has_tags']}")
    print(f"Already had categories: {stats['already_has_categories']}")
    print(f"No legacy match:      {stats['no_legacy_match']}")
    print(f"Errors:               {len(stats['errors'])}")
    
    if stats["errors"]:
        print()
        print("Errors:")
        for err in stats["errors"][:20]:
            print(f"  - {err}")
        if len(stats["errors"]) > 20:
            print(f"  ... and {len(stats['errors']) - 20} more")


if __name__ == "__main__":
    main()
