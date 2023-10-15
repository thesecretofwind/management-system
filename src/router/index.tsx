// import About from "@/views/About";
import Home from "@/views/Home";
// import User from "@/views/User";
import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

// const About = lazy(() => import('@/views/About'));
// const User = lazy(() => import('@/views/User'))
const Page1 = lazy(() => import('@/views/Page1'));
const Page2 =  lazy(() => import('@/views/Page2'));
const Page3=  lazy(() => import('@/views/Page3'));
const Login = lazy(() => import('@/views/Login'));

// 如果是在App.tsx给其outlet一个公共的Suspense标签加载，会路由组件会渲染两次(表现：Home组件中的打印currentRoute)
const withLoadingComponent = (component: JSX.Element) => (<Suspense fallback={<div>loading...</div>}>{component}</Suspense>)

const routes = [
  {
    path: '/',
    element: <Navigate to='/page1' />
  },
  // 嵌套路由，但是如果不在上面配置对应path的重定向的话，是不会自动跳转至子路由的
  {
    path: '/',
    element: <Home />,
    // 配置子路由：得另起一个，而不是直接children；同时上一个得navigate到对应子路由
    children: [
      {
        path: '/page1',
        element: withLoadingComponent(<Page1 />)
      },
      {
        path: '/page2',
        element: withLoadingComponent(<Page2 />)
      },
      {
        path: '/page3/page301',
        element: withLoadingComponent(<Page3 />)
      }
    ]
  },
  {
    path: '/login',
    element: withLoadingComponent(<Login />)
  }
  // {
  //   path:'/home',
  //   element: <Home />
  // },
  // {
  //   path:'/about',
  //   // 使用路由懒加载必须在组件前添加Supsense标签，fallback表示加载该组件时的显示(注，也可以在App.tsx中使用useRoot接替的outlet，用Supense标签包裹)
  //   element:  <About />
  //     // <Suspense fallback={<div>loading...</div>}>
  //     //   <About />
  //     // </Suspense>
  // },
  // {
  //   path: '/user',
  //   element:  <User />
  //   // <Suspense fallback={<div>loading...</div>}>
  //   //   <User />
  //   // </Suspense>
  // }
];

export default routes;