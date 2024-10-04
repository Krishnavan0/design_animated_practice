import React from 'react'
import { View, Button, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';


const PracScale = () => {
  const w = useSharedValue(100)
  const h = useSharedValue(100)
  const c = useSharedValue('#FF5733')
  const r = useSharedValue(0)

  const handler = () => {
    if (w.value == 100) {
      w.value = withSpring(200)
      h.value = withSpring(200)
      r.value = withSpring(100)
      c.value = withSpring('#2ECC71')
    }
    else {
      w.value = withSpring(100)
      h.value = withSpring(100)
      r.value = withSpring(0)
      c.value = withSpring('#FF5733')
    }
  }

  const animated = useAnimatedStyle(() => {
    return {
      width: w.value,
      height: h.value,
      backgroundColor: c.value,
      borderRadius: r.value
    }
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[
        { marginBottom:40 }, animated,
      ]}></Animated.View>
      <Button title='Press Here' onPress={handler} />
    </View>
  );
};

export default PracScale;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
})
