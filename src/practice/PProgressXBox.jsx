import React from 'react'
import { View, Button, StyleSheet } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

const ProgressXBox = () => {
  const width = useSharedValue(100)
  // console.log("width", width.value)
  const handler = () => {
    width.value = withSpring(width.value + 10)
    // console.log("width", width.value)   
  }
  return (
    <View style={styles.container}>
      <Animated.View style={{
        width: width,
        height: 100,
        margin: 100,
        borderRadius: 15,
        backgroundColor: '#FDFD96',
      }}></Animated.View>
      <Button title='press here' onPress={handler} />
    </View>
  )
}

export default ProgressXBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  // box: {
  //   width: 100,
  //   height: 100,
  //   margin: 50,
  //   borderRadius: 15,
  //   backgroundColor: '#FDFD96',
  // },
})
