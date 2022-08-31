import React, { useContext } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
/* import { RankCard, RankHeader, RankFooter } from '../components/RankCard'; */
import { VideoCard } from '../components/VideoCard';
import { Context as AuthContext } from '../context/AuthContext';
import ShowList from '../components/ShowList';
import Bg from '../components/App/Bg';
import Seperator, { Line } from '../components/Cards/Seperator';
import Spacer from '../components/Spacer';
import ChallengeButton from '../components/Buttons/ChallengeButtons';
const VideoItems = [
    {
        id: 0,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    }, 
    {
        id: 1,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    }, 
    {
        id: 2,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    }, 
    {
        id: 3,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    }, 
    {
        id: 4,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    }, 
    {
        id: 5,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    }, 
    {
        id: 6,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    },     
    {
        id: 7,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    },     
    {
        id: 8,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    },     
    {
        id: 9,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    },     
    {
        id: 10,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    },     
    {
        id: 11,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    },     
    {
        id: 12,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    },     
    {
        id: 13,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    },     
    {
        id: 14,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    }, 
    {
        id: 15,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    }, 
    {
        id: 16,
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    }
];

const VideoScreen = ({ navigation }) => {
    //const { state, fetchValueVideos } = useContext(AuthContext);
    return (
        <Bg top={120} color={'#FEFCFD'} hasBackCard={true} navigation={navigation}>
            <View style={{ flex: 1, marginTop: -50, width: '100%' }}>
                <Text>Hello Friend</Text>
                <FlatList data={VideoItems} initialNumToRender={7} renderItem={RenderItem} />
            </View>
        </Bg>
    );
};
VideoScreen.navigationOptions = {
    headerShown: false
}
const RenderItem = ({ item }) => {
    return <VideoCard data={item} />
}
const styles = StyleSheet.create({
    totalPoints: {
        color: "#FBBE30",
        fontFamily: global.GOLDEN_FONT,
        fontSize: 30
    },
    text: {
        color: "#3a3a38",
        fontFamily: global.MEDIUM,
    },
    rewardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        padding: 5
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0,
    }
});
export default VideoScreen;