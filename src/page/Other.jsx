import React, { useEffect, useState } from 'react'
import { View, Button, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const Email = () => {
  const email_data = [
    { name: 'Jane Doe: The Adventurous Traveler', para: 'A passionate traveler who loves exploring new cultures and sharing experiences' },
    { name: 'John Smith: The Tech Enthusiast', para: 'A tech enthusiast fascinated by the latest gadgets and software innovations.' },
    { name: 'Alice Brown: The Aspiring Chef', para: 'An aspiring chef experimenting with flavors and creating unique culinary masterpieces.' },
    { name: 'Bob Jones: The Fitness Fanatic', para: 'A fitness fanatic dedicated to inspiring others through workouts and healthy living.' },
    { name: 'Emily White: The Bookworm', para: 'A bookworm who enjoys diving into fantasy worlds and discussing great literature.' },
    { name: 'Mike Green: The Creative Designer', para: 'A creative designer focused on developing visually appealing and user-friendly interfaces.' }
  ]

  const xaxis = useSharedValue(0);

  const pan = Gesture.Pan()
    .onChange((event) => {
      xaxis.value = event.translationX;
    })
    .onFinalize(() => {
      xaxis.value = withSpring(0);
    })

  const translate = useAnimatedStyle(() => ({
    transform: [{ translateX: xaxis.value }],
  }));


  return (
    <GestureHandlerRootView style={styles.email_contain}>
        {email_data.map((item, index) => {
    return (
      // <View key={index}>
        <GestureDetector gesture={pan}  key={index}>
          <Animated.View style={[styles.email_box, translate]}>
            <Image source={{ uri: 'data:image/png;base64i' }} 
                   style={styles.email_box_img} />
            <View style={styles.email_txt}>
              <Text style={styles.email_title} numberOfLines={1}>{item.name}</Text>
              <Text style={styles.email_para} numberOfLines={2}>{item.para}</Text>
            </View>
          </Animated.View>
        </GestureDetector>
      // </View>
    )
  })}
    </GestureHandlerRootView>
  )
}

export default Email;

const styles = StyleSheet.create({
  email_contain: {
    flex: 1,
    backgroundColor: '#fff',
    // width: '100%',
    // height: '100%',
    // elevation: 5,
    // position: 'absolute',
    // bottom: 0,
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // alignItems: 'center'
  },

  email_box: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderColor: '#000',
    borderWidth: 0.5,
    display: 'flex',
    flexDirection: 'row'
  },
  email_title: {
    fontSize: 18,
    fontWeight: '500',
  },
  email_para: {
    fontSize: 15,
    fontWeight: '400',
  },
  email_txt: {
    width: '80%'
  },
  email_box_img: {
    width: 60,
    height: 60,
    borderRadius: 30
  }
})