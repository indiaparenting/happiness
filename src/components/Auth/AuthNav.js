

import React, { } from 'react';
import { StyleSheet } from 'react-native';

import NavLink from '../NavLink';
import WBText from '../WBText'

const AuthNav = ({ routeName, text, highlight, UnderlinColor }) => {

    return (
        <NavLink
            routeName={routeName}
        >
            <UnderLine color={UnderlinColor} width={2}>
                <WBText text={text} highlight={highlight} ></WBText>
            </UnderLine>

        </NavLink>
    );
};

AuthNav.defaultProps = {

    UnderlinColor: 'C63726'
}

const styles = StyleSheet.create({
    errorMessage: {
        flexDirection: 'row',
        textAlign: 'left',
        alignItems: 'center',

        paddingHorizontal: 10,

        color: 'red',
        paddingHorizontal: 30,
        width: '100%',

    },

});

export default AuthNav;
