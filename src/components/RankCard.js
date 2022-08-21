import React from 'react';
import { View, StyleSheet, Image, Text, Button, TouchableOpacity } from 'react-native';

import EdgeCard from './Cards/EdgeCard';
import RectangleCard from './Cards/RectangleCard';

const RankCard = ({ data }) => {

    const { name, points, taskCompleted } = data;
    return (
        <RectangleCard marginHorizontal={10}>
            <View style={styles.container}>
                <View style={styles.nameContainer}>
                    <Text numberOfLines={2} style={styles.text}>{name}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', }}>
                    <View style={styles.numberContainerStyle}>
                        <Text style={styles.text}>{points}</Text>

                    </View>
                    <View style={styles.numberContainerStyle}>
                        <Text style={styles.text}>{taskCompleted ? taskCompleted : 0}</Text>

                    </View>
                </View>
            </View>

        </RectangleCard>)
};

const RankHeader = ({ data }) => {

    const { name, points, challengeCount } = data;
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
            <EdgeCard TopRight={16} TopLeft={16} marginHorizontal={10}>
                <View style={styles.HeaderContainer}>
                    <View style={styles.Headersection}>

                        <View style={styles.nameContainer}>
                            <Text numberOfLines={2} style={[styles.headerHeaderStyle]}>{name}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View style={[styles.numberContainerStyle]}>
                                <Text style={[styles.headerHeaderStyle]}>{points}</Text>
                            </View>
                            <View style={[styles.numberContainerStyle]}>
                                <Text style={[styles.headerHeaderStyle]}>{challengeCount}</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </EdgeCard>
        </View>

    )
};


const RankFooter = ({ data }) => {


    const { name, points, challengeCount } = data;
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -1 }}>
            <EdgeCard BottomLeft={16} BottomRight={16} marginHorizontal={10}>
                <View style={styles.footerContainer}>

                </View>
            </EdgeCard>
        </View>

    )
};


const styles = StyleSheet.create({

    text: {
        color: "#3a3a38",
        fontFamily: global.MEDIUM,
        height: '100%',
        textAlignVertical: 'center'
    },
    numberContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',



    }, headerTextStyle: {
        fontSize: 13,
        color: '#656565',
        fontFamily: global.REGULAR,
        height: '100%',
        textAlignVertical: 'center'

    },
    headerHeaderStyle: {
        fontSize: 13,
        color: '#3a3a38',
        fontFamily: global.BOLD,
        height: '100%',
        textAlignVertical: 'center'

    },

    numberTextStyle: {
        fontSize: 13,
        color: '#656565',
        fontFamily: global.REGULAR,
        height: '100%',
        alignSelf: 'center',
        textAlignVertical: 'center',
        width: 150,
        height: 50,
        justifyContent: 'center', textAlign: 'center'
    },
    nameContainer: {
        maxWidth: '80%',
        width: 150,
        height: 50,
    },
    footerContainer: {
        width: '100%',

        height: 20,
    },
    container: {
        flex: 1, flexDirection: 'row',
        height: 50,
        paddingHorizontal: 10,



    },
    HeaderContainer: {

        flexDirection: 'row',
        flex: 1,



    },
    Headersection: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        paddingHorizontal: 20,
        flex: 1,


    },


});


export { RankHeader, RankCard, RankFooter };
