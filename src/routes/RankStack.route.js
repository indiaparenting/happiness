import { createStackNavigator } from 'react-navigation-stack';
import { rankIcon, selectBg } from '../Imprter/ProfileImporter';
import { Icon } from '../components/Tabs/TabBars'
import Ranks from '../screens/RankingScreen';
const RankStack = createStackNavigator({ Ranks });
RankStack.navigationOptions = {
    title: 'Ranks',
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


export default RankStack;