import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';

import RoundedCard from '../Cards/RoundedCard';


import { Context as AuthContext } from '../../context/AuthContext'
import FileUpload from '../FileUpload'



const AccountHeaderCard = ({ user, navigation, fetch }) => {

    if (!user) {
        return null
    }
    const { id, name, profile_photo, groupName, points, defaultGroup } = user;





    const { uploadProfileImage } = useContext(AuthContext);

    const [isLoading, setisLoading] = useState(false);





    const UploadPic = async ({ file }) => {
        setisLoading(true)

        const url = await uploadProfileImage({ file });
        setisLoading(false)
        console.log(url)
        await fetch();

        if (url) {
            setPRofilePhotoUrl(url);
        }
    }



    useEffect(() => {


        const didBlurSubscription = navigation.addListener(
            'didFocus',
            payload => {

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
                            <FileUpload uploadFunc={UploadPic} isDisabled={false}>
                                <Image style={styles.avatarStyle} source={{ uri: profile_photo ? profile_photo : global.defaultProfileUri }} />

                            </FileUpload>
                        </View>

                    </View>


                    <View style={styles.headerStyle}>

                        <Text style={styles.headerTextStyle}>{name}</Text>
                        {defaultGroup && <Text style={styles.GroupTextStyle} >Group : {defaultGroup.name}</Text>}
                        <Text style={styles.TotalPointTextStyle}  >Total Happiness Points : {points}</Text>
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
        paddingBottom: 10,


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

        fontSize: 25,
        color: 'white',

        fontFamily: global.SEMIBOLD

    },
    avatarStyle: {
        height: 100,
        width: 100,
        borderRadius: 50,


    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        zIndex: 1000,
        marginTop: -50,





    }, imageShadow: {


        height: 100,
        width: 100,
        borderRadius: 50,



        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowColor: 2,
        elevation: 4,
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
        height: 10

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


export default AccountHeaderCard;
