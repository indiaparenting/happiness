import React from 'react';
import { StyleSheet, View, Dimensions, ImageBackground } from 'react-native';


const WIDTH = Dimensions.get('window').width
const BackCard = ({ top, children, color }) => {


    return (
        <>
            <View style={[styles.form, styles.absolute, { paddingTop: -top, top: top, backgroundColor: color }]}>
                {children}
            </View>
        </>
    );
};

BackCard.defaultProps = {
    color: 'white'
}

const styles = StyleSheet.create({
    errorMessage: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

        marginLeft: 18,
        marginRight: 18,
        marginTop: 5,
        color: 'red'
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',

        textAlign: 'center',
        color: '#585657',


    },
    headerContainer: {
        marginBottom: 20,

        paddingVertical: 5,
        borderBottomWidth: 2,
        borderColor: '#585657'

    }
    ,

    Logo: {
        height: 100, width: 100, resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1

    },

    LogoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 10,


    },

    rootContainer: {
        flex: 1,

        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',




    },


    form: {


        width: '100%',


        backgroundColor: 'blue',
        borderRadius: 20,
        borderBottomEndRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,

        shadowColor: '#E7B62B',

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        alignItems: 'center',

    },
    absolute: {
        position: 'absolute', top: 75,
        bottom: 0, left: 0, right: 0,


    }



});

export default BackCard;
