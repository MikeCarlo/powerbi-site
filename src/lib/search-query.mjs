/**
 * Search syntax for the Pagefind-backed search page.
 *
 * Pagefind treats a query as an exact phrase only when the entire string
 * matches /^\s*".+"\s*$/ (see PagefindInstance.search). Quotes anywhere else
 * are stripped as punctuation, and "-" is not an exclusion operator. Quoted
 * phrases are therefore searched on their own and intersected with unquoted
 * terms. Exclusions are applied to the loaded page text.
 */

const FANCY_QUOTES = /[\u201C\u201D\u201E\u00AB\u00BB\u2033]/g;
const FANCY_DASHES = /[\u2010\u2011\u2012\u2013\u2014\u2212]/g;
const TOKEN = /(-)?(?:"([^"]+)"|(\S+))/g;

/**
 * @param {string} query
 * @returns {{
 *   includeTerms: string[],
 *   includePhrases: string[],
 *   excludeTerms: string[],
 *   excludePhrases: string[],
 * }}
 */
export function parseSearchQuery(query) {
  const includeTerms = [];
  const includePhrases = [];
  const excludeTerms = [];
  const excludePhrases = [];
  const normalized = String(query ?? '')
    .replace(FANCY_QUOTES, '"')
    .replace(FANCY_DASHES, '-');

  for (const match of normalized.matchAll(TOKEN)) {
    const phrase = match[2]?.replace(/\s+/g, ' ').trim();
    const word = match[3]?.trim();
    const exclude = Boolean(match[1]);
    if (phrase) (exclude ? excludePhrases : includePhrases).push(phrase);
    else if (word) (exclude ? excludeTerms : includeTerms).push(word);
  }

  return { includeTerms, includePhrases, excludeTerms, excludePhrases };
}

/** @param {string} value */
export function normalizeSearchText(value) {
  return value
    .replace(/\u200B/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLocaleLowerCase('en');
}

/**
 * Text fields that can contain a real phrase. Each field is tested on its
 * own so a phrase cannot be formed by joining the title to the body.
 * Pagefind's `content` is a string; an array of chunks is checked per item.
 *
 * @param {any} data
 * @returns {string[]}
 */
export function searchableParts(data) {
  /** @type {string[]} */
  const parts = [];
  const push = (value) => {
    if (Array.isArray(value)) {
      value.forEach(push);
      return;
    }
    if (typeof value === 'string' && value.trim()) parts.push(normalizeSearchText(value));
  };

  const meta = data?.meta;
  if (meta && typeof meta === 'object') {
    for (const [key, value] of Object.entries(meta)) {
      if (key === 'image' || key === 'url') continue;
      push(value);
    }
  }

  if (typeof data?.content === 'string' || Array.isArray(data?.content)) push(data.content);
  else push(data?.raw_content);

  return parts;
}

/**
 * Contiguous, case-insensitive phrase (or word) match against one field.
 * @param {string[]} parts
 * @param {string} phrase
 */
export function partsContainPhrase(parts, phrase) {
  const needle = normalizeSearchText(phrase);
  if (!needle) return false;
  return parts.some((part) => part.includes(needle));
}

/**
 * @param {any} data
 * @param {ReturnType<typeof parseSearchQuery>} parsed
 */
export function documentMatchesQuery(data, parsed) {
  const parts = searchableParts(data);
  const included =
    parsed.includeTerms.every((term) => partsContainPhrase(parts, term)) &&
    parsed.includePhrases.every((phrase) => partsContainPhrase(parts, phrase));
  const excluded =
    parsed.excludeTerms.some((term) => partsContainPhrase(parts, term)) ||
    parsed.excludePhrases.some((phrase) => partsContainPhrase(parts, phrase));
  return included && !excluded;
}

/**
 * @param {{ search: (term: string) => Promise<{ results: any[] }> }} pagefind
 * @param {string} query
 * @returns {Promise<{ results: any[], needsTerm: boolean }>}
 */
export async function searchWithSyntax(pagefind, query) {
  const parsed = parseSearchQuery(query);
  if (!parsed.includeTerms.length && !parsed.includePhrases.length) {
    return { results: [], needsTerm: true };
  }

  /** @type {{ kind: 'terms' | 'phrase', response: { results: any[] } }[]} */
  const responses = [];
  if (parsed.includeTerms.length) {
    responses.push({
      kind: 'terms',
      response: await pagefind.search(parsed.includeTerms.join(' ')),
    });
  }
  for (const phrase of parsed.includePhrases) {
    // The surrounding quotes are what flip Pagefind into exact_search.
    responses.push({
      kind: 'phrase',
      response: await pagefind.search(`"${phrase}"`),
    });
  }

  /** @type {Map<string, { kind: 'terms' | 'phrase', result: any }>} */
  const chosen = new Map();
  /** @type {Set<string> | null} */
  let idSet = null;

  for (const { kind, response } of responses) {
    const ids = new Set(response.results.map((result) => result.id));
    for (const result of response.results) {
      if (idSet !== null && !idSet.has(result.id)) continue;
      const previous = chosen.get(result.id);
      const phraseReplacesTerms = kind === 'phrase' && previous?.kind !== 'phrase';
      const betterScore = previous?.kind === kind && result.score > previous.result.score;
      if (!previous || phraseReplacesTerms || betterScore) {
        chosen.set(result.id, { kind, result });
      }
    }
    idSet = idSet === null ? ids : new Set([...idSet].filter((id) => ids.has(id)));
  }

  const ordered = [...(idSet ?? [])]
    .map((id) => chosen.get(id)?.result)
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);

  const loaded = await Promise.all(ordered.map((result) => result.data()));
  return {
    results: loaded.filter((data) => documentMatchesQuery(data, parsed)),
    needsTerm: false,
  };
}
