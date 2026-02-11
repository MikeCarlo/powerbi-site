#!/bin/bash

# Script to add featured images from legacy mirror to blog posts
# Standards:
# - Featured image: 800x500 PNG
# - Thumbnail: 300x169 PNG
# - Use ffmpeg with white padding (no cropping)

BLOG_DIR="/home/mikecarlo/projects/powerbi-tips-site/src/content/blog"
LEGACY_HTML="/home/mikecarlo/projects/powerbi-tips-site/legacy-mirror/html"
LEGACY_IMAGES="/home/mikecarlo/projects/powerbi-tips-site/legacy-mirror/images"
LOG_FILE="/home/mikecarlo/projects/powerbi-tips-site/featured-images-log.txt"

SUCCESS_COUNT=0
FAIL_COUNT=0
SKIP_COUNT=0

echo "Starting featured image processing at $(date)" > "$LOG_FILE"

# Function to convert image to featured format with white padding
convert_image() {
    local src="$1"
    local dest="$2"
    local width="$3"
    local height="$4"
    
    # Use ffmpeg to scale and pad with white background (no cropping)
    ffmpeg -y -i "$src" \
        -vf "scale='min($width,iw*$height/ih)':'min($height,ih*$width/iw)',pad=$width:$height:(ow-iw)/2:(oh-ih)/2:white" \
        -update 1 "$dest" 2>/dev/null
    
    return $?
}

# Process each post directory
process_post() {
    local post_dir="$1"
    
    # Extract relative path from blog dir (e.g., 2016/03/29/slug)
    local rel_path="${post_dir#$BLOG_DIR/}"
    
    # Extract date parts from relative path
    local year=$(echo "$rel_path" | cut -d'/' -f1)
    local month=$(echo "$rel_path" | cut -d'/' -f2)
    local day=$(echo "$rel_path" | cut -d'/' -f3)
    local slug=$(echo "$rel_path" | cut -d'/' -f4)
    local date_path="$year/$month/$day"
    
    # Skip if already has featured image (assets are directly in post_dir)
    if [ -f "$post_dir/assets/featured.png" ] || [ -f "$post_dir/assets/featured.jpg" ] || [ -f "$post_dir/assets/featured.webp" ]; then
        echo "SKIP: $date_path/$slug - already has featured image" >> "$LOG_FILE"
        ((SKIP_COUNT++))
        return
    fi
    
    # Find matching legacy HTML file
    local html_pattern="${year}_${month}_${day}_*.html"
    local html_file=$(ls "$LEGACY_HTML"/$html_pattern 2>/dev/null | head -1)
    
    if [ -z "$html_file" ]; then
        echo "FAIL: $date_path - no legacy HTML found" >> "$LOG_FILE"
        ((FAIL_COUNT++))
        return
    fi
    
    # Extract featured image URL from HTML (look for wp-post-image class)
    local img_url=$(grep -oP '<figure[^>]*wp-block-post-featured-image[^>]*>.*?<img[^>]*src="[^"]*"' "$html_file" | grep -oP 'src="[^"]*"' | head -1 | sed 's/src="//;s/"$//')
    
    if [ -z "$img_url" ]; then
        # Try alternate pattern - just look for wp-post-image
        img_url=$(grep -oP '<img[^>]*class="[^"]*wp-post-image[^"]*"[^>]*src="[^"]*"' "$html_file" | grep -oP 'src="[^"]*"' | head -1 | sed 's/src="//;s/"$//')
    fi
    
    if [ -z "$img_url" ]; then
        # Try src before class pattern
        img_url=$(grep -oP '<img[^>]*src="[^"]*"[^>]*class="[^"]*wp-post-image' "$html_file" | grep -oP 'src="[^"]*"' | head -1 | sed 's/src="//;s/"$//')
    fi
    
    if [ -z "$img_url" ]; then
        echo "FAIL: $date_path - no featured image URL found in HTML" >> "$LOG_FILE"
        ((FAIL_COUNT++))
        return
    fi
    
    # Extract filename from URL 
    # URL format: https://powerbitips03.blob.core.windows.net/blobpowerbitips03/wp-content/uploads/YYYY/MM/filename.ext
    local img_path=$(echo "$img_url" | grep -oP 'wp-content/uploads/\K[0-9]+/[0-9]+/[^"?]+' | head -1)
    
    if [ -z "$img_path" ]; then
        echo "FAIL: $date_path - couldn't parse image path from URL: $img_url" >> "$LOG_FILE"
        ((FAIL_COUNT++))
        return
    fi
    
    local local_img="$LEGACY_IMAGES/$img_path"
    
    if [ ! -f "$local_img" ]; then
        # Try to download it
        echo "INFO: $date_path - downloading image from $img_url" >> "$LOG_FILE"
        local temp_img="/tmp/featured_$(date +%s).png"
        if curl -sL "$img_url" -o "$temp_img" 2>/dev/null; then
            local_img="$temp_img"
        else
            echo "FAIL: $date_path - image not found locally and download failed: $local_img" >> "$LOG_FILE"
            ((FAIL_COUNT++))
            return
        fi
    fi
    
    # Create assets directory (inside the slug folder, where index.md is)
    local assets_dir="$post_dir/assets"
    mkdir -p "$assets_dir"
    
    # Convert to featured image (800x500)
    if convert_image "$local_img" "$assets_dir/featured.png" 800 500; then
        # Convert to thumbnail (300x169)
        if convert_image "$local_img" "$assets_dir/thumbnail.png" 300 169; then
            echo "SUCCESS: $date_path - created featured.png and thumbnail.png" >> "$LOG_FILE"
            ((SUCCESS_COUNT++))
        else
            echo "FAIL: $date_path - failed to create thumbnail" >> "$LOG_FILE"
            rm -f "$assets_dir/featured.png"
            ((FAIL_COUNT++))
        fi
    else
        echo "FAIL: $date_path - failed to create featured image" >> "$LOG_FILE"
        ((FAIL_COUNT++))
    fi
    
    # Cleanup temp file if used
    [ -f "/tmp/featured_*.png" ] && rm -f /tmp/featured_*.png
}

# Main processing loop - 2016-2020
for year in 2016 2017 2018 2019 2020; do
    for post_dir in "$BLOG_DIR/$year"/*/*/*; do
        if [ -d "$post_dir" ]; then
            process_post "$post_dir"
        fi
    done
done

echo "" >> "$LOG_FILE"
echo "========================================" >> "$LOG_FILE"
echo "Processing complete at $(date)" >> "$LOG_FILE"
echo "SUCCESS: $SUCCESS_COUNT" >> "$LOG_FILE"
echo "FAILED: $FAIL_COUNT" >> "$LOG_FILE"
echo "SKIPPED: $SKIP_COUNT" >> "$LOG_FILE"

echo "Done! SUCCESS: $SUCCESS_COUNT, FAILED: $FAIL_COUNT, SKIPPED: $SKIP_COUNT"
echo "See $LOG_FILE for details"
