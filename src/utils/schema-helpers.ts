/**
 * Shared helpers for FAQPage extraction and plain-text excerpts.
 */

/**
 * Strip wrapping bold, italic, and code markers from a heading so
 * `**What are Scrims?**` is classified as `What are Scrims?`.
 */
export function unwrapHeadingMarkup(text: string): string {
  let t = text.trim();
  let prev = '';
  while (t !== prev) {
    prev = t;
    t = t.replace(/^\*\*(.*)\*\*$/s, '$1').trim();
    t = t.replace(/^__(.*)__$/s, '$1').trim();
    t = t.replace(/^\*(.*)\*$/s, '$1').trim();
    t = t.replace(/^_(.*)_$/s, '$1').trim();
    t = t.replace(/^`(.*)`$/s, '$1').trim();
  }
  return t;
}

/**
 * A heading becomes a FAQPage item only when, after unwrapHeadingMarkup,
 * it already ends with `?`.
 *
 * This drops section titles that start with What/How/Why/When/Where and
 * similar but are not questions, such as "What We're Building" (live
 * FAQPage used to append a "?" and emit "What We're Building?"). It also
 * ignores a `?` in the middle of a heading. It does not invent a trailing
 * `?`. Comparison FAQs that already end in `?` (`Import vs DirectQuery
 * refresh?`) are kept.
 */
export function isFaqQuestionHeading(text: string): boolean {
  return unwrapHeadingMarkup(text).endsWith('?');
}

/**
 * Extract FAQ items from markdown content.
 * Only H2/H3 headings that already end in `?` (after wrapping markup is
 * stripped) are used. The first paragraph after the heading is the answer.
 */
export function extractFaqItems(rawBody: string): { question: string; answer: string }[] {
  const lines = rawBody.split('\n');
  const faqItems: { question: string; answer: string }[] = [];

  const questionPattern = /^#{2,3}\s+(.+)$/;

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(questionPattern);
    if (!match) continue;

    const heading = unwrapHeadingMarkup(match[1]);
    if (!isFaqQuestionHeading(heading)) continue;

    // Collect the first meaningful paragraph after the heading
    let answer = '';
    for (let j = i + 1; j < lines.length; j++) {
      const line = lines[j].trim();
      if (!line) continue; // skip blank lines
      if (line.startsWith('#')) break; // next heading
      if (line.startsWith('<iframe') || line.startsWith('<img')) continue; // skip embeds
      if (line.startsWith('![')) continue; // skip images
      if (line.startsWith('```')) break; // skip code blocks

      // Strip markdown formatting for clean answer text
      answer = line
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // [text](url) -> text
        .replace(/\*\*([^*]+)\*\*/g, '$1') // **bold** -> bold
        .replace(/\*([^*]+)\*/g, '$1') // *italic* -> italic
        .replace(/`([^`]+)`/g, '$1'); // `code` -> code
      break;
    }

    if (answer && answer.length > 20) {
      faqItems.push({ question: heading, answer });
    }
  }

  return faqItems;
}

/**
 * Turn a frontmatter excerpt into plain text for meta tags and cards.
 * Strips heading markers, links, emphasis, code ticks, and leftover
 * markdown punctuation without treating mid-sentence `#` (C#, Ep #286)
 * as a heading.
 */
export function plainTextExcerpt(value: unknown): string {
  if (!value) return '';
  return String(value)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '$1')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/^\s{0,3}>\s?/gm, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/(^|[\s(])_([^_]+)_(?=[\s).,!?:;]|$)/g, '$1$2')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/[*_`~]/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extract HowTo steps from markdown content.
 * Looks for ordered lists (1. Step text) or H3 headings under a "Steps" / "How to" section.
 * Also detects "Step N:" patterns in headings.
 */
export function extractHowToSteps(rawBody: string, categories: string[] = []): { name: string; text: string; url?: string }[] {
  // Only generate HowTo for tutorial-like content
  const isTutorial = categories.some(c => 
    /tutorial|how.?to|guide|walkthrough|step/i.test(c)
  );
  
  // Also check if the content has step-by-step patterns
  const hasStepPattern = /^#{2,3}\s+step\s+\d/im.test(rawBody) || 
    /^#{2,3}\s+(how to|getting started|walkthrough)/im.test(rawBody);

  if (!isTutorial && !hasStepPattern) return [];

  const lines = rawBody.split('\n');
  const steps: { name: string; text: string }[] = [];

  // Look for "Step N:" headings
  const stepHeadingPattern = /^#{2,3}\s+(?:step\s+\d+[:.]\s*)?(.+)$/i;
  let inStepSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check for "Step N" headings
    if (/^#{2,3}\s+step\s+\d/i.test(line)) {
      inStepSection = true;
      const match = line.match(/^#{2,3}\s+(?:step\s+\d+[:.]\s*)?(.+)$/i);
      if (match) {
        const name = match[1].trim();
        // Get the first paragraph as step text
        let text = '';
        for (let j = i + 1; j < lines.length; j++) {
          const l = lines[j].trim();
          if (!l) continue;
          if (l.startsWith('#')) break;
          text = l.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            .replace(/\*\*([^*]+)\*\*/g, '$1')
            .replace(/`([^`]+)`/g, '$1');
          break;
        }
        if (text) steps.push({ name, text });
      }
      continue;
    }

    // Also look for ordered lists as steps
    const orderedMatch = line.match(/^\d+\.\s+\*\*(.+?)\*\*\s*[–—-]\s*(.+)/);
    if (orderedMatch) {
      steps.push({ name: orderedMatch[1].trim(), text: orderedMatch[2].trim() });
    }
  }

  return steps;
}
