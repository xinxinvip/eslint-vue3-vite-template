import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: './', // 打包路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')// 设置别名
    }
  }
})
