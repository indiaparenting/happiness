import React, { useState } from 'react'
import { Video, AVPlaybackStatus } from 'expo-av'
import { View, StyleSheet, Image, Text, Button, Dimensions, TouchableOpacity } from 'react-native';
import ChallengeButton from '../Buttons/ChallengeButtons';
const WIDTH = Dimensions.get('window').width
import CardSection from '../CardSection';
import { SimpleLineIcons } from '@expo/vector-icons';
import TermsnCondition from '../../SideMenuScreens/TermsnCondition'

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

const TermsBottomModal = ({ scaleAnimationModal, setModal }) => {


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
                    marginTop: 15
                }}
            >
                <TouchableOpacity style={{ position: 'absolute', top: -5, right: 5 }} onPress={() => { setModal(false) }}>
                    <SimpleLineIcons name="close" size={30} color="black" />
                </TouchableOpacity>
                <TermsnCondition></TermsnCondition>
            </ModalContent>
        </BottomModal>



    )
}

TermsBottomModal.defaultProps = {


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

        fontFamily: 'Montserrat_400Regular',
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
        flex: 1,
        width: WIDTH - 10,
        borderRadius: 15,
    },
    videoStyle: {

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        width: WIDTH - 10,


    },
    videoContainerStyle: {
        height: 250,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: WIDTH - 10,



    },
})

export default TermsBottomModal

