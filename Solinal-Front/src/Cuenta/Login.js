import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView,TouchableHighlight,Image, TextInput,Alert,TouchableOpacity } from 'react-native';
import { Input, Button} from 'react-native-elements';
import {Content} from 'native-base';
//import Form from 'react-bootstrap/Form'
import {MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';

export default class Login extends Component{


    constructor(props){

        
        super(props);
        global.idUserGlobal = '';
        global.nameGlobal = '';
        global.userNameGlobal='';
        global.emailGlobal='';
        global.idEquipoGlobal='';
        global.isAdminGlobal='';
        
        global.urifirma='https://i.pinimg.com/originals/e3/3c/2f/e33c2fa94c03efa06678116f80d62d0d.jpg'; 

        this.state = {
          username : '',
          password : '',
          loading: false,
         
          mensajeError:'',
          iconName : 'eye',
          secureTextEntry:true,

         
        }
      
    }

  



    iniciarSesion=()=>{
        const{username,password}=this.state;

         if ( username === ''||password=='') { this.setState({mensajeError:'Ingrese usuario y clave!'}) }

         else{
      
        var dataToSend = {username:username,password:password};
            var formBody = [];
            for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            fetch('http://accountsolinal.pythonanywhere.com/api/login', {
            method: "POST",//Request Type 
            body: formBody,//post body 
            headers: {//Header Defination 
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            })
             .then((response) => response.json())
             //console.log(responseJson.user.id)
            //If response is in json then in success
            .then((responseJson) => {
                //alert(JSON.stringify(responseJson));
                //console.log(responseJson)
                if("user" in responseJson){
                    console.log(responseJson)
                    idUserGlobal = responseJson.user.id;
                    nameGlobal=responseJson.user.first_name;
                    userNameGlobal=responseJson.user.username;
                    emailGlobal=responseJson.user.email;
                    idEquipoGlobal=responseJson.user.profile.idEquipo;
                    isAdminGlobal=responseJson.user.profile.isAdmin;
                   



                    
                  
                    this.props.navigation.navigate('Home')
                    
                }
                else{
                    this.setState({mensajeError:'Credenciales incorrectas!'})
                    

                }
            
            })
            .catch((error) => {
      //alert(JSON.stringify(error));
      //console.error(error);
    });

         }
      
      
    }

    mostrarClave =()=>{
        let iconName = (this.state.secureTextEntry)? "eye-off":"eye";
        this.setState({
            secureTextEntry:!this.state.secureTextEntry,
            iconName:iconName
        });

    }



   

    

    render() {
        return ( 
            <SafeAreaView style={{}}>
            
            
             

                <View style = {{ alignItems: 'center',justifyContent: 'center',margin:10}}>
                
                 

                

                <Image style={{width: '45%', height: 212,marginBottom:'8%',marginTop:'28%'}} source={{uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Recurso%201.png?raw=true'}}/>
                        
                        
                


                
                <TextInput
                    style={styles.input}
                    placeholder='User'
                    autoCapitalize="none"
                    placeholderTextColor='lightgrey'
                    onChangeText={username => this.setState({ username })}

                />
                
                <View style={{flexDirection:'row',alignItems:'center'}}>

                <View style={{marginLeft:'7%'}}>
                
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    autoCapitalize="none"
                    secureTextEntry={this.state.secureTextEntry}
                    placeholderTextColor='lightgrey'
                        minLength={2}
                    onChangeText={password => this.setState({ password})}

                />
                
                </View>
                    <View style={{marginLeft:'1%'}}>
                        <TouchableHighlight onPress={this.mostrarClave}>
                        <MaterialCommunityIcons name = {this.state.iconName} size={19}/>
                        </TouchableHighlight>
                    </View>
                </View>

               
                

                <Text style={{color:'red',marginTop:'2%',marginBottom:'2%'}}>{this.state.mensajeError}</Text>

                    

                

                <TouchableHighlight
                    style={styles.botonLogin} onPress={this.iniciarSesion}>
                    <Text style={{fontWeight: 'bold', color: '#515254'}}> CONECTAR </Text>
                </TouchableHighlight>
                    
                
                



        
                

                
                    
               
                        <Text 
                            onPress={()=>this.props.navigation.navigate('Reestablecer')}
                            style={{color: 'black',marginTop:'10%',fontWeight:'bold',fontStyle:'italic',fontSize:15,marginTop:'15%'}}>
                            ¿Olvidó su clave?</Text>
                    

                    

                   
                        <Text 
                            onPress={()=>this.props.navigation.navigate('Registro')}
                            style={{color: 'black',marginTop:'2.5%',marginBottom:'3.5%',fontWeight:'bold',fontStyle:'italic',fontSize:15}}>
                            Crear cuenta</Text>

                       

                


                



                </View>
            
                    
                
            </SafeAreaView>
            )
        }

    

    
    

    

   

   
}







const styles = StyleSheet.create({
   
    input: {
        height: 30,
        borderBottomColor: '#1ed796',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        width: 142,
        alignItems: 'center',
        margin:5, 
        padding:5,
        fontSize: 15
    },

    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#B3F1C9',
        padding: 10,
        width:142,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginTop:'1%'
        
   

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
