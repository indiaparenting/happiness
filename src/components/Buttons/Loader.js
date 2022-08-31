import React, { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { loader as LoaderJson } from '../../Imprter/ChallengeImporter';



let animation;
const Loader = ({ isLoading, height, width }) => {





    return (

        <View >
            <LottieView
                ref={animation => {
                    animation = animation;
                }}
                style={{
                    width: width,
                    height: height,
                    backgroundColor: 'rgba(52, 52, 52, 0)',
                }}
                source={LoaderJson}
                autoPlay
                loop
            // OR find more Lottie files @ https://lottiefiles.com/featured
            // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
            />
        </View>
    );
};
Loader.defaultProps = {
    buttonColor: ['#D78BFE', '#7070FA', '#6469FA'],
    height: 50,
    width: 150
};

const styles = StyleSheet.create({
    Container: {


        marginHorizontal: 5,

        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 17,
        borderWidth: 1,
        borderColor: 'white',

        shadowColor: 'black',

        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowColor: 2,
        elevation: 6,

    },
    headerTextStyle: {

        textAlign: 'center',
        fontWeight: '700',

    }

});

export default Loader;
