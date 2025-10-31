# Koibumi Astro Blog

[![Astro](https://img.shields.io/badge/Astro-5.15-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A beautiful, lightweight, and performant blog template built with Astro. Features comic-style typography, dark mode support, and achieves 98+ Lighthouse scores while keeping the entire site under 512KB gzipped.

[Demo](https://astro.koibumi.art/) • [Documentation](https://astro.koibumi.art/blog/intro-document/) • [Submit Your Site](https://astro.koibumi.art/blog/real-sites/)

## ✨ Features

- 🎨 **Beautiful Design** - Comic-style fonts (Comic Neue + Klee One), card-based layout
- 🌓 **Dark Mode** - Full dark mode support with theme toggle
- ⚡ **High Performance** - 98+ Lighthouse score, minimal JavaScript, <512KB gzipped
- 🏷️ **Tag System** - Organize posts with comprehensive tagging
- 📝 **Rich Content** - MDX, KaTeX math, syntax highlighting with Expressive Code
- 📱 **Responsive** - Mobile-first design with elegant grid layouts
- 🔍 **SEO Ready** - Auto-generated sitemap and RSS feed
- 🎯 **TypeScript** - Full type safety throughout

## 🚀 Quick Start

### Use This Template

1. Click the "Use this template" button at the top of this repository
2. Create your new repository
3. Clone your repository:

```bash
git clone https://github.com/your-username/your-blog-name.git
cd your-blog-name
```

### Install and Run

```bash
# Install dependencies (requires pnpm)
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Configure Your Site

Edit `content/site.json`:

```json
{
  "title": "Your Blog Title",
  "description": "Your Blog Description",
  "favicon": "/favicon.svg",
  "bio": "Your bio or motto",
  "copyright_name": "Your Name"
}
```

Update `astro.config.mjs` with your site URL:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

### Write Your First Post

Create a new markdown file in `content/blog/`:

```markdown
---
title: 'My First Post'
description: 'This is my first blog post'
pubDate: 'Nov 1 2025'
tags: ['blog', 'first-post']
---

Your content here...
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Styling**: SCSS with modular architecture
- **Interactive Components**: [Svelte](https://svelte.dev) (minimal usage)
- **Code Highlighting**: [Expressive Code](https://expressive-code.com/)
- **Typography**: Comic Neue (English) + Klee One (Japanese)
- **Icons**: [Iconify](https://iconify.design/)
- **Math**: [KaTeX](https://katex.org/)
- **Type Safety**: TypeScript
- **Package Manager**: pnpm

## 📖 Documentation

For detailed documentation including:
- Complete feature overview
- Customization guide
- Component documentation
- Styling and theming
- Performance optimization tips

Visit the [full documentation](https://astro.koibumi.art/blog/intro-document/) on our demo site.

## 🌟 Showcase

Using this template? We'd love to see your site! Check out the [community showcase](https://astro.koibumi.art/blog/show-cases/) and submit your own via pull request.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/haruki-nikaidou/koibumi-blog/issues).