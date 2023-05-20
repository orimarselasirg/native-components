/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import { FlatList } from 'react-native';
import { View } from 'react-native';
import { styles } from '../theme/globalTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { MenuItem } from '../interfaces/appIntefaces';
import { RenderItemHeader } from '../components/ItemHeader';
import { ThemeContext } from '../context/ThemeContext';


const menuOptions: MenuItem[] = [
  {
    name: 'animations 101',
    icon: 'planet-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'animations 102',
    icon: 'tablet-landscape-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'switch',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'alert',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'text',
    icon: 'text-outline',
    component: 'TextInputScreen',
  },
  {
    name: 'Refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'SectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'book-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll',
    icon: 'infinite-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slide Screen',
    icon: 'albums-outline',
    component: 'SlideScreen',
  },
  {
    name: 'Theme Screen',
    icon: 'cloud-circle-outline',
    component: 'ChangeThemeScreen',
  },
];

export const HomeScreen = () => {
  const {theme} = useContext(ThemeContext);

  const itemSeparator = () => {
    return (
      <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 7, backgroundColor: theme.dividerColor}}/>
    );
  };

  return (
    <View style={{flex: 1, ...styles.globaMagin}}>
      <FlatList
        data={menuOptions}
        renderItem={({item}) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={<RenderItemHeader title="Opciones de menu"/>}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
