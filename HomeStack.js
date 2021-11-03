import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../Screens/Login';

const screens = {
    Home: {
        screen: Home
    },
    Login: {
        screen: Login 
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);