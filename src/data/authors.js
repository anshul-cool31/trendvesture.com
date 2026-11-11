export const authors = [
  {
    id: "tanisha",
    slug: "tanisha",
    name: "Tanisha",
    designation: "Fashion Editor & Senior Writer",
    bio: "Tanisha is a fashion editor and stylist specializing in women's couture, seasonal runway forecasts, editorial beauty rituals, and personal style curation. With over a decade tracking international fashion weeks and consulting for premier publications, her writing blends rigorous fashion criticism with accessible, everyday wardrobe inspiration.",
    avatar: "/images/authors/tanisha.jpg",
    email: "tanisha@trendvesture.com",
    primaryCategories: ["Women's Fashion", "Beauty & Makeup", "Fashion Trends", "Accessories & Jewellery"],
    social: {
      instagram: "https://instagram.com/tanisha_trendvesture",
      twitter: "https://twitter.com/tanisha_style",
      pinterest: "https://pinterest.com/tanisha_edits",
      linkedin: "https://linkedin.com/in/tanisha-fashion-editor"
    }
  },
  {
    id: "shivam",
    slug: "shivam",
    name: "Shivam",
    designation: "Fashion Writer & Style Contributor",
    bio: "Shivam is a menswear contributor, footwear enthusiast, and cultural lifestyle commentator. His editorial work delves into modern street culture, precision tailoring, sneaker artistry, sustainable fashion practices, and practical shopping guides designed to build enduring, high-utility capsule wardrobes.",
    avatar: "/images/authors/shivam.jpg",
    email: "shivam@trendvesture.com",
    primaryCategories: ["Men's Fashion", "Footwear", "Fashion Lifestyle", "Shopping & Style Guides"],
    social: {
      instagram: "https://instagram.com/shivam_sartorial",
      twitter: "https://twitter.com/shivam_style",
      youtube: "https://youtube.com/@shivam_wardrobe",
      linkedin: "https://linkedin.com/in/shivam-menswear-editor"
    }
  }
];

export function getAuthorBySlug(slug) {
  return authors.find(author => author.slug.toLowerCase() === slug.toLowerCase() || author.name.toLowerCase() === slug.toLowerCase());
}

export function getAuthorByName(name) {
  return authors.find(author => author.name.toLowerCase() === name.toLowerCase());
}
