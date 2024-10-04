import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';

// import DlyShow from './src/component/DlyShow';
// import ScaleCircle from './src/component/ScaleCircle';
// import Horizon2XBox from './src/component/Horizon2XBox';
// import TimShakeXBox from './src/component/TimShakeXBox';
// import TimMoveXTab from './src/component/TimMoveXTab';
// import SprMoveXBox from './src/component/SprMoveXBox';
// import SeqBreakXBox from './src/component/SeqBreakXBox';

import HorizonSpringBox from './src/component/HorizonSpringBox';
import ProgressXBox from './src/component/ProgressXBox';
import ScaleXBox from './src/component/ScaleXBox';
import ShakeXBox from './src/component/ShakeXBox';
import LiteScaleCircle from './src/component/LiteScaleCircle';
import GstXBox from './src/component/GstXBox';
import SprCarouselX from './src/component/SprCarouselX';
import DcyDragXBox from './src/component/DcyDragXBox';
import DcyDragRailX from './src/component/DcyDragRailX';
import SeqWobbleBox from './src/component/SeqWobbleBox';
import ReptRotator from './src/component/ReptRotator';


// Practice
import PProgressXBox from './src/practice/PProgressXBox';
import PracScale from './src/practice/PracScale';
import PracHorizonXBox from './src/practice/PracHorizonXBox';
import Cart from './src/page/Cart';



const App = () => {
  return (
    <View style={styles.app}>
      {/* <ScaleCircle /> */}
      {/* <Horizon2XBox /> */}
      {/* <TimShakeXBox /> */}
      {/* <TimMoveXTab /> */}
      {/* <SprMoveXBox /> */}
      {/* <SeqBreakXBox/> */}
      {/* <DlyShow /> */}

      {/* <ScaleXBox /> */}
      {/* <HorizonSpringBox /> */}
      {/* <ShakeXBox /> */}
      {/* <LiteScaleCircle /> */}
      {/* <GstXBox /> */}
      {/* <SprCarouselX /> */}
      {/* <DcyDragXBox /> */}
      {/* <DcyDragRailX /> */}
      {/* <SeqWobbleBox /> */}
      {/* <ReptRotator/> */}

      {/* ##############################   Practice   ########################## */}
      {/* <PProgressXBox /> */}
      {/* <PracScale/> */}
      {/* <PracHorizonXBox /> */}

      <Cart />

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app:{
    flex: 1, 
    // justifyContent: 'center', alignItems: 'center', 
    backgroundColor: '#232736'
  }
})

