import React, {useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const HorizonSpringBox = () => {
  const animation = useSharedValue(0);
  const [clicked, setClicked] = useState(false)
  const animatedStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: animation.value }] }
  });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={[
          { width: 100, height: 100, backgroundColor: 'violet', },
          animatedStyle,
        ]}
      />
      <TouchableOpacity
        style={styles.horizonspringbox_btn}
        onPress={() => {
          if (clicked) {
            animation.value = withSpring(100)
          } else {
            animation.value = withSpring(-100)
          }
          setClicked(!clicked)
        }}>
        <Text style={{ color: '#fff', fontWeight: '900' }}>Start Animation</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HorizonSpringBox;

const styles = StyleSheet.create({
  horizonspringbox_btn: {
    borderWidth: 1,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#ff0023',
    borderColor: '#ff0023'
  }



})
