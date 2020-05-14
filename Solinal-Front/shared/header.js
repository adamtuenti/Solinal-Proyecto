import React from 'react'
import { StyleSheet, Text, View, Dimensions,Image, Easing } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
import Form from 'react-bootstrap/Form'
import {MaterialIcons} from '@expo/vector-icons';
import { Container, Content,  List, ListItem, Left, Right, Body, TouchableHighlight, Thumbnail } from 'native-base';
import Drawer from 'react-native-drawer-menu';




export default function Header (){

  
    



    return(

  

        <View  style={styles.back}>

        <View style={styles.container}>
            <View style={styles.izquierdo}>
                
                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/user.png?raw=true'}}
                            style= {styles.imagen}/>
                

                



                
                <Text onPress={this.props.navigation.navigate('Login')} style={{color:'white', fontSize:19, marginLeft:10}}>
                    Bienvenido {nameGlobal}
                </Text>
            </View>

         

            <Button onPress={()=>{console.log('hola')}}style={{flex: 1, flexDirection: 'row-reverse',marginLeft:5, alignItems:'center'}}>
           
                <MaterialIcons name='menu' size={50}  style={styles.icon}/>
            </Button>

        </View>
        </View>
       // </Drawer>
    );
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