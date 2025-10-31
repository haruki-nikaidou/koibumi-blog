# 1.0.0

Nov 1, 2025

This is a major release with significant architectural changes and new features. Please review the breaking changes carefully before upgrading.

## Breaking Changes

- **Content location moved**: All content is now in `content/` directory instead of `src/content/`. You'll need to move your blog posts from `src/content/blog/` to `content/blog/`.
- **Configuration file changed**: Site configuration moved from `src/consts.ts` to `content/site.json`. Update your site information in the new JSON format.
- **Theme system removed**: Quartz and glass themes are no longer supported. The template now uses a unified design system with better customization options.
- **Framework migration**: Replaced SolidJS with Svelte for interactive components. If you have custom components, they'll need to be rewritten.
- **Field renamed**: The `notCompleted` field in article frontmatter is now called `draft` for better clarity.
- **Color system rewritten**: Complete overhaul of the color palette system. Custom color modifications will need to be updated to the new CSS custom property structure.

## New Features

- **Dark Mode**: Full dark mode support with theme toggle and localStorage persistence. Separate background images for light and dark modes.
- **Improved Post Cards**: Better styling with enhanced visual hierarchy, hero image support, and responsive design.
- **Tag System**: Comprehensive tagging system for organizing posts. Browse posts by tag with dedicated tag pages (`/tag/[tag]` and `/tag/`).
- **Enhanced Article Metadata**: Description and tags are now prominently displayed on article pages for better content discovery.
- **Better Performance**: Optimized bundle size and improved loading times with modern best practices.
- **Improved Typography**: Refined font selection with Comic Neue for English and Klee One for Japanese.

## Other Changes

- Added comprehensive documentation in `intro-document.md`
- Added community showcase page in `real-sites.md`
- Improved component organization and modularity
- Better SCSS architecture with modular files
- Enhanced accessibility features

## Migration Guide

1. Move your content from `src/content/blog/` to `content/blog/`
2. Create `content/site.json` with your site configuration (see template in the repo)
3. Update article frontmatter: rename `notCompleted: true` to `draft: true`
4. If you have custom styling, review and update color usage to match the new system
5. If you have custom components using SolidJS, rewrite them in Svelte or vanilla JS
6. Test your site thoroughly, especially custom modifications

# 0.2.2

Dec 25, 2024.

Fix bug: image in post card can be overflowed.

~~Fuck, why I'm coding in Christmas.~~

# 0.2.1

Dec 19, 2024.

Upgrade SCSS syntax.

Update document for fixing mistake.

# 0.2.0

Oct 21, 2024.

No breaking changes.

Major changes:

- Remove `@koibumi-design/solidjs` dependency.
- Support custom color theme.
- Use alias path `@` for import.

Minor changes:

- Add `solid-icons` as a dependency.
- Set lazy loading for posts' card.
- Use `<a>` tag for posts' card's image.
- Change header's style a little bit.

# 0.1.1

First stable version.