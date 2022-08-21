import React, { } from 'react';
import { StyleSheet, } from 'react-native';
import { Text, } from 'react-native-elements';


const FormError = ({ errorMessage }) => {

    return (
        <>
            {errorMessage ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null
            }
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontFamily: 'Montserrat_400Regular',

        marginTop: 10,
        color: '#C50201',

    },

});

export default FormError;
