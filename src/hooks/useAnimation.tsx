import { useRef, useState } from 'react';
import { Animated, Easing, PanResponder } from 'react-native';

export const useAnimation = () => {
  const [show, setShow] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY()).current;

  const fadeIn = (duration: number = 500) => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start(()=> {setShow(false);});
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(()=> {setShow(true);});
    Animated.timing(position,
      {
        toValue: -100,
        duration: 500,
        useNativeDriver: true,
      }).start();
  };

  const startMovingPosition = (initialPosition: number, duration: number = 300) => {
    position.setValue(initialPosition);
    Animated.timing(position, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const squareMoveResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {useNativeDriver: false}),
    onPanResponderRelease: () => {
      Animated.spring(pan, {toValue:{x:0, y:0}, useNativeDriver: false}).start();
    },
  });

  return {
    fadeAnim,
    position,
    fadeIn,
    fadeOut,
    show,
    startMovingPosition,
    squareMoveResponder,
    pan,
  };
};
