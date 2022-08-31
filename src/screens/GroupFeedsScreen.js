import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Header from '../components/header/Header';

import ShowList from '../components/ShowList';
import { Context as GroupContext } from '../context/GroupContext'

import AlbumDetail from '../components/AlbumDetail';
import Bg from '../components/App/Bg';


const GroupFeedsScreen = ({ navigation }) => {



    const { fetchPost, state } = useContext(GroupContext);

    const getFeed = async (page) => {
        return await fetchPost(page, state.groupData._id)
    }





    return (
        <Bg top={100} color={'#FEFCFD'} hasBackCard={true} navigation={navigation}>

            <View style={{ flex: 1, marginTop: 50, width: '100%' }}>




                <ShowList
                    style={{ flex: 1 }}
                    navigation={navigation}
                    list={state.posts}
                    fetchData={getFeed}
                    RenderItem={RenderItem}

                />
            </View>
        </Bg>
    );
};
const RenderItem = ({ item }) => {


    return <AlbumDetail albumData={item} />


}

GroupFeedsScreen.navigationOptions = {
    title: 'News Feed',
    //   tabBarIcon: <FontAwesome name="th-list" size={20}></FontAwesome>,
    headerShown: false
}


const styles = StyleSheet.create({});

export default GroupFeedsScreen;
