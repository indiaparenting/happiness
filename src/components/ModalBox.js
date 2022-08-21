import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { TouchableOpacity } from 'react-native-gesture-handler';
const ModalBox = (props) => {
    //console.log("props", props);
    //'https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4'
    return (
        <Modal animationType={"slide"}
            transparent={false}
            style={styles.modalView}
            visible={props.mFlag}>
            <View style={styles.modalView}>
                <View style={{ position: 'absolute', right: 0, top: -15, bottom: 0, fontWeight: '800' }}>
                    <TouchableOpacity onPress={props.func}>
                        <Text style={{ fontSize: 26 }}>&times;</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.videoContainerStyle}>
                    <VideoPlayer
                        videoProps={{
                            shouldPlay: true,
                            resizeMode: 'cover',
                            source: {
                                uri: props.vData.videoUrl,
                            },
                        }}
                        icon={{
                            play: <Text style={{ color: '#FFF', padding: 10, }}>PLAY</Text>,
                            pause: <Text style={{ color: '#FFF', padding: 10, }}>PAUSE</Text>,
                        }}
                        slider={{
                            visible: false,
                        }}
                        fullscreen={{
                            visible: false,
                        }}
                        timeVisible={false}
                        style={styles.videoStyle}
                        isLooping
                    />
                </View>
                <View style={{ flex: 1, marginTop: 5,width: '100%' }}>
                    <Text style={{textAlign: 'left',justifyContent: 'flex-start'}}>{props.vData.videoTitle}</Text>
                </View>
            </View>
        </Modal>

    );
}
export default ModalBox;
const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 6,
        paddingTop: 12,
        borderRadius: 10,
        margin: 8,
        marginTop: 45,
    },
    closeBtn: {
    },
    videoStyle: {
        height: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoContainerStyle: {
        height: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        backgroundColor: 'grey'
    },
});