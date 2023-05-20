/* eslint-disable react-native/no-inline-styles */

import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appIntefaces';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
  menuItem: MenuItem;
}


export const FlatListMenuItem = ({menuItem}: Props) => {

  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate(menuItem.component as never)}
    >
      <View style={styles.container}>
        <Icon
          name= {menuItem.icon ? menuItem.icon : 'tablet-landscape-outline'}
          size={24}
          color={theme.iconColor}
          />
        <Text style={{...styles.itemText, color: theme.colors.text}}>{menuItem.name}</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Icon
              name= "arrow-forward-outline"
              size={24}
              color={theme.iconColor}
            />
          </View>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex:1,
  },
  itemText: {
    fontSize: 20,
    marginLeft: 10,
  },
});
