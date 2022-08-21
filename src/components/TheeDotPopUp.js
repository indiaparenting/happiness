import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {

    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

import { Entypo } from '@expo/vector-icons';
import { showMessage, hideMessage } from "react-native-flash-message";
import { Context as AuthContext } from '../context/AuthContext';

import { Context as PostContext } from '../context/PostContext';

const TheeDotPopUp = ({ postId, postUser, ViewAction, setModal }) => {

    const { state } = useContext(AuthContext);
    const { deletePost, reportPost } = useContext(PostContext);



    const myUser = state.user;

    const isMe = myUser ? myUser._id === postUser._id : false;








    const DeleteAction = async () => {
        const data = await deletePost({ postId: postId });


    }


    const ReportAction = async () => {
        console.log('report modal should open')
        setModal(true);
        return;
        const data = await reportPost({ postId: postId });



    }


    return (

        <View style={styles.container}>
            <Menu>
                <MenuTrigger style={styles.dots} >
                    <Entypo name="dots-three-vertical" size={22} color="#4B9DFA" />
                </MenuTrigger>

                <MenuOptions>
                    <MenuOption onSelect={ViewAction}  >
                        <Text style={{ fontSize: 16, height: 20, fontFamily: 'Montserrat_400Regular', }}>View</Text>
                    </MenuOption>
                    {isMe && <MenuOption onSelect={DeleteAction}>
                        <Text style={{ color: 'red', fontSize: 16, height: 20, fontFamily: 'Montserrat_400Regular', }}>Delete</Text>
                    </MenuOption>}

                    {!isMe && <MenuOption onSelect={ReportAction}>
                        <Text style={{ color: 'red', fontSize: 16, height: 20, fontFamily: 'Montserrat_400Regular', }}>Report</Text>
                    </MenuOption>}
                    {false && <MenuOption onSelect={() => {

                        showMessage({
                            message: "Simple message",
                            type: "info",
                            backgroundColor: "#EF4430",
                        });

                    }}>
                        <Text style={{ color: 'red', fontFamily: 'Montserrat_400Regular', }}>show notifications</Text>
                    </MenuOption>}

                </MenuOptions>
            </Menu>
        </View>

    );

}


export default TheeDotPopUp;

const styles = StyleSheet.create({
    container: {



        justifyContent: 'center',
        alignItems: 'center',







    },

    dots: {
        padding: 5,
        borderRadius: 10

    }
});


