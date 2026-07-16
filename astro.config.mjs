// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// Routing i18n manual con segmento [lang] (ver src/pages/[lang]).
// Idiomas: es (por defecto), en, de.
export default defineConfig({
  site: 'https://magalufsportclub.com',
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare()
});