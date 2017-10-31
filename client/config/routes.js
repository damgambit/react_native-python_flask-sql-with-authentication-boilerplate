import { DrawerNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';

// DrawerLogin
import Login from '../components/Login';
import Register from '../components/Register';

// TabMain
import Home from '../components/Home';
import Screen1 from '../components/Screen1';
import Screen2 from '../components/Screen2';
import Screen3 from '../components/Screen3';
import Profile from '../components/Profile';



export const DrawerLogin = DrawerNavigator({
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    }
})


export const TabMain = TabNavigator({
    Home: {
        screen: Home,
    },
    Screen1: {
        screen: Screen1,
    },
    Screen2: {
        screen: Screen2,
    },
    Screen3: {
        screen: Screen3,
    },
    Profile: {
        screen: Profile,
    },
})