import { defineConfig } from 'vite';

export default defineConfig({
  base: '/first',
  server: {
    port: 3000,
    proxy: {
      '/second': 'http://localhost:3001',
    },
  },
});
