import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width
import * as ScreenOrientation from 'expo-screen-orientation'
import { Video } from 'expo-av'
import { setStatusBarHidden } from 'expo-status-bar'
import VideoPlayer from 'expo-video-player'


import CardSection from './CardSection';
import Card from './Card';



import CommentList from './Comment/CommentList';
import ReportModal from './Challenges/ReportModal';


import { arrow, lickIcon, commentIcon } from '../Imprter/ProfileImporter'
import { navigate } from '../navigationRef';

import PostReactionButton from './Comment/PostReactionButton';
import InViewPort from "@coffeebeanslabs/react-native-inviewport";

import { Context as PostContext } from '../context/PostContext';

import TheeDotPopUp from '../components/TheeDotPopUp'

const prefixVideoUrl = (videoUrl) => {


    if (!videoUrl) {
        return null;
    }

    if (videoUrl.includes("https://")) {
        return videoUrl;
    }




    return "https://" + videoUrl
}


const AlbumDetail = ({ albumData, index, navigation, extraOption }) => {


    const [isVisible, setModal] = React.useState(false);

    const [inFullscreen, setInFullsreen] = React.useState(false)

    const { _id, user, task, imageUrl, content, videoUrl, likes, createdAt } = albumData;



    const video = React.useRef(null);

    const [status, setStatus] = React.useState({});
    const [like, SetLike] = React.useState(false);
    const [likeCount, setLikeCount] = React.useState(0);
    const [commentExpand, SetCommentExpand] = React.useState(false);
    const [videoVisible, setVideoVisible] = React.useState(false);

    const { likePost, fetchLikes, state } = useContext(PostContext);



    const checkVideoVisible = (isVideoVisible) => {

        setVideoVisible(isVideoVisible);


    }


    const likeAction = async () => {
        const data = await likePost({ postId: _id });
        console.log("likeAction= " + _id + "  " + data);
        if (data) {

            setLikeCount(data.count);
            SetLike(data.liked);
        }
    }


    const ViewAction = async () => {
        navigate('ViewPost', { albumData })

    }

    const fetch = () => {


        const getLikes = async () => {
            const data = await fetchLikes({ postId: _id });
            console.log("getLikes= " + _id + "  " + data);
            if (data) {
                setLikeCount(data.count);
                SetLike(data.liked);
            }
        }
        getLikes();
    }

    useEffect(() => {
        let isMounted = true;

        const getLikes = async () => {
            const data = await fetchLikes({ postId: _id });

            if (!isMounted) {

                return;
            }
            //     console.log("getLikes= " + _id + "  " + data);
            if (data) {
                setLikeCount(data.count);
                SetLike(data.liked);
            }
        }
        getLikes();

        return () => {
            isMounted = false;
            setVideoVisible(false);
        }


    }, [state.posts]);





    return (
        <Card>

            {index === 0 && CompletedChallengeHeader()}


            {TopHeader({ user, task, postId: _id, ViewAction, extraOption, setModal })}

            {!extraOption ? <View>
                {content &&
                    <CardSection>
                        <Text style={styles.completedStyle}>{content}</Text>
                    </CardSection>
                }
                {imageUrl &&
                    <CardSection>
                        <Image style={styles.imageStyle} source={{ uri: imageUrl }} />
                    </CardSection>
                }
                {videoUrl &&



                    <CardSection>
                        <InViewPort onChange={(isVideoVisible) => checkVideoVisible(isVideoVisible)}>
                        </InViewPort>

                        <View style={styles.videoContainerStyle}>



                            <VideoPlayer
                                videoProps={{
                                    shouldPlay: videoVisible,
                                    resizeMode: Video.RESIZE_MODE_COVER,
                                    source: {
                                        uri: prefixVideoUrl(videoUrl),
                                    },
                                    ref: video,
                                    isLooping: true
                                }}
                                icon={{
                                    play: <Text style={{ color: '#FFF', padding: 10, }}>PLAY</Text>,
                                    pause: <Text style={{ color: '#FFF', padding: 10, }}>PAUSE</Text>,
                                }}

                                slider={{
                                    visible: false,
                                }}
                                fullscreen={{
                                    visible: false,
                                }}
                                timeVisible={false}

                                style={styles.videoStyle}
                                isLooping


                            />


                        </View>
                    </CardSection>

                }
            </View> :

                <View>
                    {!imageUrl && !videoUrl && content &&
                        <CardSection>
                            <Text style={styles.completedStyle} >{content}</Text>
                        </CardSection>
                    }
                    {imageUrl &&
                        <CardSection>
                            <Image style={styles.imageStyle} source={{ uri: imageUrl }} />
                        </CardSection>
                    }
                    {videoUrl &&




                        <CardSection>
                            <InViewPort onChange={(isVideoVisible) => checkVideoVisible(isVideoVisible)}>
                            </InViewPort>

                            <View style={styles.videoContainerStyle}>



                                <VideoPlayer
                                    videoProps={{
                                        shouldPlay: videoVisible,
                                        resizeMode: Video.RESIZE_MODE_COVER,
                                        source: {
                                            uri: prefixVideoUrl(videoUrl),
                                        },
                                        ref: video,
                                        isLooping: true
                                    }}
                                    icon={{
                                        play: <Text style={{ color: '#FFF', padding: 10, }}>PLAY</Text>,
                                        pause: <Text style={{ color: '#FFF', padding: 10, }}>PAUSE</Text>,
                                    }}

                                    slider={{
                                        visible: false,
                                    }}
                                    fullscreen={{
                                        visible: false,
                                    }}
                                    timeVisible={false}

                                    style={styles.videoStyle}
                                    isLooping


                                />


                            </View>
                        </CardSection>

                    }
                </View>

            }




            {ReactionButtons(likeCount, like, () => { setLikeCount(like ? likeCount - 1 : likeCount + 1); likeAction(); SetLike(like ? false : true); }, () => { SetCommentExpand(commentExpand ? false : true) })}

            {commentExpand &&
                <CardSection>
                    <CommentList postId={_id} />
                </CardSection>
            }

            {isVisible && <ReportModal postId={_id} isVisible={isVisible} setModal={setModal}></ReportModal>}

        </Card>)
};


const TopHeader = ({ user, task, postId, ViewAction, extraOption, setModal }) => {

    if (!user || !task || !postId) {
        return null;

    }

    const uri = user.profile_photo;

    return (
        <CardSection>
            {uri && <View style={styles.thumbnailContainerStyle}>
                <Image style={styles.avatarStyle} source={{ uri: uri }}></Image>
            </View>}
            <View style={styles.headerStyle}>

                <Text style={styles.headerTextStyle}>{user.name}</Text>
                <Text style={styles.completedStyle}>has completed the challenge - <Text style={styles.titleStyle}>"{task.title}"</Text></Text>

            </View>

            {extraOption && <TheeDotPopUp setModal={setModal} postId={postId} postUser={user} ViewAction={ViewAction}></TheeDotPopUp>}
        </CardSection>);
};

/*


*/

const CompletedChallengeHeader = () => {

    return (
        <CardSection>

            <View style={styles.completedChallengeContainer}>
                <Text style={styles.completedChallengeStyle}>Completed Challenge</Text>
                <View style={styles.arrowContainerStyle}>
                    <Image style={styles.aarowImageStyle} source={arrow}></Image>
                </View>
            </View>

        </CardSection>);
};

const ReactionButtons = (likes, isLike, likeAction, CommentAction) => {

    return (
        <CardSection>
            <View style={styles.ReactionIconContainer} >
                <PostReactionButton marginBottom={6} title={likes} tintColor={isLike ? '#6D6EF9' : 'black'} icon={lickIcon} action={likeAction} />
                <PostReactionButton title={"Comment"} icon={commentIcon} action={CommentAction} />

            </View >
        </CardSection>
    )

}


AlbumDetail.defaultProps = {

    extraOption: true,
    index: -1


}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        flex: 1,
        marginRight: 1,
        marginTop: 2,


    }, completedChallengeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
        marginRight: 1,
        marginTop: 5,
        alignItems: 'center'
    },
    completedChallengeStyle: {
        fontSize: 20,
        color: '#5b5858',

        fontFamily: 'Montserrat_700Bold',
    }

    , headerTextStyle: {
        fontSize: 15,
        color: '#4E4E4C',

        fontFamily: 'Montserrat_700Bold',
    }, titleStyle: {
        fontSize: 14,
        color: '#C50201',

        fontFamily: global.SEMIBOLD

    }, completedStyle: {

        fontSize: 14,
        color: '#4c4c4b',

        fontFamily: global.MEDIUM
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

        paddingRight: 4,

    },
    aarowImageStyle: {
        height: 30,
        width: 30,
        borderRadius: 15
    },
    arrowContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0,
        marginRight: 10,

        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: global.RED_COLOR,

    },
    imageStyle: {
        height: 250,
        flex: 1,
        width: null,
        borderRadius: 25,
    },
    videoStyle: {
        height: 200,

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',


        borderRadius: 25,

    },
    videoContainerStyle: {
        height: 250,

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,


        backgroundColor: 'black'
    },
    ReactionIconContainer: {



        flex: 1,
        flexDirection: 'row',
        marginLeft: -20


    }
});


export default AlbumDetail;
