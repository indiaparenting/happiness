import React, { useState, useContext } from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Context as AuthContext } from '../../context/AuthContext';


const defaultProfileUri = "https://fcloneodin.herokuapp.com/images/no_pic.jpg";

const CommentInput = ({ createComment, parentComment, postId }) => {
    const [commentTxt, setCommentText] = useState('');
    const { state } = useContext(AuthContext);
    const { user } = state;

    console.log('comment input')

    return (
        <View style={styles.Container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={user ? { uri: user.profile_photo } : { uri: defaultProfileUri }}></Image>
            </View>

            <View style={styles.commentSection}>
                <TextInput style={styles.comment} maxLength={400} underlineColorAndroid='transparent'
                    placeholder="Enter comment"
                    value={commentTxt}
                    onChangeText={(txt) => {
                        setCommentText(txt);

                    }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    multiline

                    onEndEditing={(txt) => {

                    }}
                />

            </View>

            <TouchableOpacity styles={styles.sendContainer} onPress={() => createComment({ postId, parentComment, content: commentTxt })}>
                <FontAwesome style={styles.icon} name="send" size={24} color="black" />
            </TouchableOpacity>



        </View>);
};

const styles = StyleSheet.create({
    Container: {

        marginLeft: 0,

        marginVertical: 5,
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
        padding: 10,



    },
    name: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#373737',
        fontFamily: 'Montserrat_400Regular',

    },
    comment: {
        fontFamily: 'Montserrat_400Regular',
        color: '#757575'
    },
    sendContainer: {

        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignContent: 'flex-end',


    }, icon: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignContent: 'flex-end',

        padding: 5,

        margin: 5
    }


});

export default CommentInput;
