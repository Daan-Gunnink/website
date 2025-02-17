// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://daan.sh',
  integrations: [tailwind(), mdx(), sitemap()],
  experimental: {
    svg: true,
  }
});