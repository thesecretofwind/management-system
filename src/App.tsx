// import { useState } from 'react'

// import Comp1 from "./components/Comp1"
// import Comp2 from "./components/Comp2"
// import { Button } from "antd"
// import {RightCircleFilled} from '@ant-design/icons'
import {  Link, useRoutes } from "react-router-dom"
import routes from "./router"
import { Suspense } from "react";
function App() {
  // const [count, setCount] = useState(0)
  const outlet = useRoutes(routes);
  return (
    <>

     {/* <Comp1></Comp1>
     <Comp2></Comp2>
     <Button type="primary">click</Button>
     <RightCircleFilled style={{fontSize: '20px', color: 'red'}}/> */}
     <Link to="/home">home</Link>
     <Link  to="/about">about</Link>
     {/* 路由组件渲染位置 (这里是原始用来渲染路由的方式)*/}
     {/* <Outlet></Outlet> */}
     <Suspense fallback={<div>loading...</div>}>
      {outlet}
     </Suspense>
    </>
  )
}

export default App
