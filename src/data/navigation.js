import { categories } from './categories.js';

export const navigation = {
  main: [
    { label: "Home", href: "/" },
    {
      label: "Fashion Trends",
      href: "/category/fashion-trends/",
      subcategories: categories.find(c => c.slug === 'fashion-trends')?.subcategories.slice(0, 5) || []
    },
    {
      label: "Women's Fashion",
      href: "/category/womens-fashion/",
      subcategories: categories.find(c => c.slug === 'womens-fashion')?.subcategories.slice(0, 5) || []
    },
    {
      label: "Men's Fashion",
      href: "/category/mens-fashion/",
      subcategories: categories.find(c => c.slug === 'mens-fashion')?.subcategories.slice(0, 5) || []
    },
    {
      label: "Beauty & Makeup",
      href: "/category/beauty-makeup/",
      subcategories: categories.find(c => c.slug === 'beauty-makeup')?.subcategories.slice(0, 5) || []
    },
    {
      label: "Accessories",
      href: "/category/accessories-jewellery/",
      subcategories: categories.find(c => c.slug === 'accessories-jewellery')?.subcategories.slice(0, 5) || []
    },
    {
      label: "Footwear",
      href: "/category/footwear/",
      subcategories: categories.find(c => c.slug === 'footwear')?.subcategories.slice(0, 5) || []
    },
    {
      label: "Lifestyle",
      href: "/category/fashion-lifestyle/",
      subcategories: categories.find(c => c.slug === 'fashion-lifestyle')?.subcategories.slice(0, 5) || []
    },
    {
      label: "Style Guides",
      href: "/category/shopping-style-guides/",
      subcategories: categories.find(c => c.slug === 'shopping-style-guides')?.subcategories.slice(0, 5) || []
    }
  ],
  footer: [
    { label: "Home", href: "/" },
    { label: "About TrendVesture", href: "/about/" },
    { label: "Contact Us", href: "/contact/" },
    { label: "All Categories", href: "/category/fashion-trends/" },
    { label: "Search Articles", href: "/search/" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/about/#privacy" },
    { label: "Editorial Standards", href: "/about/#standards" },
    { label: "Terms of Use", href: "/about/#terms" }
  ]
};
