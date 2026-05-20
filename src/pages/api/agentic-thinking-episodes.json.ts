export const prerender = true;

/**
 * Agentic Thinking episode list (scraped from agenticthinking.show).
 *
 * Notes:
 * - The upstream site doesn't currently expose a stable public RSS/feed endpoint.
 * - We fetch + parse the /episodes/ HTML at build-time.
 * - This endpoint is prerendered into a static JSON file on deploy.
 */

import { fetchAgenticThinkingEpisodes } from '../../lib/agenticThinkingEpisodes';

export async function GET() {
  const episodes = await fetchAgenticThinkingEpisodes();

  return new Response(JSON.stringify({
    source: 'https://agenticthinking.show/episodes/',
    fetchedAt: new Date().toISOString(),
    count: episodes.length,
    episodes,
  }), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      // static asset; safe to cache aggressively
      'cache-control': 'public, max-age=3600',
    },
  });
}
