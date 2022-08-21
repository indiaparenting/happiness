import React, { useContext } from 'react';
import { View, StyleSheet, Image, Text, Button, Pressable } from 'react-native';
import { navigate } from '../navigationRef';
import RoundedCard from './Cards/RoundedCard';

import { Context as AuthContext } from '../context/AuthContext';

const totalPoints = (users) => {
    let points = 0;

    for (let i = 0; i < users.length; i++) {
        points += users[i].points;

    }


    return points;
}

const GroupCard = ({ data, isMyGroup }) => {

    const { id, name, group_profile_photo, adminName, memberCount, avgPoints, admin, users } = data;

    const { state } = useContext(AuthContext);

    console.log(group_profile_photo)

    data.isMyGroup = isMyGroup;
    data.MyUser = state.user;
    console.log(users.length)

    data.points = totalPoints(users);



    return (<Pressable onPress={() => { navigate('About', data) }}>
        <RoundedCard color="#FDFBFC" borderRadius={10} >



            <View style={styles.thumbnailContainerStyle}>
                <Image style={styles.avatarStyle} source={{ uri: group_profile_photo ? group_profile_photo : global.defaultProfileUri }}></Image>
            </View>
            <View style={styles.headerStyle}>
                <Text numberOfLines={1} style={styles.headerTextStyle}>{name}</Text>
                <Text style={styles.groupStyle} >Admin : {admin.name}</Text>
                <Text style={styles.membersStyle}>Members : {users.length}</Text>

            </View>

            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginRight: -20,

            }}>
                <View style={styles.buttonContainer} >
                    <View style={styles.buttonStyle}>
                        <Text style={styles.pointHeader}>Total Points</Text>
                        <Text style={styles.pointValue}>{data.points}</Text>
                    </View>
                </View>
            </View>

        </RoundedCard>
    </Pressable>)
};


const styles = StyleSheet.create({
    pointValue: {


        color: '#EF4430',
        fontFamily: global.BOLD,
    },
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        maxWidth: '55%',
        paddingVertical: 8


    }, headerTextStyle: {
        fontSize: 17,
        color: '#403E3F',
        fontFamily: global.BOLD,

    },

    groupStyle: {
        fontSize: 14,
        color: '#78787A',
        fontFamily: global.MEDIUM,
    },
    avatarStyle: {
        height: 64,
        width: 64,
        borderRadius: 32,

    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',

        margin: 7,
        marginLeft: -10,

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowColor: 2,
        elevation: 4,

        height: 64,
        width: 64,
        borderRadius: 32,
        marginRight: 25,

        marginVertical: 10

    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',



    },
    buttonStyle: {



        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDF6DC',
        paddingHorizontal: 15,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,


    }, pointHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#403E3F',
        fontFamily: global.BOLD,

    },
    membersStyle: {
        fontSize: 14,
        color: '#78787A',
        fontFamily: global.MEDIUM,

    }
});


export default GroupCard;
