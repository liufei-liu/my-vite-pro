import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'  // 确保已安装 @types/node
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // '@': '/src' // 根据实际项目结构设置别名
      '@': path.resolve(__dirname, './src')//此方法是ai方法
    }
  },
})
