/// <reference types="vite/client" />

// ↓ TS 语法中识别 .Vue 文件
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
// ↓ 用于声明的环境变量的类型制定
interface ImportMetaEnv{ 
  VITE_API_BaseUrl:string
}
