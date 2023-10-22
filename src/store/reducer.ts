
export interface STATE {
  num: number;
}

export interface ACTION {
  type: string;
  value: STATE[keyof STATE];
}

const INIT_STATE: STATE = {
  num: 20
}
const reducer = (state = INIT_STATE, action: ACTION):STATE => {
  switch(action.type) {
    case 'selfAdd':
      return {...state, num: state.num + 1};
    case 'add':
      return {...state, num: state.num + action.value};
  }
  return {...state};
};

export default reducer;