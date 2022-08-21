import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import Spacer from '../Spacer';

import InputError from './InputError'


const Input = ({ placeholder, keyboardType, value, onChangeText, onEndEditing, errorMessage, isValid, firstLoaded }) => {



    return (
        <>
            <Spacer>
                <TextInput style={styles.Input}
                    placeholder={placeholder}
                    value={value}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onEndEditing={onEndEditing}
                />

                <InputError errorMessage={errorMessage} isValid={isValid} firstLoaded={firstLoaded}></InputError>

            </Spacer>


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
    Input: {
        color: '#000000',
        borderRadius: 35,
        width: '95%',
        height: 55,
        backgroundColor: '#FAF8F9',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#E7B62B',
        borderColor: '#F298AB',
        borderWidth: 1,

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        paddingRight: 25,
        paddingLeft: 25,
        fontSize: 20,

        fontFamily: 'Montserrat_400Regular',

    },
    SubmitButtonText: {
        color: 'white',
        fontSize: 22,
    },
    headerText: {
        fontSize: 17,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
    },
    Logo: {
        height: 100, width: 300, resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
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
        justifyContent: 'flex-end',
        flexDirection: 'column',




    }, SocialCoontainer: {

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
    form: {
        marginHorizontal: 10,
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

    },
    TcnPassword: {


    }


});

export default Input;
