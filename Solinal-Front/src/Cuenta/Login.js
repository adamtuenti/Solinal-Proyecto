import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView,FlatList, TouchableHighlight,Image, TextInput,Alert,TouchableOpacity } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
//import Form from 'react-bootstrap/Form'
import PasswordInputText from 'react-native-hide-show-password-input';
import {MaterialIcons,
MaterialCommunityIcons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends Component{


    constructor(props){

        
        super(props);
        global.idUserGlobal = 5;
        global.nameGlobal = '';
        global.userNameGlobal='';
        this.state = {
          username : '',
          password : '',
          loading: false,
          pacientes: [],
          mensajeError:'',
          iconName : 'eye',
          secureTextEntry:true,
          //idUser:'1',
          url: 'http://accountsolinal.pythonanywhere.com/api/users'
        }
      
    }
  



    myfun=()=>{
        const{username,password}=this.state;

         if ( username === ''||password=='') { this.setState({mensajeError:'Ingrese usuario y clave!'}) }

         else{
      

        const array1 = this.state.pacientes
        var idA = 1
        var nameUser = ''
        var user = ''
        
        var bandera = 0

        array1.forEach(function(element){
            var name = element.username
            var pass = element.user
            var idU = element.user
            var nameU = element.first_name
            
            


            if (name==username){

                if (password == pass){
                    bandera = 1;
           
                   
                    idA = idU
                    nameUser = nameU
                    user = name
                  
                   
                    
                    

                }
                else{
                    bandera = 2;
                  //  this.setState({mensajeError:'Clave mal ingresada!'})
                    

                }
            }

        }); 
        if(bandera==0){
            this.setState({mensajeError:'Usuario no registrado!'})

        }
        else if(bandera==2){
            this.setState({mensajeError:'Clave mal ingresada!'})
            
        }
        
        else if(bandera==1){
            idUserGlobal = idA;
            nameGlobal=nameUser;
            userNameGlobal=user;
             this.props.navigation.navigate('Home')
            
          
            
            
        }

         }
      
      
    }

    mostrarClave =()=>{
        let iconName = (this.state.secureTextEntry)? "eye-off":"eye";
        this.setState({
            secureTextEntry:!this.state.secureTextEntry,
            iconName:iconName
        });

    }


    componentDidMount(){
        this.getPacientes();
    }

    getPacientes = () => {
        this.setState({loading:true})
        fetch(this.state.url)
        .then(res=>res.json())
        .then(res=>{ 
            //console.log(res);
            this.setState({
            pacientes: res,
            url: res.next,
            loading: false,    
            })
        })
    }

    render() {
        return ( 
            <SafeAreaView >
                <View style = {styles.container}>
                

                

                <Image
                        style={{width: '45%', height: 212, margin:25}}
                        source={{uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Recurso%201.png?raw=true'}}
                />


                
                
            
               
                
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
                    style={styles.botonLogin} onPress={this.myfun}>
                    <Text style={{fontWeight: 'bold', color: '#515254'}}> CONECTAR </Text>
                </TouchableHighlight>
                    
                
                



        

                </View>

                
                    
                <View style = {styles.abajo}>

                        <Text 
                            onPress={()=>this.props.navigation.navigate('Reestablecer')}
                            style={{color: 'black',marginTop:'10%'}}>
                            ¿Olvidó su clave?</Text>
                    

                    

                   
                        <Text 
                            onPress={()=>this.props.navigation.navigate('Registro')}
                            style={{color: 'black',marginTop:'2.5%',marginBottom:'3.5%'}}>
                            Crear cuenta</Text>

                       

                

                <SocialIcon style={{height: 35,width:  185}}
                    title='Sign in With Facebook'
                    button
                    type='facebook'
                    />

                




                    
                </View>
            </SafeAreaView>
            )
        }

    

    
    

    

   

   
}


export default Login;




const styles = StyleSheet.create({
    container: {
      
      
      
      
      alignItems: 'center',
      justifyContent: 'center',
    
      marginTop: "50%",
      margin:10
    },
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
