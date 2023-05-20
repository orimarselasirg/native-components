import React, { createContext, useReducer, useEffect } from 'react';
import { ThemeState, lightTheme, themeReducer, DarkTheme } from './themeReducer';
import { AppState, Appearance, useColorScheme } from 'react-native';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme : () => void;
  setLightTheme : () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);
// const [darkTheme, setDarkTheme] = useState();
// const [lightTheme, setLightTheme] = useState();
// const [currentTheme, setCurrentTheme] = useState();



export const ThemeProvider = ({ children }: any) => {
  const colorScheme = useColorScheme();

  // useEffect(() => {
  //     colorScheme === 'dark' ? changeToDarkTheme() : changeToLightTheme();
  // }, [colorScheme]);

  useEffect(() => {
      AppState.addEventListener('change', (status) => {
        if (status === 'active'){
          Appearance.getColorScheme() === 'dark' ? changeToDarkTheme() : changeToLightTheme();
        }});
  }, []);



  const [theme, dispatch] = useReducer(themeReducer, colorScheme === 'dark' ? DarkTheme : lightTheme );
  const changeToDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('darkTheme');
  };


  const changeToLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('lightTheme');
  };

  const value = {
      theme: theme,
      setDarkTheme: changeToDarkTheme,
      setLightTheme: changeToLightTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
  };
