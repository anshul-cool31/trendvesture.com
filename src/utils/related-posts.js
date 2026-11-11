export function getRelatedPosts(currentPost, allPosts, limit = 3) {
  const otherPosts = allPosts.filter(p => !p.data.draft && p.slug !== currentPost.slug);
  
  // Score by matching subcategory, category, and tags
  const scored = otherPosts.map(post => {
    let score = 0;
    if (post.data.subcategory === currentPost.data.subcategory) score += 4;
    if (post.data.category === currentPost.data.category) score += 2;
    if (post.data.author === currentPost.data.author) score += 1;
    
    const commonTags = (post.data.tags || []).filter(t => (currentPost.data.tags || []).includes(t));
    score += commonTags.length * 2;
    
    return { post, score };
  });

  scored.sort((a, b) => b.score - a.score || new Date(b.post.data.pubDate) - new Date(a.post.data.pubDate));
  return scored.slice(0, limit).map(s => s.post);
}

