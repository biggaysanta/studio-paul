import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    proxy: {
      // Proxy all requests to Hugo server
      '/': {
        target: 'http://127.0.0.1:1313',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: 'themes/skeleton/assets/js/main.js',
        style: 'themes/skeleton/assets/css/main.css',
      },
    },
  },
});
