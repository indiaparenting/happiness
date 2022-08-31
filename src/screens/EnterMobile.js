import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, Dimensions, } from 'react-native';
import Spacer from '../components/Spacer';

import { Context as AuthContext } from '../context/AuthContext';


import NavLink from '../components/NavLink';
import WBText from '../components/WBText';
import ChallengeButton from '../components/Buttons/ChallengeButtons'

import { UnderLine, Social, Input, Bg, FormError } from '../components/Auth/index';
const WIDTH = Dimensions.get('window').width


const OTP = () => {
    return (<Text style={styles.OTP}>One Time Password (OTP)</Text>)
}


const IsValidForm = (inputtxt) => {
    let phoneno = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
        return true;
    }
    else {

        return false;
    }
}

const mobilevalidate = (text) => {
    const reg = /^[0]?[789]\d{9}$/;
    if (reg.test(text) === false) {

        return false;
    } else {

        return true;
    }
}


const EnterMobile = ({ }) => {

    const { state, numberValidator, SendOtp, clearErrorMessage, VerifyOtp, setMobileNumber } = useContext(AuthContext);
    const [mobileNumber, setNumber] = useState();

    const [isButtonEnable, SetButtonEnable] = useState(false);
    const [firstLoaded, setFirstLoaded] = useState(true);
    const [loading, setLoading] = useState(false);

    const SendOtpAction = async ({ mobileNumber }) => {
        setLoading(true)
        await SendOtp({ mobileNumber })
        setLoading(false)

    }
    return (

        <Bg headerText={'Create Account'}>

            <Text style={styles.text}>The Happines Challenge will send a {OTP()} to verify your number</Text>


            <Input
                placeholder={"Enter mobile number"}
                value={mobileNumber}
                errorMessage={'Mobile number is not valid'}
                isValid={state.isValidNumber}
                firstLoaded={firstLoaded}
                keyboardType='numeric'
                onChangeText={(txt) => {
                    setNumber(txt)
                    setMobileNumber(txt)
                    numberValidator(txt);
                    SetButtonEnable(mobilevalidate(txt))
                    clearErrorMessage()
                    setFirstLoaded(false)

                }}
                onEndEditing={(e) => {

                }}


            />


            <FormError errorMessage={state.errorMessage}></FormError>


            <Spacer />

            <ChallengeButton
                title={'submit'}
                width={(WIDTH * 0.95 - 35) * 0.95}
                disabled={!isButtonEnable}
                isLoading={loading}
                textStyle={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white',
                    fontFamily: 'Montserrat_400Regular',
                }}

                onPress={() => {
                    SendOtpAction({ mobileNumber })
                    clearErrorMessage()
                }}
            />


            <Spacer />





            <NavLink
                routeName="Signin"
            >
                <UnderLine color={'#C63726'} width={2}>
                    <WBText text={"Already a user ?"} highlight={" Sign In"} ></WBText>
                </UnderLine>

            </NavLink>



            <Social></Social>

        </Bg >
    );
};


EnterMobile.navigationOptions = () => {
    return {
        header: () => false,
    };
};


const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        margin: 20,
        marginTop: 10,
        flex: 1,
        textAlign: 'center',
        fontSize: 15,
        color: 'black',
        fontFamily: 'Montserrat_400Regular',

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
        justifyContent: 'flex-end',
        flexDirection: 'column',

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

        paddingLeft: 10,
        paddingRight: 10,

    },

});

export default EnterMobile;
