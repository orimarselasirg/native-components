import React, { useContext } from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, RefreshControl } from 'react-native';
import { RenderItemHeader } from '../components/ItemHeader';
import { styles } from '../theme/globalTheme';
import { SwitchComponent } from '../components/SwitchComponent';
import { useForm } from '../hooks/useForm';
import { ThemeContext } from '../context/ThemeContext';

export const TextInputScreen = () => {
  const form = {
    name: '',
    email: '',
    phone: '',
    suscribe: false,
  };
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const {onchange, email, name, phone, suscribe, formState} = useForm(form);
  const {theme} = useContext(ThemeContext);

  // const handleCahnge = (value: string, field: string) => {
  //   setForm({
  //     ...form,
  //     [field]: value,
  //   });
  // };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globaMagin}>
            <RenderItemHeader title="Text inputs"/>
            <TextInput
              style={{...stylesScreen.input, borderColor: theme.colors.border, color: theme.colorInputText, backgroundColor: theme.colors.card}}
              onChangeText={(e)=> onchange(e, 'name')}
              value={name}
              placeholder="ingrese nombre"
              autoCorrect={false}
              autoCapitalize="words"
              // keyboardType="numeric"
              keyboardAppearance="dark"
              placeholderTextColor={theme.placeholderColor}
            />
            <TextInput
              style={{...stylesScreen.input, borderColor: theme.colors.border, color: theme.colorInputText, backgroundColor: theme.colors.card}}
              onChangeText={(e)=> onchange(e, 'email')}
              value={email}
              placeholder="ingrese email"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholderTextColor={theme.placeholderColor}
              // keyboardType="numeric"
            />
            <TextInput
              style={{...stylesScreen.input, borderColor: theme.colors.border, color: theme.colorInputText, backgroundColor: theme.colors.card}}
              onChangeText={(e)=> onchange(e, 'phone')}
              value={phone}
              placeholder="ingrese telefono"
              placeholderTextColor={theme.placeholderColor}
              keyboardType="phone-pad"
            />
            <SwitchComponent
              isOn={suscribe}
              onChange={(e) => onchange(e, 'suscribe')}
              title="subscribirse"

            />

            <RenderItemHeader title={JSON.stringify(formState, null, 3)}/>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
