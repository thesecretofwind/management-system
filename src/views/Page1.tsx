import { STATE } from "@/store/reducer";
import { useSelector } from "react-redux";

const Page1 = () => { 
  const { num } = useSelector((state:STATE) => ({num:state.num}))
  return (
  <div>这里是page1页面  { num }</div>
)}

export default Page1;