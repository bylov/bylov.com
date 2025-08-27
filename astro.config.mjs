import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bylov.github.io',  // your repo path if not root
  base: '/bylov.com/',              // important for GitHub repo pages
  integrations: [tailwind({ applyBaseStyles: true })],
  output: 'static',
});
