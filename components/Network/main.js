import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ChatScreen from './chatscreen'
import LoginScreen from './loginscreen'
const AppNavigator=createStackNavigator(
    {
        Login:LoginScreen,
        Chat:ChatScreen
    },
    {
        headerMode:"none"
    }
)
export default createAppContainer(
    AppNavigator
)