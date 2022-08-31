import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { RadioButton as Radio } from 'react-native-paper';

const RadioButton =({ title,value,status,onPress} ) =>{


    return(
        <View style={styles.radioContainer} >
        <Radio
            value={value}
            status={status}
            onPress={onPress}
        />
        <Text style={styles.outline}>{title}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    radioContainer: {
      
        padding:5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start', 
        flexDirection: 'row',
      
        position: 'relative',
    },outline:{
        alignItems: 'center',
        textAlignVertical: 'center'

    }

})

export default RadioButton;