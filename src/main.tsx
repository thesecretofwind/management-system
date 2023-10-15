import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式引用顺序：
// 1. 初始化样式要放到最前
import 'reset-css';
// 2. UI框架的样式

// 3. 全局样式
import '@/assets/styles/global.scss'

// 4. 组件的样式
import App from './App'
// import Router from './router/index1'

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // 严格模式下，组件会render两次？
  // <React.StrictMode>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
    // {/* <Router /> */}
  // </React.StrictMode>, 
)
