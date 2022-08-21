import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children, marginVertical }) => {
  return <View style={[styles.spacer, { marginVertical: marginVertical }]}>{children}</View>;
};



const styles = StyleSheet.create({
  spacer: {

    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,

  }
});

export default Spacer;
