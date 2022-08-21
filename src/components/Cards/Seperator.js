import React from 'react';
import { View, StyleSheet } from 'react-native';


const Seperator = ({ color, justifyContent }) => {



    return (
        <CardSection color={color} justifyContent={justifyContent} >

        </CardSection>

    )
};
export const Line = ({ color, justifyContent }) => {



    return (
        <View style={[styles.line, { backgroundColor: color, }, { justifyContent: justifyContent }]}></View>


    )
};

export const Line2 = ({ style }) => {



    return (
        <View style={[styles.line2, style]}></View>


    )
};
Line2.defaultProps = {


    style: {
        color: 'black',
        justifyContent: 'flex-end',
        width: '80%',
    }
}
Line.defaultProps = {
    color: '#656565'
}
const CardSection = ({ children, color, justifyContent }) => {

    return (
        <View style={[styles.section, { backgroundColor: color, }, { justifyContent: justifyContent }]}>{children}</View>
    );
};


Seperator.defaultProps = {
    color: '#fff',
    justifyContent: 'flex-start',

};


const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',

    }, headerTextStyle: {
        fontSize: 32,
        color: '#323232',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    discriptionStyle: {
        fontSize: 17,
        color: '#323232',
        fontWeight: '700',
        textAlign: 'center',
    },
    imageContainer: {
        padding: 10
    },

    imageStyle: {
        height: 80,
        width: 80,

    }, subtitleTextStyle: {
        color: '#D93F37',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
    },

    Container: {

        borderColor: '#ddd',


        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowColor: 2,
        elevation: 4,



    },
    section: {

        padding: 2,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        paddingHorizontal: 20,
        width: '100%',
    },
    line: {


        borderWidth: 1,
        borderBottomWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#656565',
        position: 'relative',
        marginHorizontal: 10,

    },
    line2: {


        borderWidth: 1,
        borderBottomWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        position: 'relative',
        width: '100%',
        height: 1,
        backgroundColor: '#737373',
        borderColor: '#737373',
        opacity: 0.5

    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 10,

    }
});


export default Seperator;
