import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure the build output directory is 'dist' (Netlify's default publish directory)
  },
  server: {
    port: 3000,  // Port for local dev server (optional)
  },
  optimizeDeps: {
    exclude: ['some-package-if-needed'],  // Optional: Exclude problematic packages from optimization
  },
});
