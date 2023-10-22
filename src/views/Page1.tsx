import { STATE } from "@/store/action";
import { useDispatch, useSelector } from "react-redux";


const Page1 = () => { 
  // 通过 useSelector 获取redux中的数据
  const { num } = useSelector((state:STATE) => ({num:state.num}));
  // 通过 useDispatch修改redux中的数据
  const dispatch = useDispatch();
  const changeNum = () =>{
    dispatch({type: 'selfAdd', value: 2});
  }
  return (
    <>
    <div>这里是page1页面  { num }</div>
    <button onClick={changeNum}>按钮鸭</button>
  </>
)}

export default Page1;