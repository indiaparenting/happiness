import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';

import RoundedCard from './Cards/RoundedCard';
import ChallengeButton from './Buttons/ChallengeButtons';


import { Context as GroupContext } from '../context/GroupContext'
import FileUpload from './FileUpload'
import { navigate } from '../navigationRef';

const GroupDetailCard = ({ data, navigation, isGroupAdmin }) => {

    const { _id, name, group_profile_photo, points, admin, isMyGroup, code, MyUser } = data;

    const { joinGroup, state, getGroupRequestStatus, uploadGroupPic } = useContext(GroupContext);

    const [isLoading, setisLoading] = useState(false);

    const [groupProfilePhoto, setGroupProfilePhoto] = useState(group_profile_photo);

    const [buttonTitle, setbuttonTitle] = useState('Join');
    const isDisabled = isLoading || buttonTitle !== 'Join';

    const JoinGroup = async (name) => {

        setisLoading(true);
        const result = await joinGroup(name);
        setisLoading(false);
        if (result) {

            setbuttonTitle('PENDING');
        }
    }


    console.log("isMyGroup: " + isMyGroup)


    const GetGroupRequestStatus = async (name) => {

        setisLoading(true);
        const result = await getGroupRequestStatus({ group: _id, from: MyUser._id });
        setisLoading(false);
        if (result) {

            setbuttonTitle(result.status);


        }


    }


    const UploadPic = async ({ file }) => {

        const url = await uploadGroupPic({ file, groupId: _id });

        console.log(url)

        if (url) {
            setGroupProfilePhoto(url);
        }
    }



    useEffect(() => {

        GetGroupRequestStatus();
        const didBlurSubscription = navigation.addListener(
            'didFocus',
            payload => {
                GetGroupRequestStatus();
            }
        );


        // Remove the listener when you are done

        return didBlurSubscription.remove;


    }, [navigation]);


    return (


        <View style={styles.ProfileContainer}>
            <RoundedCard isGradient={true} color={global.BLUE} justifyContent={'center'}>
                <View styles={styles.rootContainer}>

                    <View style={styles.thumbnailContainerStyle}>
                        <View style={styles.imageShadow}>
                            <FileUpload uploadFunc={UploadPic} isDisabled={!isGroupAdmin}>
                                <Image style={styles.avatarStyle} source={{ uri: groupProfilePhoto ? groupProfilePhoto : global.defaultProfileUri }}></Image>
                            </FileUpload>
                        </View>
                    </View>
                    <View style={styles.headerStyle}>
                        <Text style={styles.headerTextStyle}>{admin.name}</Text>
                        <Text style={styles.GroupTextStyle} >Group : {name}</Text>
                        <Text style={styles.TotalPointTextStyle}>Total Happiness Points : {points}</Text>

                        {!isMyGroup && <View style={styles.buttonContainer} >
                            <View style={styles.buttonStyle} >
                                <ChallengeButton
                                    onPress={() => { JoinGroup(code) }}
                                    buttonColor={global.RED}
                                    isLoading={isLoading}
                                    textColor='white'
                                    disabled={isDisabled}
                                    borderRadius={15}
                                    textStyle={{ fontSize: 15, fontWeight: "normal" }}
                                    height={40}
                                    title={buttonTitle}>

                                </ChallengeButton>
                            </View>
                        </View>}

                        {isMyGroup && isGroupAdmin && <View style={styles.buttonContainer} >
                            <View style={styles.buttonStyle} >
                                <ChallengeButton
                                    onPress={() => { navigate('Contacts', { groupName: name, groupCode: code, groupId: _id }) }}
                                    textStyle={{ fontSize: 15, fontWeight: "normal" }}
                                    height={40}
                                    textColor='white'
                                    borderRadius={15}
                                    buttonColor={global.RED}
                                    title={'Invite'}>

                                </ChallengeButton>
                            </View>
                        </View>}
                    </View>


                </View>
            </RoundedCard >
        </View >

    )
};


const styles = StyleSheet.create({
    headerStyle: {

        alignItems: 'center',

        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        paddingBottom: 10

    }

    , GroupTextStyle: {
        fontSize: 18,
        color: 'white',
        fontFamily: global.REGULAR,

        padding: 5,
    }, TotalPointTextStyle: {
        fontSize: 16,
        color: 'white',

        fontFamily: global.SEMIBOLD,

        textTransform: 'uppercase',
        padding: 5,
    }

    , headerTextStyle: {
        marginTop: 10,
        fontSize: 25,
        color: 'white',

        fontFamily: global.SEMIBOLD

    },
    avatarStyle: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,

        marginTop: -50,



    }, imageShadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowColor: 2,
        elevation: 4,

        height: 100,
        width: 100,
        borderRadius: 50
    },

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 5,
        borderColor: 'red',
        paddingBottom: 15,



    },
    buttonStyle: {
        maxHeight: '60%',

    },
    rootContainer: {


        flex: 1,
        width: '100%',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'


    },
    centerContainer: {
        borderBottomWidth: 1,
        padding: 1,

        borderWidth: 1,

        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        flex: 1,





    },
    ProfileContainer: {
        flexDirection: 'column',

        justifyContent: 'center',


        flex: 1,

        marginTop: 50,



    }
});


export default GroupDetailCard;
