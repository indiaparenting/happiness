import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';

import Header from '../components/header/Header';
import GroupDetailCard from '../components/GroupDetailCard';

import GroupContactCard from '../components/GroupContactCard';
import { SafeAreaView } from 'react-navigation';
import { Context as GroupContext } from '../context/GroupContext';
import Bg from '../components/App/Bg';

const GroupDetails = ({ navigation }) => {


    const data = navigation.state.params;

    const { setGroupData } = useContext(GroupContext);

    const removeUser = (user) => {
        const newUsers = data.users.filter((item) => item._id !== user);
        data.users = newUsers;
        setGroupData(data);



    }



    const isGroupAdmin = data.MyUser._id === data.admin._id// userState.user._id === data.admin;

    useEffect(() => {

        setGroupData(data);
        const didBlurSubscription = navigation.addListener(
            'didFocus',
            payload => {
                setGroupData(data);
            }
        );


        // Remove the listener when you are done

        return didBlurSubscription.remove;


    }, [navigation]);

    return (
        <Bg top={100} color={'#FEFCFD'} hasBackCard={true} navigation={navigation}>
            <View style={{ flex: 1, marginTop: 50, width: '100%' }}>


                <FlatList
                    data={data.users}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={<GroupDetailCard navigation={navigation} isGroupAdmin={isGroupAdmin} data={data} />}
                    renderItem={({ item }) => {
                        return <GroupContactCard data={item} groupId={data._id} isGroupAdmin={isGroupAdmin} removeUser={removeUser} />
                    }}

                />
            </View>
        </Bg>
    );
};


GroupDetails.navigationOptions = {


    headerShown: false
}

const styles = StyleSheet.create({});




export default GroupDetails;
