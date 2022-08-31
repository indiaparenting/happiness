import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';





const PressableText = ({ onPress, children }) => {

    return (
        <View style={styles.NavLink}>
            <TouchableOpacity onPress={onPress}>

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

export default PressableText;
