import {THEME_INIT_STATE, THEME_ACTION, THEME_STATE} from "./action";


const themeReducer = (state = THEME_INIT_STATE, action: THEME_ACTION):THEME_STATE => {
  switch(action.type) {
    case 'theme':
      return {...state, currentTheme: action.payload}
    default:
      break;
  }
  return {...state};
};

export default themeReducer;