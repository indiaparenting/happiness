import React, { useState, useContext } from 'react';
import { View, StyleSheet, TextInput, Image, Text, Button, TouchableOpacity } from 'react-native';
import VerticalRoundedCard from './Cards/VerticalRoundedCard';
import Card from './Card';
import ChallengeButton from './Buttons/ChallengeButtons';
import Spacer from '../components/Spacer';
import { Context as GroupContext } from '../context/GroupContext';




function Validate(name) {
    //Regex for Valid Characters i.e. Alphabets, Numbers and Space.

}

const GroupCreateCard = ({ data, navigation }) => {

    const { state, createGroup, clearErrorMessage } = useContext(GroupContext);
    const [name, setName] = useState();

    const [isButtonEnable, SetButtonEnable] = useState(false);
    const [isNameValid, setNameValid] = useState(false);

    const [isLoading, setisLoading] = useState(false);

    const [errorMessage, seterrorMessage] = useState('')


    const IsValidGroupName = (name) => {

        var regex = /^[A-Za-z]+$/

        //Validate TextBox value against the Regex.
        var isValid = regex.test(name);
        if (!isValid) {

            seterrorMessage("Group name should not contain special characters,spaces and numbers")


        }


        if (!(name.trim().length >= 6)) {
            isValid = false;
            seterrorMessage("Group name should be atleast six characters long")
        }
        return isValid;


    }

    const CreateGroup = async (name) => {

        setisLoading(true);
        const result = await createGroup(name);
        setisLoading(false);
        if (result) {
            setName('')
            navigation.navigate('MyGroup')

        }


    }

    return (

        <VerticalRoundedCard >


            <Spacer />

            <Text style={styles.headerTextStyle}>Create Group</Text>


            <Spacer>
                <TextInput style={styles.inputStyle} underlineColorAndroid='transparent'
                    placeholder="Enter Group Name here"
                    value={name}
                    onChangeText={(txt) => {
                        setName(txt)
                        clearErrorMessage()
                        setNameValid(IsValidGroupName(txt));
                    }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onEndEditing={(txt) => {

                    }}
                />


                <Spacer>
                    {!isNameValid ? (
                        <Text style={styles.errorMessage}>{errorMessage}</Text>
                    ) : null}


                    {state.errorMessage ? (
                        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
                    ) : null}
                </Spacer>
            </Spacer>
            <Spacer>

                <ChallengeButton
                    title="Submit"
                    textStyle={{ fontSize: 18, fontWeight: "normal" }}
                    textColor='white'
                    height={45}
                    disabled={!isNameValid}
                    buttonColor={global.RED}
                    onPress={() => {
                        console.log("pressed")
                        CreateGroup(name)

                    }}
                    disabledOpacity={false}
                    borderRadius={15}
                    isLoading={isLoading}
                ></ChallengeButton>

            </Spacer>
        </VerticalRoundedCard>

    )
};


const styles = StyleSheet.create({

    errorMessage: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

        marginLeft: 18,
        marginRight: 18,
        marginTop: 5,
        color: '#A3A3A3',
        fontSize: 12,
        fontFamily: global.MEDIUM
    },

    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        maxWidth: '55%',
        fontFamily: global.REGULAR

    }, headerTextStyle: {
        fontSize: 24,
        color: '#C53726',


        fontFamily: global.SEMIBOLD
    },
    avatarStyle: {
        height: 50,
        width: 50,
        borderRadius: 25,


    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',

        margin: 7,
        marginLeft: -5,

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowColor: 2,
        elevation: 4,

        height: 50,
        width: 50,
        borderRadius: 25,

    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 1,
    },
    buttonStyle: {
        paddingLeft: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    }, pointHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: global.BOLD

    },
    inputStyle: {
        color: '#000000',
        borderRadius: 20,
        width: '95%',
        height: 55,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#E7B62B',
        borderColor: '#A3A3A3',
        borderWidth: 1,

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 4,

        paddingRight: 25,
        paddingLeft: 25,
        fontSize: 14,

        fontFamily: global.MEDIUM

    },

    Input: {
        color: '#000000',
        borderRadius: 15,
        width: 300,
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FEF1C4',

        marginRight: 15,
        marginLeft: 15,
        paddingRight: 25,
        paddingLeft: 25,
        fontSize: 16,
        fontFamily: global.REGULAR

    },
    SubmitButtonText: {
        color: 'white',
        fontSize: 22,
        fontFamily: global.REGULAR
    },
    SubmitButton: {

        color: '#000000',
        borderRadius: 15,
        width: 325,
        height: 60,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#E7B62B',

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginRight: 15,
        marginLeft: 15,
    },
    inputStyle: {
        color: '#000000',
        borderRadius: 20,
        width: '95%',
        height: 55,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#E7B62B',
        borderColor: '#A3A3A3',
        borderWidth: 1,

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 4,

        paddingRight: 25,
        paddingLeft: 25,
        fontSize: 14,

        fontFamily: global.MEDIUM

    },

});


export default GroupCreateCard;
