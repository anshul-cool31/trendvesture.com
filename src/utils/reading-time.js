export function getReadingTime(content) {
  if (!content) return "3 min read";
  const cleanContent = content.replace(/<\/?[^>]+(>|$)/g, "").replace(/#+\s+/g, "");
  const words = cleanContent.trim().split(/\s+/).length;
  const wordsPerMinute = 220;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

