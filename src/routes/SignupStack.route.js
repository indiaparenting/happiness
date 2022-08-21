import { createStackNavigator } from 'react-navigation-stack';

import SignupScreen from '../screens/SignupScreen';
import EnterMobile from '../screens/EnterMobile';
import EnterOtpScreen from '../screens/EnterOtpScreen';


const SignupFlow = createStackNavigator({
    EnterMobile,
    EnterOtpScreen,
    SignupScreen,
}
)
SignupFlow.navigationOptions = () => {
    return {
        header: () => false,
    };
};


EnterMobile.navigationOptions = () => {
    return {
        header: () => false,
    };
};
SignupFlow.navigationOptions = () => {
    return {
        header: () => false,
    };
};


export default SignupFlow;