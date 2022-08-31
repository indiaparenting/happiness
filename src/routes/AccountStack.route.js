
import { createStackNavigator } from 'react-navigation-stack';

import Account from '../screens/AccountScreen';


import { homeIcon, rankIcon, profileIcon, groupIcon, searchIcon, taskIcon, selectBg } from '../Imprter/ProfileImporter';


import { Icon } from '../components/Tabs/TabBars'



const AccountStack = createStackNavigator({ Account });




AccountStack.navigationOptions = () => {
    return {
        title: 'Profile',
        tabBarIcon: Icon(profileIcon, selectBg, global.iconSize),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'black',
            style: {
                borderTopColor: '#66666666',

                height: 50,

                shadowColor: 'black',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowColor: 2,
                elevation: 4,
            },

            labelStyle: {
                fontFamily: 'Montserrat_400Regular',
                fontSize: 12,

            }
        },
        headerShown: false
    }
}


export default AccountStack;