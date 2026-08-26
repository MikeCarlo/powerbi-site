import { DefaultSettings, tryFormat } from '@microsoft/powerquery-formatter';

const powerQueryLanguages = new Set(['m', 'powerquery', 'power-query']);

function formatPowerQueryNodes(node) {
  if (!node || typeof node !== 'object') return Promise.resolve();

  const tasks = [];
  if (node.type === 'code' && powerQueryLanguages.has(node.lang?.toLowerCase())) {
    tasks.push(
      tryFormat(DefaultSettings, node.value).then((result) => {
        if (result.kind === 'Ok') node.value = result.value.trimEnd();
      }),
    );
  }

  for (const child of node.children ?? []) tasks.push(formatPowerQueryNodes(child));
  return Promise.all(tasks);
}

export default function remarkPowerQuery() {
  return async (tree) => {
    await formatPowerQueryNodes(tree);
  };
}