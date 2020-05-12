import React, { Component } from 'react';

import {Icon, Container, Item, Input, Button, Title, Content, Card, CardItem, CheckBox, List,  Left, Right, Body,  Font } from 'native-base';
import { Divider } from 'react-native-elements'
import {StyleSheet,Image ,TouchableHighlight,Text,View,TextInput,TouchableOpacity} from 'react-native'
/*import * as Font from 'expo-font';*/
import { ListItem } from 'react-native-elements';
import {MaterialIcons,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';


class RecomiendaSolinal extends Component {


      constructor(props) {
        super(props);
        this.state = {
            email:'',
            mensajeError:'',
            loading: false,
        };
    }

    



      enviarInvitacion=()=> {
        const { email } = this.state;
        if (email=='' || email.length<5) { this.setState({mensajeError:'Ingrese un correo valido!'}) }
        else{         
                    var dataToSend = {correo_add: email,usuario:idUserGlobal};
                    var formBody = [];
                    for (var key in dataToSend) {
                    var encodedKey = encodeURIComponent(key);
                    var encodedValue = encodeURIComponent(dataToSend[key]);
                    formBody.push(encodedKey + "=" + encodedValue);
                    }
                    formBody = formBody.join("&");
                    fetch('http://accountsolinal.pythonanywhere.com/api/correo_add', {
                    method: "POST",//Request Type 
                    body: formBody,//post body 
                    headers: {//Header Defination 
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    })
                    .then((response) => response.json())
                    //If response is in json then in success
                    .then((responseJson) => {
                    // alert(JSON.stringify(responseJson));
                        //console.log(responseJson);
                        this.setState({mensajeError:'Invitacion enviada!'})
                    })
            }
    }

    render() {
     
        return (
            <View style={{flex:1}}>
            
            <View  style={{flexDirection:'row',backgroundColor:'#1ED695',height:85,paddingTop:'8%',alignContent:'center'}}>
            <View style={{marginTop:'4.5%',flexDirection:'row',}}>
                <View style={{width:'100%',flexDirection: 'row',alignItems:'center',marginLeft:10}}>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('Main')}>       
                    <MaterialIcons name="arrow-back" size={32} color="white" />
                    </TouchableHighlight>         
                    <Text style={{color:'white', fontSize:21, marginLeft:10}}>
                        Recomienda Solinal
                    </Text>
                </View>
            </View>
            </View>


            <Card style={{marginBottom:'10%',marginTop:'5%',marginLeft:'2.5%',width:'95%',alignItems:'center',alignContent:'center',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da'}}>

            <View style={{alignItems:'center',padding:'2%'}} >

            <Text style={{marginLeft:'2%', fontWeight:'bold',textAlign:'center'}}>Escriba el correo para recomendar Solinal App.</Text>
            </View>
            </Card>
                        <View style={{alignItems:'center',marginTop:'5%'}}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <AntDesign size={30} style={{marginTop:'2.5%'}}  name="sharealt" />
                             <TextInput style={styles.input} placeholder='Ingrese correo' placeholderTextColor='lightgrey'
                                    onChangeText={email => this.setState({ email })}/>
                        </View>
                        <Text style={{color:'red',marginTop:'2%',marginBottom:'1%',marginLeft:'5%',fontStyle:'italic',fontWeight:'bold',textAlign:'center'}}>{this.state.mensajeError}</Text>
                        </View>
                        
              
                    
                    <View style={{alignItems: 'center'}}>
                         <TouchableOpacity style={styles.botonEnviar}  onPress={this.enviarInvitacion}>
                            <Text style={{fontWeight: 'bold',color:'black',fontSize:19}}> Enviar </Text>
                        </TouchableOpacity>            
                    </View>




            </View>

            
            
            )
    }

}

export default RecomiendaSolinal;


const styles = StyleSheet.create({
    
    botonEnviar:{
        alignItems: 'center',
        backgroundColor: '#1ed695',
        padding: 10,
        width:175,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginTop:'10%',
        
   

    },
     input: {
        height: 35,
        borderBottomColor: '#1ed796',
        borderBottomWidth: 1,
        paddingLeft: 7,
        paddingRight: 10,
        width: 185,
        alignItems: 'center',
        marginLeft:'2%', 
       
        fontSize: 15
    },
  


     



});



    
    
