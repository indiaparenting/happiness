import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, FlatList, TextInput } from 'react-native';

import Comment from './Comment';
import { Context as CommentContext } from '../../context/CommentContext';
import CommentInput from './CommentInput';
const CommentList = ({ navigation, postId, parentComment }) => {
    const { fetchComments, createComment } = useContext(CommentContext);
    const [commentList, setCommentsList] = useState([]);
    console.log("CommentList")
    useEffect(() => {
        const Loads = async () => {
            const data = await fetchComments({ postId });
            if (data) {
                setCommentsList(data)
            }
        }
        Loads();
    }, []);
    const loadCommentsAfterCreate = async ({ postId, parentComment, content }) => {
        let fetchedData;
        let Loads = async () => {
            fetchedData = await createComment({ postId, parentComment, content });
            if (fetchedData) {
                setCommentsList(fetchedData)
                Loads = null;
                fetchedData = null;
            }
        }
        Loads();
    }
    return (
        <View style={styles.Container}>
            <FlatList
                data={commentList}
                keyExtractor={item => item._id.toString()}
                renderItem={({ item }) => {
                    return <Comment data={item} />
                }}
                initialNumToRender={5}
                ListFooterComponentStyle={{ flex: 1, paddingHorizontal: -5 }}
            />
            <CommentInput postId={postId} parentComment={parentComment} createComment={loadCommentsAfterCreate} />
        </View>
    );
};
const _keyExtractor = (item, index) => {
    return this.props.index + "_" + index + '_' + item.id + "_" + moment().valueOf().toString();
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 5,
        marginTop: 5,
    },
    Input: {
        color: '#000000',
        borderRadius: 15,
        width: 325,
        height: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#E7B62B',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginRight: 15,
        marginLeft: 15,
        paddingRight: 25,
        paddingLeft: 25,
        fontSize: 16
    },
    SubmitButtonText: {
        color: 'white',
        fontSize: 22,
    },
    SubmitButton: {
        color: '#000000',
        borderRadius: 15,
        width: 325,
        height: 60,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#E7B62B',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginRight: 15,
        marginLeft: 15,
    },
});
export default CommentList;