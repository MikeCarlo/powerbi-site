#!/usr/bin/env python3
"""Fetch missing/empty featured images from legacy powerbi.tips pages.

- Finds posts under src/content/blog/**/index.md(x) where featuredImage is missing or empty.
- Sorts newest->oldest by frontmatter date.
- For each, fetches legacy URL based on folder structure /YYYY/MM/DD/slug/.
- Chooses best candidate image from HTML (wp-content/uploads), excluding logos/icons.
- Downloads original to assets/original.<ext>
- Generates assets/featured.png (800x500 padded, no-crop) and assets/thumbnail.png (300x169 padded)
- Updates frontmatter featuredImage to ./assets/featured.png

Requires: python3, requests, pyyaml, ffmpeg, ffprobe
"""

from __future__ import annotations

import argparse
import os
import re
import subprocess
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Optional

import requests
import yaml

ROOT = Path(__file__).resolve().parents[1]
BLOG_ROOT = ROOT / "src/content/blog"

UA = "Mozilla/5.0 (X11; Linux x86_64) OpenClaw/feature-image-migrator"

UPLOADS_RE = re.compile(r"https?://[^\"'\s>]*wp-content/uploads/[^\"'\s>]+", re.I)
SIZE_SUFFIX_RE = re.compile(r"-(\d{2,5})x(\d{2,5})(?=\.[a-z]{3,4}$)", re.I)

EXCLUDE_RE = re.compile(
    r"(logo\d*|favicon|apple-touch-icon|gravatar|sprite|icon|seal|badge|avatar)", re.I
)


@dataclass
class Post:
    dt: datetime
    path: Path
    url: str
    featured_image: Optional[str]


def run(cmd: list[str]) -> str:
    p = subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    return p.stdout.strip()


def ffprobe_dims(path: Path) -> Optional[tuple[int, int]]:
    try:
        out = run(
            [
                "ffprobe",
                "-v",
                "error",
                "-select_streams",
                "v:0",
                "-show_entries",
                "stream=width,height",
                "-of",
                "csv=p=0:s=x",
                str(path),
            ]
        )
        w, h = out.split("x")
        return int(w), int(h)
    except Exception:
        return None


def pick_best_image(urls: list[str], post_dt: datetime) -> Optional[str]:
    """Heuristic chooser.

    Priorities:
    - Prefer uploads that match the post's year/month folder.
    - Prefer filenames that look like featured images (blog/featured/hero/header).
    - Strongly avoid generic promos/merch images (t-shirts/hoodies/store).
    - Prefer original (non -300x169 etc) and larger images.
    """
    candidates = []

    ym = f"/{post_dt.year}/{post_dt.month:02d}/"

    for u in urls:
        if "*" in u:
            continue
        if EXCLUDE_RE.search(u):
            continue

        u = u.replace("\\u0026", "&")
        u_no_q = u.split("?", 1)[0]
        filename = os.path.basename(u_no_q).lower()
        ext = os.path.splitext(filename)[1]
        if ext not in [".png", ".jpg", ".jpeg", ".webp"]:
            continue

        score = 0

        if ym in u_no_q:
            score += 1000

        # common featured patterns
        if any(k in filename for k in ["blog", "featured", "feature", "hero", "header", "banner"]):
            score += 500
        if filename in ["blog.png", "feature-image.png", "featured-image.png", "featured.png"]:
            score += 700

        # hard-avoid merch/promos (these were incorrectly selected for some posts)
        if any(k in filename for k in [
            "store-merch",
            "merch",
            "tshirt",
            "t-shirt",
            "shirt",
            "hoodie",
            "sweatshirt",
            "apparel",
            "swag",
        ]):
            score -= 5000

        if "logo" in filename:
            score -= 1500

        m = SIZE_SUFFIX_RE.search(u_no_q)
        if m:
            area = int(m.group(1)) * int(m.group(2))
            sized = True
        else:
            area = 10**18
            sized = False

        candidates.append((score, area, sized, u))

    if not candidates:
        return None

    candidates.sort(key=lambda t: (t[0], t[1], not t[2]), reverse=True)
    return candidates[0][3]


def legacy_url_for_post(post_path: Path) -> Optional[str]:
    try:
        rel = post_path.parent.relative_to(BLOG_ROOT)
    except Exception:
        return None
    parts = rel.parts
    if len(parts) < 4:
        return None
    return f"https://powerbi.tips/{parts[0]}/{parts[1]}/{parts[2]}/{parts[3]}/"


def read_frontmatter(md: str) -> dict:
    if not md.lstrip().startswith("---"):
        return {}
    parts = md.split("---", 2)
    if len(parts) < 3:
        return {}
    return yaml.safe_load(parts[1]) or {}


def write_frontmatter(md: str, data: dict) -> str:
    if not md.lstrip().startswith("---"):
        raise ValueError("Missing frontmatter")
    parts = md.split("---", 2)
    if len(parts) < 3:
        raise ValueError("Malformed frontmatter")
    body = parts[2]
    fm = yaml.safe_dump(data, sort_keys=False, allow_unicode=True).strip() + "\n"
    return f"---\n{fm}---{body}"


def fetch_html(url: str) -> str:
    r = requests.get(url, headers={"User-Agent": UA}, timeout=30)
    r.raise_for_status()
    return r.text


def download(url: str, out_path: Path) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with requests.get(url, headers={"User-Agent": UA}, stream=True, timeout=60) as r:
        r.raise_for_status()
        with open(out_path, "wb") as f:
            for chunk in r.iter_content(chunk_size=1024 * 256):
                if chunk:
                    f.write(chunk)


def make_derivatives(src_path: Path, featured_path: Path, thumb_path: Path) -> None:
    featured_path.parent.mkdir(parents=True, exist_ok=True)

    # featured 800x500 no-crop + white padding
    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-i",
            str(src_path),
            "-vf",
            "scale=800:500:force_original_aspect_ratio=decrease,pad=800:500:(ow-iw)/2:(oh-ih)/2:color=white",
            str(featured_path),
        ],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )

    # thumbnail 300x169 no-crop + white padding
    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-i",
            str(src_path),
            "-vf",
            "scale=300:169:force_original_aspect_ratio=decrease,pad=300:169:(ow-iw)/2:(oh-ih)/2:color=white",
            str(thumb_path),
        ],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )


def gather_posts(force: bool = False, only: Optional[list[str]] = None) -> list[Post]:
    posts: list[Post] = []
    only = only or []

    for p in list(BLOG_ROOT.rglob("index.md")) + list(BLOG_ROOT.rglob("index.mdx")):
        # optional filter for targeted re-scrapes
        if only and not any(s in str(p) for s in only):
            continue

        txt = p.read_text(encoding="utf-8", errors="ignore")
        fm = read_frontmatter(txt)
        if not fm:
            continue
        date = fm.get("date")
        try:
            dt = datetime.fromisoformat(str(date)[:10])
        except Exception:
            continue

        fi = fm.get("featuredImage")
        needs = fi is None or (isinstance(fi, str) and fi.strip() == "")
        if force or needs:
            url = legacy_url_for_post(p)
            if url:
                posts.append(Post(dt=dt, path=p, url=url, featured_image=fi))

    posts.sort(key=lambda x: x.dt, reverse=True)
    return posts


def process_post(post: Post, dry_run: bool = False) -> tuple[bool, str]:
    md = post.path.read_text(encoding="utf-8", errors="ignore")
    fm = read_frontmatter(md)

    html = fetch_html(post.url)
    urls = sorted(set(UPLOADS_RE.findall(html)))

    best = pick_best_image(urls, post.dt)
    if not best:
        return False, f"no uploads image found"

    # pick extension
    ext = os.path.splitext(best.split("?")[0])[1].lower()
    if ext not in [".png", ".jpg", ".jpeg", ".webp"]:
        ext = ".jpg"

    assets = post.path.parent / "assets"
    original = assets / f"original{ext}"
    featured = assets / "featured.png"
    thumb = assets / "thumbnail.png"

    if dry_run:
        return True, f"would use {best}"

    download(best, original)

    # sanity check: if tiny (like 300x169), try to find a larger sibling by stripping -WxH
    dims = ffprobe_dims(original)
    if dims and dims[0] <= 400 and dims[1] <= 400:
        # attempt original variant
        m = SIZE_SUFFIX_RE.search(best.split("?")[0])
        if m:
            larger = SIZE_SUFFIX_RE.sub("", best.split("?")[0])
            try:
                download(larger, original)
                best = larger
            except Exception:
                pass

    make_derivatives(original, featured, thumb)

    fm["featuredImage"] = "./assets/featured.png"
    updated = write_frontmatter(md, fm)
    post.path.write_text(updated, encoding="utf-8")

    return True, f"set featuredImage from {best}"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=20)
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument(
        "--force",
        action="store_true",
        help="Process posts even if featuredImage is already set (use with --only for targeted re-scrapes)",
    )
    ap.add_argument(
        "--only",
        action="append",
        default=[],
        help="Only process posts whose path contains this substring (repeatable)",
    )
    args = ap.parse_args()

    posts = gather_posts(force=args.force, only=args.only)
    if args.force:
        print(f"Found {len(posts)} posts (force mode)")
    else:
        print(f"Found {len(posts)} posts missing/empty featuredImage")

    ok = 0
    for i, post in enumerate(posts[: args.limit], 1):
        try:
            success, msg = process_post(post, dry_run=args.dry_run)
            status = "OK" if success else "SKIP"
        except Exception as e:
            success, msg = False, str(e)
            status = "ERR"
        print(f"{i:02d}. {post.dt.date()} {post.path} -> {status}: {msg}")
        if success:
            ok += 1

    print(f"Done. successful={ok}/{min(args.limit, len(posts))}")


if __name__ == "__main__":
    main()
