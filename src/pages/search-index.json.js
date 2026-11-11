import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const searchData = posts.map(post => ({
    title: post.data.title,
    description: post.data.description,
    slug: post.slug,
    category: post.data.category,
    subcategory: post.data.subcategory,
    author: post.data.author,
    tags: post.data.tags || [],
    pubDate: new Date(post.data.pubDate).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }),
    heroImage: post.data.heroImage
  }));

  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
