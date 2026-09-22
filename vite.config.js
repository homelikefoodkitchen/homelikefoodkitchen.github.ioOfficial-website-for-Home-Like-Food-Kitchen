import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 5173,
  strictPort: true,
  open: false,
  hmr: {
      clientPort: 5173,
    },
  },
  preview: {
    host: true,
    port: 5173,
    strictPort: true,
  },
});
