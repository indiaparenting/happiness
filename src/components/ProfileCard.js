import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';
import CardSection from './CardSection';
import Card from './Card';


const ProfileCard = ({ data }) => {

    const { id, name, profileUrl, groupName, points } = data;



    return (<View style={styles.ProfileContainer}>

        <View styles={styles.container}>
            <View style={styles.thumbnailContainerStyle}>
                <Image style={styles.avatarStyle} source={{ uri: profileUrl }}></Image>
            </View>
            <View style={styles.headerStyle}>
                <Text style={styles.headerTextStyle}>{name}</Text>
                <Text style={styles.GroupTextStyle} >Group:{groupName}</Text>
                <Text style={styles.GroupTextStyle}  >Total Happiness Points:{points}</Text>


            </View>

        </View>
    </View>)
};

const LogoutButton = () => {
    return (
        <View style={styles.buttonContainer} >
            <View style={styles.buttonStyle} >
                <Button style={styles.buttonStyle} title="Logout">

                </Button>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    headerStyle: {

        alignItems: 'center',

        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        paddingBottom: 10,


    }

    , GroupTextStyle: {
        fontSize: 15,
        color: 'blue',
        fontWeight: 'bold',
        opacity: 0.7,
        padding: 5,
    }

    , headerTextStyle: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        opacity: 0.7
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
        marginRight: 10,
        marginTop: -50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 5,
        borderColor: 'red',

    },
    buttonStyle: {
        maxHeight: '60%',

    },
    container: {
        borderBottomWidth: 1,
        padding: 1,
        borderColor: 'red',
        borderWidth: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    ProfileContainer: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowColor: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        padding: 5,

    }
});


export default ProfileCard;
