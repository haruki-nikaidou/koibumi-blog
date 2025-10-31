---
title: 'Koibumi Astro Blog Document'
description: 'Introduce how to use Koibumi Astro Blog'
pubDate: 'Nov 1 2025'
heroImage: 'https://imagedelivery.net/6gszw1iux5BH0bnwjXECTQ/37266730-00ff-4239-bfc8-cc5eaf8b3900/public'
pinned: true
tags:
  - document
---

# Welcome to Koibumi Astro Blog

A beautiful, modern blog template built with [Astro](https://astro.build) and the Koibumi design system. This template combines aesthetic appeal with powerful features, making it perfect for bloggers who want a stunning and functional website.

## 🚀 How to Use This Template

### Getting Started

1. **Use this template on GitHub**
   
   Visit [github.com/haruki-nikaidou/koibumi-blog](https://github.com/haruki-nikaidou/koibumi-blog) and click the "Use this template" button to create your own repository.

2. **Clone your repository**
   
```bash
git clone https://github.com/your-username/your-blog-name.git
cd your-blog-name
```

3. **Install dependencies**
   
   This project uses pnpm as the package manager:
   
```bash
pnpm install
```

4. **Start the development server**
   
```bash
pnpm dev
```

   Your blog will be available at `http://localhost:4321`

5. **Build for production**
   
```bash
pnpm build
```

### Configuration

Edit `content/site.json` to customize your blog:

```json
{
    "title": "Your Blog Title",
    "description": "Your Blog Description",
    "favicon": "/favicon.svg",
    "bio": "Your bio or motto",
    "copyright_name": "Your Name"
}
```

Update `astro.config.mjs` to set your site URL:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  // ... other config
});
```

### Writing Posts

Create markdown files in `content/blog/` with the following frontmatter:

```markdown
---
title: 'Your Post Title'
description: 'Brief description of your post'
pubDate: 'Nov 1 2025'
updatedDate: 'Nov 2 2025' # optional
heroImage: 'https://example.com/image.jpg' # optional
pinned: true # optional - shows on homepage
draft: false # optional - hides from public
tags:
  - tag1
  - tag2
---

Your content here...
```

## ✨ Major Features

### Beautiful Design

- **Comic-Style Typography**: Features Comic Neue for English and Klee One for Japanese, giving your blog a friendly, approachable feel
- **Card-Based Layout**: Modern, clean card design with semi-transparent backgrounds
- **Responsive Grid**: Automatically adapts to different screen sizes with elegant grid layouts
- **Stunning Backgrounds**: Full-page background images with separate light and dark mode variants

### Dark Mode Support

Toggle between light and dark themes with a smooth transition. The theme preference is saved in localStorage and persists across visits.

### Advanced Code Blocks

Powered by [Expressive Code](https://expressive-code.com/), your code blocks come with:
- Syntax highlighting with full VS Code theme support
- Line numbers
- Collapsible sections
- Copy to clipboard button
- Editor and terminal frames
- Text markers

### Content Features

- **Tag System**: Organize posts with tags and browse by tag
- **Pinned Posts**: Highlight important posts on your homepage
- **Draft Support**: Work on posts privately before publishing
- **Hero Images**: Eye-catching images for each post
- **Math Support**: Write mathematical expressions with KaTeX
- **Auto-linking Headings**: All headings get automatic anchor links
- **RSS Feed**: Automatically generated at `/rss.xml`
- **Sitemap**: SEO-friendly sitemap generation

### Developer Experience

- **TypeScript**: Full type safety
- **SCSS**: Powerful styling with variables and mixins
- **Alias Imports**: Use `@/` to import from `src/`
- **Icon Support**: Built-in Iconify integration with thousands of icons
- **Fast Builds**: Astro's optimized build system
- **Hot Module Replacement**: Instant updates during development

### Performance & Lightweight

This template is designed with performance as a top priority:

- **Minimal JavaScript**: Reduces unnecessary JS as much as possible - only essential interactive components use JavaScript
- **Lighthouse Score**: Achieves 98+ score in Lighthouse performance tests
- **Optimized Assets**: Even with 4K resolution background images, the entire site stays under 512KB gzipped
- **Simple but Beautiful**: Proves that you don't need heavy frameworks to create stunning designs
- **Fast Loading**: Static generation ensures instant page loads
- **Modern Formats**: Uses AVIF and WebP for optimal image compression

The philosophy is simple: keep everything lightweight and performant while maintaining visual appeal. This means your readers get a beautiful experience without waiting for heavy assets to load.

## 🎨 Flexibility & Customization

### Layout Options

Choose from three content width options in your pages:

- `sm`: 50rem max-width (800px) - perfect for text-heavy content
- `md`: 70rem max-width (1120px) - default, great for most blogs
- `lg`: 90rem max-width (1440px) - ideal for galleries or wide content

### Styling

The template uses a modular SCSS architecture:

- `colors.scss`: Define your color scheme
- `global.scss`: Global styles and typography
- `components.scss`: Component-specific styles
- `article.scss`: Article content styling
- `button.scss`: Button styles

Customize colors by modifying CSS custom properties in the color files. The design uses a primary color system that automatically adapts to both light and dark modes.

### Components

All components are in `src/components/`:
- `Header.astro`: Navigation header
- `Footer.astro`: Site footer
- `Card.astro`: Card wrapper component
- `PostCard.astro`: Post preview card
- `ThemeToggle.svelte`: Dark mode toggle
- `BaseHead.astro`: SEO meta tags

Feel free to modify these or create new ones to suit your needs.

### Extending Functionality

The template is built with extensibility in mind:

- Add new Astro integrations in `astro.config.mjs`
- Add rehype/remark plugins for markdown processing
- Create new collections in `src/content/config.ts`
- Add custom routes in `src/pages/`

## 🎭 Art Considerations

### Background Images

The template uses full-page background images (`public/bg.avif` and `public/bg-dark.avif`). When creating your own:

- **Use colorful images** to add personality and visual interest
- **Keep color value range limited** - avoid extreme contrasts within the image
- **Ensure readability** - the semi-transparent cards should remain legible over the background
- **Consider both modes** - create versions optimized for both light and dark themes
- **Use modern formats** - AVIF or WebP for optimal performance

The default gradient overlays (`linear-gradient(to right, #ffcdb9, #FFC0CB)` for light mode) help soften the background and maintain readability. Adjust these in `src/styles/global.scss` to match your background images.

### Color Harmony

The design uses a primary color system. Choose colors that:
- Complement your background images
- Have sufficient contrast for accessibility
- Work well in both light and dark modes
- Reflect your personal or brand style

### Typography

The comic-style fonts create a casual, friendly atmosphere. If you prefer a different tone:
- Replace fonts in `package.json` dependencies
- Update font families in `src/styles/global.scss`
- Consider both English and other language support

## 🌟 Share Your Site!

We'd love to see what you create with this template! If you've built a blog using Koibumi Astro Blog, please share it with the community:

1. Fork this repository
2. Add your site to `content/blog/real-sites.md`
3. Submit a pull request

Your site could inspire others and help showcase the flexibility of this template. We welcome all creative implementations!

## 🤝 Contributing

Found a bug? Have a feature idea? Contributions are welcome!

- Open an issue on [GitHub](https://github.com/haruki-nikaidou/koibumi-blog/issues)
- Submit pull requests for improvements
- Share feedback and suggestions

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Expressive Code](https://expressive-code.com/)

---

Hero image is from [Pixiv: 136849830](https://www.pixiv.net/artworks/136849830)