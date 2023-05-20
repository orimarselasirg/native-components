/* eslint-disable react-native/no-inline-styles */
// import { useNavigation } from '@react-navigation/native';
import React,{ useState, useRef, useContext } from 'react';
import { View, StyleSheet, SafeAreaView, ImageSourcePropType, Text, Dimensions, Image, Animated, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../context/ThemeContext';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
      title: 'Titulo 1',
      desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
      img: require('../../assets/slide-1.png'),
  },
  {
      title: 'Titulo 2',
      desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
      img: require('../../assets/slide-2.png'),
  },
  {
      title: 'Titulo 3',
      desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
      img: require('../../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any>{} // de esta manera accedemos a las props de navegacion sin necesidad de llamar una funcion como useNavigacion

export const SlideScreen = ({navigation}: Props) => {
  const [activeIndex, setactiveIndex] = useState(0);
  const {theme} = useContext(ThemeContext);
  const isVisible = useRef(false);
  // const navigation = useNavigation(); // usando este hook para navegar a otra pantalla estamos llamando otros, funcion, mejor llamar al metodo de navegacion que ya viene en las props
  const {fadeIn, fadeAnim} = useAnimation();

  const {width} = Dimensions.get('window');

  const renderItem = (item: Slide, backgroundColor: string) => {
    return (
      <View style={{...stylesComp.slide, backgroundColor: backgroundColor}}>
        <Image
          source={item.img}
          style={stylesComp.image}
        />
        <Text style={stylesComp.title}>{item.title}</Text>
        <Text style={stylesComp.subTitle}>{item.desc}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={stylesComp.container}>
        {/* <RenderItemHeader title="Slide Screen"/> */}
        <Carousel
          data={items}
          renderItem={({item}) => renderItem(item, theme.backgroundSlide)}
          sliderWidth={width}
          itemWidth={width}
          layout="default"
          onSnapToItem={(index) => {
            setactiveIndex(index);
            if (index === items.length - 1){
              isVisible.current = true;
              fadeIn();
            }
          }}
          onEndReached={()=>fadeIn()}
        />

        <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
          <Pagination
            dotsLength={items.length}
            activeDotIndex={activeIndex}
            // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 3,
                backgroundColor: theme.dotColor,
            }}
            inactiveDotStyle={{
                // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
          <Animated.View style={{opacity: fadeAnim}}>
            <TouchableOpacity
              style={{
                backgroundColor: theme.buttonColor,
                width: 100, borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'}}
                onPress={()=> { isVisible.current && navigation.popToTop(); }}>
              <Text style={{color: theme.iconButtonColor}}>Volver</Text>
              <Icon
                name="caret-back-outline"
                size={25}
                color={theme.iconButtonColor}
                />
            </TouchableOpacity>
          </Animated.View>
        </View>
    </SafeAreaView>
  );
};

const stylesComp = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    padditngTop: 50,
  },
  slide: {
    flex: 1,
    // backgroundColor: 'white',
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  image:{
    flex: 1,
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  title : {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'justify',
  },
});
