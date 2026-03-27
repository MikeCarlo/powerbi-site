/**
 * Extract FAQ items from markdown content.
 * Looks for H2/H3 headings that are phrased as questions (contain "?")
 * or common question patterns (What, How, Why, When, Where, Which, Can, Is, Does, Should, Will).
 * Returns the heading as question and the first paragraph after it as the answer.
 */
export function extractFaqItems(rawBody: string): { question: string; answer: string }[] {
  const lines = rawBody.split('\n');
  const faqItems: { question: string; answer: string }[] = [];
  
  const questionPattern = /^#{2,3}\s+(.+)$/;
  const isQuestion = (text: string) => {
    const t = text.trim();
    if (t.includes('?')) return true;
    // Common question starters
    return /^(what|how|why|when|where|which|can|is|does|should|will|do)\b/i.test(t);
  };

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(questionPattern);
    if (!match) continue;

    const heading = match[1].trim();
    if (!isQuestion(heading)) continue;

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
      // Ensure question ends with ?
      const question = heading.endsWith('?') ? heading : `${heading}?`;
      faqItems.push({ question, answer });
    }
  }

  return faqItems;
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
