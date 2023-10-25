export interface USER_STATE {
  username: string;
  userId: string;
}

export type USER_ACTION = {
  type: 'user',
  payload: USER_STATE  
}
