import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/username': 'http://localhost:5012',
      '/pelicula': 'http://localhost:5012',
    },
  },
});
