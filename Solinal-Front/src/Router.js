import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './../src/Cuenta/Login';
import Registro from './../src/Cuenta/Registro'; 
import Reestablecer from './../src/Cuenta/Reestablecer';
import Main from './../src/Main';
import Header from './../shared/header';


/*import Pacientes from './../pages/Pacientes';import Carousel from './Carousel';
import HomeAPP from './../pages/HomeAPP';
import Home from './../screens/Home';
import CreateTask from './../screens/CreateTask';*/



const screens = {


    Login: {
        screen: Login,
        navigationOptions: () => ({
            headerTitle: 'Login',

        })
    },
    Main: {
        screen: Main,
        navigationOptions: {
            title: 'main',

        }
    },
    Reestablecer: {
        screen: Reestablecer,
        navigationOptions: () => ({
            headerTitle: 'Reestablecer',

        })
    },

    Registro: {
        screen: Registro,
        navigationOptions: () => ({
            headerTitle: 'Registro',

        })
    },

}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'blue',
        headerStyle:{backgroundColor:'#1ed695',height:150}
    }
})


export default HomeStack;