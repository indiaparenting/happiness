
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import About from '../screens/GroupDetails';
import AllGroups from '../screens/AllGroupScreen';
import GroupFeedScreen from '../screens/GroupFeedsScreen';
import MyGroups from '../screens/MyGroupScreen';
import CreateGroup from '../screens/CreateGroupScreen';

import ContactsScreen from '../screens/ContactsScreen';

import { homeIcon, rankIcon, profileIcon, groupIcon, searchIcon, taskIcon, selectBg } from '../Imprter/ProfileImporter';
import { Icon } from '../components/Tabs/TabBars'



const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: '#DF9E2A',
    labelStyle: {


      fontFamily: global.BOLD
    },
    inactiveTintColor: '#7B7B7B',
    inactiveTintColor: 'grey',
    indicatorStyle: {
      height: 4,


      width: '40%',
      left: '5%',
      right: '5%',
      borderRadius: 100,
      backgroundColor: '#DF9E2A',

    },
    style: {
      alignSelf: "center",
      width: '75%',
      borderRadius: 100,
      borderColor: "blue",
      backgroundColor: "white",
      //  elevation: 5, // shadow on Android
      //   shadowOpacity: .10, // shadow on iOS,
      //  shadowRadius: 4, // shadow blur on iOS
      position: 'absolute', top: 75
    },
    tabStyle: {
      borderRadius: 100,

    },
  }

}


const NewTabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: '#DF9E2A',
    labelStyle: {

      fontFamily: global.BOLD
    },
    inactiveTintColor: '#7B7B7B',
    indicatorStyle: {
      height: 4,


      width: '25%',
      left: '5%',
      right: '5%',
      borderRadius: 100,
      backgroundColor: '#DF9E2A',

    },
    style: {
      alignSelf: "center",
      width: '90%',
      borderRadius: 100,
      borderColor: "blue",
      backgroundColor: "white",
      //  elevation: 5, // shadow on Android
      //   shadowOpacity: .10, // shadow on iOS,
      //  shadowRadius: 4, // shadow blur on iOS
      position: 'absolute', top: 85
    },
    tabStyle: {
      borderRadius: 100,

    },

    tabBarLabelStyle: {
      fontSize: 15,
      fontFamily: global.BOLD

    }, tabBarItemStyle: {
      fontFamily: global.SEMIBOLD
    }
  }

}



const Details = createMaterialTopTabNavigator(
  {
    About: About,
    Feed: {
      screen: GroupFeedScreen,
    }
  },
  TabNavigatorConfig
);






const Groups = createMaterialTopTabNavigator(
  {
    MyGroup: {
      screen: MyGroups,
      name: 'My Groups',
      navigationOptions: {

        title: 'My Group',
        headerShown: false
      }
    },
    AllGroup: {
      screen: AllGroups,
      name: 'All Groups',
      navigationOptions: {

        title: 'All Groups',
        headerShown: false,

      },

    },
    GroupStatus: {
      screen: CreateGroup,
      name: 'Action',
      navigationOptions: {

        title: 'Action',
        headerShown: false,

      },

    }

  },

  NewTabNavigatorConfig

);




Details.navigationOptions = {
  title: 'Details',
  tabBarIcon: Icon(groupIcon, selectBg, global.iconSize),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'black',
    style: {
      borderTopColor: '#66666666',

      height: 45,
      elevation: 0,
    },

    labelStyle: {
      fontFamily: 'Montserrat_400Regular',
      fontSize: 13,

    }
  },
  headerShown: false
}


Groups.navigationOptions = {
  title: 'Groups',
  tabBarIcon: Icon(groupIcon, selectBg, global.iconSize),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'black',
    style: {
      borderTopColor: '#66666666',

      height: 45,
      elevation: 0,
    },

    labelStyle: {
      fontFamily: 'Montserrat_400Regular',
      fontSize: 13,

    }
  },
  headerShown: false
}



const GroupStack = createStackNavigator(
  {
    Groups, Details

    , Contacts: {

      screen: ContactsScreen,

    },
  }


);






GroupStack.navigationOptions = () => {
  return {
    title: 'Groups',
    tabBarIcon: Icon(groupIcon, selectBg, global.iconSize),
    headerShown: false,
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

  }
}


export default GroupStack;