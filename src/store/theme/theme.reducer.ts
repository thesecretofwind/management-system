import { THEME_ACTION, THEME_STATE } from './theme.type';


export const THEME_INIT_STATE: THEME_STATE = {
  currentTheme: 'default'
};


const themeReducer = (state = THEME_INIT_STATE, action: THEME_ACTION):THEME_STATE => {
  switch (action.type) {
    case 'theme':
      return {...state, currentTheme: action.payload}
    default:
      break;
  }
  return {...state};
};

export default themeReducer;