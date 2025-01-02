// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://daan-gunnink.github.io',
  base: 'website',
  integrations: [tailwind(), mdx()],
  experimental: {
    svg: true,
  }
});