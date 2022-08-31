import React from 'react';
import { Video } from 'expo-av'
import { View, StyleSheet, Image, Text, Button } from 'react-native';


import RoundedCard from './Cards/RoundedCard';
const ChallengeViewCard = ({ data }) => {

    const { id, uri, name, title, albumImageUri, discription, videoUrl } = data;

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});


    return (
        <View style={{ flex: 1 }} >
            <RoundedCard>

                <View style={styles.headerStyle}>
                    <Text style={styles.headerTextStyle}>{name}</Text>

                    {discription &&

                        <Text >{discription}</Text>

                    }
                </View>
            </RoundedCard>
        </View>)
};


const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 5

    }, headerTextStyle: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        opacity: 0.7
    },
    avatarStyle: {
        height: 50,
        width: 50,
        borderRadius: 5
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    videoStyle: {
        height: 250,
        flex: 1,
        flexDirection: 'column'
    }
});


export default ChallengeViewCard;
