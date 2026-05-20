export type AgenticEpisode = {
  url: string;
  episodeNumber: number;
  title: string;
  meta: string; // e.g. "46:51 · power bi, microsoft fabric, data platform"
};

function decodeEntities(s: string) {
  return s
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

/**
 * Fetches episode list from https://agenticthinking.show/episodes/ and parses the HTML.
 *
 * We intentionally keep the parsing limited to the <div class="ep-list"> section
 * to avoid scanning the entire page.
 */
export async function fetchAgenticThinkingEpisodes(): Promise<AgenticEpisode[]> {
  const res = await fetch('https://agenticthinking.show/episodes/', {
    headers: {
      'user-agent': 'powerbi.tips build (agentic-thinking episodes fetch)',
    },
  });

  if (!res.ok) {
    throw new Error(`Agentic Thinking episodes fetch failed: ${res.status}`);
  }

  const html = await res.text();

  const start = html.indexOf('<div class="ep-list">');
  if (start < 0) return [];

  const end = html.indexOf('</div></div></div>', start);
  const section = html.slice(start, end > start ? end : start + 200_000);

  const re =
    /<a href="([^"]+)" class="ep-row">\s*<span class="ep-row__n">(\d+)<\/span>\s*<span><div class="ep-row__title">([^<]+)<\/div><div class="ep-row__meta">([\s\S]*?)<\/div><\/span>/g;

  const episodes: AgenticEpisode[] = [];
  let m: RegExpExecArray | null;

  while ((m = re.exec(section)) !== null) {
    const urlPath = m[1];
    const episodeNumber = Number.parseInt(m[2]!, 10);
    const title = decodeEntities(m[3]!).trim();
    const meta = m[4]!
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    episodes.push({
      url: `https://agenticthinking.show${urlPath}`,
      episodeNumber,
      title,
      meta,
    });
  }

  episodes.sort((a, b) => b.episodeNumber - a.episodeNumber);
  return episodes;
}
