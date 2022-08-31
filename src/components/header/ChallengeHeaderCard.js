import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity } from 'react-native';




import VerticalRoundedCard from '../Cards/VerticalRoundedCard';
import { Context } from '../../context/TaskContext.js';

const WIDTH = Dimensions.get('window').width
import BottomModal from '../Challenges/BottomModal'
import WBText from '../WBText'
import UnderLine from '../Auth/UnderLine'


const demoData = {
    Title: 'say 5 things you associated with love',
    subTitle: 'Demo love challenge',
    imageUrl: 'https://picsum.photos/200/300',
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    content: 'this is demo text '
}

const ChallengeHeaderCard = ({ navigate }) => {
    const [isModal, setModal] = useState(false);


    const [statustext, setStatus] = useState("Fetching");
    const [isCompleted, setCompleted] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [data, setHeaderData] = useState(null);
    const { fetchTasks, state, fetchTaskStatus } = useContext(Context);


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






    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ConditionalRender data={data} setModal={setModal} navigate={navigate} isCompleted={isCompleted} isLoading={isLoading} statustext={statustext} />
            <BottomModal data={demoData} scaleAnimationModal={isModal} setModal={setModal}></BottomModal>

        </View>


    )
};


const ConditionalRender = ({ data, setModal, navigate, isCompleted, isLoading }) => {

    if (!data) {
        return null;

    }

    return (<VerticalRoundedCard color={'white'}>
        <View style={styles.headerStyle}>
            <Text numberOfLines={2} ellipsizeMode='tail' style={styles.headerTextStyle}> {data.monthTitle}</Text>
            <View style={{ padding: 7 }}>
                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.discriptionStyle}>You will receive a challenge every alternate day from 1st of the month to express value </Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={{ paddingHorizontal: 10 }}>

                    <TouchableOpacity >

                        <UnderLine color={'#494cf0'} width={2}>
                            <WBText

                                text={""}
                                highlight={" Read More"}
                                fontFamily={global.MEDIUM}
                                highlightTextStyle={{ color: '#494cf0' }}
                            >

                            </WBText>
                        </UnderLine>

                    </TouchableOpacity>

                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <TouchableOpacity
                        onPress={() => { setModal(true) }}

                    >
                        <UnderLine color={'#C50201'} width={2}>
                            <WBText text={""}
                                fontFamily={global.MEDIUM}
                                highlight={"See Demo"}
                            ></WBText>
                        </UnderLine>

                    </TouchableOpacity>
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
        paddingTop: 10,
        width: WIDTH * 0.93,
        paddingVertical: 15,
        paddingBottom: -5

    }, headerTextStyle: {
        fontSize: 28,
        color: '#3E9EA5',

        textAlign: 'center',
        fontFamily: 'GoldenHillsDEMO',
    },
    discriptionStyle: {
        fontSize: 14,
        color: global.DARK_GREY,

        textAlign: 'center',
        fontFamily: global.SEMIBOLD
    },
    imageContainer: {
        padding: 10
    },

    imageStyle: {
        height: 100,
        width: 100,
        borderRadius: 50

    }, subtitleTextStyle: {
        color: '#323232',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
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

        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 5,




    }
});


export default ChallengeHeaderCard;
