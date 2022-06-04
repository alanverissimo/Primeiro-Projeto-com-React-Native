import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = NavigationContainer(
    createNativeStackNavigator({
        Main,
        User,
    }),

);

export default Routes;