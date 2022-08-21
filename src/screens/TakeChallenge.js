import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';

import ChallengCard from '../components/ChallengeCard';

import { Context } from '../context/TaskContext';
import Bg from '../components/App/Bg';
import ChallengeHeaderCard from '../components/header/ChallengeHeaderCard';
import ShiftedCard from '../components/App/ShitedCard';
import { navigate } from "../navigationRef";

import Seperator from '../components/Cards/Seperator';

const TakeChallenge = ({ navigation }) => {
    const { fetchTasks, state, fetchTaskStatus } = useContext(Context);


    const fetch = () => {
        const getTask = async () => {
            await fetchTasks();

        }
        getTask();

    }

    useEffect(() => {
        fetch();

        const didBlurSubscription = navigation.addListener(
            'didFocus',
            payload => {
                fetch();
            }
        );
        return didBlurSubscription.remove;

    }, [navigation]);



    return (
        <Bg top={200} hasBackCard={false} navigation={navigation}>

            <FlatList
                data={state.tasks}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return <ChallengCard fetchTaskStatus={fetchTaskStatus} navigation={navigation} data={item} />
                }}
                ListHeaderComponent={
                    <ShiftedCard bottom={5} marginTop={170}>

                        <ChallengeHeaderCard navigate={navigate} />
                    </ShiftedCard>
                }
                ItemSeparatorComponent={Seperator}
            />

        </Bg>

    );
};

TakeChallenge.navigationOptions = {


    headerShown: false
}


const styles = StyleSheet.create({});

export default TakeChallenge;
