import React, { } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';


import BackGround from '../BackGround';
import { SafeAreaView } from 'react-navigation';

import AuthFormBackground from './AuthFormBackground'
import SmilyLayer from './SmilyLayer';

const Bg = ({ children, headerText }) => {


    return (

        <BackGround>
            <SmilyLayer>


                <SafeAreaView>
                    <KeyboardAvoidingView style={styles.root}>
                        <ScrollView>
                            <View style={styles.container}>

                                <View style={styles.rootContainer}>
                                    <AuthFormBackground headerText={headerText}>
                                        {children}

                                    </AuthFormBackground>
                                </View>
                            </View>


                        </ScrollView>
                    </KeyboardAvoidingView>

                </SafeAreaView>
            </SmilyLayer>
        </BackGround >
    );
};




const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        margin: 20,
        marginTop: 10,
        flex: 1,
        textAlign: 'center'

    },

    SocialCoontainer: {

        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 20,

    },

    SocialIcons: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    SocialText: {
        fontSize: 17,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
    },
    errorMessage: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

        marginLeft: 18,
        marginRight: 18,
        marginTop: 5,
        color: 'red'
    },
    root: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',



    },
    Logo: {
        height: 100, width: 300, resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    headerText: {
        fontSize: 17,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
    },
    LogoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginBottom: 25,
        marginTop: 0,
    },
    rootContainer: {
        flex: 1,

        flexDirection: 'column',
        alignItems: 'center',

    },
    Input: {
        color: '#000000',
        borderRadius: 15,
        width: 325,
        height: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#E7B62B',

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        marginRight: 15,
        marginLeft: 15,
        paddingRight: 25,
        paddingLeft: 25,
        fontSize: 16

    },
    SubmitButtonText: {
        color: 'white',
        fontSize: 22,
    },
    SubmitButton: {

        color: '#000000',
        borderRadius: 15,
        width: 325,
        height: 60,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#E7B62B',

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginRight: 15,
        marginLeft: 15,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 50,



    },

});

export default Bg;
