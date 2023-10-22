
 export interface STATE {
  num: number;
}

export interface ACTION {
  type: string;
  value: STATE[keyof STATE];
}

export const INIT_STATE: STATE = {
  num: 20
}
