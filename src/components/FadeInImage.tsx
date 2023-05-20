
import React, { useState } from 'react';
import { useAnimation } from '../hooks/useAnimation';
import { Animated, View, StyleSheet, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
interface Props {
  uri: string;
  style?:StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
 const {fadeIn, fadeAnim } = useAnimation();
 const [isLoading, setIsLoading] = useState(true);

 const finishLoading = (duration:number) => {
    setIsLoading(false);
    fadeIn(duration);
 };

  return (
    <View style={styles.container}>
      {
        isLoading && <ActivityIndicator size={40} style={styles.activityIndicator} />
      }

      <Animated.Image
        source={{uri}}
        onLoadEnd={()=>finishLoading(1000)}
        style={{...style as any, opacity: fadeAnim}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    position: 'absolute',
  },
});
