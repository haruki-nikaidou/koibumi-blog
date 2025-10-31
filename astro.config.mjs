import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import sitemap from '@astrojs/sitemap';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import svelte from "@astrojs/svelte";

import expressiveCode from 'astro-expressive-code';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, {
      // Katex plugin options
    }], [rehypeAutolinkHeadings, {
      behavior: 'append',
    }]]
  },

  image: {
    service: passthroughImageService()
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    }
  },
  site: 'https://blog.plr.moe',
  integrations: [expressiveCode(), mdx(), sitemap(), svelte(), icon()]
});