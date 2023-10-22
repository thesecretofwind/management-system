import { createStore, combineReducers} from 'redux';
// import reducer from './reducer';

import themeReducer from './theme/reducer';
import userReducer from './user/reducer';
import { THEME_STATE } from './theme/action';
import { USER_STATE } from './user/action';

export interface STATE {
  theme:THEME_STATE,
  user: USER_STATE
}

const reducer = combineReducers({
  theme: themeReducer,
  user: userReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window?.__REDUX_DEVTOOLS_EXTENSION__());

export default store;