import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/sanity-api': {
        target: 'https://mtqj8g3m.api.sanity.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sanity-api/, ''),
      },
    },
  },
});
