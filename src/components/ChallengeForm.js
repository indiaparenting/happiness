import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';

import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'

import RoundedCard from './Cards/RoundedCard';
import RectangleCard from './Cards/RectangleCard';


import ChallengeButton from './Buttons/ChallengeButtons';
import { Context as PostContext } from '../context/PostContext';
import Spacer from '../components/Spacer'
import Congratulations from './Challenges/CongatulationModal'
import { text as textIcon, image as imageIcon, video as videoIcon, congrates } from '../Imprter/ChallengeImporter'

import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import UnderLine from './Auth/UnderLine'


const TextValidator = (txt) => {
    console.log(txt)
    if (txt.trim().length >= 6) {
        return false;

    }

    return true;
}


const ChallengeForm = ({ navigation, data }) => {

    const { state, createPost, uploadFile } = useContext(PostContext);

    const [isModal, setModal] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const [showTip, SetShowTip] = useState(false);
    const [paragraph, setParagraph] = useState('');

    const [checked, setChecked] = useState('video');

    const [isDisabled, setIsDisabled] = useState(true);


    const OnSuccess = (val) => {
        setModal(val)
        navigation.goBack();
        navigation.navigate("Review", data);
    }



    const { _id, title, uri, date, status, discription, challengeTip, videoUrl } = data;
    const [image, setImage] = useState(null);

    const submit = async (file) => {
        setLoading(true);
        console.log('Upload' + paragraph + _id)
        const result = await createPost({ content: paragraph, task_id: _id, file: file })
        console.log(result);
        console.log("testing 15");
        if (result) {
            setModal(true);
        }

        setLoading(false);

    }
    const checkFileSize = async (fileURI) => {
        const fileSizeInBytes = await FileSystem.getInfoAsync(fileURI);
        return fileSizeInBytes;
    };

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);



    const handleImagePicked = async (pickerResult) => {
        try {


            if (pickerResult.cancelled) {
                alert('Upload cancelled');
                return;
            } else {
                /*
                                const fileBase64 = await FileSystem.readAsStringAsync(pickerResult.uri, {
                                    encoding: FileSystem.EncodingType.Base64,
                                });
                */

                const fileSize = await checkFileSize(pickerResult.uri);
                if (fileSize.size && fileSize.size < 20000000) {
                    setLoading(true);
                    
                    const result = await uploadFile({ content: paragraph, task_id: _id, file: pickerResult });
                    if (result) {
                        setModal(true)
                    }
                    setLoading(false);
                } else {
                    alert('Upload cancelled,file size should be less than 20MB');
                    return;
                }


            }
        } catch (e) {
            console.log(e);
            alert('Upload failed');
        }
    };

    const pickImage = async (type) => {
        console.log('Picking image' + type);

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: type === "image" ? ImagePicker.MediaTypeOptions.Images : ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        result.type = type;

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
            await handleImagePicked(result);
        }
    };


    return (
        <View style={{ flex: 1, marginTop: -50, width: '100%' }}>


            <ScrollView>
                <RoundedCard borderRadius={20} justifyContent={'center'}>

                    <View style={styles.headerStyle}>

                        <Text style={styles.headerTextStyle}>Complete Your Challenge by Posting Proof</Text>
                        
                        <Spacer marginVertical={-2}></Spacer>
                        
                        <Text style={styles.discriptionTitleStyle}>
                            Challenge Title : <Text style={[styles.discriptionTextStyle]} >{title}</Text>
                        </Text>
                        <View style={styles.videoContainerStyle}>
                            <VideoPlayer
                                videoProps={{
                                    shouldPlay: true,
                                    resizeMode: 'cover',
                                    source: {
                                      uri: videoUrl,
                                    },
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
                            {/* <VideoPlayer
                                videoProps={{
                                    shouldPlay: true,
                                    resizeMode: 'cover',
                                    source: {
                                      uri: 'https://happines.fra1.digitaloceanspaces.com/Videos/courage1.mov',
                                    },
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
                            /> */}
                        </View>
                        <Spacer marginVertical={-4}></Spacer>
                        <Text style={styles.discriptionTitleStyle}>Discription : <Text style={[styles.discriptionTextStyle]} >{discription}</Text></Text>
                        



                        {challengeTip && <TouchableOpacity style={{ height: 20, borderColor: 'red', margin: 5 }}
                            onPress={() => SetShowTip(showTip ? false : true)} >
                            {showTip ?
                                <UnderLine color={global.RED_COLOR} width={1}>
                                    <Text style={[styles.headerTextStyle, { color: global.RED_COLOR }, { fontSize: 14 }]}>Hide Tips</Text>
                                </UnderLine>
                                :
                                <UnderLine color={'#4B9DFA'} width={1}>
                                    <Text style={[styles.headerTextStyle, { color: '#4B9DFA' }, { fontSize: 14 }]}>See Tips</Text>
                                </UnderLine>
                            }
                        </TouchableOpacity>

                        }


                        {showTip &&
                            <View>
                                <Spacer marginVertical={-2}></Spacer>
                                <Text style={styles.discriptionTitleStyle}>Tip : <Text style={[styles.discriptionTextStyle, { color: global.DARK_GREY }]} >{challengeTip}</Text></Text>
                            </View>
                        }

                    </View>
                </RoundedCard>




                <RectangleCard marginHorizontal={10} marginVertical={5} paddingHorizontal={5} paddingVertical={15}>
                    <View style={{ flex: 1 }}>

                        <Text style={styles.headerTextStyle}>Post Proof:</Text>
                        <Spacer marginVertical={-5}></Spacer>
                        <Text style={[styles.discriptionTextStyle, { color: global.DARK_GREY, fontSize: 14, textAlign: 'center' }]} >Select one of three options below to prove that you have completed the challenge</Text>
                        <Spacer marginVertical={-2}></Spacer>

                        <View style={styles.listContainer}>
                            <TouchableOpacity onPress={() => setChecked('video')}>
                                <RoundedCard borderRadius={10}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: 70, paddingVertical: 1 }}>
                                        <Image style={styles.icon} source={videoIcon} />
                                        <Text style={[styles.discriptionTitleStyle, { color: global.DARK_GREY, fontSize: 9, }]} >Upload video</Text>
                                        <Text style={[styles.discriptionTitleStyle, { color: global.LIGHT_GREY, fontSize: 8, marginVertical: 2 }]} >(Max 45 sec)</Text>
                                        <Text style={[styles.pointText]}>Earn 50 pts</Text>

                                    </View>
                                </RoundedCard>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setChecked('image')}>
                                <RoundedCard borderRadius={10}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: 70, paddingVertical: 1 }}>
                                        <Image style={styles.icon} source={imageIcon} />
                                        <Text style={[styles.discriptionTitleStyle, { color: global.DARK_GREY, fontSize: 9, }]} >Upload Image</Text>
                                        <Text style={[styles.discriptionTitleStyle, { color: global.LIGHT_GREY, fontSize: 8, marginVertical: 2 }]} >(Max 2 mb)</Text>
                                        <Text style={[styles.pointText]}>Earn 30 pts</Text>
                                    </View>
                                </RoundedCard>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setChecked('text')}>

                                <RoundedCard borderRadius={10}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: 70, paddingVertical: 1 }}>

                                        <Image style={styles.icon} source={textIcon} />
                                        <Text style={[styles.discriptionTitleStyle, { color: global.DARK_GREY, fontSize: 9, }]} >Upload Text</Text>
                                        <Text style={[styles.discriptionTitleStyle, { color: global.LIGHT_GREY, fontSize: 8, marginVertical: 2 }]} >(Max 250 words)</Text>
                                        <Text style={[styles.pointText]}>Earn 20 pts</Text>
                                    </View>
                                </RoundedCard>
                            </TouchableOpacity>

                        </View>

                        <Spacer marginVertical={-2}></Spacer>

                        {checked === 'video' &&
                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    maxLength={250}
                                    label="Discribe"
                                    value={paragraph}
                                    onChangeText={(txt) => { setParagraph(txt); setIsDisabled(TextValidator(txt)) }}
                                    autoCapitalize="none"
                                    multiline={true}
                                    mode="outlined"
                                    placeholder="Discribe here and then upload video"
                                    numberOfLines={3}
                                    autoCorrect={false}
                                    style={styles.inputTextStyle}

                                />
                                <Text style={styles.inputAlert}>(*video over 45 seconds will be disqualified)</Text>
                                <View style={{ margin: 5 }}>
                                    <ChallengeButton
                                        title="CHOOSE VIDEO"
                                        borderRadius={15}
                                        height={45}
                                        isLoading={isLoading}
                                        textColor='white'
                                        onPress={() => {

                                            if (isDisabled) {
                                                alert("Please describe in detail about this challenge,with min character 20 and max character 250 and then upload image");
                                                return;
                                            }


                                            pickImage("video")
                                        }}
                                        disabled={false}
                                    ></ChallengeButton>
                                </View>

                            </View>

                        }

                        {checked === 'image' &&
                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    maxLength={250}
                                    label="Discribe"
                                    value={paragraph}
                                    onChangeText={(txt) => { setParagraph(txt); setIsDisabled(TextValidator(txt)) }}
                                    autoCapitalize="none"
                                    multiline={true}
                                    mode="outlined"
                                    placeholder="Please describe in detail about this challenge"
                                    numberOfLines={3}
                                    autoCorrect={false}
                                    style={styles.inputTextStyle}

                                />
                                <Text style={styles.inputAlert}>(*image size shoul not be over 2MB seconds )</Text>
                                <View style={{ margin: 5 }}>
                                    <ChallengeButton
                                        title="CHOOSE PHOTO"
                                        isLoading={isLoading}
                                        textColor='white'
                                        borderRadius={15}
                                        height={45}
                                        disabled={false}
                                        onPress={() => {
                                            if (isDisabled) {
                                                alert("Please describe in detail about this challenge,with min character 20 and max character 250, then upload proof")
                                                return;
                                            }
                                            pickImage("image")
                                        }}
                                    ></ChallengeButton>
                                </View>
                            </View>}
                        {checked === 'text' &&
                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    maxLength={250}
                                    label="Discribe"
                                    value={paragraph}
                                    onChangeText={(txt) => { setParagraph(txt); setIsDisabled(TextValidator(txt)) }}
                                    autoCapitalize="none"
                                    multiline={true}
                                    mode="outlined"
                                    placeholder="Please describe in detail about this challenge"
                                    numberOfLines={3}
                                    autoCorrect={false}
                                    style={styles.inputTextStyle}

                                />
                                <View style={{ margin: 5 }}>
                                    <ChallengeButton
                                        title="SUBMIT"
                                        borderRadius={15}
                                        height={45}
                                        textColor='white'
                                        disabled={false}
                                        onPress={() => {


                                            if (isDisabled) {
                                                alert("Please describe in detail about this challenge,with min character 20 and max character 250")
                                                return;
                                            }

                                            submit()

                                        }}
                                        isLoading={isLoading}
                                    ></ChallengeButton>
                                </View>
                            </View>
                        }
                    </View>

                </RectangleCard>

            </ScrollView>
            <Congratulations scaleAnimationModal={isModal} setModal={OnSuccess}></Congratulations>
        </View>


    );
};



const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',

    },
    videoStyle: {
        height: 250,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',       
    },
    videoContainerStyle: {
        height: 250,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        backgroundColor: 'grey'
    },
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
        fontSize: 16,
        fontFamily: global.BOLD,
        color: global.RED_COLOR,
        textAlign: 'center',
        


    },
    headerStyle: {
        /* alignItems: 'center', */
        justifyContent: 'center',
        padding: 10,
        paddingHorizontal: 0
    },
    discriptionTitleStyle: {
        fontSize: 14,
        fontFamily: global.BOLD,
        color: global.DARK_GREY,
        textAlign: 'left',
    },
    discriptionTextStyle: {
        fontSize: 14,
        fontFamily: global.MEDIUM,
        color: global.MEDIUM_GREY,
        textAlign: 'left'
    },
    inputAlert: {
        fontSize: 13,
        fontFamily: 'Montserrat_400Regular',
        marginVertical: 8
    },
    pointText: {
        fontSize: 13,
        color: global.RED_COLOR,
        fontSize: 7,
        fontFamily: global.SEMIBOLD,
        marginBottom: 5
    },

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
    },
    inputContainerStyle: {
        flex: 1,
        minHeight: 120, width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    }
});

export default ChallengeForm;