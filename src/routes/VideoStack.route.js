
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/GroupDetails';
//import AllGroups from '../screens/AllGroupScreen';
//import GroupFeedScreen from '../screens/GroupFeedsScreen';
//import MyGroups from '../screens/MyGroupScreen';
//import CreateGroup from '../screens/CreateGroupScreen';
//import ContactsScreen from '../screens/ContactsScreen';
import { homeIcon, rankIcon, profileIcon, groupIcon, searchIcon, taskIcon, selectBg } from '../Imprter/ProfileImporter';
import { Icon } from '../components/Tabs/TabBars'
import Videos from '../screens/VideonScreen';

const VideoStack = createStackNavigator({ Videos });

VideoStack.navigationOptions = {
  title: 'Videos',
  tabBarIcon: Icon(rankIcon, selectBg, global.iconSize),
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
export default VideoStack;