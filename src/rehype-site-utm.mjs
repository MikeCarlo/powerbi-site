import { utmContentFromFilePath, withSiteUtm } from './lib/site-utm.mjs';

/**
 * Rewrite tools.powerbi.tips / themes.powerbi.tips hrefs in markdown/MDX
 * at build time. utm_content comes from the post slug (or `blog`).
 * Existing utm_* values are left intact (merge-if-absent).
 */
export default function rehypeSiteUtm() {
  return (tree, file) => {
    const content = utmContentFromFilePath(file?.path || file?.history?.[0] || '');
    walk(tree, (node) => {
      if (node?.type !== 'element' || node.tagName !== 'a') return;
      const href = node.properties?.href;
      if (typeof href !== 'string') return;
      const next = withSiteUtm(href, content);
      if (next !== href) node.properties.href = next;
    });
  };
}

function walk(node, visit) {
  if (!node || typeof node !== 'object') return;
  visit(node);
  for (const child of node.children ?? []) walk(child, visit);
}
