import React from 'react';
import { View, StyleSheet } from 'react-native';


const EdgeCard = ({ TopWidth, BottomWidth, children, TopRight, TopLeft, BottomRight, BottomLeft, paddingHorizontal, paddingVertical, marginHorizontal, marginVertical, color, justifyContent, borderRadius }) => {



    return (<Card TopRight={TopRight} TopWidth={TopWidth} BottomWidth={BottomWidth} TopLeft={TopLeft} BottomRight={BottomRight} BottomLeft={BottomLeft} marginVertical={marginVertical} marginHorizontal={marginHorizontal} justifyContent={justifyContent} borderRadius={borderRadius}>
        <CardSection TopRight={TopRight} TopWidth={TopWidth} BottomWidth={BottomWidth} TopLeft={TopLeft} BottomRight={BottomRight} BottomLeft={BottomLeft} borderRadius={borderRadius} color={color} paddingHorizontal={paddingHorizontal} paddingVertical={paddingVertical} justifyContent={justifyContent} >
            {children}
        </CardSection>
    </Card>)
};


const Card = ({ TopWidth, BottomWidth, children, color, marginHorizontal, marginVertical, borderRadius, TopRight, TopLeft, BottomRight, BottomLeft, }) => {
    return <View style={
        [styles.Container,
        { backgroundColor: color, marginHorizontal: marginHorizontal, marginVertical: marginVertical },
        { borderRadius: borderRadius },
        {
            borderBottomLeftRadius: BottomLeft,
            borderBottomRightRadius: BottomRight,
            borderTopLeftRadius: TopLeft,
            borderTopRightRadius: TopRight,

        },
        {
            borderTopWidth: TopWidth,
            borderBottomWidth: BottomWidth,
        }

        ]}>
        {children}
    </View>;
};

export const CardSection = ({ TopWidth, BottomWidth, children, color, justifyContent, paddingHorizontal, paddingVertical, borderRadius, TopRight, TopLeft, BottomRight, BottomLeft, }) => {

    return (
        <View style={[styles.section,
        { backgroundColor: color }
            , { justifyContent: justifyContent, paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical },
        { borderRadius: borderRadius },
        {
            borderBottomLeftRadius: BottomLeft,
            borderBottomRightRadius: BottomRight,
            borderTopLeftRadius: TopLeft,
            borderTopRightRadius: TopRight,

        },
        {
            borderTopWidth: TopWidth,
            borderBottomWidth: BottomWidth,
        }

        ]}>{children}</View>
    );
};


EdgeCard.defaultProps = {
    color: '#fff',
    justifyContent: 'flex-start',
    marginHorizontal: 0, heightmarginVertical: 0,
    paddingVertical: 0, paddingHorizontal: 0,
    TopRight: 0,
    TopLeft: 0,
    BottomRight: 0,
    BottomLeft: 0,
    borderRadius: 16,

    TopWidth: 0,
    BottomWidth: 0,


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


        shadowColor: 'black',
        shadowOffset: { width: 2, height: 6 },
        shadowOpacity: 0.5,
        shadowColor: 2,
        elevation: 6,



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


export default EdgeCard;
