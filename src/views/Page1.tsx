import { STATE } from '@/store';
import { updateTheme } from '@/store/theme/theme.action';
import { useDispatch, useSelector } from 'react-redux';


const Page1 = () => { 
  // 通过 useSelector 获取redux中的数据
  // const { num } = useSelector((state:STATE) => ({num:state.num}));

  const theme = useSelector((state: STATE) => state.theme);
  
  // 通过 useDispatch修改redux中的数据
  const dispatch = useDispatch();
  // const changeNum = () =>{
  //   dispatch({type: 'selfAdd', value: 2});
  // }
  const updateTheme1 = () => {
    dispatch({type: 'theme', payload: 'black'});
  };

  const updateThemeAsync = () => {
    dispatch(updateTheme);
  }
  return (
    <>
    <div>这里是page1页面 { theme.currentTheme }</div>
    <button onClick={updateTheme1}>按钮鸭</button>
    <button onClick={updateThemeAsync}>异步更新</button>
  </>
)}

export default Page1;