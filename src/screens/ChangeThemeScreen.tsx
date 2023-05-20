import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { RenderItemHeader } from '../components/ItemHeader';
import { styles } from '../theme/globalTheme';
import { ThemeContext } from '../context/ThemeContext';

export const ChangeThemeScreen = () => {
  const {theme, setDarkTheme, setLightTheme} = useContext(ThemeContext);

  const changeTheme = () => {
    theme.dark ? setLightTheme() : setDarkTheme();
  };

  return (
    <View style={styles.globaMagin}>
      <RenderItemHeader
        title="Cambiar Tema"
      />
      <TouchableOpacity style={{...stylesTheme.theme, backgroundColor: theme.buttonColor}} activeOpacity={0.7} onPress={changeTheme}>
        <Text style={{...stylesTheme.textTheme, color: theme.colors.text}}>Claro / Oscuro</Text>
      </TouchableOpacity>
      {/* <Text>{theme}</Text> */}
    </View>
  );
};

const stylesTheme = StyleSheet.create({
  theme : {
    width: 150,
    height: 50,
    backgroundColor: '#876dc5',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTheme : {
    fontSize: 20,
    color: 'white',
  },
});
