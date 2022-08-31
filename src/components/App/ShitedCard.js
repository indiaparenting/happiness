
import React from 'react';
import { StyleSheet, View, Dimensions, ImageBackground } from 'react-native';


const WIDTH = Dimensions.get('window').width
const ShitedCard = ({ marginTop, children, color, bottom }) => {


    return (
        <>

            <View style={[styles.profileRoot, { marginTop: marginTop }]}>


                <View style={[styles.backCard, { height: marginTop * 0.5, backgroundColor: color }]}>

                    <View style={[styles.profile, { bottom: bottom }]}>
                        {children}

                    </View>


                </View>


            </View>

        </>
    );
};

ShitedCard.defaultProps = {
    color: '#F5F2F3',
    marginTop: 350,
    bottom: 22
}

const styles = StyleSheet.create({
    profile: {

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        width: '100%',
        position: 'absolute',
        bottom: 22,

        backgroundColor: 'transparent'


    }, profileRoot: {
        width: '100%',
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center',

    }

    , backCard: {

        flexDirection: 'column',
        position: 'absolute',
        borderRadius: 50,
        backgroundColor: '#F5F2F3',
        bottom: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        width: '100%',



        height: 100

        // invisible color
    },



});

export default ShitedCard;











