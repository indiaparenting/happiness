import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';


import ChallengeViewCard from './ChallengeViewCard';
import Spacer from '../components/Spacer'
import RoundedCard from './Cards/RoundedCard';
import UnderLine from './Auth/UnderLine'

import InViewPort from "@coffeebeanslabs/react-native-inviewport";
import CardSection from './CardSection';
import Card from './Card';


import AlbumDetail from './AlbumDetail';



const ViewChallenge = ({ navigation, albumData }) => {


    const { _id: postId, user, task, imageUrl, content, videoUrl, likes, createdAt } = albumData;

    const { id, uri, name, title, albumImageUri, discription, challengeTip } = task;


    const [isLoading, setLoading] = useState(false);

    const [showTip, SetShowTip] = useState(false);



    const [videoVisible, setVideoVisible] = React.useState(false);

    const checkVideoVisible = (isVideoVisible) => {
        setVideoVisible(isVideoVisible);
    }




    return (

        <View style={{ flex: 1, marginTop: -50, width: '100%' }}>

            <ScrollView>

                <View style={{ justifyContent: 'center', marginBottom: 10, alignItems: 'center' }}>
                    <RoundedCard borderRadius={20} justifyContent={'center'}>

                        <View style={styles.headerStyle}>

                            <Text style={styles.headerTextStyle}>Challenge Completed</Text>

                            <Spacer marginVertical={-2}></Spacer>
                            <Text style={styles.discriptionTitleStyle}>Challenge Title : <Text style={[styles.discriptionTitleStyle, { color: global.DARK_GREY }]} >{title}</Text></Text>
                            <Spacer marginVertical={-4}></Spacer>
                            <Text style={styles.discriptionTitleStyle}>Discription : <Text style={[styles.discriptionTitleStyle, { color: global.MEDIUM_GREY }]} >{discription}</Text></Text>




                            {challengeTip && <TouchableOpacity style={{ height: 20, borderColor: 'red', margin: 5 }}
                                onPress={() => SetShowTip(showTip ? false : true)} >
                                {showTip ?
                                    <UnderLine color={global.RED_COLOR} width={1}>
                                        <Text style={[styles.headerTextStyle, { color: global.RED_COLOR }, { fontSize: 14 }]}>Hide Tips</Text>
                                    </UnderLine>




                                    :
                                    <UnderLine color={'#4B6DCD'} width={1}>
                                        <Text style={[styles.headerTextStyle, { color: '#4B6DCD' }, { fontSize: 14 }]}>See Tips</Text>
                                    </UnderLine>
                                }
                            </TouchableOpacity>

                            }


                            {showTip &&
                                <View>
                                    <Spacer marginVertical={-2}></Spacer>
                                    <Text style={styles.discriptionTitleStyle}>Tip : <Text style={[styles.discriptionTitleStyle, { color: global.DARK_GREY }]} >{challengeTip}</Text></Text>
                                </View>
                            }

                        </View>
                    </RoundedCard>
                </View>


                <AlbumDetail albumData={albumData} extraOption={false} />

                {false && <Card>
                    {content &&
                        <CardSection>
                            <Text >{content}</Text>
                        </CardSection>
                    }
                    {imageUrl &&
                        <CardSection>
                            <Image style={styles.imageStyle} source={{ uri: imageUrl }} />
                        </CardSection>
                    }
                    {videoUrl &&

                        <InViewPort onChange={(isVideoVisible) => checkVideoVisible(isVideoVisible)}>
                            <CardSection>
                                <View style={styles.videoContainerStyle}>
                                    <Video
                                        source={{ uri: videoUrl }}
                                        rate={1.0}
                                        ref={video}
                                        volume={1.0}
                                        isMuted={false}
                                        useNativeControls
                                        resizeMode="contain"
                                        shouldPlay={videoVisible}
                                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                                        isLooping
                                        style={styles.videoStyle}
                                    />

                                    {false && <Button
                                        title={status.isPlaying ? 'Pause' : 'Play'}
                                        onPress={() =>
                                            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                                        }
                                    />}
                                </View>
                            </CardSection>

                        </InViewPort>}

                </Card>}

            </ScrollView>
        </View>

    );
};



const styles = StyleSheet.create({
    outline: {
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
    },
    radioContainer: {
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
        flexDirection: 'row',

    }, headerTextStyle: {
        fontSize: 18
    },
    inputTextStyle: {
        flex: 1,
        width: '100%',
        height: 200,
        textAlignVertical: 'top',

        borderColor: '#ddd',
        borderWidth: 1,
        padding: 5,
        borderRadius: 15
    },
    inputContainerStyle: {
        flex: 1,
        minHeight: 200, width: '100%',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTextStyle: {
        fontSize: 16,
        fontFamily: global.BOLD,
        color: global.RED_COLOR,
        textAlign: 'center'


    },
    headerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingHorizontal: 0
    },
    discriptionTitleStyle: {
        fontSize: 13,
        fontFamily: global.SEMIBOLD,
        color: global.RED_COLOR,
        textAlign: 'left'


    }
    , titleStyle: {
        fontWeight: '700',
        color: '#D93F37'
    }, completedStyle: {
        fontWeight: '700',
    },
    avatarStyle: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0,
        marginRight: 10,
        paddingBottom: 7,
        paddingRight: 4
    },
    imageStyle: {
        height: 250,
        flex: 1,
        width: null,
        borderRadius: 25,
    },
    videoStyle: {
        height: 250,
        flex: 1,
        flexDirection: 'column',
        borderRadius: 25,
    },
    videoContainerStyle: {
        height: 200,
        flex: 1,
        flexDirection: 'column',
        borderRadius: 25,
    },
    ReactionIconContainer: {
        padding: 5,
        flex: 1,
        flexDirection: 'row',
    }
});

export default ViewChallenge;
