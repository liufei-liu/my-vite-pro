import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'  // 确保已安装 @types/node
// https://vite.dev/config/
export default defineConfig({
  publicDir: 'public',  // 必须与目录名一致
  json: {
    stringify: false,    // 禁用自动转换
    namedExports: true
  },
  plugins: [vue()],
  resolve: {
    alias: {
      // '@': '/src' // 根据实际项目结构设置别名
      '@': path.resolve(__dirname, './src'),//此方法是ai方法
      '/public': path.resolve(__dirname, './public')  // 添加路径别名
    }
  },
})
