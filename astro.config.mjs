import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tolantongo.com.mx',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date('2026-03-08'),
    })
  ],
  build: {
    assets: '_astro'
  }
});
