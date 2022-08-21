import React from 'react';
import { View, StyleSheet ,Image,Text} from 'react-native';
import { commentIcon } from '../../Imprter/LoginAssets';




const MainChallenge = ({ navigation, title, description}) => {

  
    return (
        <View style={styles.Container}>
            <Text style={styles.headerTextStyle}>{title}</Text>
            <Text style={styles.subtitleTextStyle}>{description}</Text>
            <Image style={styles.image} source={{uri:commentIcon} } />
            <Text style={styles.subtitleTextStyle}>{description}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    Container: {

        padding:5,
        flex:1,

    },
    image:{
        width:20,
        height:20,
        
    },title:{
        
    },headerTextStyle:{

    }

});

export default MainChallenge;
