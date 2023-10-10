// import { useState } from 'react'

import Comp1 from "./components/Comp1"
import Comp2 from "./components/Comp2"
import { Button } from "antd"
import {RightCircleFilled} from '@ant-design/icons'
import { Outlet } from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     hello world
     {/* <Comp1></Comp1>
     <Comp2></Comp2>
     <Button type="primary">click</Button>
     <RightCircleFilled style={{fontSize: '20px', color: 'red'}}/> */}
     {/* 路由组件渲染位置*/}
     <Outlet></Outlet>
    </>
  )
}

export default App
