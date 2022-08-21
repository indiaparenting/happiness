import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import ChallengeForm from '../components/ChallengeForm';

import Bg from '../components/App/Bg';

const ChallengesScreen = ({ navigation }) => {

    const data = navigation.state.params;

    return (
        <Bg top={100} hasBackCard={true} navigation={navigation}>

            <ChallengeForm navigation={navigation} data={data} />
        </Bg >
    );
};

ChallengesScreen.navigationOptions = {


    headerShown: false
}



const styles = StyleSheet.create({});

export default ChallengesScreen;
