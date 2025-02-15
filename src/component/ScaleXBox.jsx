import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

const ScaleXBox = () => {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={Object.assign(Object.assign({}, styles.box), { width })}
      />

      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}

export default ScaleXBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    height: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 64,
  },
});
