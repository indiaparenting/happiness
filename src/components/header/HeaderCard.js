import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';


import ChallengeButton from '../Buttons/ChallengeButtons';

import VerticalRoundedCard from '../Cards/VerticalRoundedCard';
import { Context } from '../../context/TaskContext.js';

const WIDTH = Dimensions.get('window').width


const HeaderCard = ({ navigate }) => {

    const [statustext, setStatus] = useState("Fetching");
    const [isCompleted, setCompleted] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [data, setHeaderData] = useState(null);
    const { fetchTasks, state, fetchTaskStatus } = useContext(Context);

    const [albumData, setAlbumData] = useState(null)
    const fetchTask = () => {
        const getTask = async () => {
            const fetchedData = await fetchTasks();

            setHeaderData(fetchedData && fetchedData.length > 1 ? fetchedData[0] : null)
            await fetch(fetchedData && fetchedData.length > 1 ? fetchedData[0] : null);

        }
        if (!data) {
            getTask();
        } else {
            fetch(data);
        }
    }




    const fetch = (task) => {

        const getStatus = async () => {

            console.log("data: " + task);
            setLoading(true);

            const result = await fetchTaskStatus({ taskId: task._id });
            if (result) {
                setStatus(result.status == "PENDING" ? "accept" : "completed")
                setCompleted(result.status != "PENDING")
                setAlbumData(result.post)
                console.log(statustext)
                setLoading(false);
            }


        }

        if (!data) {
            getStatus();
        }



    }

    useEffect(() => {
        fetchTask();



    }, [data]);






    return (<ConditionalRender data={data} navigate={navigate} albumData={albumData} isCompleted={isCompleted} isLoading={isLoading} statustext={statustext} />)
};


const ConditionalRender = ({ data, navigate, isCompleted, isLoading, albumData }) => {

    if (!data) {
        return null;

    }
    //console.log("Data ",data);
    return (<VerticalRoundedCard color={'white'}>
        <View style={styles.headerStyle}>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ padding: 3, width: '100%', }}>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={styles.headerTextStyle}>{data.monthTitle}</Text>
                </View>
                <View style={{ padding: 5, width: '100%', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.discriptionStyle}>Today's challenge for you is...</Text>
                </View>
                <View style={{ padding: 0, width: '100%',marginTop:10, }}>
                    <Text style={styles.subtitleTextStyle}>{data.title}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer2}>
                <View style={styles.imageBorderStyle}>
                    <Image style={styles.imageStyle} source={{ uri: data.uri }} />
                </View>
                <View style={{ padding: 5, justifyContent: 'space-evenly', margin: 15, }} >
                    <View style={{ marginBottom: 7 }}>
                        <ChallengeButton
                            borderRadius={15}
                            height={45}
                            textStyle={{ fontSize: 13, }}
                            title={isLoading ? "fetching status" : !isCompleted ? 'Take Challenge' : 'Completed'}
                            buttonColor={global.BLUE}
                            textColor='white'
                            disabled={isLoading}
                            isLoading={isLoading}
                            disabledOpacity={false}
                            onPress={() => { isCompleted ? navigate('ViewPost', { albumData }) : navigate('Challenge', data) }}
                        />
                    </View>
                    {/* <View style={{ marginTop: 7 }}>
                        <ChallengeButton
                            borderRadius={15}
                            title='Challenge List'
                            buttonColor={global.RED}
                            textColor='white'
                            height={45}
                            disabledOpacity={false}
                            textStyle={{ fontSize: 13, }}
                            onPress={() => { navigate('Challenges') }}
                        />
                    </View> */}
                </View>
            </View>
            <View style={styles.buttonContainer}> 
                <View style={{ marginBottom: 7 }}>
                    <ChallengeButton
                        borderRadius={12}
                        title={'Learn about the ' + data.value}
                        buttonColor={global.YELLOW}
                        textColor='#900C3F'
                        height={45}
                        disabledOpacity={false}
                        textStyle={{ fontSize: 14, }}
                        onPress={() => { navigate('Videos') }}
                    />
                </View>
                <View style={{ marginBottom: 7 }}>
                    <ChallengeButton
                        borderRadius={12}
                        title='Challenge List'
                        buttonColor={global.YELLOW}
                        textColor='#900C3F'
                        height={45}
                        disabledOpacity={false}
                        textStyle={{ fontSize: 14, }}
                        onPress={() => { navigate('Challenges') }}
                    />
                </View>
            </View>

        </View>
    </VerticalRoundedCard>)
}

const Card = ({ children }) => {
    return <View style={styles.Container}>
        {children}
    </View>;
};

const CardSection = ({ children }) => {

    return (
        <View style={styles.section}>{children}</View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5,
        width: WIDTH * 0.93,


    }, headerTextStyle: {
        fontSize: 28,
        color: '#3E9EA5',

        textAlign: 'center',
        fontFamily: 'GoldenHillsDEMO',
    },
    discriptionStyle: {
        fontSize: 25,
        color: '#4c4c4b',

        textAlign: 'center',
        fontFamily: 'GoldenHillsDEMO',
    },
    imageContainer: {
        padding: 10,

    },
    imageBorderStyle: {
        height: 82,
        width: 82,
        borderRadius: 67,
        borderWidth: 1,
        borderColor: global.RED_COLOR,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'

    },

    imageStyle: {
        height: 75,
        width: 75,
        borderRadius: 65,


    }, subtitleTextStyle: {
        color: global.RED_COLOR,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: global.SEMIBOLD
    },

    Container: {
        borderRadius: 15,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowColor: 2,
        elevation: 4,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    section: {
        borderRadius: 15,
        padding: 2,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        paddingHorizontal: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    buttonContainer2: {
        flexDirection: 'row',
        padding: 10,
        
        paddingBottom: 0,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});


export default HeaderCard;
