import React from 'react'
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
import Form from 'react-bootstrap/Form'
import {MaterialIcons} from '@expo/vector-icons'


export default class Header extends React.Component{

    
    render(){

    return(

        <View  style={styles.back}>
            <View style={styles.izquierdo}>
                
                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/user.png?raw=true'}}
                            style= {styles.imagen}/>
                

                



                
                <Text style={{color:'white', fontSize:21, marginLeft:10}}>
                    {this.props.encabezado}
                </Text>
            </View>

            

            <View style={{flex: 1, flexDirection: 'row-reverse',marginLeft:5, alignItems:'center'}}>
                <MaterialIcons name='menu' size={30}  style={styles.icon}/>
            </View>

        </View>
        
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
         backgroundColor:'#1ed695',
        height:'8%',
        paddingTop:'1%',
        alignContent:'center'
        
    },
    imagen:{
        height:40,
        width:40,
        
       // marginLeft:10,
        //marginTop:8
    }
})