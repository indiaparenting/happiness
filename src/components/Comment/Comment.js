import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { defaultProfile } from '../../Imprter/ProfileImporter';



const Comment = ({ data }) => {

    const { user, content } = data;
    return (<View style={styles.Container}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={user ? { uri: user.profile_photo } : { uri: global.defaultProfileUri }}></Image>
        </View>

        <View style={styles.commentSection}>
            <Text style={styles.name}>{user ? user.name : "anonymous"}</Text>
            <Text style={styles.comment}>{content}</Text>
        </View>


    </View>);
};

const styles = StyleSheet.create({
    Container: {
        margin: 5,

        flex: 1,
        flexDirection: 'row',
    },
    imageContainer: {
        width: 20,
        height: 20,
        marginRight: 25,
        marginTop: 5,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    commentSection: {
        backgroundColor: '#E0DFE5',
        borderRadius: 25,
        flexDirection: 'column',
        flex: 1,
        padding: 10

    },
    name: {

        fontSize: 15,
        color: '#373737',

        fontFamily: global.BOLD,

    },
    comment: {

        color: '#757575',
        fontFamily: 'Montserrat_400Regular',
    },


});

export default Comment;
