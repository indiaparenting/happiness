import React, { useState, useContext } from 'react'

import { View, StyleSheet, Image, Text, FlatList, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import ChallengeButton from '../Buttons/ChallengeButtons';
const WIDTH = Dimensions.get('window').width
import CardSection from '../CardSection';
import { SimpleLineIcons } from '@expo/vector-icons';
import { reportElementList } from '../../Dummy/Dummy';


import { Context as AuthContext } from '../../context/AuthContext';

import { Context as PostContext } from '../../context/PostContext';

import Modal, {
    ModalTitle,
    ModalContent,
    ModalFooter,
    ModalButton,
    SlideAnimation,
    ScaleAnimation,
    BottomModal,
    ModalPortal,
} from 'react-native-modals';

const ReportModal = ({ isVisible, setModal, postId, }) => {

    const { state } = useContext(AuthContext);
    const { reportPost } = useContext(PostContext);




    const { reportList } = state





    const ReportAction = async (reportId) => {

        const data = await reportPost({ postId: postId, reportId: reportId });



    }
    return (
        <BottomModal
            visible={isVisible}
            onTouchOutside={() => setModal(false)}
            height={0.9}
            width={1}
            onSwipeOut={() => setModal(false)}

        >

            <ModalContent
                style={{
                    flex: 1,
                    backgroundColor: 'fff',

                }}
            >

                <TouchableOpacity style={{ position: 'absolute', top: 5, right: 5 }} onPress={() => { setModal(false) }}>
                    <SimpleLineIcons name="close" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.FAQHeading}>Report</Text>
                <View style={styles.container}>
                    <Text style={styles.QuestionContent}>
                        Why are you reporting this post?
                    </Text>
                    <Text style={styles.Content}>
                        your report is anonymous, except if you're reporting an intellectual property infringement. if someone is in immediate danger,call local emergency service{" "}
                    </Text>



                    <FlatList
                        style={styles.ScrollView}
                        data={reportList}
                        initialNumToRender={7}
                        renderItem={({ item, index }) => {

                            return (
                                <ReportElement key={item._id} setModal={setModal} ReportAction={ReportAction} id={item._id}>{item.Title}</ReportElement>
                            )
                        }}
                        keyExtractor={(item) => item._id.toString()}
                        listKey={(item) => item._id.toString()}
                    >

                    </FlatList>

                </View>
            </ModalContent>
        </BottomModal>



    )
}


const ReportElement = ({ children, id, ReportAction, setModal }) => {
    return (
        <TouchableOpacity style={styles.reportContainer} onPress={() => { ReportAction(id), setModal(false) }}>
            <Text style={styles.ReportName}>{children}</Text>
        </TouchableOpacity>

    );
}

ReportModal.defaultProps = {


}

const styles = StyleSheet.create({
    reportContainer: {
        marginVertical: 10,

    },
    container: {
        flex: 1,
    },
    ScrollView: {
        paddingVertical: 10,

        width: WIDTH,
        flex: 1,

    },
    MainContainer: {
        backgroundColor: "transparent",
        width: WIDTH,
        padding: 15,
    },
    FAQHeading: {
        color: global.RED_COLOR,
        textAlign: "center",

        fontFamily: global.BOLD,
        fontSize: 21,

    },
    Heading: {
        color: "#C50201",
        textAlign: "center",
        textDecorationLine: "underline",
        fontFamily: 'Montserrat_700Bold_Italic',
        fontSize: 18,
        marginTop: 20,
    },
    QuestionContent: {
        marginTop: 20,
        fontSize: 15,
        color: "black",
        fontFamily: global.SEMIBOLD,
    },
    ReportName: {

        fontSize: 14,
        color: "black",
        fontFamily: global.SEMIBOLD,
    },
    Content: { marginTop: 5, fontSize: 13, color: "#56595A", fontFamily: global.REGULAR, },

})

export default ReportModal

