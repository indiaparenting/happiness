import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import GroupCreateCard from '../components/GroupCreateCard';

import GroupJoinCard from '../components/GroupJoinCard';
import Header from '../components/header/Header';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';

import { Context as AuthContext } from '../context/AuthContext';
import { Context as GroupContext } from '../context/GroupContext';


import Requests from '../components/Requets'

import Bg from '../components/App/Bg';

const CreateGroupScreen = ({ navigation }) => {

    const { state } = useContext(AuthContext);

    const { getRequests } = useContext(GroupContext);
    const { user } = state;

    const [requets, setRequests] = useState([]);


    const GetRequests = async () => {


        const result = await getRequests();

        if (result) {

            setRequests(result);


        }


    }
    const data = navigation.state.params;

    useEffect(() => {

        GetRequests();
        const didBlurSubscription = navigation.addListener(
            'didFocus',
            payload => {
                GetRequests();
            }
        );


        // Remove the listener when you are done

        return didBlurSubscription.remove;


    }, [navigation]);

    return (
        <Bg top={200} hasBackCard={true} navigation={navigation}>

            <View style={{ flex: 1, marginTop: -120, width: '100%' }}>

                <View style={{ flex: 1, marginTop: 50 }}>

                    {user && user.groupCreatePermissions &&
                        <View>
                            <Spacer />
                            <GroupCreateCard navigation={navigation} />
                        </View>


                    }
                    <Spacer />
                    <GroupJoinCard navigation={navigation} />
                    {user && user.groupCreatePermissions && <View>

                        {requets && requets.length > 0 && <Spacer>
                            <Text style={styles.headerTextStyle}>Requests</Text>

                        </Spacer>
                        }


                        <FlatList
                            data={requets}
                            keyExtractor={(item) => item._id}
                            renderItem={({ item }) => {
                                return <Requests navigation={navigation} data={item} />
                            }
                            }

                        />
                    </View>


                    }


                </View>
            </View>
        </Bg >
    );
};

CreateGroupScreen.navigationOptions = {
    title: 'Status',

    headerShown: false
}






const styles = StyleSheet.create({


    headerTextStyle: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        opacity: 0.7
    },
});

export default CreateGroupScreen;
