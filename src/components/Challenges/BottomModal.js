import React, { useState } from 'react'
import { Video, AVPlaybackStatus } from 'expo-av'
import { View, StyleSheet, Image, Text, Button, Dimensions, TouchableOpacity } from 'react-native';
import ChallengeButton from '../Buttons/ChallengeButtons';
const WIDTH = Dimensions.get('window').width
import CardSection from '../CardSection';
import { SimpleLineIcons } from '@expo/vector-icons';

import { bulb, close } from '../../Imprter/ChallengeImporter'

import Modal, {
    ModalTitle,
    ModalContent,
    ModalFooter,
    ModalButton,
    SlideAnimation,
    ScaleAnimation,
    BottomModal,
    ModalPortal,
} from 'react-native-modals';




const BottomModalWindow = ({ scaleAnimationModal, setModal, data }) => {
    const video = React.useRef(null);
    const { subTitle, Title, content, imageUrl, videoUrl } = data
    const [checked, setChecked] = useState('video');
    const [status, setStatus] = React.useState({});
    const [videoVisible, setVideoVisible] = React.useState(false);

    return (

        <BottomModal
            visible={scaleAnimationModal}
            onTouchOutside={() => setModal(false)}
            height={0.8}
            width={1}
            onSwipeOut={() => setModal(false)}

        >

            <ModalContent
                style={{
                    flex: 1,
                    backgroundColor: 'fff',
                    marginTop: -10
                }}
            >

                <View style={styles.bulbContainer}>

                    <View style={styles.bubleShadow}>

                        <Image style={styles.bulb} source={bulb} />

                    </View>
                </View>
                <TouchableOpacity style={{ position: 'absolute', top: 15, right: 5 }} onPress={() => { setModal(false) }}>
                    <SimpleLineIcons name="close" size={30} color="black" />
                </TouchableOpacity>
                <Text style={[styles.headerTextStyle, { color: 'black' }]}>
                    {subTitle} <Text style={styles.headerTextStyle}>
                        "{Title}"
                    </Text>
                </Text>







                <View style={styles.listContainer}>
                    <ChallengeButton
                        title="Video"
                        borderRadius={15}
                        height={45}
                        width={100}
                        textColor='white'
                        disabled={checked == 'video'}
                        onPress={() => {

                            setChecked('video')
                            setVideoVisible(true)
                        }}
                        isLoading={false}
                    ></ChallengeButton>
                    <ChallengeButton
                        title="Image"
                        borderRadius={15}
                        height={45}
                        width={100}
                        textColor='white'
                        disabled={checked == 'image'}
                        onPress={() => {

                            setChecked('image')
                            setVideoVisible(false)
                        }}
                        isLoading={false}
                    ></ChallengeButton>
                    <ChallengeButton
                        title="Text"
                        borderRadius={15}
                        height={45}
                        width={100}
                        textColor='white'
                        disabled={checked == 'text'}
                        onPress={() => {

                            setChecked('text')
                            setVideoVisible(false)
                        }}
                        isLoading={false}
                    ></ChallengeButton>
                </View>

                <View>
                    {checked === 'text' &&

                        <View style={styles.containerStyle}>
                            <Text style={styles.completedStyle} >{content}</Text>
                        </View>


                    }
                    {checked === 'image' &&

                        <Image style={styles.imageStyle} source={{ uri: imageUrl }} />

                    }
                    {checked === 'video' &&

                        <View style={styles.videoContainerStyle}>

                            <Video
                                source={{ uri: videoUrl }}
                                rate={1.0}
                                ref={video}
                                volume={1.0}
                                isMuted={false}
                                useNativeControls
                                resizeMode="cover"
                                shouldPlay={videoVisible}
                                onPlaybackStatusUpdate={status => setStatus(() => status)}
                                isLooping
                                style={[styles.videoStyle, styles.containerStyle]}
                            />

                        </View>




                    }
                </View>


            </ModalContent>
        </BottomModal>



    )
}

BottomModalWindow.defaultProps = {
    data: {
        Title: 'say 5 things you associated with love',
        subTitle: 'Demo love challenge',
        imageUrl: '',
        videoUrl: '',
        content: ''

    }

}

const styles = StyleSheet.create({
    bubleShadow: {

        backgroundColor: '#fff',


        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowColor: 2,
        elevation: 4,
        width: 60,
        height: 60,
        borderRadius: 30

    },
    closeContainer: {


        position: 'absolute',
        right: 10,
        top: 10

    }, close: {
        width: 40,
        height: 40,
        borderRadius: 20

    },
    bulbContainer: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        marginBottom: 10

    }, bulb: {
        width: 60,
        height: 60,
        borderRadius: 30

    },
    listContainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        paddingVertical: 5,
        marginVertical: 10

    },
    image: {
        width: WIDTH - 10,
        height: 300,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: WIDTH - 10,
        height: 400,
    },
    headerTextStyle: {
        fontSize: 18,
        color: '#C50201',

        textAlign: 'left',
        fontFamily: global.MEDIUM,
    },
    headerContainer: {
        margin: 10,
    },

    titleStyle: {
        fontSize: 14,
        color: '#C50201',

        fontFamily: 'Montserrat_400Regular',

    }, completedStyle: {

        fontSize: 14,
        color: '#4c4c4b',
        padding: 10,
        fontFamily: 'Montserrat_400Regular',

    },
    containerStyle: {
        height: 250,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
    },

    avatarStyle: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0,
        marginRight: 10,

        paddingRight: 4,

    },
    aarowImageStyle: {
        height: 30,
        width: 30,
        borderRadius: 15
    },
    arrowContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0,
        marginRight: 10,

        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: global.RED_COLOR,

    },
    imageStyle: {
        height: 250,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
    },
    videoStyle: {

        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
    },
    videoContainerStyle: {


        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',



    },
})

export default BottomModalWindow

