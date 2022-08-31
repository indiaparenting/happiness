import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, FlatList } from 'react-native';
import RoundedCard from './RoundedCard';

import Seperator, { Line2 } from './Seperator';
const WIDTH = Dimensions.get('window').width

import { Public, smile } from '../../Imprter/ChallengeImporter'

const BulletCard = ({ data1, data2 }) => {

    return (
        <View style={styles.bulletIndexerContainer}>
            <RoundedCard >

                <View style={styles.headerStyle}>

                    <Bulletin text={data1}></Bulletin>
                    <LineContainer></LineContainer>
                    <Bulletin text={data2}></Bulletin>

                </View>

            </RoundedCard>
        </View>

    )

}


const PostBulletCard = ({ data1, data2, data3 }) => {

    return (
        <View style={styles.bulletAccountContainer}>
            <RoundedCard >

                <View style={styles.postBulletCardContainer}>

                    <Bulletin text={data1}></Bulletin>
                    <LineContainer></LineContainer>
                    <Bulletin text={data2}></Bulletin>
                    <LineContainer></LineContainer>
                    <Bulletin text={data3}></Bulletin>
                </View>

            </RoundedCard>
        </View>

    )

}

const Bulletin = ({ text }) => {

    return (
        <View style={styles.bulletinContainer}>
            <View style={styles.smileyContainer}>
                <Image style={styles.smiley} source={smile}></Image>
            </View>
            <View style={styles.textContainer}>

                <Text style={styles.textStyle}>{text}</Text>

            </View>
        </View>
    )
}

const LineContainer = () => {

    return (
        <View style={styles.bulletinContainer}>
            <View style={[styles.smileyContainer, { height: 0 }]}>

            </View>
            <View style={styles.textContainer}>

                <Line2 style={styles.lineStyle}></Line2>


            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    buttonContainer: {

        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        zIndex: -10,

    },
    bulletIndexerContainer: {

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 10,
        zIndex: -10,


    },

    bulletAccountContainer: {

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center',





    },
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 5,
        paddingLeft: 5,




    },
    postBulletCardContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 5,
        paddingLeft: 5,
        paddingHorizontal: 20



    },
    lineStyle: {

        color: '#737373',
        backgroundColor: '#737373',

        flexDirection: 'row',

        width: '100%',



    }, lineStyle2: {

        borderColor: global.MEDIUM_GREY,
        backgroundColor: '#737373',

        flexDirection: 'row',

        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10,
        height: 1



    },
    textContainer: {

        marginLeft: 5,

        flex: 1,
        flexDirection: 'row',
    },
    textStyle: {
        fontSize: 14,
        color: global.MEDIUM_GREY,
        fontFamily: global.SEMIBOLD,
    },
    termsTextStyle: {
        fontSize: 16,
        color: '#3C749D',
        fontFamily: global.SEMIBOLD,
    },
    smiley: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    smileyContainer: {

        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 60,
        marginLeft: -25

    },
    bulletinContainer: {

        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5,
        paddingRight: 0,

        width: WIDTH * 0.9,
        marginHorizontal: -10,


    },
    image: {
        resizeMode: 'contain',
        width: '100%',

    },
    imageContainer: {
        flex: 1,
        padding: 10
    },

    text: {
        fontSize: 22,
        margin: 20,
        marginTop: 10,

        textAlign: 'center',
        color: global.RED_COLOR,
        fontFamily: global.BOLD,

    },



    root: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',



    },

    headerText: {
        fontSize: 17,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
    },
    LogoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginBottom: 25,
        marginTop: 0,
    },
    rootContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',

    },

    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 50,

        paddingLeft: 10,
        paddingRight: 10,

    },

});

export { LineContainer, Bulletin, BulletCard };