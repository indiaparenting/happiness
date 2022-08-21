import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import GroupCard from '../components/GroupCard';

import { SafeAreaView } from 'react-navigation';
import { Context as GroupContext } from '../context/GroupContext'
import ShowList from '../components/ShowList';
import Header from '../components/header/Header';

import Bg from '../components/App/Bg';
const AllGroupScreen = ({ navigation }) => {

    const { state, fetchAllGroups } = useContext(GroupContext);




    return (
        <Bg top={110} color={'#FEFCFD'} hasBackCard={true} navigation={navigation}>
            <View style={{ flex: 1, marginTop: 15, marginBottom: 10, width: '100%' }}>



                <ShowList
                    style={{ flex: 1, paddingVertical: 10 }}
                    navigation={navigation}
                    list={state.AllGroups}
                    fetchData={fetchAllGroups}
                    RenderItem={RenderItem}

                />
            </View>
        </Bg>
    );
};


AllGroupScreen.navigationOptions = {

    title: 'All Groups',
    headerShown: false
}


const RenderItem = ({ item }) => {
    return <View style={styles.spacing}>
        <GroupCard data={item} isMyGroup={false} />
    </View>
}


const styles = StyleSheet.create({
    spacing: {
        marginVertical: 5
    }
});
export default AllGroupScreen;
