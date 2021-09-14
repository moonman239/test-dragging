import React, { useRef } from "react";
import { View, StyleSheet, Text, FlatList} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Animated } from "react-native";

class DraggableComponent extends React.Component
{
  translateX = new Animated.Value(0);
  translateY = new Animated.Value(0);
  handleGesture = Animated.event(
    [{nativeEvent: {translationX : this.translateX,translationY:this.translateY}}],
    {useNativeDriver:true}
    );
  render()
  {
    const transformStyle = {
      transform: [
        {
          translateY: this.translateY
        },
        {
          translateX: this.translateX
        }
      ]
    }
    return  <PanGestureHandler onGestureEvent={this.handleGesture} >
      <Animated.View style={transformStyle}>
        <View style={styles.box} />
      </Animated.View>
      </PanGestureHandler>;
  }
}

const App = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
      <FlatList horizontal={true} data={[{key:"b"},{key:"c"},{key:"d"},{key:"e"}]} renderItem={({item}) => <DraggableComponent />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5
  }
});

export default App;