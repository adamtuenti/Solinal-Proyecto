import React, { Component } from 'react';

import {Icon, Container, Item, Input, Button, Title, Content, Card, CardItem, CheckBox, List,  Left, Right, Body,  Font } from 'native-base';
import { Divider } from 'react-native-elements'
import {StyleSheet,Image ,TouchableHighlight,Text,View,TextInput,TouchableOpacity,Dimensions} from 'react-native'
/*import * as Font from 'expo-font';*/

import { ListItem } from 'react-native-elements';
import {MaterialIcons,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';
import HeaderBack from '../../shared/HeaderBack';

class InvitarMiembros extends Component {


      constructor(props) {
        super(props);
        

        this.state = {
  
            email:'',
            mensajeError:'',
            loading: false,
          usuarios: [],
         
          url: 'http://accountsolinal.pythonanywhere.com/api/users'
        };
    }

    componentDidMount(){
        this.getUsuarios();
    }

    getUsuarios = () => {
        this.setState({loading:true})
        fetch(this.state.url)
        .then(res=>res.json())
        .then(res=>{ 
            //console.log(res);
            this.setState({
            usuarios: res,
            url: res.next,
            loading: false,    
            })
        })
    }



     agregarIntegrante=()=> {
          

        const { email } = this.state;

        
        if (email=='' ) { this.setState({mensajeError:'Ingrese un correo valido!'}) }

        else{
            
            const usuarios = this.state.usuarios
            var userIdInvitado = ''
            usuarios.forEach(function(element){
                var correo = element.email
                if (email==correo){
                    userIdInvitado= element.user;
                }
            });

            console.log(userIdInvitado)
            
                var dataToSend = {correoIntegrante: email,idEquipo:idEquipoGlobal,idUsuario:userIdInvitado};
                    var formBody = [];
                    for (var key in dataToSend) {
                    var encodedKey = encodeURIComponent(key);
                    var encodedValue = encodeURIComponent(dataToSend[key]);
                    formBody.push(encodedKey + "=" + encodedValue);
                    }
                    formBody = formBody.join("&");
                    fetch('http://accountsolinal.pythonanywhere.com/api/agregarIntegrante', {
                    method: "POST",//Request Type 
                    body: formBody,//post body 
                    headers: {//Header Defination 
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    })
                    .then((response) => response.json())
                    //If response is in json then in success
                    .then((responseJson) => {
                    //console.log(responseJson);

                    
                        if("idEquipo"  in responseJson){
                            this.setState({mensajeError:'Agregado!'})
                          //  alert(userIdInvitado)

                            var dataToSend = {idEquipo:idEquipoGlobal,idUsuario:userIdInvitado}; 
                                var formBody = [];
                                for (var key in dataToSend) {
                                var encodedKey = encodeURIComponent(key);
                                var encodedValue = encodeURIComponent(dataToSend[key]);
                                formBody.push(encodedKey + "=" + encodedValue);
                                }
                                formBody = formBody.join("&");
                                fetch('http://accountsolinal.pythonanywhere.com/api/actualizarIntegrante', {
                                method: "POST",//Request Type 
                                body: formBody,//post body 
                                headers: {//Header Defination 
                                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                                },
                                })
                                .then((response) => response.json())
                                .then((responseJson) => {
                                   
                                    console.log(responseJson)
                                  
                                
                                
                                })

                        }
                        else if("non_field_errors" in responseJson){
                            this.setState({mensajeError:'Ya estaba agregado previamente!'})
                        }
                        else{
                           this.setState({mensajeError:'El correo no esta registrado!'})
                        }
                    
                    })

                
            }
      
    }


    





  
    render() {
     
        return (
            <View style={{height:Dimensions.get('window').height,flex:1,marginTop:25}}>
            
                <View  style={{flexDirection:'row',backgroundColor:'#1ED695',height:55,alignContent:'center'}}>
                <View style={{marginTop:5,flexDirection:'row',}}>
                    <View style={{width:'100%',flexDirection: 'row',alignItems:'center',marginLeft:10}}>
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('EquipoVacio')}>       
                        <MaterialIcons name="arrow-back" size={32} color="white" />
                        </TouchableHighlight>         
                        <Text style={{color:'white', fontSize:21, marginLeft:10}}>
                            Invitar Miembros
                        </Text>
                    </View>
                </View>
                </View>


            <Content>

            <Card style={{marginBottom:'10%',marginTop:'5%',marginLeft:'2.5%',width:'95%',alignItems:'center',alignContent:'center',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da'}}>

            <View style={{alignItems:'center',padding:'2%'}} >

            <Text style={{marginLeft:'2%', fontWeight:'bold',textAlign:'center'}}>Escriba el correo del usuario que desea que forme parte de su equipo.</Text>
            </View>


            </Card>

            
                    
                
                    
                        <View style={{alignItems:'center',marginTop:'5%'}}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <AntDesign size={30} style={{marginTop:'2.5%'}}  name="sharealt" />
                             <TextInput style={styles.input} placeholder='Ingrese correo' placeholderTextColor='lightgrey' autoCapitalize='none'
                                    onChangeText={email => this.setState({ email })}/>
                        </View>
                        <Text style={{color:'red',marginTop:'2%',marginBottom:'1%',marginLeft:'5%',fontStyle:'italic',fontWeight:'bold',textAlign:'center'}}>{this.state.mensajeError}</Text>
                        </View>
                        
              
                    
                    <View style={{alignItems: 'center'}}>
                         <TouchableOpacity style={styles.botonEnviar}  onPress={this.agregarIntegrante}>
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

export default InvitarMiembros;

/*
                    <View style={{justifyContent: 'flex-end',flex:1}}>
                     <View style={{height:63, flexDirection: 'row',width:'100%',justifyContent: 'flex-end',flex:1}}>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/autoria.png?raw=true'}} style={{height: 35, width: 25,}}/>
                    <Text style={styles.letra}>Auditorias</Text>
                    </View>
                </TouchableHighlight>

                 <TouchableHighlight onPress={()=>this.props.navigation.navigate('CalendarioVacia')} style={styles.botones}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2014.png'}}
                                   style= {{height: 35,
                                            width: 28}}>
                            </Image>
               <Text style={styles.letra}>Accion Correctiva</Text>
                    </View>
                </TouchableHighlight>    

                 <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones1}>
                    <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'8%'}}>
                           <MaterialIcons name="home" size={50} color='#1ED695' />
                            


                    </View>
                </TouchableHighlight>


                <TouchableHighlight onPress={()=>this.props.navigation.navigate('CalendarioPrograma')} style={styles.botones}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/calendario.png?raw=true'}}
                                   style= {{height: 35,
                                            width: 32}}>
                            </Image>
                    <Text style={styles.letra}>Calendario</Text>
                    </View>
                </TouchableHighlight>
          

                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2015.png'}}
                                   style= {{height: 35,
                                            width: 34}}>
                            </Image>
               <Text style={styles.letra}>No Conformidad</Text>
                    </View>
                </TouchableHighlight>
                   
                       
                     
                     
               
                </View>
             
            </View>*/
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



    
    
