// import About from "@/views/About";
import Home from "@/views/Home";
// import User from "@/views/User";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const About = lazy(() => import('@/views/About'));
const User = lazy(() => import('@/views/User'))

interface RouteType {
  path: string;
  element: JSX.Element
}

const routes:RouteType[] = [
  {
    path: '/',
    element: <Navigate to='home' />
  },
  {
    path:'/home',
    element: <Home />
  },
  {
    path:'/about',
    // 使用路由懒加载必须在组件前添加Supsense标签，fallback表示加载该组件时的显示(注，也可以在App.tsx中使用useRoot接替的outlet，用Supense标签包裹)
    element:  <About />
      // <Suspense fallback={<div>loading...</div>}>
      //   <About />
      // </Suspense>
  },
  {
    path: '/user',
    element:  <User />
    // <Suspense fallback={<div>loading...</div>}>
    //   <User />
    // </Suspense>
  }
];

export default routes;