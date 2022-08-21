import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import ChallengeButton from './Buttons/ChallengeButtons';

import RoundedCard from './Cards/RoundedCard';


const SmsConfimCard = ({ count, sendSms }) => {

    // console.log(data)




    return (

        <RoundedCard borderRadius={10} >
            <View style={styles.headerStyle}>
                <Text numberOfLines={2} style={styles.headerTextStyle}>Send group invitation to following selected contacts</Text>
                <Text numberOfLines={1} style={styles.headerTextStyle} >Total {count} contacts selected</Text>
            </View>
            <View style={styles.buttonContainer} >
                <View style={styles.buttonStyle} >
                    <ChallengeButton

                        onPress={sendSms}
                        buttonColor={count < 1 ? global.BLUE : global.GREEN}
                        textColor='white'

                        height={40}
                        width={100}
                        disabled={count < 1}
                        title={'Send'} />
                </View>
            </View>
        </RoundedCard>
    )
};


const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        maxWidth: '60%',
        paddingVertical: 10

    }
    , pickerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-end',


    }, pressableContainer: {
        height: 25,
        width: 25,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },


    totalStyle: {
        fontSize: 13,
        color: global.MEDIUM_GREY,
        fontFamily: global.MEDIUM

    },
    headerTextStyle: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'Montserrat_400Regular',

    },
    avatarStyle: {
        height: 50,
        width: 50,
        borderRadius: 25,


    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',

        margin: 7,
        marginLeft: -5,

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowColor: 2,
        elevation: 4,

        height: 50,
        width: 50,
        borderRadius: 25,

    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 1,

    },
    buttonStyle: {
        maxHeight: '60%',
    }
});


export default SmsConfimCard;
