import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Pressable } from 'react-native';

import Loader from './Loader'


import { LinearGradient } from 'expo-linear-gradient';



const Render = ({ navigation, disabled, title, buttonColor, textColor, height, width, onPress }) => {


    return (<View>    <Pressable activeOpacity={disabled ? 0.5 : 1}
        disabled={disabled}
        onPress={onPress}
    >
        <LinearGradient
            style={[styles.Container, { height: height, width: width }]}

            colors={buttonColor} //#fbed1f //fbb034

        >
            <Text style={[styles.headerTextStyle, { color: textColor }]}>{title}</Text>


        </LinearGradient>
    </Pressable>


    </View>
    );

}

const ChallengeButton = ({ disabledOpacity, isLoading, borderRadius, textStyle, navigation, disabled, title, buttonColor, textColor, height, width, onPress, children }) => {



    return (
        <View>
            <View>

                {!isLoading && <Pressable
                    disabled={disabled}
                    onPress={onPress}

                >
                    <LinearGradient
                        style={[styles.Container, { height: height, width: width, borderRadius: borderRadius }, { opacity: disabled && disabledOpacity ? 0.5 : 1 }]}

                        colors={buttonColor} //#fbed1f //fbb034

                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[styles.headerTextStyle, { color: textColor }, textStyle ? textStyle : null]}>{title}</Text>

                            {children}
                        </View>

                    </LinearGradient>
                </Pressable>


                }
            </View>
            <View>
                {isLoading && <Loader isLoading={isLoading}></Loader>}
            </View>
        </View>
    );
};

export const ImageButton = ({ style, disabledOpacity, isLoading, borderRadius, textStyle, navigation, disabled, title, buttonColor, textColor, height, width, onPress, children }) => {



    return (
        <View>
            <View>

                {!isLoading && <Pressable
                    disabled={disabled}
                    onPress={onPress}

                >

                    <View style={[{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }, style]}>

                        {children}
                    </View>


                </Pressable>


                }
            </View>
            <View>
                {isLoading && <Loader isLoading={isLoading}></Loader>}
            </View>
        </View>
    );
};

ImageButton.defaultProps = {
    buttonColor: ['#D78BFE', '#7070FA', '#6469FA'],
    height: 55,
    width: 150,
    isLoading: false,
    borderRadius: 35,
    disabledOpacity: true,
    disabled: false
}


ChallengeButton.defaultProps = {
    buttonColor: ['#D78BFE', '#7070FA', '#6469FA'],
    height: 55,
    width: 150,
    isLoading: false,
    borderRadius: 35,
    disabledOpacity: true
};


const styles = StyleSheet.create({
    Container: {


        marginHorizontal: 5,


        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        borderWidth: 1,
        borderColor: 'white',

        shadowColor: 'black',

        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowColor: 2,
        elevation: 7,

    },
    headerTextStyle: {

        textAlign: 'center',

        fontFamily: global.MEDIUM,

    }

});

export default ChallengeButton;
