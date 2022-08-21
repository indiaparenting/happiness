import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { congrates } from '../../Imprter/ChallengeImporter'
import { SimpleLineIcons } from '@expo/vector-icons';

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

const CongatulationModal = ({ scaleAnimationModal, setModal }) => {


    return (

        <Modal
            onTouchOutside={() => {
                setModal(false);
            }}
            width={0.9}
            visible={scaleAnimationModal}
            onSwipeOut={() => setModal(false)}
            modalAnimation={new ScaleAnimation()}
            onHardwareBackPress={() => {
                console.log('onHardwareBackPress');
                setModal(false);
                return true;
            }}

            actions={[
                <ModalButton
                    text="DISMISS"
                    onPress={() => {
                        setModal(false);
                    }}
                    key="button-1"
                />,
            ]}
        >
            <ModalContent>
                <TouchableOpacity style={{ position: 'absolute', top: 5, right: 5 }} onPress={() => { setModal(false) }}>
                    <SimpleLineIcons name="close" size={30} color="black" />
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                    <Text style={styles.headerTextStyle}>Congatulation!</Text>
                    <Image source={congrates} style={styles.image}></Image>
                </View>

            </ModalContent>
        </Modal>


    )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 400,
    },
    headerTextStyle: {
        fontSize: 40,
        color: '#C50201',

        textAlign: 'center',
        fontFamily: 'GoldenHillsDEMO',
    },
})

export default CongatulationModal

