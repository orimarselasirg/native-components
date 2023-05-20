/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { styles } from '../theme/globalTheme';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
  title: string;
}

export const RenderItemHeader = ({title}: Props) => {
  const {top} = useSafeAreaInsets();
  const {theme} = useContext(ThemeContext);
  return (
    <View style={{marginTop: top + 10, marginBottom: 15}}>
      <Text style={{...styles.title, color: theme.colors.text}}>{title}</Text>
    </View>
  );
};
