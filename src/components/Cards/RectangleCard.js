import React from 'react';
import { View, StyleSheet } from 'react-native';


const RectangleCard = ({ children, paddingHorizontal, paddingVertical, marginHorizontal, marginVertical, color, justifyContent }) => {



    return (<Card marginVertical={marginVertical} marginHorizontal={marginHorizontal} justifyContent={justifyContent}>
        <CardSection color={color} paddingHorizontal={paddingHorizontal} paddingVertical={paddingVertical} justifyContent={justifyContent} >
            {children}
        </CardSection>
    </Card>)
};


const Card = ({ children, color, marginHorizontal, marginVertical }) => {
    return <View style={[styles.Container, { backgroundColor: color, marginHorizontal: marginHorizontal, marginVertical: marginVertical }]}>
        {children}
    </View>;
};

export const CardSection = ({ children, color, justifyContent, paddingHorizontal, paddingVertical }) => {

    return (
        <View style={[styles.section, { backgroundColor: color }, { justifyContent: justifyContent, paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical }]}>{children}</View>
    );
};


RectangleCard.defaultProps = {
    color: '#fff',
    justifyContent: 'flex-start',
    marginHorizontal: 0, heightmarginVertical: 0,
    paddingVertical: 0, paddingHorizontal: 0,
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
    buttonContainer: {
        flexDirection: 'row',
        padding: 10,

    }
});


export default RectangleCard;
