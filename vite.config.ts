import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  plugins: [vue(), eslintPlugin(), DefineOptions()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'examples'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {},
    },
  },
  server: {
    hmr: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
    },
  },
})
