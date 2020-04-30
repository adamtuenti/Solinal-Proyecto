import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView,FlatList, TouchableHighlight,Image, TextInput,Alert,TouchableOpacity } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
import Form from 'react-bootstrap/Form'


import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends Component{


    constructor(props){

        
        super(props);
        global.idUserGlobal = 5;
        global.userNameGlobal = '';
        this.state = {
          username : '',
          password : '',
          loading: false,
          pacientes: [],
          //idUser:'1',
          url: 'http://accountsolinal.pythonanywhere.com/api/users'
        }
      
    }
  



    myfun=()=>{
        const{username,password}=this.state;
      

        const array1 = this.state.pacientes
        var idA = 1
        
        var bandera = 0

        array1.forEach(function(element){
            var name = element.username
            var pass = element.user
            var idU = element.user
            


            if (name==username){
                
             
                
                
                
                if (password == pass){
                    bandera = 1;
           
                   
                    idA = idU
                  
                   
                    
                    

                }
                else{
                    bandera = 2;
                    alert("clave mal ingresada");
                    

                }
            }

        }); 
        if(bandera==0){
            alert("Usuario no registrado");

        }
        else if(bandera==1){
            idUserGlobal = idA;
            userNameGlobal=username;
             this.props.navigation.navigate('Home')
            
          
            
            
        }
      

        


      
    }

    cambiarPestana(idUser,username){
       
        this.props.navigation.navigate('Home',{username:this.state.username,idUser})
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
                        style={{width: 125, height: 175, margin:25}}
                        source={{uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Recurso%201.png?raw=true'}}
                />


                
                
            
               
                
                <TextInput
                                    style={styles.input}
                                    placeholder='User'

                                    autoCapitalize="none"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={username => this.setState({ username })}

                />
                    
                
                <TextInput
                                    style={styles.input}
                                    placeholder='Password'

                                    autoCapitalize="none"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={password => this.setState({ password})}

                />

                    

                

                <TouchableHighlight
         style={styles.botonLogin} onPress={this.myfun}>
         <Text style={{fontWeight: 'bold',color:'white'}}> Conectar </Text>
        </TouchableHighlight>

        

                </View>

                
                    
                <View style = {styles.abajo}>
                    

                    

                    <Button
                        title="Crear cuenta" //cuando presiones crear cuenta se ira a su pestana. Posi
                        type="clear"
                        style={styles.botonLogin} 
                        onPress={()=>this.props.navigation.navigate('Registro')} 
                    
                    />
                    <Button
                        title="¿Olvidó su clave?"
                        type="clear"
                        onPress={()=>this.props.navigation.navigate('Reestablecer')} 
                        />

                

                <SocialIcon style={{height: 35,width:  175}}
                    title='Sign in With Google'
                    button
                    type='google'
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
    
      marginTop: "70%",
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
