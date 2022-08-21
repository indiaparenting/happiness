import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { withNavigation } from 'react-navigation';
import WBText from '../components/WBText';


const NavLink = ({ navigation, text, highlight, routeName, children }) => {

  return (
    <View style={styles.NavLink}>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>


        {children}





      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  NavLink: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10


  }, text: {

  }, highlight: {

  }
});

export default withNavigation(NavLink);
