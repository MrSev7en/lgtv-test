import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

/** @type {import('vite')['defineConfig']} */
export default defineConfig({
  build: {
    target: 'safari14',
    minify: true,
  },
  plugins: [sveltekit()],
});
