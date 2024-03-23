import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // аліас для кореневої папки src
      '@img': path.resolve(__dirname, 'src/assets/images'), // аліас для папки assets
      // додайте інші аліаси, які вам потрібні тут
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/variables.scss';`, // Додайте шлях до вашого основного файлу SCSS зі змінними
      },
    },
  },
},
);
