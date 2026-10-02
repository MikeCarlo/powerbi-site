import assert from 'node:assert/strict';
import test from 'node:test';
import { documentMatchesQuery, parseSearchQuery, searchWithSyntax } from './search-query.mjs';

test('parseSearchQuery keeps a quoted phrase intact', () => {
  assert.deepEqual(parseSearchQuery('"creator agent"'), {
    includeTerms: [],
    includePhrases: ['creator agent'],
    excludeTerms: [],
    excludePhrases: [],
  });
});

test('parseSearchQuery accepts curly quotes and a unicode exclusion dash', () => {
  assert.deepEqual(parseSearchQuery('fabric \u201Csemantic model\u201D \u2011"Power BI Desktop"'), {
    includeTerms: ['fabric'],
    includePhrases: ['semantic model'],
    excludeTerms: [],
    excludePhrases: ['Power BI Desktop'],
  });
});

test('parseSearchQuery splits the documented mixed syntax', () => {
  assert.deepEqual(parseSearchQuery('fabric "semantic model" -"Power BI Desktop"'), {
    includeTerms: ['fabric'],
    includePhrases: ['semantic model'],
    excludeTerms: [],
    excludePhrases: ['Power BI Desktop'],
  });
});

test('a lone exclusion has no include clause', () => {
  const parsed = parseSearchQuery('-"Power BI Desktop"');
  assert.equal(parsed.includeTerms.length, 0);
  assert.equal(parsed.includePhrases.length, 0);
  assert.deepEqual(parsed.excludePhrases, ['Power BI Desktop']);
});

test('phrase match is contiguous and does not join separate fields', () => {
  const parsed = parseSearchQuery('"creator agent"');
  const loose = {
    meta: { title: 'Notes from the creator' },
    content: 'Agents and Agentic workflows mention an agent.',
  };
  const splitFields = {
    meta: { title: 'creator' },
    content: 'agent',
  };
  const phrase = {
    meta: { title: 'Slow AI Adoption' },
    content: 'She is becoming a creator agent. Later the page says Agents.',
  };
  const chunks = {
    content: ['talks about Agents', 'the creator agent pattern'],
  };

  assert.equal(documentMatchesQuery(loose, parsed), false);
  assert.equal(documentMatchesQuery(splitFields, parsed), false);
  assert.equal(documentMatchesQuery(phrase, parsed), true);
  assert.equal(documentMatchesQuery(chunks, parsed), true);
});

test('exclusion removes a page that contains the phrase', () => {
  const parsed = parseSearchQuery('fabric "semantic model" -"Power BI Desktop"');
  const kept = {
    meta: { title: 'Fabric notes' },
    content: 'Fabric hosts a semantic model for the team.',
  };
  const dropped = {
    meta: { title: 'Desktop' },
    content: 'Build a semantic model in Fabric with Power BI Desktop.',
  };
  assert.equal(documentMatchesQuery(kept, parsed), true);
  assert.equal(documentMatchesQuery(dropped, parsed), false);
});

test('searchWithSyntax uses Pagefind exact search and intersects exclusions', async () => {
  /** @type {string[]} */
  const calls = [];
  const pages = {
    phrase: {
      id: 'phrase',
      score: 2,
      data: async () => ({
        url: '/phrase/',
        meta: { title: 'Phrase hit' },
        content: 'Use Fabric and a creator agent to build the workflow.',
        excerpt: 'Use Fabric and a <mark>creator agent</mark> to build the workflow.',
      }),
    },
    loose: {
      id: 'loose',
      score: 9,
      data: async () => ({
        url: '/loose/',
        meta: { title: 'Loose agent hit' },
        content: 'Agents and Agentic tools only.',
        excerpt: '<mark>Agents</mark> and <mark>Agentic</mark> tools only.',
      }),
    },
    excluded: {
      id: 'excluded',
      score: 5,
      data: async () => ({
        url: '/excluded/',
        meta: { title: 'Excluded' },
        content: 'A creator agent inside Power BI Desktop.',
        excerpt: 'A <mark>creator agent</mark> inside Power BI Desktop.',
      }),
    },
  };

  const pagefind = {
    async search(term) {
      calls.push(term);
      if (term === '"creator agent"') return { results: [pages.phrase, pages.excluded] };
      if (term === '"Power BI Desktop"') return { results: [] };
      if (term === 'fabric') return { results: [pages.phrase, pages.loose, pages.excluded] };
      return { results: [] };
    },
  };

  const exact = await searchWithSyntax(pagefind, '"creator agent"');
  assert.deepEqual(calls, ['"creator agent"']);
  assert.deepEqual(exact.results.map((item) => item.url), ['/excluded/', '/phrase/']);
  assert.match(exact.results[0].excerpt, /creator agent/);

  calls.length = 0;
  const mixed = await searchWithSyntax(pagefind, 'fabric "creator agent" -"Power BI Desktop"');
  assert.deepEqual(calls, ['fabric', '"creator agent"']);
  assert.deepEqual(mixed.results.map((item) => item.url), ['/phrase/']);
  assert.equal(mixed.results[0].excerpt.includes('Agents'), false);
});
