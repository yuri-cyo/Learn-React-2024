import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // аліас для кореневої папки src
      '@assets': path.resolve(__dirname, 'src/assets'), // аліас для папки assets
      // додайте інші аліаси, які вам потрібні тут
    },
  },
});
