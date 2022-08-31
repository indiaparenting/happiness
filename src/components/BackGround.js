import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet } from 'react-native';


const BackGround = ({ children, colors }) => {
    return (

        <LinearGradient
            colors={['#C50201', '#C50201', '#C50201']}//#fbed1f //fbb034
            style={styles.Container}>
            {children}
        </LinearGradient>

    );

};

BackGround.defaultProps = {
    colors: ['#C50201', '#C50201', '#C50201']
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
        height: null,
        flex: 1,
        flexDirection: 'column',


    }
});

export default BackGround;
