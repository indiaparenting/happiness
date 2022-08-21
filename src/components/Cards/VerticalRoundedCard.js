import React from 'react';
import { View, StyleSheet } from 'react-native';


const VerticalRoundedCard = ({ children, color, justifyContent }) => {



    return (<Card justifyContent={justifyContent}>
        <CardSection color={color} justifyContent={justifyContent} >
            {children}
        </CardSection>
    </Card>)
};


const Card = ({ children, color }) => {
    return <View style={[styles.Container, { backgroundColor: color }]}>
        {children}
    </View>;
};

const CardSection = ({ children, color, justifyContent }) => {

    return (
        <View style={[styles.section, { backgroundColor: color }, { justifyContent: justifyContent }]}>{children}</View>
    );
};

VerticalRoundedCard.defaultProps = {
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
        borderRadius: 22,
        borderColor: '#ddd',
        alignItems: 'center',
        flexDirection: 'column',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowColor: 2,
        elevation: 4,
        margin: 2,
        marginHorizontal: 10

    },
    section: {
        borderRadius: 22,
        padding: 2,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderColor: '#ddd',
        position: 'relative',
        paddingHorizontal: 5,
        width: '100%',

    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 10,

    }
});


export default VerticalRoundedCard;
