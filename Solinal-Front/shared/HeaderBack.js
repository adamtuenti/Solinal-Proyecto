import React from 'react'
import { StyleSheet, Text, View, Dimensions,Image,TouchableHighlight } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
import Form from 'react-bootstrap/Form'
import {MaterialIcons} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {Drawer} from 'native-base';
//import SideBar from './SideBar';

export default class HeaderBack extends React.Component{

    closeDrawer(){
        this._drawer._root.close()
    };

    openDrawer(){
        this._drawer._root.open()
    };

    render(){

    return(

      //  <Drawer ref={(ref) => { this._drawer = ref; }} 
        //        content={<SideBar navigator={this._navigator} />} 
          //      onClose={() => this.closeDrawer()}>

        <View  style={styles.back}>

        <View style={styles.container}>
            <View style={styles.izquierdo}>

                <TouchableHighlight onPress={()=>this.props.navigation.navigate(this.props.url)}>
                
                <MaterialIcons name="arrow-back" size={32} color="white" />
                

                </TouchableHighlight>



                
                <Text style={{color:'white', fontSize:21, marginLeft:10}}>
                    {this.props.encabezado}
                </Text>
            </View>

            

            <Button style={{flex: 1, flexDirection: 'row-reverse',marginLeft:5, alignItems:'center'}}>
     
                <MaterialIcons name='menu' size={30}  style={styles.icon}/>
            </Button>

        </View>
        </View>

     //  </Drawer>
        
    );
    }
}

const styles = StyleSheet.create({
    izquierdo:{
        width: Dimensions.get('screen').width,
        
       
        flexDirection: 'row',
        alignItems:'center',
        marginLeft:10
          
        
    },
    icon:{
       position:'absolute',
       left:25,
       //marginTop:12
        
    },
    back:{
        flexDirection:'row',
         backgroundColor:'#1ED695',
        height:'11%',
        paddingTop:'8%',
        alignContent:'center'
        
    },
    imagen:{
        height:40,
        width:40,
        
       // marginLeft:10,
        //marginTop:8
    },
    container:{
        marginTop:'4.5%',
        flexDirection:'row',
    
    }
})