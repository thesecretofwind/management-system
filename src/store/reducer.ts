
export interface STATE {
  num: number;
}

const INIT_STATE: STATE = {
  num: 20
}
const reducer = (state = INIT_STATE) => {
  return {...state};
};

export default reducer;