import React, { useContext, useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Text, Image, Pressable, ActivityIndicator } from 'react-native';



import { Context as AuthContext } from '../context/AuthContext';
import { Context as PostContext } from '../context/PostContext';
import AlbumDetail from '../components/AlbumDetail';
import Seperator from '../components/Cards/Seperator';
import ShowList from '../components/ShowList';
import Bg from '../components/App/Bg';
import NoPostCard from '../components/Cards/NoPostCard.js';
import AccountHeaderCard from '../components/header/AccountHeaderCard.js'



const AccountScreen = ({ navigation }) => {
  const { state: userState, fetchUser, signout, uploadProfileImage, fetchStoredUser } = useContext(AuthContext);

  const [loadingPost, setLoadingPost] = useState(false)


  const { fetchMyPosts, state } = useContext(PostContext);
  const loadPost = async (page) => {
    setLoadingPost(true)
    await fetchMyPosts(page);
    setLoadingPost(false)
  }

  const { user } = userState;


  const doesNotHavePost = state.myPostFetched && state.myposts && state.myposts.length < 1;



  useEffect(() => {


    const didBlurSubscription = navigation.addListener(
      'didFocus',
      payload => {
        fetchUser();

      }
    );

    return () => {
      didBlurSubscription.remove();

    }

  }, [navigation]);



  return (

    <Bg top={50} hasBackCard={false} navigation={navigation}>

      <ShowList
        style={{ flex: 1 }}
        navigation={navigation}
        list={state.myposts}
        fetchData={loadPost}
        RenderItem={RenderItem}
        ItemSeparatorComponent={Seperator}

        Header={
          <>
            <View>


              <View style={styles.HeaderContainer}>


              </View>
              <View style={styles.cardHolder}>
                <AccountHeaderCard fetch={fetchUser} user={user} navigation={navigation} ></AccountHeaderCard>

              </View>

            </View>


            {doesNotHavePost && <NoPostCard></NoPostCard>}
          </>
        }
      />
    </Bg>

  );
};

const RenderItem = ({ item }) => {


  return <AlbumDetail albumData={item} />


}






AccountScreen.navigationOptions = {


  headerShown: false
}



const styles = StyleSheet.create({



  cardHolder: {
    paddingBottom: 10,


  },
  HeaderContainer: {

    flexDirection: 'column',
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: '#F5F2F3',
    bottom: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    width: '100%',
    height: 100
  },

  activityIndicator: {



    position: 'absolute',
    left: 50,
    right: 0,
    top: -50,
    bottom: 50,




  },


  profileDetails: {

    width: '100%',
    height: 100,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 45,
    paddingRight: 10,
    marginTop: -2,
    marginBottom: 20,

  },
  name: {
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'left',

    alignSelf: 'stretch',

  },
  groupName: {
    fontSize: 20,
    color: '#494B4F',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontWeight: 'bold',

    marginTop: -5,


  }, profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    padding: 4,

    borderColor: '#F6F2F3',

    // invisible color

    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,

    elevation: 3,
    backgroundColor: "#0000"

  }, image: {


    width: '100%',
    height: '100%',
    borderRadius: 50,


  }, totalPoints: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
    color: '#EF4430',
  },


  points: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'left',
    color: '#EF4430',
  },
  pointsValue: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'left',

  }, profile: {
    paddingLeft: 30,


    flexDirection: 'row',

    width: '100%',
    position: 'absolute',
    bottom: 22,




  }, profileRoot: {

    flex: 1,
    width: '100%',


    marginTop: 10,

    height: 122,

    justifyContent: 'center',
    alignItems: 'center',


  }

  , profileContainer: {
    paddingLeft: 10,




  }, backCard: {



    flexDirection: 'column',
    position: 'absolute',


    borderRadius: 50,
    backgroundColor: '#F5F2F3',
    bottom: 0,


    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    width: '100%',


    shadowColor: "#FAB830",
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
    height: 75,


    // invisible color
  },
  profileCard: {

    marginBottom: -10,

  },

});

export default AccountScreen;
