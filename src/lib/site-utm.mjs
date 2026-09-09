/** Hosts that should receive site referral UTMs. Not powerbi.tips itself. */
export const SITE_UTM_HOSTS = new Set(['tools.powerbi.tips', 'themes.powerbi.tips']);

export const SITE_UTM_DEFAULTS = {
  utm_source: 'powerbi.tips',
  utm_medium: 'referral',
  utm_campaign: 'site',
};

/**
 * Merge site UTMs onto a tools/themes.powerbi.tips URL.
 * Existing query params are kept. Site UTM keys are filled only when absent
 * so podcast/campaign tracking (e.g. utm_source=videoDesc) is not overwritten.
 *
 * @param {string} url
 * @param {string} [content]
 * @returns {string}
 */
export function withSiteUtm(url, content) {
  if (!url || typeof url !== 'string') return url;

  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return url;
  }

  if (!SITE_UTM_HOSTS.has(parsed.hostname.toLowerCase())) return url;

  for (const [key, value] of Object.entries(SITE_UTM_DEFAULTS)) {
    if (!parsed.searchParams.has(key)) {
      parsed.searchParams.set(key, value);
    }
  }

  if (content && !parsed.searchParams.has('utm_content')) {
    parsed.searchParams.set('utm_content', content);
  }

  return parsed.toString();
}

/**
 * Short utm_content from a content-collection or page file path.
 * Blog posts use the post slug; everything else falls back to `blog`.
 *
 * @param {string} filePath
 * @returns {string}
 */
export function utmContentFromFilePath(filePath) {
  const normalized = String(filePath || '').replaceAll('\\', '/');
  const blogMatch = normalized.match(/content\/blog\/\d{4}\/\d{2}\/\d{2}\/([^/]+)/);
  if (blogMatch?.[1]) return blogMatch[1];
  return 'blog';
}
