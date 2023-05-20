import React, { useContext } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/ThemeContext';

export const Animation101Screen = () => {
  const {fadeAnim, fadeIn, fadeOut, show, position, startMovingPosition} = useAnimation();
  const {theme} = useContext(ThemeContext);

  return (
    <View style={{...styles.container, backgroundColor: theme.boxColor}}>
      <Animated.View style={{opacity: fadeAnim, transform: [{translateY: position}]}}>
        <View style={{...styles.box, backgroundColor: theme.boxAnimatedColor}}/>
      </Animated.View>
      <View style={styles.buttongroup}>
        {show ?
        <Button
          title="Haz aparecer el cubo"
          color= {theme.buttonColor}
          onPress={()=>{fadeIn(); startMovingPosition(500, 800);}}
        /> :
        <Button
          title="Desaparece el cubo!!!"
          color= {theme.buttonColor}
          onPress={fadeOut}
        />
      }
      </View>
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
  },
  buttongroup: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },

});
