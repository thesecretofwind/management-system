import App from "@/App";
import About from "@/views/About";
import Home from "@/views/Home";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";

// 两种路由模式， BrowserRouter(Histotry模式)、HashRouter(Hash模式)

const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      {/* 一个route就对应一个路由， element这表示路由加载的组件 */}
      <Route path="/" element={<App/>}>
        {/* 当访问/路径时，重定向到/home路由(注：好像可以使用Redict重定向) */}
        <Route path="/" element={<Navigate to="/home"/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)

export default baseRouter