import React from 'react';
import { View, StyleSheet } from 'react-native';


const Card = ({ children }) => {
    return <View style={styles.Container}>
        {children}
    </View>;
};

const styles = StyleSheet.create({


    Container: {


        backgroundColor: '#fff',


        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowColor: 2,
        elevation: 4,



    }
});

export default Card;
