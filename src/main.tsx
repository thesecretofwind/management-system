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
import store from '@/store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // 严格模式下，组件会render两次？
  // <React.StrictMode>
  <ConfigProvider
  theme={{
    token: {
      colorPrimary: '#2c9678',
      colorError: '#f03752',
      colorSuccess: '#40a070'
    },
  }}
>
  <Provider store={store}>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </Provider>
  </ConfigProvider>
    // {/* <Router /> */}
  // </React.StrictMode>, 
)
