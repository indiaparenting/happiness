import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RectangleCard from './RectangleCard'
import { PostBulletCard } from './PostBulletCard'


function NoPostCard() {
    return (

        <View>
            <RectangleCard>
                <View style={styles.noPostCardContainer}>
                    <Text style={styles.noPostTextStyle}>{"No Completed Challenge \nStart completing the Happiness Challenges right away to double your Happiness!"}</Text>
                </View>

            </RectangleCard>

            <PostBulletCard
                data1={"Accept challenge"}
                data2={"Boost your happiness"}
                data3={"Share and inspire others"}
            ></PostBulletCard>


        </View>



    )
}

export default NoPostCard





const styles = StyleSheet.create({

    noPostCardContainer: {
        marginHorizontal: 10,
        padding: 20
    },





    bulletinContainer: {


    },

    noPostTextStyle: {

        fontSize: 14,
        color: global.MEDIUM_GREY,
        fontFamily: global.SEMIBOLD,
    },





});
