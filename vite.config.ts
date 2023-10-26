import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// antd5.x版本以上，不需要使用vite-plugin-style-import来进行样式的按需引入，只用import {Button}既可使用。
// import styleImport, {AntdResolve} from 'vite-plugin-style-import'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  // styleImport({
  //   resolves:[AntdResolve()]
  // })
],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
