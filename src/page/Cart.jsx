// import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { View, Button, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';


const Cart = () => {
  const xaxis = useSharedValue(0)
  const yaxis = useSharedValue(0)
  const scale = useSharedValue(1)
  const [count, setCount] = useState(0)

  const translate = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: xaxis.value }, { translateY: yaxis.value }, { scale: scale.value }],

    }
  });


  const handler = () => {
    console.log('Hallo')
    // if (xaxis == 0) {
    xaxis.value = withTiming(183, { duration: 1500 })
    yaxis.value = withTiming(-706, { duration: 1500 })
    scale.value = withTiming(1,{duration: 1500})
    setCount(count + 1)
    // }
    // console.log('Hallo');

    // setInterval(()=>
    //   setCount(count + 1),2000
    // )
  }
  return (
    <ScrollView style={styles.cart}>
      <Image source={{ uri: 'https://5.imimg.com/data5/SELLER/Default/2020/9/KN/IB/ED/8852934/-mg-1114-1000x1000.JPG' }}
        style={{ width: '100%', height: 400, marginBottom: 40 }} />
      <Text style={styles.cart_head}>Synthetic Slip On Semi Formal Shoes</Text>
      <Text style={styles.cart_para}>This men's shoes by BXXY is apt for stylish personalities with its exceptionality superior craftsmanship and exquisite design. The sole offers slip and abrasion resistance for a comfortable wear. Cushioned with soft inner lining and a solid synthetic upper  the shoes provide practicality for convenient movement.The loafers are durable with secure stitching that outline the borders and add to the charm</Text>
      <Animated.View style={[{
        width: 27,
        height: 27,
        zIndex: 500,
        borderRadius: 30,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 'auto'
      }, translate]}>
        <Text style={styles.batch_text}>1+</Text>
      </Animated.View>

      <TouchableOpacity style={styles.cart_btn} onPress={handler}>
        <Text style={styles.cart_btn_txt}>Add to Cart</Text>
      </TouchableOpacity>
      <View style={styles.cart_numb_box}>
        <Image source={{ uri: 'data:image/png;base64,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' }}
          style={styles.cart_numb_box_img} />
        <View style={styles.batch}>
          <Text style={styles.batch_text}>{count}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Cart;


const styles = StyleSheet.create({
  cart: {

  },
  cart_img: {
    height: 300,
    width: '100%',
  },
  cart_head: {
    width: '90%',
    fontSize: 23,
    color: 'white',
    margin: 'auto',
  },
  cart_para: {
    width: '90%',
    fontSize: 18,
    color: 'white',
    margin: 'auto',
    // marginBottom: 30
  },

  cart_btn: {
    backgroundColor: '#FF5733',
    height: 70,
    width: '70%',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cart_btn_txt: {
    fontSize: 18,
    fontWeight: '700',
  },
  cart_numb_box: {
    width: 60, height: 60, zIndex: 99, position: 'absolute', borderRadius: 30, backgroundColor: 'white', right: 10, top: 10,
  },
  cart_numb_box_img: {
    width: 60, height: 60, borderRadius: 30, backgroundColor: 'white',
  },
  batch: {
    width: 27,
    height: 27,
    zIndex: 500,
    position: 'absolute',
    borderRadius: 30,
    backgroundColor: 'red',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  batch_text: {
    color: 'white',
    fontWeight: '500'
  },
  batchX: {
    width: 27,
    height: 27,
    zIndex: 500,
    borderRadius: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto'
  },
});