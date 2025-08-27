import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bylov.github.io/bylov', // your repo path if not root
  base: '/bylov/',                        // important for repo pages
  integrations: [tailwind({ applyBaseStyles: true })],
  output: 'static',
});
