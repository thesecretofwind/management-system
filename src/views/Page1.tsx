import { STATE } from "@/store";
import { THEME_ACTION } from "@/store/theme/action";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";


const Page1 = () => { 
  // 通过 useSelector 获取redux中的数据
  // const { num } = useSelector((state:STATE) => ({num:state.num}));

  const theme = useSelector((state: STATE) => state.theme);
  
  // 通过 useDispatch修改redux中的数据
  const dispatch = useDispatch<Dispatch<THEME_ACTION>>();
  // const changeNum = () =>{
  //   dispatch({type: 'selfAdd', value: 2});
  // }
  const updateTheme = () => {
    dispatch({type: 'theme', payload: 'black'});
  }
  return (
    <>
    <div>这里是page1页面 { theme.currentTheme }</div>
    <button onClick={updateTheme}>按钮鸭</button>
  </>
)}

export default Page1;