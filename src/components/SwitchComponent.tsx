import React, { useContext } from 'react';
import { Platform, Switch, View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
  title: string;
  color?: string;
}

export const SwitchComponent = ({isOn, onChange, title, color = 'grey'}: Props) => {
  const {theme} = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = React.useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };
  return (
    <View style={styles.container}>
      <Text style={{...styles.text, color: isEnabled ? theme.switchColorTextActive : color}}>
        {title}
      </Text>
      <Switch
          trackColor={{false: theme.trackColorFalse, true: theme.trackColorTrue}}
          thumbColor={Platform.OS === 'android' ? '#f4f3f4' : ''}
          // ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 17,
  },
});
