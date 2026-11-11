# TrendVesture – Luxury Fashion & Style Magazine

**TrendVesture** is a high-performance, editorial fashion magazine and blog website developed entirely using **Astro.js** and **MDX**. Inspired by the sophisticated visual architecture of the *Foxiz Beauty* demo (`https://foxiz.io/beauty/`), TrendVesture translates those luxury design principles, multi-column editorial layouts, and smooth animations into a modern, pure-JavaScript static publication.

---

## 🌟 Key Features

- **Reference Architecture**: Faithfully captures Foxiz's signature 3-column hero layout (2 stacked left + 1 large center + 2 stacked right), modular category blocks, full-width feature sections, and a 2/3 + 1/3 content/sidebar feed.
- **Editorial Brand Identity**: Custom text-based `TRENDVESTURE` logo with typography treatment, tagline, and TV monogram favicon.
- **100% Pure JavaScript**: Zero TypeScript overhead, zero runtime framework bloat (no React/Vue required for blazing performance).
- **40 Complete MDX Articles**: 5 thorough, non-placeholder demo articles across each of the 8 primary categories.
- **8 Core Fashion Categories & Subcategories**:
  1. Fashion Trends
  2. Women's Fashion
  3. Men's Fashion
  4. Beauty & Makeup
  5. Accessories & Jewellery
  6. Footwear
  7. Fashion Lifestyle
  8. Shopping & Style Guides
- **Multiple Post Formats**:
  - `standard` (Hero photography with editorial captions)
  - `gallery` (Interactive lookbook image grids)
  - `image` (High-definition editorial photography showcases)
  - `video` (Embedded video player format)
  - `audio` (Integrated episode audio player)
  - `quote` (Pull-quote typography spotlight)
  - `link` (Curated link-out cards)
- **Dedicated Author Profiles**:
  - **Tanisha** (Fashion Editor & Senior Writer)
  - **Shivam** (Fashion Writer & Style Contributor)
  - Both authors have dedicated profile pages (`/author/tanisha/`, `/author/shivam/`) with bios, social links, and archive lists.
- **Subscription-Free Design**: All newsletter forms, popup modals, and email subscription features have been completely removed per requirements.
- **Instant Client-Side Search**: Build-time `/search-index.json` indexed against titles, descriptions, categories, subcategories, authors, and tags.
- **Comprehensive SEO & Structured Data**:
  - JSON-LD Schemas: `NewsMediaOrganization`, `WebSite`, `BlogPosting`, `BreadcrumbList`, and `Person`.
  - OpenGraph & Twitter Cards.
  - Automatically generated `/sitemap-index.xml` and `/feed.xml` RSS feed.
- **Dark Mode**: Smooth slide-toggle matching Foxiz Beauty, with persistent theme preference in `localStorage`.

---

## 📁 Project Directory Structure

```text
trendvesture/
│
├── public/
│   ├── favicon.svg              # TV Monogram vector favicon
│   ├── robots.txt               # Crawler instructions & sitemap link
│   └── images/
│       ├── articles/            # 40 High-resolution fashion WebP images
│       ├── categories/          # 8 Primary category banner images
│       ├── authors/             # tanisha.jpg & shivam.jpg
│       └── branding/            # og-default.jpg social sharing image
│
├── src/
│   ├── components/
│   │   ├── Header.astro         # Top bar, logo, search & dark toggle, sticky nav
│   │   ├── Logo.astro           # Text-based TrendVesture wordmark
│   │   ├── Navigation.astro     # Desktop navigation with dropdown menus
│   │   ├── MobileMenu.astro     # Slide-out drawer with search and accordions
│   │   ├── SearchModal.astro    # Instant search modal with keyboard shortcuts (Ctrl+K, Esc)
│   │   ├── HeroSection.astro    # Signature Foxiz 3-column hero layout
│   │   ├── ArticleCard.astro    # Multi-variant cards (hero, small, grid, horizontal, overlay)
│   │   ├── CategoryBlock.astro  # Reusable category section with 2/3 grid + 1/3 list
│   │   ├── FullWidthHighlight.astro # Full-width multi-column feature block
│   │   ├── Sidebar.astro        # Sidebar with author spotlight, socials, trending posts
│   │   ├── PopularPosts.astro   # Numbered trending stories (01, 02, 03, 04, 05)
│   │   ├── AuthorWidget.astro   # Compact author spotlight card
│   │   ├── AuthorBox.astro      # Full author biography card on single post pages
│   │   ├── Breadcrumbs.astro    # Semantic breadcrumbs with JSON-LD
│   │   ├── RelatedPosts.astro   # 3-column related article cards
│   │   ├── SocialShare.astro    # Share buttons (X, Pinterest, Facebook, LinkedIn, Copy Link)
│   │   ├── Pagination.astro     # Numbered pagination component
│   │   ├── BackToTop.astro      # Floating smooth scroll-to-top button
│   │   ├── Footer.astro         # Clean editorial footer (no newsletter forms)
│   │   └── SEO.astro            # Full meta tags, OG, Twitter & JSON-LD generator
│   │
│   ├── content/
│   │   ├── config.js            # Astro Content Collections schema definition
│   │   └── blog/                # 40 MDX blog articles in 8 category directories
│   │       ├── fashion-trends/
│   │       ├── womens-fashion/
│   │       ├── mens-fashion/
│   │       ├── beauty-makeup/
│   │       ├── accessories-jewellery/
│   │       ├── footwear/
│   │       ├── fashion-lifestyle/
│   │       └── shopping-style-guides/
│   │
│   ├── data/
│   │   ├── site.js              # Site name, domain, social links, editorial contact
│   │   ├── categories.js        # 8 categories and all subcategories metadata
│   │   ├── authors.js           # Tanisha and Shivam profile definitions
│   │   └── navigation.js        # Main navigation and footer links
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro     # HTML shell with Header, Footer, SEO
│   │   ├── ArticleLayout.astro  # Single article layout with post formats and sidebar
│   │   └── ArchiveLayout.astro  # Category, subcategory, tag, and author archives
│   │
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── 404.astro            # Custom 404 page with recommended articles
│   │   ├── about.astro          # Editorial masthead and publication story
│   │   ├── contact.astro        # Press & editorial inquiries
│   │   ├── search.astro         # Dedicated search page with query parameter handling
│   │   ├── search-index.json.js # Build-time JSON search endpoint
│   │   ├── feed.xml.js          # RSS Feed endpoint
│   │   ├── sitemap-index.xml.js # Google XML sitemap endpoint
│   │   ├── category/            # Category and subcategory archives
│   │   ├── author/              # Tanisha and Shivam profile archives
│   │   ├── tags/                # Tag archives
│   │   └── posts/               # Single MDX article dynamic route
│   │
│   ├── styles/
│   │   ├── variables.css        # Color tokens, fonts, spacing, dark mode tokens
│   │   ├── animations.css       # Smooth hover zoom, slide-down header, transitions
│   │   ├── article.css          # MDX typography prose, blockquotes, post formats
│   │   └── global.css           # CSS reset, container, layout grids
│   │
│   └── utils/
│       ├── categories.js        # Category helpers and slugification
│       ├── reading-time.js      # Automatic reading time calculator
│       └── related-posts.js     # Related post scoring algorithm
│
├── astro.config.mjs
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Installation
Install the project dependencies:
```bash
npm install
```

### 2. Running the Development Server
Start the local Astro development server:
```bash
npm run dev
```
The site will be available at `http://localhost:4321`.

### 3. Building for Production
Generate the static production build:
```bash
npm run build
```
This pre-renders all 273+ static HTML pages, search indexes, RSS feeds, and XML sitemaps into the `dist/` directory.

### 4. Previewing the Production Build
Preview the generated production build locally:
```bash
npm run preview
```

---

## ✍️ Content Management

### How to Add a New MDX Article
1. Create a new `.mdx` file inside the appropriate category folder in `src/content/blog/` (e.g., `src/content/blog/fashion-trends/my-new-post.mdx`).
2. Add the required frontmatter:
```yaml
---
title: "The Return of Tailored Tweed Overcoats"
description: "Why structured British heritage tweed is regaining dominance on runways."
pubDate: 2026-11-15
author: "Tanisha"
category: "Fashion Trends"
subcategory: "Runway Trends"
tags:
  - "tailoring"
  - "outerwear"
  - "heritage fashion"
heroImage: "/images/articles/my-new-post.webp"
heroImageAlt: "Model wearing structured tweed overcoat"
featured: true
draft: false
postFormat: "standard"
seoTitle: "The Return of Tailored Tweed Overcoats | TrendVesture"
seoDescription: "Explore why tailored tweed overcoats are dominating winter runway collections."
---

Your markdown or MDX content begins here...
```
3. Run `npm run build` or start `npm run dev`. The new article will automatically appear on:
   - The homepage (in featured blocks or latest stories feed)
   - Its category archive (`/category/fashion-trends/`)
   - Its subcategory archive (`/category/fashion-trends/runway-trends/`)
   - The author's profile archive (`/author/tanisha/`)
   - The search index (`/search-index.json`)
   - The XML sitemap (`/sitemap-index.xml`)
   - The RSS feed (`/feed.xml`)

### How to Update an Existing Blog Post
1. Open the target file in `src/content/blog/<category>/<filename>.mdx`.
2. Edit the frontmatter or content.
3. Save the file. Hot-reload will instantly reflect the changes in development.

### How to Add Images
1. Save your WebP or JPG image into the appropriate subfolder inside `public/images/`:
   - Articles: `public/images/articles/`
   - Categories: `public/images/categories/`
   - Authors: `public/images/authors/`
   - Branding: `public/images/branding/`
2. Reference the image in your MDX frontmatter using its absolute public path:
   ```yaml
   heroImage: "/images/articles/my-image.webp"
   ```

### How to Replace Author Images
The author images are configured with fixed, modular file paths so you can replace them anytime without changing any code:
- **Tanisha's Image**: Replace `public/images/authors/tanisha.jpg`
- **Shivam's Image**: Replace `public/images/authors/shivam.jpg`

### How to Add a New Category or Subcategory
1. Open `src/data/categories.js`.
2. Add a new object to the `categories` array:
```javascript
{
  name: "Vintage & Archival",
  slug: "vintage-archival",
  description: "Curated historical fashion archives and retro couture pieces.",
  image: "/images/categories/vintage-archival.webp",
  seoTitle: "Vintage & Archival Fashion | TrendVesture",
  seoDescription: "Explore vintage fashion history and archival luxury collections.",
  subcategories: [
    { name: "90s Minimalism", slug: "90s-minimalism", description: "Clean lines and understated 90s style." },
    { name: "Archival Denim", slug: "archival-denim", description: "Rare denim history and workwear heritage." }
  ]
}
```
3. Update `src/data/navigation.js` to include the category in the primary navbar.
4. Add MDX articles assigned to `category: "Vintage & Archival"`.

### How to Change the Logo
Open `src/data/site.js` and edit the `logoText` and `tagline` fields:
```javascript
export const siteConfig = {
  name: "TrendVesture",
  logoText: "TRENDVESTURE",
  tagline: "The Pulse of Contemporary Fashion & Editorial Style",
  // ...
};
```
To adjust font sizes, letter spacing, or styling, edit `src/components/Logo.astro`.

### How to Change the Domain & SEO Settings
1. Open `src/data/site.js` and update `url`:
```javascript
export const siteConfig = {
  name: "TrendVesture",
  url: "https://your-custom-domain.com",
  // ...
};
```
2. Open `astro.config.mjs` and update the `site` property:
```javascript
export default defineConfig({
  site: 'https://your-custom-domain.com',
  // ...
});
```

---

## 🚢 Deployment Guide

TrendVesture is generated as pure static HTML/CSS/JS, making it 100% compatible with modern edge hosting platforms:

### Deploying to Cloudflare Pages
1. Push your repository to GitHub or GitLab.
2. In the Cloudflare Dashboard, go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your repository and configure:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**.

### Deploying to Vercel
```bash
npm install -g vercel
vercel
```

### Deploying to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 📄 License
© 2026 TrendVesture Magazine. All rights reserved.

