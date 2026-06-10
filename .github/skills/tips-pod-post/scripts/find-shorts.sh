#!/bin/bash
# find-shorts.sh - Find YouTube Shorts for a podcast episode
# Usage: ./find-shorts.sh <episode_number>
#
# Searches for shorts with the episode number prefix (e.g., "501:")
# from the PowerBI.tips channel, sorted by view count.
#
# Requires: yt-dlp

set -e

EPISODE_NUM="$1"
CHANNEL_URL="https://www.youtube.com/@PowerBITips/shorts"
MAX_RESULTS=10
OUTPUT_COUNT=3

if [ -z "$EPISODE_NUM" ]; then
    echo "Usage: $0 <episode_number>"
    echo "Example: $0 501"
    exit 1
fi

echo "Searching for shorts matching '${EPISODE_NUM}:'..."
echo ""

# Search for shorts from the channel
# Note: YouTube search doesn't perfectly filter by title prefix,
# so we search and then grep for matches

yt-dlp --flat-playlist \
    --print "%(view_count)s|%(id)s|%(title)s" \
    --playlist-end 50 \
    --match-filter "title~='${EPISODE_NUM}:'" \
    "$CHANNEL_URL" 2>/dev/null | \
    sort -t'|' -k1 -nr | \
    head -n "$OUTPUT_COUNT" | \
    while IFS='|' read -r views id title; do
        # Format view count
        if [ "$views" -ge 1000000 ]; then
            views_fmt="$(echo "scale=1; $views/1000000" | bc)M"
        elif [ "$views" -ge 1000 ]; then
            views_fmt="$(echo "scale=1; $views/1000" | bc)K"
        else
            views_fmt="$views"
        fi
        
        echo "[$views_fmt views] $title"
        echo "  https://youtube.com/shorts/$id"
        echo "  Embed: https://www.youtube.com/embed/$id"
        echo ""
    done

echo "---"
echo "Top $OUTPUT_COUNT shorts shown. Use video IDs for embedding."
