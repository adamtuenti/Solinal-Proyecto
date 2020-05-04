import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView,FlatList, TouchableHighlight,Image, TextInput,Alert,TouchableOpacity } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
//import Form from 'react-bootstrap/Form'
import PasswordInputText from 'react-native-hide-show-password-input';
import {MaterialIcons,
MaterialCommunityIcons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

class ValidacionClave extends Component{


    constructor(props){

        
        super(props);
       // global.idUserGlobal = 5;
        //global.userNameGlobal = '';
        this.state = {
          codigo : '',
          pass:'',
         // password : '',
          loading: false,
          datos: [],
          mensajeError:'',
         // iconName : 'eye',
         // secureTextEntry:true,
          //idUser:'1',
          url: 'http://accountsolinal.pythonanywhere.com/api/user/'+this.props.navigation.state.params.idA,
        }
      
    }

    componentDidMount(){
        this.getDatos();
    }

    getDatos = () => {
        this.setState({loading:true})
        fetch(this.state.url)
        .then(res=>res.json())
        .then(res=>{ 
            //console.log('-');
            this.setState({
            
            datos: res,
            url: res.next,
            loading: false,   
            })
        })
    }
  



    myfun=()=>{
        const{pass,codigo}=this.state;
       // console.log(this.state.datos)

         if ( codigo === ''||pass=='') { this.setState({mensajeError:'Ingrese todos los campos!'}) }

         else{


             if(this.state.datos.user==codigo){

                 if(pass.length<7){
                     this.setState({mensajeError:'Clave muy corta!'})

                 }else{
                     this.setState({mensajeError:'Contrasena reestablecida!'})

                 }
                 

             }
             else{
                 this.setState({mensajeError:'Codigo erroneo!'})

             }
      

      
        
 

         }
      
      
    }

   


    

    render() {
        return ( 
            <SafeAreaView >
                <View style = {styles.container}>
                

                

                <Image
                        style={{width: '45%', height: 212, margin:25}}
                        source={{uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Recurso%201.png?raw=true'}}
                />


                <View style={{marginTop:'5%',width:'75%',alignItems:'center',alignContent:'center',marginBottom:'15%'}}>               
                <Text style={{fontSize:15,alignItems:'center'}}>Revise su correo e ingrese el codigo</Text>       
                </View>
               
                
                <TextInput
                                    style={styles.input}
                                    placeholder='Codigo de validacion'

                                    autoCapitalize="none"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={codigo => this.setState({ codigo })}

                />

                <TextInput
                                    style={styles.input}
                                    placeholder='Nueva clave'

                                    autoCapitalize="none"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={pass => this.setState({ pass })}

                />
                
               
                
               
                
                

               
                

                <Text style={{color:'red',marginTop:'1%',marginBottom:'5%'}}>{this.state.mensajeError}</Text>

                    

                

                <TouchableHighlight
                    style={styles.botonLogin} onPress={this.myfun}>
                    <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}> Cambiar clave </Text>
                </TouchableHighlight>
                    
                
                



        

                </View>

                <View style={{alignItems:'center',marginTop:'10%'}}>
                        
                            <Text>¿Ya reestableciste la clave? </Text>
                            <Text 
                            onPress={()=>this.props.navigation.navigate('Login')}
                            style={{color: '#23d697',marginTop:'1%'}}>
                            Inicia Sesión</Text>
                </View>

                
                    
               
            </SafeAreaView>
            )
        }

    

    
    

    

   

   
}


export default ValidacionClave;




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
        width: 175,
        alignItems: 'center',
        margin:5, 
        padding:5,
        fontSize: 15
    },

    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#35E119',
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
