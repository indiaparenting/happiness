import React from 'react';
import { View, StyleSheet, Image, Pressable, Text } from 'react-native';
import { backIcon, hamburgerIcon, refreshIcon } from '../../Imprter/ProfileImporter';

import { Ionicons } from '@expo/vector-icons';


import { getNavigator } from '../../navigationRef';



const CustomRouteName = (name) => {
    switch (name) {
        case 'Home':
            return 'The Happiness Challenges';
        case 'Challenges':
            return 'Challenge List';
        case 'MyGroup':
            return 'My Groups';
        case 'AllGroup':
            return 'All Groups';
        case 'Challenge':
            return 'Take Challenge';
        case 'GroupStatus':
            return 'Group Action';
        case 'Videos':
            return 'Learn about the Values';
        default:
            return name;
    }
}

const CustomFonts = (name) => {
    switch (name) {
        case 'Home':
            return { fontFamily: 'GoldenHillsDEMO', fontSize: 30, fontWeight: 'normal' };

        default:
            return { fontFamily: 'Montserrat_400Regular', fontSize: 23 };

    }
}

const Header = ({ navigation, isBackButton, title, navigationProps, showGroup }) => {




    const toggleDrawer = () => {


        navigation.toggleDrawer()


    }



    return (<View style={styles.header}>
        {isBackButton && <Pressable style={styles.backContainer} onPress={() => navigation.goBack(null)}>
            <Image style={styles.icon} source={backIcon} />
        </Pressable>


        }


        <View style={styles.title}>
            <Text style={[styles.titleStyle, CustomFonts(navigation.state.routeName)]}>{CustomRouteName(navigation.state.routeName)}</Text>

        </View>



        {showGroup &&
            <Pressable style={styles.add} onPress={() => navigation.navigate('Create')}>
                <View style={styles.group}>
                    <Text style={styles.group}>create group</Text>
                    <Ionicons name="md-add-circle-sharp" size={28} color="black" />
                </View>
            </Pressable>

        }

        <Pressable style={styles.backContainer} onPress={toggleDrawer}>
            <Image style={styles.icon} source={hamburgerIcon} />
        </Pressable>

        {!isBackButton && <Pressable style={styles.backContainer} onPress={() => { }}>
            <Image style={styles.icon} source={refreshIcon} />
        </Pressable>


        }

    </View >);
};

Header.defaultProps = {
    isBackButton: true,
}

const styles = StyleSheet.create({
    Container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowColor: 2,
        elevation: 1,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5
    }, add: {

        position: 'absolute',
        right: 50
    },
    group: {
        flexDirection: 'row',
        alignItems: 'center',

        justifyContent: 'center',
        margin: 5

    },
    groupText: {

        margin: 5,
        fontSize: 25,
        fontWeight: 'bold',

    },
    header: {

        flexDirection: 'row',
        height: 40,

        width: null,

        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15

    }, icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        tintColor: 'white',
    }, title: {
        position: 'absolute',
        left: 60
    },
    titleStyle: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'normal',
        fontFamily: global.MEDIUM,
    }
});

export default Header;
