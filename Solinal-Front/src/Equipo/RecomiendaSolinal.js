import React, { Component } from 'react';

import {Icon, Container, Item, Input, Button, Title, Content, Card, CardItem, CheckBox, List,  Left, Right, Body,  Font } from 'native-base';
import { Divider } from 'react-native-elements'
import {StyleSheet,Image ,TouchableHighlight,Text,View,TextInput,TouchableOpacity,Dimensions} from 'react-native'
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
        if (email=='') { this.setState({mensajeError:'Ingrese un correo valido!'}) }
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
                        console.log(responseJson);
                        this.setState({mensajeError:'Invitacion enviada!'})
                    })
            }
    }

    render() {
     
        return (
            <View style={{height:Dimensions.get('window').height,flex:1,marginTop:25}}>
                <View  style={{flexDirection:'row',backgroundColor:'#1ED695',height:55,alignContent:'center'}}>
                <View style={{marginTop:5,flexDirection:'row',}}>
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
                
            <Content>

            <Card style={{marginBottom:'10%',marginTop:'5%',marginLeft:'2.5%',width:'95%',alignItems:'center',alignContent:'center',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da'}}>

            <View style={{alignItems:'center',padding:'2%'}} >

            <Text style={{marginLeft:'2%', fontWeight:'bold',textAlign:'center'}}>Escriba el correo para recomendar Solinal App.</Text>
            </View>
            </Card>
                        <View style={{alignItems:'center',marginTop:'5%'}}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <AntDesign size={30} style={{marginTop:'2.5%'}}  name="sharealt" />
                             <TextInput style={styles.input} placeholder='Ingrese correo' placeholderTextColor='lightgrey'autoCapitalize='none'
                                    onChangeText={email => this.setState({ email })}/>
                        </View>
                        <Text style={{color:'red',marginTop:'2%',marginBottom:'1%',marginLeft:'5%',fontStyle:'italic',fontWeight:'bold',textAlign:'center'}}>{this.state.mensajeError}</Text>
                        </View>
                        
              
                    
                    <View style={{alignItems: 'center'}}>
                         <TouchableOpacity style={styles.botonEnviar}  onPress={this.enviarInvitacion}>
                            <Text style={{fontWeight: 'bold',color:'black',fontSize:19}}> Enviar </Text>
                        </TouchableOpacity>            
                    </View>

            </Content>




            <View style={{height:62, flexDirection: 'row',width:'100%'}}>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasVacia')} style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/autoria.png?raw=true'}} 
                            style={{height: 35, width: 25}}/>
                    <Text style={{color: '#636363', fontSize: 9}}>Auditorias</Text>
                    </View>
                </TouchableHighlight>

                 <TouchableHighlight onPress={()=>alert('en proceso')} style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2014.png'}}
                                   style= {{height: 35,width: 28}}>
                            </Image>
               <Text style={{color: '#636363',fontSize: 9}}>Accion Correctiva</Text></View>
                </TouchableHighlight>    

                 <TouchableHighlight onPress={()=>this.props.navigation.navigate('Main')} style={{marginLeft:'2%',marginRight:'2%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'8%'}}>
                           <MaterialCommunityIcons name="home-circle" size={50} />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={()=>this.props.navigation.navigate('CalendarioVacio')} style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/calendario.png?raw=true'}}
                                   style= {{height: 35,width: 32}}>
                            </Image>
                    <Text style={{color: '#636363', fontSize: 9}}>Calendario</Text></View>
                </TouchableHighlight>
          
                <TouchableHighlight onPress={()=>alert('en proceso')} style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2015.png'}}
                                   style= {{height: 35,width: 34}}>
                            </Image>
               <Text style={{color: '#636363', fontSize: 9}}>No Conformidad</Text></View>
                </TouchableHighlight>
               
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



    
    
