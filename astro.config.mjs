import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Pure static build. The flashcard app is fully client-side (Web Speech API
// for pronunciation), so it deploys to Cloudflare Pages as plain static files
// — no adapter needed.
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
