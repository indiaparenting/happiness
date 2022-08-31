import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import GroupCard from '../components/GroupCard';


import Header from '../components/header/Header';


import { Context as GroupContext } from '../context/GroupContext';
import ShowList from '../components/ShowList';
import Bg from '../components/App/Bg';
const MyGroups = ({ navigation }) => {
    const { state, fetchAllGroups, fetchMyGroups } = useContext(GroupContext);
    return (
        <Bg top={110} color={'#FEFCFD'} hasBackCard={true} navigation={navigation}>

            <View style={{ flex: 1, marginTop: 15, paddingVertical: 10, width: '100%' }}>
                <ShowList
                    style={{ flex: 1 }}
                    navigation={navigation}
                    list={state.myGroups}
                    fetchData={fetchMyGroups}
                    RenderItem={RenderItem}
                />
            </View>
        </Bg>
    );
};
const RenderItem = ({ item }) => {
    return <View style={styles.spacing}>
        <GroupCard data={item} isMyGroup={true} />
    </View>
}
MyGroups.navigationOptions = {
    title: 'My Group',
    headerShown: false
}
const styles = StyleSheet.create({
    spacing: {
        marginVertical: 5
    }
});
export default MyGroups;