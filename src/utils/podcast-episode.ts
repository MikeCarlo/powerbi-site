/**
 * Helpers for Explicit Measures episode pages.
 *
 * A post is an "episode" only when it is in the Podcast category AND either
 * its title carries an episode number (Ep.573, Ep 573) or its body has the
 * standard "## Episode Transcript" heading. Podcast-category posts that are
 * not episodes (announcements, write-ups) keep the generic article treatment.
 */

export const SPOTIFY_SHOW_URL = 'https://open.spotify.com/show/230fp78XmHHRXTiYICRLVv';
export const APPLE_PODCASTS_URL = 'https://podcasts.apple.com/us/podcast/explicit-measures-podcast/id1568944083';
export const AGENTIC_THINKING_URL = 'https://agenticthinking.show/';

const EPISODE_NUMBER = /Ep\.?\s*(\d+)/;
const TRANSCRIPT_HEADING = /^##\s+Episode Transcript\s*$/m;

export function isPodcastEpisode(title: string, categories: string[] = [], body = ''): boolean {
  if (!categories.includes('Podcast')) return false;
  return EPISODE_NUMBER.test(title) || TRANSCRIPT_HEADING.test(body);
}

export function episodeNumberFromTitle(title: string): number | undefined {
  const match = title.match(EPISODE_NUMBER);
  return match ? Number(match[1]) : undefined;
}

/**
 * First YouTube video id in the body. Embeds (youtube.com/embed/,
 * youtube-nocookie.com/embed/) win over youtu.be/ share links, because news
 * bullets can link other videos with youtu.be before the episode embed.
 */
export function youtubeIdFromBody(body: string): string | undefined {
  const embed = body.match(/youtube(?:-nocookie)?\.com\/embed\/([A-Za-z0-9_-]{11})/);
  if (embed) return embed[1];
  const short = body.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
  return short ? short[1] : undefined;
}

export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//.test(url);
}
