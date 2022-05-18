import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入nodejs类型 npm i -d @types/node  且需要在tsconfig.node.json 中 “compilerOptions”下 添加 "allowSyntheticDefaultImports": true 配置
//且需要在tsconfig.json 文件中 “compilerOptions”下 添加 "paths": {"@/*":["src/*"]  使得ts 识别路径别名
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve:{
    alias:{
      '@': path.join(__dirname,'src')//@替代src路径
    }
  }
})
