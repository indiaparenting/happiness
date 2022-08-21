import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';


import { Logo, FbIcon, GoogleIcon } from '../../Imprter/LoginAssets';





const UnderLine = ({ children, color, width }) => {





    return (
        <>


            <View style={[styles.headerContainer, { borderColor: color, borderBottomWidth: width }]}>
                {children}

            </View>



        </>
    );
};

UnderLine.defaultProps = {
    color: 'black',
    width: 1
}

const styles = StyleSheet.create({

    headerText: {
        fontSize: 22,
        fontWeight: 'bold',

        textAlign: 'center',
        color: '#C50201',


    },
    headerContainer: {
        marginBottom: 20,

        paddingVertical: 5,
        borderBottomWidth: 2,
        borderColor: '#585657'

    }






});

export default UnderLine;
