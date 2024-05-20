import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/app/styles/var.scss" as *;`,
      },
    },
  },
  base: '/bodygrath',
  plugins: [react()],
  server: {
    port: 3000,
  },
});
