import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RankCard, RankHeader, RankFooter } from '../components/RankCard';


import { Context as AuthContext } from '../context/AuthContext';

import ShowList from '../components/ShowList';
import Bg from '../components/App/Bg';
import Seperator, { Line } from '../components/Cards/Seperator';
import Spacer from '../components/Spacer';
import ChallengeButton from '../components/Buttons/ChallengeButtons'

const RankingScreen = ({ navigation }) => {
    const { state, fetchUsersRanks } = useContext(AuthContext);
    return (
        <Bg top={120} color={'#FEFCFD'} hasBackCard={true} navigation={navigation}>
            <View style={{ flex: 1, marginTop: -50, width: '100%' }}>
                <View style={{ margin: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.totalPoints}>Total Points</Text>
                </View>
                <Spacer marginVertical={1}></Spacer>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: '70%', width: '100%' }}>
                    <View style={styles.headerContainer}>
                        <RankHeader data={{ name: 'Name', points: 'Points', challengeCount: 'No of challenges' }} />
                    </View>
                    <ShowList
                        style={{ width: '100%', }}
                        navigation={navigation}
                        list={state.ranks}
                        fetchData={fetchUsersRanks}
                        RenderItem={RenderItem}
                        ItemSeparatorComponent={Line}
                    />
                    <View style={{ justifyContent: 'center', alignItems: 'center', zIndex: -3 }}>
                        <RankFooter data={{ name: 'Name', points: 'Points', challengeCount: 'No of challenges' }} />
                    </View>
                </View>
                <View style={styles.rewardContainer}>
                    <Text style={styles.text}>Rewards and prizes coming soon</Text>
                </View>
            </View>
        </Bg>
    );
};
RankingScreen.navigationOptions = {
    headerShown: false
}
const RenderItem = ({ item }) => {
    return <RankCard data={item} />
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

export default RankingScreen;
