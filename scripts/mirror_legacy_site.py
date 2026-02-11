#!/usr/bin/env python3
"""
Mirror the legacy PowerBI.tips WordPress site locally.
Downloads HTML pages and extracts image URLs for offline reference.
"""

import os
import re
import time
import json
import urllib.request
from pathlib import Path
from urllib.parse import urlparse

# Configuration
LEGACY_SITE = "https://powerbi.tips"
OUTPUT_DIR = Path("/home/mikecarlo/projects/powerbi-tips-site/legacy-mirror")
DELAY_SECONDS = 1  # Be polite to the server

# Create output directories
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
(OUTPUT_DIR / "html").mkdir(exist_ok=True)
(OUTPUT_DIR / "images").mkdir(exist_ok=True)

def get_all_post_urls():
    """Scrape sitemap or known posts to get all URLs."""
    posts = []
    
    # Try the WordPress sitemap first
    sitemap_urls = [
        f"{LEGACY_SITE}/wp-sitemap-posts-post-1.xml",
        f"{LEGACY_SITE}/sitemap.xml",
        f"{LEGACY_SITE}/post-sitemap.xml",
    ]
    
    headers = {"User-Agent": "PowerBI.tips-Mirror/1.0 (local archival)"}
    
    for sitemap_url in sitemap_urls:
        try:
            req = urllib.request.Request(sitemap_url, headers=headers)
            with urllib.request.urlopen(req, timeout=30) as resp:
                text = resp.read().decode('utf-8')
                # Extract URLs from sitemap
                urls = re.findall(r'<loc>(https://powerbi\.tips/\d{4}/\d{2}/\d{2}/[^<]+)</loc>', text)
                if urls:
                    print(f"Found {len(urls)} posts in {sitemap_url}")
                    posts.extend(urls)
                    break
        except Exception as e:
            print(f"Could not fetch {sitemap_url}: {e}")
    
    return list(set(posts))  # Dedupe

def url_to_filepath(url):
    """Convert URL to local filepath."""
    parsed = urlparse(url)
    path = parsed.path.strip("/")
    if not path:
        path = "index"
    return OUTPUT_DIR / "html" / f"{path.replace('/', '_')}.html"

def download_page(url):
    """Download a single page and save it."""
    filepath = url_to_filepath(url)
    
    if filepath.exists():
        print(f"  [skip] Already have: {filepath.name}")
        return filepath
    
    try:
        headers = {"User-Agent": "PowerBI.tips-Mirror/1.0 (local archival)"}
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=30) as resp:
            html = resp.read().decode('utf-8')
        
        filepath.write_text(html, encoding='utf-8')
        print(f"  [saved] {filepath.name}")
        return filepath
        
    except Exception as e:
        print(f"  [error] {url}: {e}")
        return None

def extract_images_from_html(html_path):
    """Extract all blob storage image URLs from saved HTML."""
    if not html_path or not html_path.exists():
        return []
    
    html = html_path.read_text(encoding='utf-8')
    
    # Find all powerbitips blob storage images
    images = re.findall(
        r'https://powerbitips03\.blob\.core\.windows\.net/blobpowerbitips03/wp-content/uploads/[^"<>\s]+\.(?:png|jpg|jpeg|gif)',
        html
    )
    
    # Dedupe and filter out thumbnails
    unique = set()
    for img in images:
        # Skip thumbnail sizes, get original
        clean = re.sub(r'-\d+x\d+\.', '.', img)
        unique.add(clean)
    
    return list(unique)

def download_image(url):
    """Download an image to local storage."""
    parsed = urlparse(url)
    filename = os.path.basename(parsed.path)
    
    # Create subdirectory based on date path
    match = re.search(r'/uploads/(\d{4})/(\d{2})/', url)
    if match:
        subdir = OUTPUT_DIR / "images" / match.group(1) / match.group(2)
    else:
        subdir = OUTPUT_DIR / "images" / "misc"
    
    subdir.mkdir(parents=True, exist_ok=True)
    filepath = subdir / filename
    
    if filepath.exists():
        return filepath
    
    try:
        headers = {"User-Agent": "PowerBI.tips-Mirror/1.0 (local archival)"}
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        
        filepath.write_bytes(data)
        return filepath
        
    except Exception as e:
        print(f"  [img error] {filename}: {e}")
        return None

def create_index(posts_data):
    """Create an index JSON file with all posts and their images."""
    import json
    
    index = {
        "generated_at": time.strftime("%Y-%m-%d %H:%M:%S"),
        "total_posts": len(posts_data),
        "posts": posts_data
    }
    
    index_path = OUTPUT_DIR / "index.json"
    index_path.write_text(json.dumps(index, indent=2))
    print(f"\nIndex saved to {index_path}")

def main():
    print("=" * 60)
    print("PowerBI.tips Legacy Site Mirror")
    print("=" * 60)
    
    # Step 1: Get all post URLs
    print("\n[1/3] Fetching post list from sitemap...")
    post_urls = get_all_post_urls()
    
    if not post_urls:
        print("No posts found! Try manual URL list.")
        return
    
    print(f"Found {len(post_urls)} posts to mirror")
    
    # Step 2: Download all HTML pages
    print("\n[2/3] Downloading HTML pages...")
    posts_data = []
    
    for i, url in enumerate(post_urls, 1):
        print(f"[{i}/{len(post_urls)}] {url}")
        html_path = download_page(url)
        
        images = extract_images_from_html(html_path) if html_path else []
        
        posts_data.append({
            "url": url,
            "html_file": str(html_path) if html_path else None,
            "images": images
        })
        
        time.sleep(DELAY_SECONDS)
    
    # Step 3: Download all images
    print("\n[3/3] Downloading images...")
    all_images = set()
    for post in posts_data:
        all_images.update(post.get("images", []))
    
    print(f"Found {len(all_images)} unique images")
    
    for i, img_url in enumerate(all_images, 1):
        if i % 20 == 0:
            print(f"  Progress: {i}/{len(all_images)}")
        download_image(img_url)
        time.sleep(0.2)  # Smaller delay for images
    
    # Create index
    create_index(posts_data)
    
    print("\n" + "=" * 60)
    print("Mirror complete!")
    print(f"HTML pages: {OUTPUT_DIR / 'html'}")
    print(f"Images: {OUTPUT_DIR / 'images'}")
    print(f"Index: {OUTPUT_DIR / 'index.json'}")
    print("=" * 60)

if __name__ == "__main__":
    main()
