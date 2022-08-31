import React, { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { loader as LoaderJson } from '../../Imprter/ChallengeImporter';



let animation;
const SplashLoader = ({ height, width }) => {





    return (


        <LottieView
            ref={animation => {
                animation = animation;
            }}
            style={{
                width: width,
                height: height,
                backgroundColor: 'transparent',
            }}
            resizeMode='contain'
            source={LoaderJson}
            autoPlay
            loop
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />

    );
};
SplashLoader.defaultProps = {

    height: 100,
    width: 400
};

const styles = StyleSheet.create({
    container: {



        alignItems: 'center',
        justifyContent: 'center',
        width: 500,
        height: 500



    },
    headerTextStyle: {

        textAlign: 'center',
        fontWeight: '700',

    }

});

export default SplashLoader;
