import React from 'react';
import { StyleSheet, View } from 'react-native';
import SocialIcon from '../SocialIcon'

import { FbIcon, GoogleIcon, activeTick, normalTick, smile } from '../../Imprter/LoginAssets';


const Social = ({ }) => {
    return null

    return (
        <View style={styles.SocialCoontainer}>

            <View style={styles.SocialIcons}>
                <SocialIcon name={""} height={40} width={40} icon={FbIcon} />
                <SocialIcon name={""} height={60} width={60} icon={GoogleIcon} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        flexDirection: 'row',
        textAlign: 'left',
        alignItems: 'center',

        paddingHorizontal: 10,

        color: 'red',
        paddingHorizontal: 30,
        width: '100%',

    },

    SocialCoontainer: {

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex: 1,
        marginBottom: -25,
        marginTop: 10,



    },

    SocialIcons: {
        alignItems: 'center',
        flexDirection: 'row',
        width: 200,

        justifyContent: 'space-around',
    },
    SocialText: {
        fontSize: 17,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
    },

});

export default Social;
