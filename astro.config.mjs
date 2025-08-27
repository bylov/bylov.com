import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bylov.github.io/bylov.com',  // your repo path if not root
  base: '/bylov.com/',                        // matches repo name
  integrations: [tailwind({ applyBaseStyles: true })],
  output: 'static',
});
