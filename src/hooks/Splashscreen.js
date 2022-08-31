
import React, { useState, useContext, } from 'react';
import { Modal, StyleSheet, View, Image, Dimensions } from "react-native";
import SplashLoader from '../components/Buttons/SplashLoader';
import { Logo } from '../Imprter/LoginAssets';
const WIDTH = Dimensions.get('window').width

import { Context as AuthContext } from '../context/AuthContext';


const Splashscreen = (props) => {

    const { state } = useContext(AuthContext)
    console.log(state.appInit)
    const [hasAnimationPlayedOnce, setHasAnimationPlayedOnce] = React.useState(false)

    // We only want to hide the Splash Screen after it has played at least once
    const handleAnimationFinish = () => {
        setHasAnimationPlayedOnce(true)
    }

    const isModalVisible = !(state.appInit)

    return (
        <Modal visible={isModalVisible} animationType="fade">
            <View style={styles.splashContainer}>
                <Image source={Logo} resizeMode='contain' style={styles.icon}></Image>
                <View style={styles.loader}>
                    <SplashLoader></SplashLoader>
                </View>

            </View>


        </Modal>
    )
}
//<Image source={smile} resizeMode='contain' style={styles.icon}></Image>


const styles = StyleSheet.create({
    loader: {
        position: 'absolute',
        bottom: '23%',
    },
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'white',


    },

    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: WIDTH - 60,
        resizeMode: 'contain',
        marginBottom: 10

    }

})

export default Splashscreen;