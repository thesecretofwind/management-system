import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
// import reducer from './reducer';

import themeReducer from './theme/reducer';
import userReducer from './user/reducer';
import { THEME_STATE } from './theme/action';
import { USER_STATE } from './user/action';

export interface STATE {
  theme:THEME_STATE,
  user: USER_STATE
}

const rootReducers = combineReducers({
  theme: themeReducer,
  user: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}) : compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;