import React, { useEffect, useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import AlbumDetail from '../components/AlbumDetail';

import ShowList from '../components/ShowList';
import HeaderCard from '../components/header/HeaderCard';
import ShiftedCard from '../components/App/ShitedCard';

import { navigate } from "../navigationRef";

import { Context as PostContext } from '../context/PostContext';
import { Context as AuthContext } from '../context/AuthContext';

import Bg from '../components/App/Bg';
import Seperator from '../components/Cards/Seperator';

import NoPostCard from '../components/Cards/NoPostCard.js';

const HomeScreen = ({ navigation }) => {


  const { fetchPost, state, fetchMyPosts } = useContext(PostContext);

  const { fetchUser, fetchReportList, state: authState } = useContext(AuthContext);

  const [loadingPost, setLoadingPost] = useState(false)


  const doesNotHavePost = state.myPostFetched && state.myposts && state.myposts.length < 1;


  const loadPost = async (page) => {
    setLoadingPost(true)
    await fetchPost(page);
    setLoadingPost(false)
  }

  useEffect(() => {
    fetchUser();

    if (authState && authState.reportList && authState.reportList.length === 0) {
      fetchReportList();
    }

  }, []);





  return (
    <Bg isBackButton={false} top={50} hasBackCard={false} navigation={navigation}>
      <ShowList
        paddingTop={-10}
        style={{}}

        navigation={navigation}
        list={state.posts}
        fetchData={loadPost}
        RenderItem={RenderItem}
        ItemSeparatorComponent={Seperator}


        Header={

          <>

            <View style={styles.cardHolder}>

              <HeaderCard navigate={navigate} />

            </View>



            {false && <NoPostCard></NoPostCard>}
          </>

        }
      />

    </Bg>



  );
};


const RenderItem = ({ item, index }) => {

  return <AlbumDetail index={index} albumData={item} />


}

HomeScreen.navigationOptions = {
  headerShown: false
}


const styles = StyleSheet.create({
  cardHolder: {
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default HomeScreen;
