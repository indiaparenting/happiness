import React from 'react';
import { View, StyleSheet } from 'react-native';


const CardSection = ({ children }) => {

    return (
        <View style={styles.container}>{children}</View>
    );
};

const styles = StyleSheet.create({
    container: {

        padding: 2,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: '100%',

        position: 'relative',
        paddingHorizontal: 20
    }

})

export default CardSection;