import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bylov.com',
  base: '/',  
  integrations: [tailwind({ applyBaseStyles: true })],
  output: 'static',
});
