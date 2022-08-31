import { createStackNavigator } from 'react-navigation-stack';

import { taskIcon, selectBg } from '../Imprter/ProfileImporter';
import Challenges from '../screens/ChallengesScreen';
import TakeChallenge from '../screens/TakeChallenge';
import { Icon } from '../components/Tabs/TabBars'
import Review from '../screens/Review';

const ChallengeStack = createStackNavigator({
    Challenges: TakeChallenge,
    Review: Review,
    Challenge: Challenges,

});

ChallengeStack.navigationOptions = ({ navigation }) => {

    return {
        title: 'Challenges',
        tabBarIcon: Icon(taskIcon, selectBg, global.iconSize),
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

export default ChallengeStack;
