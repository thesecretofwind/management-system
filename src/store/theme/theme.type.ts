const themes = ['default', 'black', 'orange'] as const;

type THEME =  typeof themes[number]

export interface THEME_STATE {
  currentTheme: THEME
}

export type THEME_ACTION = {
  type: 'theme',
  payload: THEME  
}