
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { smile } from '../../Imprter/LoginAssets'

const SmilyLayer = ({ children }) => {
    return (
        <View style={styles.Container}>
            <ImageBackground
                source={smile}
                style={styles.BackGround}>
                {children}
            </ImageBackground>
        </View>


    );

};

SmilyLayer.defaultProps = {

}

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        flex: 1,
        flexDirection: 'column',

        width: '100%',
    },
    BackGround: {
        //   backgroundColor: '#fbb034',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        resizeMode: 'cover'


    }
});

export default SmilyLayer;
