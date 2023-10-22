export const actionTypes = {
  DEFAULT: 'default',
  BLACK: 'black',
  ORANGE: 'orange',
};

const themes = ['default', 'black', 'orange'] as const;

type THEME =  typeof themes[number]

export interface THEME_STATE {
  currentTheme: THEME
}

export const THEME_INIT_STATE: THEME_STATE = {
  currentTheme: 'default'
};

export type THEME_ACTION = {
  type: 'theme',
  payload: THEME  
}

