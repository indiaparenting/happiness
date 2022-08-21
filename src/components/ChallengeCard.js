import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import moment from 'moment-timezone';
import { navigate } from '../navigationRef';
import ChallengeButton from './Buttons/ChallengeButtons';
import { taskLogo } from '../Imprter/ProfileImporter';
import { FontAwesome5 } from '@expo/vector-icons';
import CardSection from './CardSection';
import Card from './Card';

const dateFormate = 'YYYY-MM-DD'
const dateFormate2 = 'DD.MM.YYYY'

import RectangleCard from './Cards/RectangleCard';

const ChallengCard = ({ data, fetchTaskStatus, navigation }) => {

    const { _id, title, uri, date, status, discription, action } = data;
    const [loading, setLoading] = useState(false);
    const [statustext, setStatus] = useState("Fetching");

    const [albumData, setAlbumData] = useState(null)

    const fetch = () => {

        const getStatus = async () => {
            setLoading(true);

            const data = await fetchTaskStatus({ taskId: _id });
            setStatus(data.status == "PENDING" ? "Take Challenge" : "Completed")
            setAlbumData(data.post)

            setLoading(false);


        }

        getStatus();
    }



    useEffect(() => {
        fetch();

        const didBlurSubscription = navigation.addListener(
            'didFocus',
            payload => {

                fetch();
            }
        );
        return didBlurSubscription.remove;

    }, [navigation]);



    let newDate = moment(date).tz('Asia/Calcutta').format(dateFormate2);


    const isCompleted = statustext == 'Completed' ? true : false;

    return (<RectangleCard marginHorizontal={0} marginVertical={-1} paddingHorizontal={15} paddingVertical={0} >
        {uri ? <View style={styles.thumbnailContainerStyle}>
            <Image style={styles.avatarStyle} source={{ uri: uri }}></Image>

        </View> :
            <View style={styles.defaulIcontContainer}>
                <FontAwesome5 name="cotton-bureau" size={45} color="black" />
            </View>}

        <View style={styles.headerStyle}>
            <Text style={styles.headerTextStyle}>{title}</Text>
            <View style={{ margin: 2 }}></View>
            <Text style={styles.date} numberOfLines={1}  >{newDate}</Text>
        </View>
        <View style={styles.buttonContainer} >
            <View style={styles.buttonStyle} >
                <ChallengeButton
                    textStyle={{ color: 'white', fontSize: 13, fontFamily: global.MEDIUM }}
                    onPress={() => { isCompleted ? navigate('ViewPost', { albumData }) : navigate('Challenge', data) }}
                    buttonColor={isCompleted ? global.RED : global.BLUE}
                    textColor='white'
                    borderRadius={13}
                    height={40}
                    width={120}
                    disabledOpacity={false}


                    title={statustext} />
            </View>
        </View>
    </RectangleCard>
    )
};



const styles = StyleSheet.create({
    date: {
        color: global.LIGHT_GREY,

        fontFamily: global.SEMIBOLD,
        fontSize: 14
    },
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '49%',
        marginVertical: 5,



    }, headerTextStyle: {
        color: 'black',

        fontFamily: global.MEDIUM,
        fontSize: 16
    },
    avatarStyle: {
        height: 70,
        width: 70,
        borderRadius: 35,


    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',

        margin: 7,
        marginLeft: -5,



        height: 70,
        width: 70,
        borderRadius: 35,
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




    }, shadow: {
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowColor: 2,
        elevation: 4,
    },
    buttonStyle: {

        paddingLeft: 7,

        marginRight: -12,


    }
});


export default ChallengCard;
