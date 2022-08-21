import * as ScreenOrientation from 'expo-screen-orientation'
import { Video } from 'expo-av'
import { setStatusBarHidden } from 'expo-status-bar'
import VideoPlayer from 'expo-video-player'


import { Dimensions, ScrollView, StyleSheet, Text } from 'react-native'

import React, { useRef, useState } from 'react'


const url = "https://happines.fra1.digitaloceanspaces.com/posts/613887e20b66530013c15c20/video/8e34c21b-dbd7-45fc-b39b-436ac861ebc0.mp4"

const VideoExample = () => {
  const [inFullscreen, setInFullsreen] = useState(false)
  const [inFullscreen2, setInFullsreen2] = useState(false)
  const refVideo = useRef(null)
  const refVideo2 = useRef(null)
  const refScrollView = useRef(null)

  return (
    <ScrollView
      scrollEnabled={!inFullscreen2}
      ref={refScrollView}
      onContentSizeChange={() => {
        if (inFullscreen2) {
          refScrollView.current.scrollToEnd({ animated: true })
        }
      }}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={[styles.text, { fontWeight: 'bold', textTransform: 'uppercase' }]}>
        Examples
      </Text>
      {/* ShouldPlay (autoplay) is true only in the first example */}
      <Text style={styles.text}>Basic</Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: url,
          },
        }}
      />

      <Text style={styles.text}>Local file</Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: url,
          },
        }}
        style={{ height: 160 }}
      />

      <Text style={styles.text}>Only video without controls</Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_COVER,
          source: {
            uri: url,
          },
        }}
        slider={{
          visible: false,
        }}
        fullscreen={{
          visible: false,
        }}
        timeVisible={false}
        style={{ height: 160 }}
      />

      <Text style={styles.text}>Some styling</Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: url,
          },
        }}
        style={{
          videoBackgroundColor: 'transparent',
          controlsBackgroundColor: 'red',
          height: 200,
        }}
      />

      <Text style={styles.text}>With custom icons</Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_COVER,
          source: {
            uri: url,
          },
        }}
        icon={{
          play: <Text style={{ color: '#FFF' }}>PLAY</Text>,
          pause: <Text style={{ color: '#FFF' }}>PAUSE</Text>,
        }}
        style={{ height: 160 }}
      />

      <Text style={styles.text}>With some more styling</Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: url,
          },
        }}
        style={{
          height: 160,
          width: 160,
          videoBackgroundColor: 'yellow',
          controlsBackgroundColor: 'blue',
        }}
      />

      <Text style={styles.text}>Fullscren icon hidden</Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: url,
          },
        }}
        fullscreen={{
          visible: false,
        }}
        style={{ height: 160 }}
      />

      <Text style={styles.text}>Ref - clicking on Enter/Exit fullscreen changes playing</Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: url,
          },
          ref: refVideo,
        }}
        fullscreen={{
          enterFullscreen: () => {
            setInFullsreen(!inFullscreen)
            refVideo.current.setStatusAsync({
              shouldPlay: true,
            })
          },
          exitFullscreen: () => {
            setInFullsreen(!inFullscreen)
            refVideo.current.setStatusAsync({
              shouldPlay: false,
            })
          },
          inFullscreen,
        }}
        style={{ height: 160 }}
      />

      <Text style={styles.text}>Fullscren</Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: url,
          },
          ref: refVideo2,
        }}
        fullscreen={{
          inFullscreen: inFullscreen2,
          enterFullscreen: async () => {
            setStatusBarHidden(true, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
            refVideo2.current.setStatusAsync({
              shouldPlay: true,
            })
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
          },
        }}
        style={{
          videoBackgroundColor: 'black',
          height: inFullscreen2 ? Dimensions.get('window').width : 160,
          width: inFullscreen2 ? Dimensions.get('window').height : 320,
        }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  text: {
    marginTop: 36,
    marginBottom: 12,
  },
})

export default VideoExample