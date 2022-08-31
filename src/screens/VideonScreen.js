import React, { useContext, useEffect, Component, useState, useMemo } from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView, Image, Animated, ScrollView, Dimensions, StatusBar, Modal } from 'react-native';
import moment from 'moment-timezone';
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
import { mainAxios, } from "../api/tracker";
/* faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
    return {
        key: faker.random.uuid(),
        image: `https://randomuser.me/api/portraits/${faker.helpers.randomize(['women', 'men'])}/${faker.random.number(60)}.jpg`,
        name: faker.name.findName(),
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
    };
}); */
/* const tagsData = [
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
    {
        id: 13,
        valueName: 'Finale'
    },
]; */
const _colors = {
    active: '#FCD259ff',
    inactive: '#FCD25900'
}
const _spacing = 8;
const BG_IMG = 'https://img.pixers.pics/pho_wat(s3:700/FO/56/35/14/62/700_FO56351462_5530f552b11125bf2ab89b4fa5b55d5a.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-abstract-red-background.jpg.jpg';
const SPACING = 8;
const AVATAR_SIZE = 110;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const ValuesScreen = ({ navigation }) => {
   
    //let newDate = moment(date).tz('Asia/Calcutta').format(dateFormate2);
    var now = moment().tz('Asia/Calcutta').format('YYYY-MM-DD');
    
    const [fullValuesVideo, setFullValueVideo] = useState([]);
    const [tagsData, settagsData] = useState([]);
    const [status, setStatus] = useState(2);
    const [vData, setvVideoUrl] = useState([]);
    const onTagClick = (val) => () => {
        console.log("onTagClick ", val);
        setStatus(val);
    }
    const filteredList = useMemo(() => {
        console.log("filteredList", status);
        if (status < 0) return fullValuesVideo
        return fullValuesVideo.filter(item => status == item.valuesID) 
    }, [status, fullValuesVideo]);
    
    const [modalFlag, setModalFlag] = useState(false);
    const onShowModal = (val) => () => {
        setvVideoUrl(val);
        setModalFlag(!modalFlag);
    }
    const ModalClose = () => {
        console.log("u called!");
        setModalFlag(!modalFlag);
    }

    const scrollY = React.useRef(new Animated.Value(0)).current;

    
    const fetchVideos = async () => {
        try {
            const res = await mainAxios.get("/tasks/vvideos");
            const vdata = await res;
            setFullValueVideo(vdata.data);    
        } catch (error) {
            console.log("newnew error",error);         
        }
        
        // const response = await mainAxios.get("/tasks/vvideos")
        //     .then(async (response) => {
        //         const json = await response.data;
        //         console.log("get task ", json); 
        //         setFullValueVideo(json);
        //         //console.log("get task 22", fullValuesVideo); 
        //     })
        //     .catch(error => {
        //         console.log(error);                
        //     });
    }
    const fetchValues = async () => {
        try {
            const res = await mainAxios.get("/tasksbank/getvaluesdates");
            const vdata = await res;
            console.log("vdata ==== ===3", vdata.data.data);
            settagsData(vdata.data.data);    
        } catch (error) {
            console.log("error >>>>>>> >>>>>> ",error);
        }       
       
    }
    useEffect(() => {
        fetchValues();
        fetchVideos();
      }, []);

    return (
        <Bg top={200} hasBackCard={false} navigation={navigation}>            
            <View style={{ flex: 1, paddingTop:4}}>
                <Image source={{ uri: BG_IMG }} style={StyleSheet.absoluteFillObject} blurRadius={80} />
                <ModalBox mFlag={modalFlag} func={ModalClose} vData={vData} />
                <FlatList
                    style={{ flexGrow: 0,paddingBottom:5 }}
                    data={tagsData}
                    keyExtractor={(item) => item.valuesID.toString}
                    contentContainerStyle={{ paddingLeft: _spacing }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({ item, index: findex }) => {
                        const idd = item.valuesID.toString();
                        const newDate = moment(item.endDate).tz('Asia/Calcutta').format('YYYY-MM-DD');
                        const msDiff = new Date(item.endDate).getTime() - new Date().getTime(); 
                        const daysTill = Math.floor(msDiff / (1000 * 60 * 60 * 24));
                        return (<TouchableOpacity onPress={onTagClick(idd)} disabled={daysTill > 0? true : false} >
                            <View style={ daysTill > 0? styles.topButtonFadeStyle : styles.topButtonActiveStyle}>
                                <Text style={{ color: '#36303F', fontWeight: '700'  }}>
                                    {item.valuesName}
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
                    contentContainerStyle={{ padding: SPACING, paddingTop: StatusBar.currentHeight || 15 }}
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
                            <TouchableOpacity onPress={onShowModal(item)}>
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
                                    <Image source={{ uri: item.videothumbnail }} style={{ width: AVATAR_SIZE, height: AVATAR_SIZE, marginRight: SPACING / 2 }} />
                                    <View style={{ flexGrow:1,flexDirection:"column",width:0 }}>
                                        <Text style={{ fontSize: 16, opacity: .7 }}>{item.videoTitle}</Text>
                                    </View>
                                </Animated.View>
                            </TouchableOpacity>
                        )
                    }
                    }
                />
            </View>
        </Bg>
    )
}
ValuesScreen.navigationOptions = {
    headerShown: false
}
export default ValuesScreen;
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
    topButtonActiveStyle: { 
        marginRight: _spacing, 
        padding: _spacing, 
        borderWidth: 1, 
        borderColor: '#eee', 
        backgroundColor: '#fff', 
        borderRadius: 10,
        shadowRadius: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        }, shadowOpacity: .3,  
    },
    topButtonFadeStyle: { 
        marginRight: _spacing, 
        padding: _spacing, 
        borderWidth: 1, 
        borderColor: '#eee', 
        backgroundColor: '#E0E1E4', 
        borderRadius: 10,
        shadowRadius: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        }, shadowOpacity: .3,  
    }
});








// import React, { useContext, useEffect, useState, useMemo } from 'react';
// import { View, StyleSheet, Text, Button, FlatList, Animated, Image, ScrollView, Dimensions, StatusBar, Modal } from 'react-native';
// import ChallengCard from '../components/ChallengeCard';
// //import { Context } from '../context/ValuesContext';
// import Bg from '../components/App/Bg';
// import ChallengeHeaderCard from '../components/header/ChallengeHeaderCard';
// import ShiftedCard from '../components/App/ShitedCard';
// import { navigate } from "../navigationRef";
// import ModalBox from '../components/ModalBox';

// import Seperator from '../components/Cards/Seperator';
// import { mainAxios, } from "../api/tracker";
// import { TouchableOpacity } from 'react-native-gesture-handler';
// const tagsData = [
//     {
//         id: 0,
//         valueName: 'Intro'
//     },
//     {
//         id: 1,
//         valueName: 'Helpfulness'
//     },
//     {
//         id: 2,
//         valueName: 'Love'
//     },
//     {
//         id: 3,
//         valueName: 'Courage'
//     },
//     {
//         id: 4,
//         valueName: 'Charity'
//     },
//     {
//         id: 5,
//         valueName: 'Kindness'
//     },
//     {
//         id: 6,
//         valueName: 'Honesty'
//     },
//     {
//         id: 7,
//         valueName: 'Respectfulness'
//     },
//     {
//         id: 8,
//         valueName: 'Friendship'
//     },
//     {
//         id: 9,
//         valueName: 'Forgiveness'
//     },
//     {
//         id: 10,
//         valueName: 'Peacefulness'
//     },
//     {
//         id: 11,
//         valueName: 'Generosity'
//     },
//     {
//         id: 12,
//         valueName: 'Gratitude'
//     },
// ];
// const _colors = {
//     active: '#FCD259ff',
//     inactive: '#FCD25900'
// }
// const _spacing = 10;
// const BG_IMG = 'https://img.pixers.pics/pho_wat(s3:700/FO/56/35/14/62/700_FO56351462_5530f552b11125bf2ab89b4fa5b55d5a.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-abstract-red-background.jpg.jpg';
// const SPACING = 10;
// const AVATAR_SIZE = 110;
// const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;
// const ValuesScreen = ({ navigation }) => {

//     const [fullValuesVideo, setFullValueVideo] = useState([]);
//     /* const { fetchTaskss, state, fetchTaskStatuss} = useContext(Context);


//     const fetch = () => {
//         const getTask = async () => {
//             await fetchTaskss();

//         }
//         getTask();

//     }
//  */
//     const [status, setStatus] = useState('0');
//     const filteredList = useMemo(() => {
//         if (status === 'NONE') return fullValuesVideo
//         return fullValuesVideo.filter(item => status === item.valueID)
//     }, [status, fullValuesVideo]);

//     const onTagClick = (val) => () => {
//         setStatus(val);
//     }
//     const [modalFlag, setModalFlag] = useState(false);
//     const onShowModal = (val) => () => {
//         setModalFlag(!modalFlag);
//     }
//     const ModalClose = () => {
//         setModalFlag(!modalFlag);
//     }

//     const scrollY = React.useRef(new Animated.Value(0)).current;
//     const fetchVideos = async () => {
//         const response = await mainAxios.get("/tasks/vvideos")
//             .then(async (response) => {
//                 await response;
//                 //data = response.data;
//                 console.log("get task ", response);
//                 setFullValueVideo(response);
//                 // dispatch({ type: "add", payload: response.data });
//                 // return data;

//             })
//             .catch(error => {
//                 console.log(error);

//                 // const message = error.response.data.message ?
//                 //     (!error.response.data.message.errors ? error.response.data.message : "Something went wrong with sign in") : "Something went wrong with sign in"

//                 //     ;
//                 // dispatch({
//                 //     type: "add_error",
//                 //     payload: message,
//                 // });

//                 // return null;
//             });
//     }
//     fetchVideos();


//     return (
//         <Bg top={200} hasBackCard={false} navigation={navigation}>
//             <View style={{ flex: 1, backgroundColor: '#fff' }}>
//                 <Image source={{ uri: BG_IMG }} style={StyleSheet.absoluteFillObject} blurRadius={80} />
//                 <ModalBox mFlag={modalFlag} func={ModalClose} />
//                 <FlatList
//                     style={{ flexGrow: 0 }}
//                     data={tagsData}
//                     keyExtractor={(item) => item.id}
//                     contentContainerStyle={{ paddingLeft: _spacing }}
//                     showsHorizontalScrollIndicator={false}
//                     horizontal
//                     renderItem={({ item, index: findex }) => {
//                         const idd = item.id.toString();
//                         return (<TouchableOpacity onPress={onTagClick(idd)}>
//                             <View style={{ marginRight: _spacing, padding: _spacing, borderWidth: 2, borderColor: _colors.active, backgroundColor: _colors.inactive, borderRadius: 12 }}>
//                                 <Text style={{ color: '#36303F', fontWeight: '700' }}>
//                                     {item.valueName}
//                                 </Text>
//                             </View>
//                         </TouchableOpacity>)
//                     }}
//                 />
//                 <Animated.FlatList
//                     onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }],
//                         { useNativeDriver: true }
//                     )}
//                     data={filteredList} keyExtractor={item => item.key}
//                     contentContainerStyle={{ padding: SPACING, paddingTop: StatusBar.currentHeight || 42 }}
//                     renderItem={({ item, index }) => {
//                         const inputRange = [
//                             -1,
//                             0,
//                             ITEM_SIZE * index,
//                             ITEM_SIZE * (index + 2)
//                         ];
//                         const outputRange = [
//                             -1,
//                             0,
//                             ITEM_SIZE * index,
//                             ITEM_SIZE * (index + 1)
//                         ];
//                         const scale = scrollY.interpolate({
//                             inputRange,
//                             outputRange: [1, 1, 1, 0],
//                         })
//                         const opacity = scrollY.interpolate({
//                             inputRange: outputRange,
//                             outputRange: [1, 1, 1, 0],
//                         })
//                         return (
//                             <TouchableOpacity onPress={onShowModal(0)}>
//                                 <Animated.View style={{
//                                     flexDirection: 'row', padding: SPACING, margin: SPACING, backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 12,
//                                     shadowColor: "#000",
//                                     shadowOffset: {
//                                         width: 0,
//                                         height: 10
//                                     }, shadowOpacity: .3,
//                                     shadowRadius: 10,
//                                     opacity,
//                                     transform: [{ scale }]

//                                 }} >
//                                     <Image source={{ uri: item.videoUrl }} style={{ width: AVATAR_SIZE, height: AVATAR_SIZE, marginRight: SPACING / 2 }} />
//                                     <View style={{ flexWrap: 'wrap' }}>
//                                         <Text style={{ fontSize: 16, opacity: .7 }}>{item.description}</Text>
//                                         <Text style={{ fontSize: 14, opacity: .8, color: '#0099cc' }}>{item.valueID}</Text>
//                                         {/* 
//                             <Text style={{ fontSize: 20, fontWeight: '700' }}>{item.name}</Text>
                            
//                             <Text style={{ fontSize: 14, opacity: .8, color: '#0099cc' }}>{item.email}</Text> */}
//                                     </View>
//                                 </Animated.View>
//                             </TouchableOpacity>
//                         )
//                     }
//                     }
//                 />
//             </View>

//         </Bg>
//     );
// };

// ValuesScreen.navigationOptions = {
//     headerShown: false
// }
// const styles = StyleSheet.create({
//     modalView: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: '#00ffff',
//         padding: 6,
//         paddingTop: 12,
//         borderRadius: 10,
//         margin: 8,
//         marginTop: 45,
//     },
//     closeBtn: {
//     },
//     videoStyle: {
//         height: 250,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     videoContainerStyle: {
//         height: 250,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 2,
//         backgroundColor: 'grey'
//     },
// });
// export default ValuesScreen;