import React from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';


import { Logo, FbIcon, GoogleIcon } from '../../Imprter/LoginAssets';

import UnderLine from './UnderLine'



const WIDTH = Dimensions.get('window').width
const AuthFormBackground = ({ headerText, children }) => {





    return (
        <>

            <View style={[styles.rootContainer, { width: WIDTH }]}>
                <View style={[styles.form, { width: WIDTH * 0.95 }]}>
                    <View style={styles.LogoContainer}>
                        <Image style={styles.Logo} source={Logo} resizeMode="contain"
                            resizeMethod="resize" />
                    </View>
                    <UnderLine color={'#585657'} width={2}>
                        <Text style={styles.headerText}>{headerText}</Text>
                    </UnderLine>


                    {children}

                </View>

            </View>


        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

        marginLeft: 18,
        marginRight: 18,
        marginTop: 5,
        color: 'red'
    },
    headerText: {
        fontSize: 23,

        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        color: '#585657',


    },
    headerContainer: {
        marginBottom: 20,

        paddingVertical: 5,
        borderBottomWidth: 2,
        borderColor: '#585657'

    }
    ,

    Logo: {
        height: 100, width: 100, resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,


    },

    LogoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 10,


    },

    rootContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 100



    },


    form: {

        paddingHorizontal: 5,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,

        shadowColor: '#E7B62B',

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        alignItems: 'center',

    },



});

export default AuthFormBackground;
