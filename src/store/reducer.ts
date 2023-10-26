import { ACTION, INIT_STATE, STATE } from './action';

const reducer = (state = INIT_STATE, action: ACTION):STATE => {
  switch (action.type) {
    case 'selfAdd':
      return {...state, num: state.num + 1};
    case 'add':
      return {...state, num: state.num + action.value};
  }
  return {...state};
};

export default reducer;