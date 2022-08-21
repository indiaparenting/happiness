import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';



const SocialIcon = ({ name, icon, height, width }) => {
    const exampleImageUri = Image.resolveAssetSource(icon).uri
    console.log(exampleImageUri)
    return (
        <TouchableOpacity>
            <View style={styles.SoicalIconContainer}>
                <Image style={[styles.SocialLogo, { height: height, width: width }]} source={icon} resizeMode="contain"
                    resizeMethod="resize" />

            </View>
        </TouchableOpacity>
    );
};
SocialIcon.defaultProps = {
    height: 50, width: 50,
}

const styles = StyleSheet.create({
    SocialLogo: {
        height: 50, width: 50,
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 25
    },
    SoicalIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'white',
        height: 50,
        width: 50,
        borderRadius: 25,

        borderColor: '#ddd',


        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowColor: 2,
        elevation: 4,
    },
    SocialName: {
        fontSize: 12,
        flex: 1,
        textAlign: 'center',
        marginTop: -5

    }
});

export default SocialIcon;
