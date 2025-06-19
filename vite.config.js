// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // stable filenames (no hash)
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: ({ name }) => {
          return name && name.endsWith('.css')
            ? 'assets/[name][extname]'
            : 'assets/[name][extname]';
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
