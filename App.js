import React from 'react';
import GLOBALS from './Global';
import { ModalPortal } from 'react-native-modals';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as PostProvider } from './src/context/PostContext';
import { Provider as TasksProvider } from './src/context/TaskContext';
import { Provider as CommentProvider } from './src/context/CommentContext';
import { Provider as GroupProvider } from './src/context/GroupContext';

import { MenuProvider } from 'react-native-popup-menu';
import FlashMessage from "react-native-flash-message";

import ChallengeStack from './src/routes/ChallengeStack.route'
import SignupFlow from './src/routes/SignupStack.route';
import RankStack from './src/routes/RankStack.route';
import Home from './src/routes/HomeStack.route';
import AccountStack from './src/routes/AccountStack.route';
import GroupStack from './src/routes/GroupStack.route'

import VideoExample from './src/screens/VideoExample';
import SigninScreen from './src/screens/SigninScreen';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import { createDrawerNavigator } from 'react-navigation-drawer';
import useCachedResources from './src/hooks/useCachedResources';

import SetupScreen_End from './src/screens/SetupScreen_End'
import SetupScreen_Share from './src/screens/SetupScreen_Share'
import SetupScreen_Value from './src/screens/SetupScreen_Value'
import SetupScreen from './src/screens/SetupScreen'
import Logout from './src/screens/Logout'

import { AboutUs, FAQs, TermsConditions, Vision } from './src/SideMenuScreens/index'

import DrawerMenu from './DrawerMenu'

import { homeIcon, rankIcon, profileIcon, groupIcon, searchIcon, taskIcon, selectBg } from './src/Imprter/ProfileImporter';

import { Icon, VectorIcon } from './src/components/Tabs/TabBars'


import { Feather } from '@expo/vector-icons';
import CompletedChallengeSCreen from './src/screens/CompletedChallengeSCreen';


import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Splashscreen from './src/hooks/Splashscreen';
import VideoStack from './src/routes/VideoStack.route';


const BottomTab = createBottomTabNavigator({
  Home: Home,
  Challenges: ChallengeStack,
  Group: GroupStack,
  Ranking: RankStack,
  Account: AccountStack,
  Video: VideoStack  

})

BottomTab.navigationOptions = {
  headerShown: false,
}

const BottomTabsStack = createStackNavigator({
  BottomTab,
  ViewPost: CompletedChallengeSCreen,
},

  {
    navigationOptions: {
      headerShown: false,
    },
  }

)
BottomTabsStack.navigationOptions = {
  headerShown: false,
}

const mainFlow = createDrawerNavigator({
  Home: {
    screen: BottomTabsStack,
    navigationOptions: {
      drawerIcon: Icon(homeIcon, selectBg, global.iconSize),
    },
  },
  Vision: {
    screen: Vision,
    navigationOptions: {
      drawerIcon: VectorIcon(Feather, "eye", 24)

      ,
    },
  },
  FAQs: {
    screen: FAQs,
    navigationOptions: {
      drawerIcon: VectorIcon(AntDesign, "questioncircleo", 24)

    },
  },
  TermsConditions: {
    screen: TermsConditions,
    navigationOptions: {
      drawerIcon: VectorIcon(MaterialIcons, "privacy-tip", 24),

    },
  },
  AboutUs: {
    screen: AboutUs,
    navigationOptions: {

      drawerIcon: VectorIcon(Feather, "info", 24),

    },
  },
  Logout: {
    screen: Logout,
    navigationOptions: {

      drawerIcon: VectorIcon(AntDesign, "logout", 24),

    },
  }


}, {
  drawerPosition: "right",
  drawerType: "front",
  drawerOpenRoute: 'RightSideMenu',
  drawerCloseRoute: 'RightSideMenuClose',
  drawerToggleRoute: 'RightSideMenuToggle',
  hideStatusBar: true,
  contentOptions: {
    activeTintColor: '#e91e63',
    itemsContainerStyle: {
      marginVertical: 20,
    },

    itemStyle: {
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    iconContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  navigationOptions: {
    headerShown: false,
  },



  contentComponent: props => <DrawerMenu {...props} />
}
);


const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  SetupFlow: createStackNavigator({
    SetupScreen,
    SetupScreen_Value,
    SetupScreen_Share,
    SetupScreen_End

  }),
  loginFlow: createStackNavigator({
    Signup: SignupFlow,
    Signin: SigninScreen,
  },
    {
      initialRouteName: "Signin"
    }),
  mainStack: createStackNavigator({
    mainFlow

  },
    navigationOptions = {
      headerShown: false
    }
  )

});



const App = createAppContainer(switchNavigator);

export default () => {

  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {

    return (
      <AuthProvider>
        <MenuProvider>
          <PostProvider>
            <TasksProvider>
              <CommentProvider>
                <GroupProvider>
                  <App
                    ref={(navigator) => {
                      setNavigator(navigator);
                    }}
                  >


                  </App>
                  <Splashscreen></Splashscreen>
                  <ModalPortal />
                  <FlashMessage position="top" />
                </GroupProvider>
              </CommentProvider>
            </TasksProvider>
          </PostProvider>
        </MenuProvider>
      </AuthProvider>
    );
  }
};
