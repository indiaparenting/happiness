import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ChallengeForm from '../components/ChallengeForm';
import Header from '../components/header/Header';
import { SafeAreaView } from 'react-navigation';

const PrivacyScreen = ({ navigation }) => {

    const data = navigation.state.params;

    return (
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
            <Header navigation={navigation} />
            <Text>Work in progress</Text>
        </SafeAreaView >
    );
};

PrivacyScreen.navigationOptions = {


    headerShown: false
}



const styles = StyleSheet.create({});

export default PrivacyScreen;
