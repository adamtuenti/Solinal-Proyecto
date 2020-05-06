import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView,FlatList, TouchableHighlight,Image, TextInput,Alert,TouchableOpacity } from 'react-native';
import { Input, Button, SocialIcon, Icon } from 'react-native-elements';
import { Container, Header, Content, Accordion } from "native-base";
import {MaterialIcons,
MaterialCommunityIcons} from '@expo/vector-icons';




export default class Home extends Component{

   

    render() {
    return (
    
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>

        <Image
                        style={{width: '48.3%', height: '32.5%', margin:25,padding:10,marginTop:'11%'}}
                        source={{uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Recurso%201.png?raw=true'}}
        />

        <Text style={{fontWeight: 'bold', fontSize: 32, color: '#1ED695',paddingTop:25,paddingBottom:125,marginTop:15}}>Bienvenido {userNameGlobal}</Text>

       

          <MaterialCommunityIcons name="home-circle" size={85} color='#1ED695' onPress={() => this.props.navigation.navigate('AuditoriaFinalizada')} />
      </View>
     
    );
  }


  

   
}


const styles = StyleSheet.create({
    container: {
      
      
      
      
      alignItems: 'center',
      justifyContent: 'center',
    
      marginTop: "70%",
      margin:10
    },

    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#35E119',
        padding: 10,
        width:142,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
   

    },botonGoogle:{
        
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,

        elevation: 1,

    },
    default:{
        backgroundColor:'blue'
    },
    abajo: {    
        alignItems: 'center',

       // flexDirection: 'row',

      justifyContent: 'center',
        
        
      
    },
    contentContainer:{
        backgroundColor: '#98FF7A',
        borderColor: '#fff',
        borderRadius: 18,
            padding: 9,
            marginVertical:9,
            flexDirection: "row",
            alignItems: 'center',
            width:'100%'
    }
  });
