import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';

import { Context } from '../context/AuthContext';

import BackGround from '../components/BackGround';
import { SafeAreaView } from 'react-navigation';

import { UnderLine, Social, Input, Bg, FormError, SmilyLayer } from '../components/Auth/index';


const SigninScreen = () => {
  const { state, signin, clearErrorMessage, passwordValidator, emailValidator, userNameValidator, validateForm, referalValidator, mobile, otp } = useContext(Context);

  return (
    <BackGround>
      <SmilyLayer>


        <SafeAreaView>
          <KeyboardAvoidingView style={styles.rootContainer}>
            <ScrollView>

              <View style={styles.container}>
                <NavigationEvents onWillFocus={clearErrorMessage} />
                <AuthForm
                  isSignIn={true}
                  headerText="Login"
                  errorMessage={state.errorMessage}
                  onSubmit={signin}
                  submitButtonText="Sign in"
                  userNameValidator={userNameValidator}
                  isValidUserName={state.isValidUser}
                  emailValidator={emailValidator}
                  isValidEmail={state.isValidEmail}
                  isValidPassword={state.isValidPassword}
                  passwordValidator={passwordValidator}
                  validateForm={validateForm}
                  clearErrorMessage={clearErrorMessage}
                  isValidReferral={state.isValidReferral}
                  referalValidator={referalValidator}

                  mobile={state.mobile}
                  otp={state.otp}
                />

              </View>



            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SmilyLayer>
    </BackGround>
  );
};

SigninScreen.navigationOptions = {
  header: () => false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 50,
    width: '100%',



  },
  NavLink: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',


  }, rootContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',

    width: '100%',

  },
});

export default SigninScreen;
