// import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { View, Button, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import Bag from 'react-native-vector-icons/SimpleLineIcons';

const Tab = () => {
  const [select, setSelect] = useState(0)
  const xaxis = useSharedValue(0)
  const yaxis = useSharedValue(0)

  console.log('setSelect', select)

  const translate = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: xaxis.value }, { translateY: yaxis.value }],
    }
  })

  useEffect(() => {
    if (select == 0) {
      yaxis.value = withTiming(50, { duration: 500 });
      setTimeout(() => {
        xaxis.value = withTiming(0, { duration: 500 });
      }, 500)
      setTimeout(() => {
        yaxis.value = withTiming(0, { duration: 500 });
      }, 1000)


    } else if (select == 1) {
      yaxis.value = withTiming(50, { duration: 500 });
      setTimeout(() => {
        xaxis.value = withTiming(118, { duration: 300 });
      }, 500)
      setTimeout(() => {
        yaxis.value = withTiming(0, { duration: 300 });
      }, 1000)


    } else if (select == 2) { // Changed to else if
      yaxis.value = withTiming(50, { duration: 300 });
      setTimeout(() => {
        xaxis.value = withTiming(235, { duration: 300 });
      },500)
      setTimeout(() => {
        yaxis.value = withTiming(0, { duration: 300 });
      },1000)
    }
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.tab_contain}>
        <Animated.View style={[{
          width: 60,
          height: 60, backgroundColor: 'orange', position: 'absolute', borderRadius: 30
        }, translate]}></Animated.View>
        <TouchableOpacity style={{
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }} onPress={() => {
          setSelect(0)
        }}>
          <Bag name="handbag" size={27} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center'
        }} onPress={() => {
          setSelect(1)
        }}>
          <Bag name="handbag" size={27} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: 60,
          height: 60, justifyContent: 'center',
          alignItems: 'center'
        }} onPress={() => {
          setSelect(2)
        }}>
          <Bag name="handbag" size={27} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  tab_contain: {
    width: '100%',
    height: 70,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
})
