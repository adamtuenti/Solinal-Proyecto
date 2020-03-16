import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './../src/Login';
import Registro from './../src/Registro';
import CarouselS from './../src/CarouselS';
import Home from './../src/Home';
import Tab from './../src/Tab';

/*import Pacientes from './../pages/Pacientes';
import HomeAPP from './../pages/HomeAPP';
import Home from './../screens/Home';
import CreateTask from './../screens/CreateTask';*/



const AppNavigator = createStackNavigator({
    
    Login:{
        screen: Login,
        navigationOptions:()=>({
            headerTitle:'Login',
            
        })
    },
    Home:{
        screen: Home,
        navigationOptions:()=>({
            headerTitle:'Home',
            
        })
    },
    Registro:{
        screen: Registro,
        navigationOptions:()=>({
            headerTitle:'Registro',
            
        })
    },

    CarouselS:{
        screen: CarouselS,
        navigationOptions:()=>({
            headerTitle:'CarouselS',
            
        })
    },

    Tab:{
        screen: Tab,
        navigationOptions:()=>({
            headerTitle:'Tab',
            
        })
    }
    //aqui pondras tu nueva paguina, usa la que se llama R
},{
    headerLayoutPreset:'center'
})


export default Router = createAppContainer(AppNavigator);