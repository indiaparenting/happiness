import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';


import RoundedCard from './Cards/RoundedCard';

import GroupMemberActionPopUp from './GroupMemberActionPopUp'

const GroupContactCard = ({ data, groupId, isGroupAdmin, removeUser }) => {

    const { id, name, profile_photo, points } = data;


    const [hasPermission, setPermission] = useState(data.groupCreatePermissions)


    return (
        <RoundedCard color="#FDFBFC" borderRadius={10} >


            <View style={styles.thumbnailContainerStyle}>
                <Image style={styles.avatarStyle} source={{ uri: profile_photo ? profile_photo : global.defaultProfileUri }}></Image>
            </View>
            <View style={styles.headerStyle}>
                <Text style={styles.headerTextStyle}>{name}</Text>

            </View>

            {isGroupAdmin && <View style={styles.threeDots}>

                <View style={styles.rightContainer}>
                    <View style={styles.rightSubContainer}>
                        <Text style={styles.pointsText}>{points}</Text>
                        <GroupMemberActionPopUp groupId={groupId} data={data} setPermission={setPermission} hasPermission={hasPermission} removeUser={removeUser} />
                    </View>
                </View>
            </View>}



        </RoundedCard>)
};


const styles = StyleSheet.create({

    rightContainer: {

        alignItems: 'flex-end',





    },
    rightSubContainer: {

        flexDirection: 'row',

        width: 70,
        height: 50,

        alignItems: 'center',



    },

    pointsTextContainer: {

        flexDirection: 'row',



    },
    pointsText: {

        color: '#D93F37',
        fontWeight: 'bold',
        textAlign: 'right',


    },
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        maxWidth: '60%',


    }, headerTextStyle: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        opacity: 0.7,
        marginLeft: 18
    },
    avatarStyle: {
        height: 60,
        width: 60,
        borderRadius: 30,


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

        height: 60,
        width: 60,
        borderRadius: 30,

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
    },

    threeDots: {


        justifyContent: 'center',



        flex: 1,



    }
});


export default GroupContactCard;
