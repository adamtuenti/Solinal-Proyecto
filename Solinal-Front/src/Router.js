import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './../src/Login';
import Registro from './../src/Registro'; 
import Reestablecer from './../src/Reestablecer';



/*import Pacientes from './../pages/Pacientes';import Carousel from './Carousel';
import HomeAPP from './../pages/HomeAPP';
import Home from './../screens/Home';
import CreateTask from './../screens/CreateTask';*/



const AppNavigator = createStackNavigator({


    Login: {
        screen: Login,
        navigationOptions: () => ({
            headerTitle: 'Login',

        })
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

}, {
    headerLayoutPreset: 'center'
})


export default Router = createAppContainer(AppNavigator);