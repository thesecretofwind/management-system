


export interface USER_STATE {
  username: string;
  userId: string;
}

export const USER_INIT_STATE: USER_STATE = {
  username: '',
  userId: ''
};

export type USER_ACTION = {
  type: 'user',
  payload: USER_STATE  
}


