import {Theme} from '@react-navigation/native';

type ThemeAction =
  | {type: 'set_light_theme'}
  | {type: 'set_dark_theme'}


  export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    dividerColor: string;
    iconColor: string;
    boxColor: string;
    boxAnimatedColor: string;
    trackColorFalse: string;
    trackColorTrue: string;
    switchColorTextActive: string;
    switchColorTextInactive: string;
    thumbColor: string;
    placeholderColor: string;
    modalBackground: string;
    buttonColor: string;
    shadowColor: string;
    dotColor: string;
    iconButtonColor: string;
    colorInputText: string;
    backgroundSlide: string;
  }

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  modalBackground: 'rgba(0,0,0,0.5)',
  dotColor: 'rgba(0,0,0,0.5)',
  buttonColor: '#e461ff',
  iconColor: '#a182eb',
  iconButtonColor: 'white',
  boxColor: '#b1b1b1',
  boxAnimatedColor: '#9263ff',
  shadowColor: '#000',
  trackColorTrue: '#81b0ff',
  trackColorFalse: '#767577',
  switchColorTextActive: '#81b0ff',
  switchColorTextInactive: 'grey',
  backgroundSlide: 'white',
  thumbColor: '#f4f3f4',
  placeholderColor: 'grey',
  colorInputText: 'black',
  colors: {
    primary: '#',
    background: 'white',
    card: 'white',
    text: '#3f3f3f',
    border: '#404040',
    notification: 'teal',
  },
};

export const DarkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'white',
  modalBackground: 'rgba(255,255,255,0.5)',
  dotColor: 'rgba(255,255,255,0.5)',
  buttonColor: '#f194ff',
  iconColor: '#A9CCE3',
  iconButtonColor: 'white',
  boxColor: '#b1b1b1',
  boxAnimatedColor: '#9263ff',
  // shadowColor: '#000',
  shadowColor: 'white',
  trackColorTrue: '#81b0ff',
  trackColorFalse: '#767577',
  switchColorTextActive: '#81b0ff',
  switchColorTextInactive: 'grey',
  thumbColor: '#f4f3f4',
  backgroundSlide: 'grey',
  placeholderColor: 'grey',
  colorInputText: 'black',
  colors: {
    primary: '#',
    background: 'black',
    card: 'white',
    text: 'white',
    border: '#404040',
    notification: 'teal',
  },
};

export const themeReducer = (state: ThemeState, action: ThemeAction) : ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};
    case 'set_dark_theme':
      return {...DarkTheme};
    default :
      return state;
  }
};
