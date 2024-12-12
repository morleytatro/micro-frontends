import { defineConfig } from 'vite';

export default defineConfig({
  base: '/second',
  server: {
    port: 3001,
    proxy: {
      '/first': 'http://localhost:3000',
    },
  },
});
