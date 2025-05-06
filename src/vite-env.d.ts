//类型声明文件
// src/vite-env.d.ts (或 global.d.ts)
declare module '*.png' {
    const src: string
    export default src
  }
  
  declare module '*.svg' {
    const src: string
    export default src
  }
  
  // 添加其他需要支持的格式
  declare module '*.jpg'
  declare module '*.jpeg'
  declare module '*.gif'
  declare module '*.webp'