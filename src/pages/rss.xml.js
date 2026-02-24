import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog'))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'PowerBI.tips',
    description: 'The leading independent resource for Microsoft Power BI and Microsoft Fabric professionals. Tutorials, developer tools, podcast, and enterprise solutions.',
    site: context.site,
    items: posts.map((post) => {
      const slug = post.id.replace(/\/index\.mdx?$/, '').replace(/\.mdx?$/, '');
      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.excerpt || '',
        categories: post.data.categories,
        author: post.data.authors?.join(', ') || 'PowerBI.tips',
        link: `/${slug}/`,
      };
    }),
    customData: `<language>en-us</language>`,
  });
}
