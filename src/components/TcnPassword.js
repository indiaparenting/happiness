import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';
import WBText from './WBText';

import UnderLine from './Auth/UnderLine'

import { activeTick, normalTick } from '../Imprter/LoginAssets';

const ForgotPassword = ({ navigation }) => {

  return (
    <View style={styles.forgotPassword}>
      <TouchableOpacity onPress={() => { }}>
        <UnderLine color={'#232322'} width={2}>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </UnderLine>

      </TouchableOpacity>
    </View>
  );

}


const AcceptTermsAndConditions = ({ action, isAccepted }) => {

  return (
    <View style={styles.tc}>
      <TouchableOpacity style={styles.container} onPress={() => action()}>
        {isAccepted ? <Image style={[styles.image, { borderColor: 'green', }]} source={activeTick} /> : <Image style={styles.image} source={normalTick} />}
        <WBText fontSize={13} text={"I Read and agree to "} highlight={"terms and conditions"} left={true} />
      </TouchableOpacity>
    </View>
  );

}

const TcnPassword = ({ isSignIn, navigation, action, isAccepted }) => {
  return (

    <Spacer>
      {isSignIn ? (
        ForgotPassword({ navigation })
      ) : AcceptTermsAndConditions({ action, isAccepted })
      }
    </Spacer>

  );
};

const styles = StyleSheet.create({

  NavLink: {
    flex: 1,

  }, forgotPassword: {

    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',



  }, forgotPasswordText: {
    fontSize: 17,
    fontFamily: 'Montserrat_400Regular',
    color: '#232322',
    textAlign: 'center',


  },
  tc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,

    height: 20,



  }, image: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5

  },
  container: {
    flexDirection: 'row',

    justifyContent: 'flex-start',
    alignItems: 'center',

  }
});

export default TcnPassword;
