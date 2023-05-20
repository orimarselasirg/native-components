/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { RenderItemHeader } from '../components/ItemHeader';
import { FadeInImage } from '../components/FadeInImage';
import { ThemeContext } from '../context/ThemeContext';

export const InfiniteScrollScreen = () => {
  const [number, setNumber] = useState([1,2,3,4,5,6,7,8]);
  const {theme} = useContext(ThemeContext);

  const renderItem = (item: number) => {
    return (
      // <Image
      //   source={{uri: `https://picsum.photos/id/${item}/500/400`}}
      //   style={{width: '100%', height: 400}}
      // />
      <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`} style={{width: '100%', height: 500, borderRadius: 10}} />
    );
  };
  const headerComponent = () => {
    return (
      <RenderItemHeader title="Scroll infinito"/>
    );
  };

  const footerComponent = () => {
    return (
      <View style={{height: 150, width: '100%'}}>
        <ActivityIndicator style={stylesinfinite.footerComponent} color= {theme.colors.text} size={50}/>
      </View>
    );
  };

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = number.length + i;
    }
    setTimeout(() => {
      setNumber([...number, ...newArray]);
    }, 1000);
  };
  return (
    <View style={{...stylesinfinite.container, backgroundColor: theme.colors.background}}>
      {/* <RenderItemHeader title="Scroll infinito"/> */}
      <FlatList
        data={number}
        keyExtractor={(item, index) => item.toString() + index}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => headerComponent()}
        ListFooterComponent={() => footerComponent()}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const stylesinfinite = StyleSheet.create({
  container: {
    flex: 1,
  },
  textItem: {
    backgroundColor: 'green',
    height: 150,
    fontSize: 50,
    // margin: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  footerComponent: {
    height: 150,
    width: '100%',
    // backgroundColor: 'red',
  },
});
