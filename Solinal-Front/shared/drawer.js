import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Main from './../src/Main';
const RootDrawerNavigator = createDrawerNavigator({
    Main:{
        screen: Main
    }
})