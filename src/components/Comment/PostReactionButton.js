import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import Comment from './Comment';


const PostReactionButton = ({ title, marginBottom, icon, action, tintColor }) => {




    return (
        <TouchableOpacity style={styles.Container} onPress={action}>

            <Image style={[styles.image, { tintColor: tintColor }, { marginBottom: marginBottom }]} source={icon} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>

        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    Container: {


        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',


    },
    image: {
        width: 45,
        height: 45,
        resizeMode: 'contain',


    }, title: {
        textAlign: 'center',

        fontFamily: 'Montserrat_500Medium'

    }, titleContainer: {
        flexDirection: 'column',
        justifyContent: 'center',

        height: 30,
        paddingHorizontal: 2


    }

});

export default PostReactionButton;
