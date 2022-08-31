import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from 'react-native';


import { Context as AuthContext } from '../context/AuthContext';

import { ppl4, smile } from '../Imprter/ChallengeImporter'

import ChallengeButton from '../components/Buttons/ChallengeButtons'


import RoundedCard from '../components/Cards/RoundedCard';
import Seperator, { Line2 } from '../components/Cards/Seperator';

import { FontAwesome5 } from '@expo/vector-icons';

import TermsBottomModal from '../components/Challenges/TermsBottomModal';

const WIDTH = Dimensions.get('window').width


const SetupScreen_End = ({ navigation }) => {

    const [isModal, setModal] = useState(false)
    const { intialSetupDone } = useContext(AuthContext);
    return (

        <View style={styles.rootContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={ppl4}></Image>
            </View>

            <Text style={styles.text}>Ready To Be Happy</Text>

            <View style={styles.buttonContainer}>
                <ChallengeButton
                    borderRadius={14}
                    title='Agree and Continue  '
                    buttonColor={global.RED}
                    textColor='white'
                    height={42}
                    width={200}
                    zIndex= {-10}
                    textStyle={{ fontSize: 13, fontFamily: global.BOLD, }}
                    onPress={() => { intialSetupDone(); navigation.navigate('loginFlow') }}
                >
                    <FontAwesome5 name="chevron-right" size={14} color="white" />
                </ChallengeButton>
                <View style={{ height: 150, width: '100%' }}>

                </View>
                <Line2 style={styles.lineStyle2}></Line2>

                <TouchableOpacity onPress={() => { setModal(true) }}>
                    <Text style={styles.termsTextStyle}>{'Terms & Conditions'}</Text>
                </TouchableOpacity>

            </View>

            <TermsBottomModal scaleAnimationModal={isModal} setModal={setModal}></TermsBottomModal>


        </View >
    );
};

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

SetupScreen_End.navigationOptions = () => {
    return {
        header: () => false,
    };
};


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
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 5,
        paddingLeft: 5,



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
        marginHorizontal: -10

    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        flex:1

    },
    imageContainer: {
        flex: 1,
        /* 06-07-2022 */
        padding: 10,
        marginVertical: -10
    },

    text: {
        fontSize: 22,
        margin: 30,
        marginTop: 30,
        textAlign: 'center',
        color: global.RED_COLOR,
        fontFamily: global.BOLD,
        marginVertical: 30
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

export default SetupScreen_End;
