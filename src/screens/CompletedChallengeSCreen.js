import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import ViewChallenge from '../components/ViewChallenge';

import Bg from '../components/App/Bg';


const CompletedChallengeSCreen = ({ navigation }) => {

    const { albumData } = navigation.state.params;



    return (
        <Bg top={100} hasBackCard={true} navigation={navigation}>
            <ViewChallenge albumData={albumData} />
        </Bg >
    );
};

CompletedChallengeSCreen.navigationOptions = {


    headerShown: false
}



const styles = StyleSheet.create({});

export default CompletedChallengeSCreen;
