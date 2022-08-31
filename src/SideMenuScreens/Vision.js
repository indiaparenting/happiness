import React, { useEffect } from "react";
import { Video, AVPlaybackStatus } from 'expo-av'
import { View, Dimensions, Image, ScrollView, StyleSheet, Text } from "react-native";

const { height, WIDTH } = Dimensions.get("window");
import Bg from '../components/App/Bg';

const dummyVideo = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

const url = "https://firebasestorage.googleapis.com/v0/b/happiness-6cf17.appspot.com/o/nirali%2Fhppy-video.mp4?alt=media&token=c62b0a7c-c495-4dc5-a64e-010275550dd3"

export default function Vision({ navigation }) {

  const [videoVisible, setVideoVisible] = React.useState(false);
  const [status, setStatus] = React.useState({});
  const video = React.useRef(null);

  useEffect(() => {


    const didBlurSubscription = navigation.addListener(
      'didFocus',
      payload => {
        setVideoVisible(true)
      }
    );
    const blurListener = navigation.addListener('willBlur', () => {
      console.log('unmount');
      setVideoVisible(false);
      video.current.pauseAsync()
    });

    // Remove the listener when you are done

    return () => {
      didBlurSubscription.remove();
      blurListener.remove();

    };


  }, [navigation]);



  return (
    <Bg top={50} hasBackCard={true} navigation={navigation}>

      <Text style={styles.founder}>Founder</Text>
      <Text style={styles.founder}>Nirali sanghi</Text>
      <View style={styles.videoContainerStyle}>
        <Video
          source={{ uri: url }}
          rate={1.0}
          ref={video}
          volume={1.0}
          isMuted={false}
          useNativeControls
          resizeMode="contain"
          shouldPlay={videoVisible}

          onPlaybackStatusUpdate={status => setStatus(() => status)}
          isLooping
          style={styles.videoStyle}
        />

      </View>



    </Bg>

  );
}



const styles = StyleSheet.create({
  founder: {
    fontFamily: global.MEDIUM,
    fontSize: 15,
    marginLeft: 5
  },
  ScrollView: {
    backgroundColor: "white",
    width: "100%",

  },
  MainContainer: {
    backgroundColor: "white",
    width: "100%",
    padding: 15,
  },
  Heading: {
    color: "#C50201",
    textAlign: "center",
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
    marginTop: 20,
  },
  Content: { marginTop: 20, fontSize: 15, color: "gray" },

  videoContainerStyle: {
    height: 250,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',


    width: '100%'



  },
  videoStyle: {

    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100%',
    width: '100%',
  }
});
