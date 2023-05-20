import React, {useContext} from 'react';
import { View, Alert, Button } from 'react-native';
import prompt from 'react-native-prompt-android';
import { RenderItemHeader } from '../components/ItemHeader';
import { styles } from '../theme/globalTheme';
import { ThemeContext } from '../context/ThemeContext';

export const AlertScreen = () => {
  const {theme} = useContext(ThemeContext);

  const createTwoButtonAlert = () =>
  Alert.alert('Alerta', 'Prueba de alerta', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],{cancelable: true});

  const promtAlert = () =>{
    prompt(
      'Ingrese su contraseña',
      'Ingresa tu contraseña para enviarte USD 10.000',
      [
       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'destructive'},
       {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
      ],
      {
          type: 'secure-text',
          cancelable: false,
          defaultValue: 'test',
          placeholder: 'placeholder',
          style: 'default',
      }
  );
  };
  return (
    <View style={styles.globaMagin}>
      <RenderItemHeader
        title="Alertas"
      />
      <Button
        title="Muestra una alerta"
        color= {theme.buttonColor}
        onPress={createTwoButtonAlert}
      />
      <View style={{height: 10}}/>
      <Button
        title="Alerta Prompt"
        color= {theme.buttonColor}
        onPress={promtAlert}
      />
    </View>
  );
};
