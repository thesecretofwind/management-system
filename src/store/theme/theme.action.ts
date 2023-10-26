import { Dispatch } from 'redux';
import { THEME_ACTION } from './theme.type';

// 使用redux-thunk来制作action
export const updateTheme = (dispatch: Dispatch<THEME_ACTION>) => {
  setTimeout(() => {
    dispatch({type: 'theme', payload: 'orange'});
  },1000)
};


