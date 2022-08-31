import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


import { Context as AuthContext } from '../context/AuthContext';



const Logout = ({ navigation }) => {



    const { signout } = useContext(AuthContext);

    useEffect(() => {

        signout();
        const didBlurSubscription = navigation.addListener(
            'didFocus',
            payload => {
                signout();
            }
        );


        // Remove the listener when you are done

        return didBlurSubscription.remove;


    }, [navigation]);





    return (
        null
    );
};

Logout.navigationOptions = {


    headerShown: false
}


const styles = StyleSheet.create({});

export default Logout;
