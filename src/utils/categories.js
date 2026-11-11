import { categories } from '../data/categories.js';

export function getCategoryMeta(categoryName) {
  const cat = categories.find(c => c.name.toLowerCase() === (categoryName || '').toLowerCase());
  if (cat) return cat;
  return {
    name: categoryName || 'Editorial',
    slug: (categoryName || 'editorial').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    description: `Articles in ${categoryName}`
  };
}

export function slugify(text) {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, 'and')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}
