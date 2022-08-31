import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import moment from 'moment-timezone';
import { navigate } from '../navigationRef';
import ChallengeButton from './Buttons/ChallengeButtons';
import { taskLogo } from '../Imprter/ProfileImporter';
import { FontAwesome5 } from '@expo/vector-icons';

import RoundedCard from './Cards/RoundedCard';

import { Context as GroupContext } from '../context/GroupContext';

const Requests = ({ data, navigation }) => {
    const { state, processGroupRequest } = useContext(GroupContext);

    const { _id, updatedAt, status, from, group } = data;
    const [isLoading, setLoading] = useState(false);
    const [statustext, setStatus] = useState("Fetching");

    const fetch = () => {


        //getStatus();
    }

    const ProcessRequest = async (value) => {
        setLoading(true);

        const data = await processGroupRequest({ requestId: _id, action: value });
        if (data) {

            navigation.navigate('MyGroup');
        }

        setLoading(false);


    }






    let newDate = moment(updatedAt).tz('Asia/Calcutta').format('YYYY-MM-DD');


    const isCompleted = statustext == 'completed' ? true : false;

    return (<RoundedCard >
        {from ? <View style={styles.thumbnailContainerStyle}>
            <Image style={styles.avatarStyle} source={{ uri: from.profile_photo }}></Image>

        </View> :
            <View style={styles.defaulIcontContainer}>
                <FontAwesome5 name="cotton-bureau" size={45} color="black" />
            </View>}

        <View style={styles.headerStyle}>
            <Text numberOfLines={1} style={styles.headerTextStyle}>{from.name}</Text>
            <Text numberOfLines={1} style={styles.pointValue}>group: {group.name}</Text>
            <Text numberOfLines={1}  >{newDate}</Text>
        </View>
        <View style={styles.buttonContainer} >
            <View style={styles.buttonStyle} >
                <ChallengeButton

                    onPress={() => { ProcessRequest("ACCEPTED") }}
                    buttonColor={global.GREEN}
                    textColor='white'
                    isLoading={isLoading}

                    height={40}
                    width={100}
                    disabled={isCompleted}
                    title={"ACCEPT"} />

                <ChallengeButton

                    onPress={() => { ProcessRequest("REJECTED") }}
                    buttonColor={global.RED}
                    textColor='white'
                    isLoading={isLoading}
                    height={40}
                    width={100}
                    disabled={isCompleted}
                    title={"REJECT"} />
            </View>
        </View>
    </RoundedCard>
    )
};


const styles = StyleSheet.create({
    pointValue: {
        fontWeight: 'bold',

        color: '#EF4430',
    },
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        maxWidth: '55%',

    }, headerTextStyle: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        opacity: 0.7
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
    defaulIcontContainer: {
        justifyContent: 'center',
        alignItems: 'center',

        margin: 7,
        marginLeft: -5,


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

        padding: 3,

        marginRight: -5,



    }
});


export default Requests;
