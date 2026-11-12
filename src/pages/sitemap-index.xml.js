import { getCollection } from 'astro:content';
import { categories } from '../data/categories.js';
import { authors } from '../data/authors.js';
import { siteConfig } from '../data/site.js';
import { slugify } from '../utils/categories.js';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const baseUrl = siteConfig.url.replace(/\/$/, '');

  const staticUrls = [
    { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'daily' },
    { loc: `${baseUrl}/about/`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${baseUrl}/contact/`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${baseUrl}/search/`, priority: '0.6', changefreq: 'weekly' }
  ];

  const categoryUrls = [];
  categories.forEach(cat => {
    categoryUrls.push({
      loc: `${baseUrl}/category/${cat.slug}/`,
      priority: '0.9',
      changefreq: 'daily'
    });
    cat.subcategories.forEach(sub => {
      categoryUrls.push({
        loc: `${baseUrl}/category/${cat.slug}/${sub.slug}/`,
        priority: '0.8',
        changefreq: 'weekly'
      });
    });
  });

  const authorUrls = authors.map(author => ({
    loc: `${baseUrl}/author/${author.slug}/`,
    priority: '0.7',
    changefreq: 'weekly'
  }));

  // Dynamically collect all unique tags from published posts
  const uniqueTags = new Set();
  posts.forEach(post => {
    (post.data.tags || []).forEach(tag => {
      uniqueTags.add(slugify(tag));
    });
  });

  const tagUrls = Array.from(uniqueTags).map(tagSlug => ({
    loc: `${baseUrl}/tags/${tagSlug}/`,
    priority: '0.6',
    changefreq: 'weekly'
  }));

  const postUrls = posts.map(post => ({
    loc: `${baseUrl}/posts/${post.slug}/`,
    lastmod: new Date(post.data.updatedDate || post.data.pubDate).toISOString().split('T')[0],
    priority: post.data.featured ? '0.9' : '0.8',
    changefreq: 'monthly'
  }));

  const allUrls = [...staticUrls, ...categoryUrls, ...authorUrls, ...tagUrls, ...postUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}

