import React from 'react'
import { View, Button, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';



const PracHorizonXBox = () => {
  const Xaxis = useSharedValue(0)
  const Yaxis = useSharedValue(0)
  // const color = useSharedValue('#FF5733')

const translate = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: Xaxis.value }, {translateY:Xaxis.value}],
      // color: color.value
    }
  });

  const handler = () => {
    console.log('Hallo')
    if(Xaxis.value==0){
      x
      Xaxis.value = withSpring(150)
      Yaxis.value = withSpring(-120)
      // color.value = 
    }else{
      Xaxis.value = withSpring(0)
      Yaxis.value = withSpring(0)
    }
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[{
        width: 100,
        height: 100,
        margin: 50,
        borderRadius: 15,
        backgroundColor: '#FDFD96',
      }, translate, ]}></Animated.View>
      <Button title='Press Here' onPress={handler} />
    </View>
  );
};

export default PracHorizonXBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
