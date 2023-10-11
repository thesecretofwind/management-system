import About from "@/views/About";
import Home from "@/views/Home";
import { Navigate } from "react-router-dom";

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
    element: <About />
  }
];

export default routes;