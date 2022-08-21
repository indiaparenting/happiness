import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import BackGround from '../components/BackGround';
import { SafeAreaView } from 'react-navigation';

import { SmilyLayer } from '../components/Auth/index';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, passwordValidator, validateForm, emailValidator, userNameValidator, referalValidator, mobile, otp } = useContext(AuthContext);

  return (
    <BackGround>
      <SmilyLayer>


        <SafeAreaView>
          <KeyboardAvoidingView style={styles.rootContainer}>
            <ScrollView>


              <View style={styles.container}>
                <NavigationEvents onWillFocus={clearErrorMessage} />

                <AuthForm
                  headerText="Create Account"
                  errorMessage={state.errorMessage}
                  submitButtonText="Sign up"
                  onSubmit={signup}
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

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 50,




  },
  NavLink: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',


  }, rootContainer: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',






  },
});

export default SignupScreen;
