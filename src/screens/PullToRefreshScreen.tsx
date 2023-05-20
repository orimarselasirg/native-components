/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View, RefreshControl, ScrollView, Text } from 'react-native';
import { RenderItemHeader } from '../components/ItemHeader';
import { ThemeContext } from '../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const {theme} = useContext(ThemeContext);
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = React.useState<string>();
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setData('Hola mundo depues del Pull to refresh');
    }, 1500);
  };

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} progressViewOffset={300} progressBackgroundColor={theme.colors.background} colors={[theme.colors.text]}/>}>
        <View style={{height: 1000}}>
          <RenderItemHeader title="Pull To Refresh"/>
          <Text style={{color: theme.colors.text}}>{data}</Text>
        </View>
    </ScrollView>
  );
};
