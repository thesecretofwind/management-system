import { USER_ACTION, USER_STATE } from './user.type';


export const USER_INIT_STATE: USER_STATE = {
  username: '',
  userId: ''
};

const userReducer = (state = USER_INIT_STATE, action: USER_ACTION):USER_STATE => {
  switch (action.type) {
    case 'user':
      return {...state, ...action.payload}
    default:
      break;
  }
  return {...state};
};

export default userReducer;