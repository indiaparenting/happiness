import React, { useContext, useEffect, Component, useState, useMemo } from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView, Image, Animated, ScrollView, Dimensions, StatusBar, Modal } from 'react-native';

import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import ShowList from '../components/ShowList';
import { Context } from '../context/ValuesContext';
import Bg from '../components/App/Bg';
import Seperator, { Line } from '../components/Cards/Seperator';
import Spacer from '../components/Spacer';
import ChallengeButton from '../components/Buttons/ChallengeButtons';
import ModalBox from '../components/ModalBox';
const { width, height } = Dimensions.get('screen');
import faker from 'faker';
import { TouchableOpacity } from 'react-native-gesture-handler';

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
    return {
        key: faker.random.uuid(),
        image: `https://randomuser.me/api/portraits/${faker.helpers.randomize(['women', 'men'])}/${faker.random.number(60)}.jpg`,
        name: faker.name.findName(),
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
    };
});
const tagsData = [
    {
        id: 0,
        valueName: 'Intro'
    },
    {
        id: 1,
        valueName: 'Helpfulness'
    },
    {
        id: 2,
        valueName: 'Love'
    },
    {
        id: 3,
        valueName: 'Courage'
    },
    {
        id: 4,
        valueName: 'Charity'
    },
    {
        id: 5,
        valueName: 'Kindness'
    },
    {
        id: 6,
        valueName: 'Honesty'
    },
    {
        id: 7,
        valueName: 'Respectfulness'
    },
    {
        id: 8,
        valueName: 'Friendship'
    },
    {
        id: 9,
        valueName: 'Forgiveness'
    },
    {
        id: 10,
        valueName: 'Peacefulness'
    },
    {
        id: 11,
        valueName: 'Generosity'
    },
    {
        id: 12,
        valueName: 'Gratitude'
    },
];
const _colors = {
    active: '#FCD259ff',
    inactive: '#FCD25900'
}
const _spacing = 10;
const BG_IMG = 'https://img.pixers.pics/pho_wat(s3:700/FO/56/35/14/62/700_FO56351462_5530f552b11125bf2ab89b4fa5b55d5a.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-abstract-red-background.jpg.jpg';
const SPACING = 10;
const AVATAR_SIZE = 110;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export default () => {
    const { fetchTasks, state, fetchTaskStatus } = useContext(Context);


    const fetch = () => {
        const getTask = async () => {
            await fetchTasks();

        }
        getTask();

    }
    /* 
    const fetch = () => {
        console.log("fetch video start")        
    }
    fetch(); */
    const [fullValuesVideo, setFullValueVideo] = useState([
        { id: 0, valueID: "0", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 1, valueID: "1", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 2, valueID: "1", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 3, valueID: "1", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 4, valueID: "1", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 5, valueID: "1", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 6, valueID: "2", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 7, valueID: "2", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 8, valueID: "2", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 9, valueID: "2", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 10, valueID: "2", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 11, valueID: "3", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 12, valueID: "3", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 13, valueID: "3", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 14, valueID: "3", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 15, valueID: "3", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 16, valueID: "4", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 17, valueID: "4", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 18, valueID: "4", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 19, valueID: "4", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 20, valueID: "4", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 21, valueID: "5", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 22, valueID: "5", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 23, valueID: "5", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 24, valueID: "5", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 25, valueID: "5", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 26, valueID: "6", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 27, valueID: "6", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 28, valueID: "6", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 29, valueID: "6", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
        { id: 30, valueID: "6", description: 'Courage (1): What are the Different Forms of Courage', videoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt05ruQqmoyym8umfONBYWZYuHaJXx_T5Isg&usqp=CAU' },
    ]);
    const [status, setStatus] = useState('0');
    const filteredList = useMemo(() => {
        if (status === 'NONE') return fullValuesVideo
        return fullValuesVideo.filter(item => status === item.valueID)
    }, [status, fullValuesVideo]);
    const onTagClick = (val) => () => {
        setStatus(val);
    }
    const [modalFlag, setModalFlag] = useState(false);
    const onShowModal = (val) => () => {        
        setModalFlag(!modalFlag);    
    }
    const ModalClose = () => {
        setModalFlag(!modalFlag);
    }
    
    const scrollY = React.useRef(new Animated.Value(0)).current;
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Image source={{ uri: BG_IMG }} style={StyleSheet.absoluteFillObject} blurRadius={80} />
            <ModalBox mFlag={modalFlag} func={ModalClose}/> 
            <FlatList
                style={{ flexGrow: 0 }}
                data={tagsData}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingLeft: _spacing }}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item, index: findex }) => {
                    const idd = item.id.toString();
                    return (<TouchableOpacity onPress={onTagClick(idd)}>
                        <View style={{ marginRight: _spacing, padding: _spacing, borderWidth: 2, borderColor: _colors.active, backgroundColor: _colors.inactive, borderRadius: 12 }}>
                            <Text style={{ color: '#36303F', fontWeight: '700' }}>
                                {item.valueName}
                            </Text>
                        </View>
                    </TouchableOpacity>)
                }}
            />
            <Animated.FlatList
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                data={filteredList} keyExtractor={item => item.key}
                contentContainerStyle={{ padding: SPACING, paddingTop: StatusBar.currentHeight || 42 }}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + 2)
                    ];
                    const outputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + 1)
                    ];
                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0],
                    })
                    const opacity = scrollY.interpolate({
                        inputRange: outputRange,
                        outputRange: [1, 1, 1, 0],
                    })
                    return (
                        <TouchableOpacity onPress={onShowModal(0)}>
                            <Animated.View style={{
                                flexDirection: 'row', padding: SPACING, margin: SPACING, backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 12,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 10
                                }, shadowOpacity: .3,
                                shadowRadius: 10,
                                opacity,
                                transform: [{ scale }]

                            }} >
                                <Image source={{ uri: item.videoUrl }} style={{ width: AVATAR_SIZE, height: AVATAR_SIZE, marginRight: SPACING / 2 }} />
                                <View style={{ flexWrap: 'wrap' }}>
                                    <Text style={{ fontSize: 16, opacity: .7 }}>{item.description}</Text>
                                    <Text style={{ fontSize: 14, opacity: .8, color: '#0099cc' }}>{item.valueID}</Text>
                                    {/* 
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>{item.name}</Text>
                            
                            <Text style={{ fontSize: 14, opacity: .8, color: '#0099cc' }}>{item.email}</Text> */}
                                </View>
                            </Animated.View>
                        </TouchableOpacity>
                    )
                }
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00ffff',
        padding: 6,
        paddingTop: 12,
        borderRadius: 10,
        margin: 8,
        marginTop: 45,
    },
    closeBtn: {
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
})