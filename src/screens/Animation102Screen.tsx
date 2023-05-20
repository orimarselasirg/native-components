import React, { useContext } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/ThemeContext';

export const Animation102Screen = () => {

  const {squareMoveResponder, pan} = useAnimation();
  const {theme} = useContext(ThemeContext);

  return (
    <View style={{...styles.container, backgroundColor: theme.boxColor}}>
      <Animated.View {...squareMoveResponder.panHandlers} style={[pan.getLayout(), {...styles.box, backgroundColor: theme.boxAnimatedColor} ]}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
  },
});
