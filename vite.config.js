import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // ✅ ensures correct path for Netlify
  build: {
    outDir: 'dist', // ✅ output folder (Netlify will publish this)
  },
  server: {
    port: 5173, // optional (local dev server port)
  }
});
