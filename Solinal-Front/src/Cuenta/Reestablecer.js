import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView,FlatList, TouchableHighlight,Image, TextInput,Alert,TouchableOpacity } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
//import Form from 'react-bootstrap/Form'
import PasswordInputText from 'react-native-hide-show-password-input';
import {MaterialIcons,
MaterialCommunityIcons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

class Reestablecer extends Component{


    constructor(props){

        
        super(props);
       // global.idUserGlobal = 5;
        //global.userNameGlobal = '';
        this.state = {
          email : '',
         // password : '',
          loading: false,
          pacientes: [],
          mensajeError:'',
         // iconName : 'eye',
         // secureTextEntry:true,
          //idUser:'1',
          url: 'http://accountsolinal.pythonanywhere.com/api/users'
        }
      
    }
  



    myfun=()=>{
        const{email}=this.state;
        

        if ( email === '') { this.setState({mensajeError:'Ingrese su e-mail!'}) }

        else{
        const array1 = this.state.pacientes
        var idA = 1

        var bandera = 0

        array1.forEach(function(element){
            var correo = element.email
            var codigo = element.user
            var idU = element.user

            if (correo==email){
                    bandera = 1;                   
                    idA = idU

            }

        }); 
        if(bandera==0){
            this.setState({mensajeError:'Email no registrado!'})

        }
        else if(bandera==1){

            
            var dataToSend = {correo:email};
            var formBody = [];
            for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            fetch('http://accountsolinal.pythonanywhere.com/api/correo_password', {
            method: "POST",//Request Type 
            body: formBody,//post body 
            headers: {//Header Defination 
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            })
             .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                console.log(responseJson)
              //  alert(responseJson)
            this.props.navigation.navigate('ValidacionClave',{idA})
            })
   
    

         }
            
            
        
        
    }
      
      
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


                <View style={{marginTop:'5%',width:'75%',alignItems:'center',alignContent:'center',marginBottom:'15%'}}>               
                <Text style={{fontSize:15,alignItems:'center',textAlign:'center'}}>Escriba su correo para reestablecer su clave</Text>       
                </View>
               
                
                <TextInput
                                    style={styles.input}
                                    placeholder='E-mail'

                                    autoCapitalize="none"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={email => this.setState({ email })}

                />
                
               
                
               
                
                

               
                

                <Text style={{color:'red',marginTop:'1%',marginBottom:'5%'}}>{this.state.mensajeError}</Text>

                    

                

                <TouchableHighlight
                    style={styles.botonLogin} onPress={this.myfun}>
                    <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}> Enviar e-mail </Text>
                </TouchableHighlight>
                    
                
                



        

                </View>

                
                    
               
            </SafeAreaView>
            )
        }

    

    
    

    

   

   
}


export default Reestablecer;




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
