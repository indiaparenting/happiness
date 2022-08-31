import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const TabBars = ({ focused, horizontal, tintColor }) => {
    let iconName = focused ? 'gear' : 'gear';
    return (

        <FontAwesome name={iconName} size={24} color={tintColor} />)
}

const styles = StyleSheet.create({

});
const Icon = (icon, activeBg, size) => {

    return (({ focused, horizontal, tintColor }) => {


        return (<View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>

            <Image source={icon} style={{ width: size, height: size, resizeMode: 'contain' }} tintColor={tintColor} />
            {focused && false && <View style={{ position: 'absolute' }}><Image
                source={activeBg}
                style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'contain',
                    position: 'absolute'
                }}
            />
            </View>}


        </View>
        )
    })
}

const VectorIcon = (Icon, name, size) => {

    return (({ focused, horizontal, tintColor }) => {


        return (<View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={name} size={size} color={tintColor} />




        </View>
        )
    })
}

export { TabBars, Icon, VectorIcon };
