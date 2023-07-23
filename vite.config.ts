import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
      polyfills: ['es.promise.finally', 'es/map', 'es/set'],
    }),
    sveltekit(),
  ],
});
