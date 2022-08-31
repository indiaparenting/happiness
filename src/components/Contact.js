import React, { useState, useContext } from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';



import RoundedCard from './Cards/RoundedCard';

import { MaterialIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

import ChallengeButton from '../components/Buttons/ChallengeButtons';
import { Context as GroupContext } from '../context/GroupContext'

const Contact = ({ data, selectContact, deselectContact, groupId, sendSms }) => {

    // console.log(data)
    const [invited, setInvited] = useState(data.isSelected)

    const [loading, setLoading] = useState(false)

    const { sendInvite, fetchInvites } = useContext(GroupContext);


    const { id, name, firstName, lastName, profile_photo, phoneNumbers } = data;

    const inviteAction = async ({ groupId }) => {

        setLoading(true)

        const result = await sendInvite({ groupId, to: phoneNumbers[0].number })
        setLoading(false)
        if (result) {
            console.log(result)

            sendSms(phoneNumbers[0].number, result.data.referalcode);
            setInvited(true)
        }

    }

    return (


        <RoundedCard borderRadius={10}>
            <View style={styles.thumbnailContainerStyle}>
                <Image style={styles.avatarStyle} source={{ uri: global.defaultProfileUri }}></Image>

            </View>


            <View style={styles.headerStyle}>
                <Text numberOfLines={2} style={styles.headerTextStyle}>{name}</Text>
                {phoneNumbers && <Text style={styles.numberStyle}>{phoneNumbers.length > 0 ? phoneNumbers[0].number : ""}</Text>}
            </View>


            <View style={styles.buttonContainer} >

                <View style={styles.buttonStyle} >

                    <ChallengeButton

                        title={invited ? "Invited" : "Invite"}
                        isLoading={loading}
                        width={90}
                        height={40}
                        disabled={!(phoneNumbers && phoneNumbers.length > 0)}
                        textStyle={{
                            textAlign: 'center',
                            fontSize: 15,
                            color: 'white',
                            fontFamily: 'Montserrat_400Regular',
                        }}
                        buttonColor={invited ? global.GREEN : global.BLUE}

                        onPress={() =>
                            inviteAction({ groupId })
                        }
                    />

                </View>


            </View>


        </RoundedCard>

    )
};


const ContactSelector = (selected) => {
    return (selected ? <MaterialIcons name="check-box" size={24} color="black" /> : <MaterialIcons name="check-box-outline-blank" size={24} color="black" />
    )

}
Contact.defaultProps = {
    isSelected: false
}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingVertical: 5,
        maxWidth: '60%',

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

    numberStyle: {
        fontSize: 16,
        color: 'black',
        fontFamily: global.REGULAR,
        opacity: 0.7

    },

    headerTextStyle: {
        fontSize: 16,
        color: 'black',
        fontFamily: global.REGULAR,

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


export default Contact;
