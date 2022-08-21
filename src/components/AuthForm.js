import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from './Spacer';

import { Modal, ModalContent } from 'react-native-modals';
import { Button } from 'react-native'

import ChallengeButton from './Buttons/ChallengeButtons';

import NavLink from './NavLink';
import WBText from './WBText'

import TcnPassword from './TcnPassword'
import DateTimePicker from '@react-native-community/datetimepicker'
import RadioButtonRN from 'radio-buttons-react-native';


import { UnderLine, Social, AuthFormBackground, Input, AuthNav, FormError } from './Auth/index';
import PressableText from './PressableText';

const WIDTH = Dimensions.get('window').width


const RadioData = [
  {
    label: 'male',
    accessibilityLabel: 'Your label'
  },
  {
    label: 'female',
    accessibilityLabel: 'Your label'
  }
];

const IsUserNameValid = (username) => {
  if (username.trim().length > 3) {
    return true;

  }
  return false;
}
const IsValidPassword = (password) => {
  if (password.trim().length >= 6) {
    return true;

  }
  return false;
}

const IsValidReferral = (password) => {
  if (password.trim().length >= 6) {
    return true;

  }
  return false;
}

const isVaildEmail = (email) => {

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

const isValidAge = (selectedDate) => {

  const age = calculateAge(new Date(selectedDate))

  return age > 7;
}


function calculateAge(birthday) { // birthday is a date
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}


const AuthForm = ({ headerText, clearErrorMessage, errorMessage, onSubmit, submitButtonText, isSignIn, userNameValidator, isValidUserName, emailValidator, isValidEmail, isValidPassword, isValidReferral, passwordValidator, referalValidator, validateForm, otp, mobile }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [referalCode, setReferalCode] = useState('');
  const [password, setPassword] = useState('');
  const [tc, setTc] = useState(false);

  const [firstLoaded, setFirstLoaded] = useState(true);

  const [isButtonEnable, SetButtonEnable] = useState(false);

  const [date, setDate] = useState(new Date(1598051730000));

  const [modal, setModal] = useState(false);

  const [isFetching, setFetching] = useState(false);


  const [ageValid, setAgeValid] = useState(false);

  const [show, setShow] = useState(false);

  const [gender, setGender] = useState("male");

  const setGenderAction = (gender) => {
    setGender(gender.label);
  }


  const onChange = (event, selectedDate) => {

    const { type } = event;

    if (type === "set") {
      setShow(false);

      const isValid = isValidAge(selectedDate)
      setAgeValid(isValid)
      setDate(new Date(selectedDate));
    }
    setShow(false);

  }
  const onCancel = () => {

  }

  const isValidForm = isSignIn ? (isValidEmail && isValidPassword) : (!firstLoaded && tc && isValidUserName && isValidPassword && isValidEmail && isValidReferral && ageValid);

  const SetFromValidity = () => {


    SetButtonEnable(isValidForm);

  }

  const OnSubmit = async ({ name, email, password, referalCode, mobile, otp, dob, gender }) => {
    setFetching(true)
    await onSubmit({ name, email, password, referalCode, mobile, otp, dob, gender })
    setFetching(false)
  }


  return (
    <>

      <View style={styles.rootContainer}>
        <AuthFormBackground headerText={headerText}>

          {!isSignIn && <Input
            placeholder={"Username"}
            value={name}
            errorMessage={"UserName is not valid"}
            isValid={isValidUserName}
            firstLoaded={firstLoaded}

            onChangeText={(txt) => {
              setName(txt)
              userNameValidator(IsUserNameValid(txt))
              clearErrorMessage()
              validateForm(isValidForm)

              setFirstLoaded(false)
              SetFromValidity()
            }}
            onEndEditing={(e) => {
              userNameValidator(IsUserNameValid(e.nativeEvent.text))
              validateForm(isValidForm)

              setFirstLoaded(false)
              SetFromValidity()
            }}
          />}




          <Input
            placeholder={"Email ID"}
            value={email}
            errorMessage={'Invalid email Id'}
            isValid={isValidEmail}
            firstLoaded={firstLoaded}

            onChangeText={(txt) => {
              setEmail(txt);

              emailValidator(isVaildEmail(txt))
              clearErrorMessage()
              validateForm(isValidForm)

              setFirstLoaded(false)
              SetFromValidity()
            }}
            onEndEditing={(e) => {

              emailValidator(isVaildEmail(e.nativeEvent.text))

              validateForm(isValidForm)

              setFirstLoaded(false)
              SetFromValidity()
            }}


          />


          {!isSignIn && show &&

            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}

              onChange={onChange}
              display="spinner"

            />

          }
          <Input
            placeholder={"Password"}
            value={password}
            errorMessage={'password length must be atleast more than 3 characters'}
            isValid={isValidPassword}
            firstLoaded={firstLoaded}

            onChangeText={(txt) => {
              setPassword(txt)
              passwordValidator(IsValidPassword(txt))
              validateForm(isValidForm)
              clearErrorMessage()

              setFirstLoaded(false)
              SetFromValidity()

            }}

            onEndEditing={(e) => {
              passwordValidator(IsValidPassword(e.nativeEvent.text))
              validateForm(isValidForm)

              setFirstLoaded(false)
              SetFromValidity()

            }}

          />


          {!isSignIn && <Input
            placeholder={"referral code"}
            value={referalCode}
            errorMessage={'referal Code is not valid'}
            isValid={isValidReferral}
            firstLoaded={firstLoaded}

            onChangeText={(txt) => {
              setReferalCode(txt)
              referalValidator(IsValidReferral(txt))
              validateForm(isValidForm)
              clearErrorMessage()

              setFirstLoaded(false)
              SetFromValidity()

            }}
            onEndEditing={(e) => {

              referalValidator(IsValidReferral(e.nativeEvent.text))
              validateForm(isValidForm)

              setFirstLoaded(false)
              SetFromValidity()
            }

            }

          />}


          {!isSignIn &&


            <PressableText
              onPress={() => setShow(show ? false : true)}
            >
              <WBText fontSize={16} highlightTextStyle={{ color: ageValid ? 'green' : global.RED_COLOR }} text={"Your Birth Date ? "} highlight={date ? date.toDateString() : ""} ></WBText>
            </PressableText>





          }





          {!isSignIn &&



            <PressableText
              onPress={() => setModal(true)}
            >
              <WBText
                fontSize={16}
                text={"Your Gender ? "}
                highlight={gender}
                highlightTextStyle={{ color: !firstLoaded ? 'green' : global.RED_COLOR }}

              ></WBText>
            </PressableText>



          }

          {!isSignIn &&



            <Modal
              visible={modal}
              onTouchOutside={() => {
                setModal(false);
              }}
            >
              <ModalContent>
                <View style={styles.dropDownContainer}>

                  <RadioButtonRN
                    style={styles.rewardContainer}
                    data={RadioData}
                    horizontal
                    box={false}
                    textStyle={styles.questionText}
                    textColor="black"
                    circleSize={13}
                    selectedBtn={(e) => { setGenderAction(e); }}
                  />


                </View>
              </ModalContent>
            </Modal>

          }

          <FormError errorMessage={errorMessage}></FormError>
          {!isSignIn && !ageValid && !firstLoaded && <FormError errorMessage={"you should be atleast 8 years old"}></FormError>}



          <TcnPassword style={styles.TcnPassword}
            isSignIn={isSignIn}
            action={() => { setTc(tc ? false : true); SetFromValidity() }}
            isAccepted={tc}
          />



          <ChallengeButton
            width={(WIDTH * 0.95 - 35) * 0.95}
            title={submitButtonText}
            disabled={!isValidForm}
            isLoading={isFetching}
            textStyle={{
              textAlign: 'center',
              fontSize: 20,
              color: 'white',
              fontFamily: 'Montserrat_400Regular',
            }}

            onPress={() => OnSubmit({ name, email, password, referalCode, mobile, otp, dob: date, gender: gender })}
          >

          </ChallengeButton>

          <Spacer />

          {isSignIn ?
            <NavLink
              routeName="Signup"
            >
              <UnderLine color={'#C50201'} width={2}>
                <WBText text={"New User ?"} highlight={" Sign Up"} ></WBText>
              </UnderLine>

            </NavLink> :
            <NavLink
              routeName="Signin"
            >
              <UnderLine color={'#C50201'} width={2}>
                <WBText text={"Already have an account ?"} highlight={" Sign in"} ></WBText>
              </UnderLine>

            </NavLink>



          }



          <Social></Social>

        </AuthFormBackground>


      </View>


    </>
  );
};

const gotoSignup = (isSignIn) => {
  return (

    isSignIn &&
    <NavLink
      routeName="SignupScreen"
    >
      <UnderLine color={'#C50201'} width={2}>
        <WBText text={"go to signup ?"} highlight={" Sign up"} ></WBText>
      </UnderLine>

    </NavLink>
  )
}

const styles = StyleSheet.create({
  questionText: {
    color: "black",
    fontFamily: global.MEDIUM,
    fontSize: 14

  },
  dropDownContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: WIDTH * 0.6,
    height: 80,
    padding: 5,
    paddingHorizontal: 20,



  },

  rewardContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 10,
    padding: 5,
    marginLeft: 10

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
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',



  }, SocialCoontainer: {

    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 1,
    marginBottom: -70,
    marginTop: 10


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

export default AuthForm;
