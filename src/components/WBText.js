import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const WBText = ({ text, highlight, fontSize, fontFamily, left, discriptiontextStyle, highlightTextStyle }) => {


    return (
        <Text style={[(left ? styles.textLeft : styles.discription), { fontSize: fontSize, fontFamily: fontFamily }, discriptiontextStyle]}>{text}<Text style={[styles.highlight, { fontSize: fontSize, fontFamily, fontFamily }, highlightTextStyle]}>{highlight}</Text> </Text>
    );
};

WBText.defaultProps = {

    left: false,
    fontSize: 17,
    highlightTextStyle: null,
    discriptiontextStyle: null,
    fontFamily: 'Montserrat_400Regular',
}

const styles = StyleSheet.create({
    discription: {

        fontSize: 16,
        textAlign: 'center',
        flex: 1,
        color: '#232322',
        fontFamily: 'Montserrat_400Regular',
    },
    textLeft: {
        color: '#232322',
        fontSize: 16,
        textAlign: 'left',
        flex: 1,
        marginLeft: 5,
        fontFamily: 'Montserrat_400Regular',

    },
    highlight: {
        color: '#C50201',
        fontSize: 16,

        flex: 1,
        fontFamily: 'Montserrat_400Regular',
    },
    horizontal: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: 'red'

    }, left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 10,
        color: '#585657'

    }
});

export default WBText;
