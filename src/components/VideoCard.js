import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import RectangleCard from './Cards/RectangleCard';

const VideoCard = ({ data }) => {
    console.log("video data", data);
    const { id, poster, url } = data;
    return (
        <View style={styles.item}>
            <Image style={styles.image} source={{uri: poster}} resizeMode='contain' />
            <View style={styles.wrapText}>
                <Text style={styles.fontSize}>Hello World Hello World Hello World Hello World </Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    fontSize: {
        fontSize: 18
    },
    image: {
        width: 120,
        height: 120
    },
    wrapText: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    item: {
        flexDirection: 'row',
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset:{
            width:0,
            height: 10
        },
        shadowOpacity: .3,
        shadowRadius: 20,
        padding:10

    }
});
/* const styles = StyleSheet.create({
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
}); */

export { VideoCard };