import React, { } from 'react';
import { StyleSheet, } from 'react-native';
import { Text, } from 'react-native-elements';


const InputError = ({ errorMessage, isValid, firstLoaded }) => {

    return (
        <>
            {!isValid && !firstLoaded ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        flexDirection: 'row',
        textAlign: 'left',
        alignItems: 'center',

        paddingHorizontal: 10,
        paddingTop: 5,
        fontFamily: 'Montserrat_400Regular',
        color: '#C50201',
        paddingHorizontal: 30,
        width: '100%',

    },

});

export default InputError;
