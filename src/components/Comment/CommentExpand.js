import React from 'react';
import { View, StyleSheet ,Image,Text,FlatList} from 'react-native';
import { commentIcon } from '../../Imprter/LoginAssets';




const CommentExpand = ({ navigation, commentList }) => {

  
    return (
        <View style={styles.Container}>
            <Image style={styles.image} source={{uri:commentIcon} } />
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
        
    }

});

export default CommentExpand;
