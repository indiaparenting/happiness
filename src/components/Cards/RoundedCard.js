import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const RoundedCard = ({ children, isGradient, color, justifyContent, borderRadius }) => {



    return (<Card borderRadius={borderRadius} justifyContent={justifyContent}>
        <CardSection isGradient={isGradient} color={color} borderRadius={borderRadius} justifyContent={justifyContent} >
            {children}
        </CardSection>
    </Card>)
};


const Card = ({ children, color, borderRadius }) => {
    return <View style={[styles.Container, { backgroundColor: color, borderRadius: borderRadius }]}>
        {children}
    </View>;
};

const CardSection = ({ isGradient, children, color, justifyContent, borderRadius }) => {

    return (
        isGradient ?
            <LinearGradient
                style={[styles.section, { borderRadius: borderRadius }, { justifyContent: justifyContent }]}

                colors={color} //#fbed1f //fbb034

            >
                {children}

            </LinearGradient> : <View style={[styles.section, { backgroundColor: color, borderRadius: borderRadius }, { justifyContent: justifyContent }]}>{children}</View>



    );
};

RoundedCard.defaultProps = {
    color: '#fff',
    justifyContent: 'flex-start',
    borderRadius: 22,
    isGradient: false,
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


export default RoundedCard;
