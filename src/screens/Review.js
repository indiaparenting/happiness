import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';

import { Rating, AirbnbRating } from 'react-native-ratings';
import { Context as PostContext } from '../context/PostContext';

import Bg from '../components/App/Bg';
import RadioButtonRN from 'radio-buttons-react-native';

import ChallengeButton from '../components/Buttons/ChallengeButtons';



const RadioData = [
    {
        label: 'yes',
        accessibilityLabel: 'Your label'
    },
    {
        label: 'no',
        accessibilityLabel: 'Your label'
    }
];

const Review = ({ navigation }) => {


    const data = navigation.state.params;
    const { _id, title, uri, date, status, discription, challengeTip } = data;

    const { state, postReview } = useContext(PostContext);

    const [isLoading, setLoading] = useState(false);
    const [happy, setHappy] = useState(false);

    const [more, setMore] = useState(false);


    const [paragraph, setParagraph] = useState('');

    const [rating, setRating] = useState(0);

    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
        setRating(rating);
    }

    const submit = async () => {
        setLoading(true);

        const result = await postReview({ taskId: _id, content: paragraph, rating: rating, happy: happy, more: more })

        navigation.navigate('Challenges')

        setLoading(false);

    }
    return (

        <Bg top={80} color={'#FEFCFD'} hasBackCard={true} navigation={navigation}>
            <ScrollView style={{ flex: 1, marginTop: 0, width: '100%' }}>


                <View style={styles.dropDownContainer}>
                    <Text style={styles.questionText}>Did you like this challenge?</Text>
                    <AirbnbRating
                        defaultRating={0}
                        size={24}

                        style={styles.ratingContainer}
                        onFinishRating={ratingCompleted}
                        ratingColor='#3498db'
                        ratingBackgroundColor='#c8c7c8'
                    />

                </View>
                <View style={styles.dropDownContainer}>
                    <Text style={styles.questionText}>would you like to do similar challenge?</Text>
                    <RadioButtonRN
                        style={styles.rewardContainer}
                        data={RadioData}
                        initial={1}
                        box={false}
                        textStyle={styles.questionText}
                        textColor="black"
                        circleSize={13}
                        selectedBtn={(e) => { setMore(e === "yes"); console.log(e) }}
                    />
                </View>
                <View style={styles.dropDownContainer}>
                    <Text style={styles.questionText}>Did it make you feel happy?</Text>
                    <RadioButtonRN
                        style={styles.rewardContainer}
                        data={RadioData}
                        initial={1}
                        box={false}
                        textStyle={styles.questionText}
                        textColor="black"
                        circleSize={13}
                        selectedBtn={(e) => { setHappy(e === "yes"); console.log(e) }}
                    />

                </View>
                <View style={styles.inputContainerStyle}>
                    <Text style={styles.questionText}>any suggestions?</Text>
                    <TextInput
                        maxLength={250}
                        label="Discribe"
                        value={paragraph}
                        onChangeText={(txt) => { setParagraph(txt); }}
                        autoCapitalize="none"
                        multiline={true}
                        mode="outlined"
                        placeholder="your suggestion"
                        numberOfLines={3}
                        autoCorrect={false}
                        style={styles.inputTextStyle}

                    />
                </View>

                <View style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <ChallengeButton
                        title="SUBMIT"
                        borderRadius={15}
                        height={45}
                        textColor='white'
                        disabled={false}
                        onPress={() => {



                            submit()

                        }}
                        isLoading={isLoading}
                    ></ChallengeButton>
                </View>


            </ScrollView>


        </Bg>

    );
};

Review.navigationOptions = {


    headerShown: false
}


const styles = StyleSheet.create({
    inputTextStyle: {
        flex: 1,
        width: '100%',
        height: 150,
        textAlignVertical: 'top',
        borderColor: '#A4A3A1',
        borderColor: global.DARK_GREY,
        borderWidth: 1,
        padding: 10,
        borderRadius: 13,
        paddingVertical: 5,
        fontFamily: global.MEDIUM,

        backgroundColor: '#FAF8F9',

        marginVertical: 5

    },
    totalPoints: {
        color: "#FBBE30",
        fontFamily: global.GOLDEN_FONT,
        fontSize: 30
    },
    text: {
        color: "white",
        fontFamily: global.MEDIUM,
        textAlign: 'left',
    },
    questionText: {
        color: "black",
        fontFamily: global.MEDIUM,
        fontSize: 14

    },
    rewardContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 10,
        padding: 5,
        marginLeft: 10

    },
    ratingContainer: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 10,
        padding: 5,
        marginLeft: 10
    },

    dropDownContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',

        padding: 5,
        paddingHorizontal: 20,

        borderBottomWidth: 1,


    },
    inputContainerStyle: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
        padding: 5,
        paddingHorizontal: 20,

        borderBottomWidth: 1,


    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0,

    }
});

export default Review;
