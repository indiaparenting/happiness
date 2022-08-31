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
import { Context as GroupContext } from '../context/GroupContext';



const GroupMemberActionPopUp = ({ groupId, data, hasPermission, setPermission, removeUser }) => {


    const { _id: userId } = data;

    console.log(data)
    const { memberDelete, GroupPermissions } = useContext(GroupContext);


    const GrantPermission = async () => {

        const request = await GroupPermissions({ action: 'permit', groupId, userId });

        if (request) {
            data.groupCreatePermissions = true;
            setPermission(true)
        }

    }

    const RevokePermission = async () => {

        const request = await GroupPermissions({ action: 'remove', groupId, userId });

        if (request) {
            data.groupCreatePermissions = false;
            setPermission(false)
        }

    }

    const deleteMember = async () => {


        const request = await memberDelete({ groupId, userId });

        if (request) {
            removeUser(userId);
        }
    }


    return (

        <View style={styles.container}>
            <Menu>
                <MenuTrigger>
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </MenuTrigger>

                <MenuOptions>

                    {!hasPermission ? <MenuOption onSelect={GrantPermission}>
                        <Text style={{ fontSize: 16, height: 20 }}>Allow group create permission</Text>
                    </MenuOption> :
                        <MenuOption onSelect={RevokePermission}>
                            <Text style={{ fontSize: 16, height: 20 }}>Revoke group create permission</Text>
                        </MenuOption>
                    }

                    <MenuOption onSelect={deleteMember}>
                        <Text style={{ color: 'red', fontSize: 16, height: 20 }}>Delete Member</Text>
                    </MenuOption>


                </MenuOptions>
            </Menu>
        </View>

    );

}


export default GroupMemberActionPopUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',


    },
});


