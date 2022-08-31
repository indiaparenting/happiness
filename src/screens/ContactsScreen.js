import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';

import Contact from '../components/Contact';

import SmsConfimCard from '../components/SmsConfimCard'

import { SafeAreaView } from 'react-navigation';
import Header from '../components/header/Header';

import * as Contacts from 'expo-contacts';

import * as SMS from 'expo-sms';

import { SearchBar } from 'react-native-elements';

let arrayholder = []


import Bg from '../components/App/Bg';
import { Context as GroupContext } from '../context/GroupContext'

const ContactsScreen = ({ navigation }) => {

    const { groupName, groupCode, groupId } = navigation.state.params;

    const [contacts, setContacts] = useState([])

    const [searchText, setsearchText] = useState('')

    const { sendInvite, fetchInvites } = useContext(GroupContext);

    const [selectedConstacts, setselectedConstacts] = useState([])



    const searchFilterFunction = text => {
        const newData = arrayholder.filter(item => {
            const itemData = `${item.name.toUpperCase()}  ${item.phoneNumbers ? item.phoneNumbers[0].number.toUpperCase() : ''}`;

            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        setContacts(newData)


    };

    const selectContact = (newContact) => {


        const tempArray = arrayholder.map((item) => {

            if (item.phoneNumbers) {
                if (item.phoneNumbers[0].number === newContact) {
                    item.isSelected = true;
                    console.log('selected')
                }
            }
            return item;
        });

        const temp = arrayholder.filter((item) => item.isSelected).map((x) => { return x.phoneNumbers[0].number });

        arrayholder = tempArray;

        setselectedConstacts(temp)

    }

    const deselectContact = async (newContact) => {

        const tempArray = arrayholder.map((item) => {

            if (item.phoneNumbers) {
                if (item.phoneNumbers[0].number === newContact) {
                    item.isSelected = false;
                    console.log('deselected')
                }
            }
            return item;
        });

        const temp = arrayholder.filter((item) => item.isSelected).map((x) => { return x.phoneNumbers[0].number });

        arrayholder = tempArray;

        setselectedConstacts(temp)


    }

    useEffect(() => {

        fetchInvites({ groupId });
        const didBlurSubscription = navigation.addListener(
            'didFocus',
            payload => {
                fetchInvites({ groupId });
            }
        );


        // Remove the listener when you are done

        return didBlurSubscription.remove;


    }, [navigation]);

    const sendSms = async (contact, code) => {

        const { result } = await SMS.sendSMSAsync(
            contact,
            `Hey i am inviting you to join my group ${groupName} on The Happiness app,\nEnter ${code} to join.`

        );

    }

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers],
                });

                if (data.length > 0) {

                    arrayholder = data;
                    setContacts(data)
                }
            }

            const isAvailable = await SMS.isAvailableAsync();
            if (isAvailable) {
                console.log('SMS is available')
                // do your SMS stuff here
            } else {
                // misfortune... there's no SMS available on this device
            }
        })();
    }, []);

    return (
        <Bg top={120} hasBackCard={true} navigation={navigation}>

            <View style={{
                flex: 1,
                marginTop: -40,
                width: '100%',

            }}>

                <SearchBar
                    inputStyle={styles.InputStyle}
                    inputContainerStyle={styles.Input}
                    containerStyle={styles.Container}
                    placeholder="Type Here..."
                    lightTheme
                    round

                    value={searchText}
                    onChangeText={text => { setsearchText(text); searchFilterFunction(text) }}
                    autoCorrect={false}
                />



                <FlatList
                    data={contacts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return <Contact sendSms={sendSms} groupId={groupId} data={item} selectContact={selectContact} deselectContact={deselectContact} />
                    }}
                />
            </View>
        </Bg>

    );
};

const SmsSendCard = () => {
    return <SmsConfimCard count={selectedConstacts.length} sendSms={sendSms} />
}

ContactsScreen.navigationOptions = {


    headerShown: false
}


const styles = StyleSheet.create({
    Input: {
        color: '#000000',
        borderRadius: 25,
        width: '95%',
        height: 55,
        backgroundColor: '#FAF8F9',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#E7B62B',
        borderColor: '#F298AB',
        borderWidth: 1,

        borderBottomWidth: 1,

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        paddingRight: 25,
        paddingLeft: 25,


        marginLeft: 10,



    },
    InputStyle: {
        fontSize: 15,

        fontFamily: 'Montserrat_400Regular',
    },
    Container: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0,

        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }
});

export default ContactsScreen;
