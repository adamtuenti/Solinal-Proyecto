import React from 'react'
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
import Form from 'react-bootstrap/Form'
import {MaterialIcons} from '@expo/vector-icons'


export default class EstadoCuenta extends React.Component{

    
    render(){

    return(

        <View style={{flex: 1, flexDirection: 'row', margin:5,padding:10, backgroundColor:'white',borderColor: '#d6d7da',borderRadius: 2,
        borderWidth: 1,}}>
            <View style={{marginRight:35, flexDirection:'row'}}>
                <View>
                <Text style={{color: '#636363'}}>
                    Auditorias realizadas:
                </Text>
                </View>  
                <View>
                    <Text style={{color: '#2ba855', marginLeft:5}}>
                        {this.props.cantidad}
                    </Text>
                </View>
                
            </View>
            <View style={{flexDirection:'row',marginLeft:15}}>
                <Text style={{color: '#2ba855'}}>
                    CUENTA 
                </Text>
                <Text style={{color: '#2ba855',marginLeft:5}}>
                    {this.props.tipoCuenta}
                </Text>
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
        height:62,
        alignContent:'center'
        
    },
    imagen:{
        height:40,
        width:40,
        
       // marginLeft:10,
        //marginTop:8
    }
})