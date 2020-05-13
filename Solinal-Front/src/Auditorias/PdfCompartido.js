import React, { Component } from 'react';
import { Container,  Title, Content, Card, CardItem,  Button, Left, Right, Body,  Font } from 'native-base';
import { Icon,Divider, } from 'react-native-elements'
import {StyleSheet,TouchableHighlight,Text,View,Image,FlatList,ListItem,Dimensions } from 'react-native'
/*import * as Font from 'expo-font';*/
import { Ionicons } from '@expo/vector-icons';

import {MaterialIcons,MaterialCommunityIcons,Feather} from '@expo/vector-icons';
import HeaderBack from '../../shared/HeaderBack';
import EstadoCuenta from './../../shared/estadoCuenta';
//import Toast from 'react-native-simple-toast';
//import Toast from 'react-native-tiny-toast'
import * as FileSystem from 'expo-file-system';
import * as MailComposer from 'expo-mail-composer';

export default class PdfCompartido extends Component {


    constructor(props){
        super(props);
        this.state = {
          loading: false,
          equipo: [],
          mensajeError:'',
          urlEquipo: 'http://accountsolinal.pythonanywhere.com/api/equipo/'+idUserGlobal,
          file: this.props.navigation.state.params.file,
          cFile: this.props.navigation.state.params.cFile,
          //forceUpdateHandler : this.forceUpdateHandler.bind(this)
        }  
    }

    componentDidMount(){
        this.getMiembrosEquipo();
    }

    forceUpdateHandler(){
    this.forceUpdate();
  };

    getMiembrosEquipo = () => {
        this.setState({loading:true})
        fetch(this.state.urlEquipo)
        .then(res=>res.json())
        .then(res=>{ 
            console.log(res);
            this.setState({
            equipo: res,
            urlEquipo: res.next,
            loading: false,    
            })
        })
    }


    eliminarIntegrante(correoIntegrante){
        

        var dataToSend = {correoIntegrante: correoIntegrante};
                    var formBody = [];
                    for (var key in dataToSend) {
                    var encodedKey = encodeURIComponent(key);
                    var encodedValue = encodeURIComponent(dataToSend[key]);
                    formBody.push(encodedKey + "=" + encodedValue);
                    }
                    formBody = formBody.join("&");
                    fetch('http://accountsolinal.pythonanywhere.com/api/eliminarIntegrante', {
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
                        
                        console.log('eliminado')

                    })
                    
    }

    mostrarPdf(){
        console.log('a')
        console.log(this.state.cFile)
        console.log(this.state.file)
        FileSystem.getContentUriAsync(this.state.file).then(cUri => {
      console.log(cUri);
      this.setState({cFile:cUri.uri})

      console.log(this.state.cFile)
    });
    }

    mailComposer(mailto){
        console.log('sendmail')
        MailComposer.composeAsync({
            recipients: [mailto],
            subject: 'Informa Auditoría',
            body: 'Informe de la auditoría',
            attachments: [this.state.file]
        });
    }
 
      
    render(){
        return(
            <Container style={{height:Dimensions.get('window').height}}>
                <View  style={{flexDirection:'row',backgroundColor:'#1ED695',height:55,alignContent:'center'}}>
                <View style={{marginTop:5,flexDirection:'row',}}>
                    <View style={{width:'100%',flexDirection: 'row',alignItems:'center',marginLeft:10}}>
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('Main')}>       
                        <MaterialIcons name="arrow-back" size={32} color="white" />
                        </TouchableHighlight>         
                        <Text style={{color:'white', fontSize:21, marginLeft:10}}>
                            Equipo
                        </Text>
                    </View>
                </View>
                </View>
                    
                <Content padder style={{backgroundColor: '#f6f6f6'}}>

                

                
        <View style={{flex: 1, flexDirection: 'row', margin:5,padding:5, backgroundColor:'white',borderColor: '#d6d7da',borderRadius: 4,
        borderWidth: 1}}>
            <View style={{ flexDirection:'column',marginLeft:'2%'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color: '#636363',fontSize:15}}>Equipo de:</Text>
                    <Text style={{color: '#2ba855', marginLeft:'5%',fontSize:15}}>{nameGlobal}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color: '#2ba855',fontSize:15}}>{this.state.equipo.length}/5 </Text>
                    <Text style={{color: '#2ba855',marginLeft:5,fontSize:15}}>miembros de equipo</Text>
                </View>
                
            </View>
        
        </View>

       

       


        <View style={{marginTop:'2%',marginBottom:'2%'}}>

        {this.state.equipo.map(a=>

        <Card style={{borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',padding:'2%'}}>
        <View style={{flexDirection:'row'}}>
        <View>
        <Text style={{fontWeight:'bold',marginLeft:'1%',fontSize:15}}>{a.nombreIntegrante} {a.apellidoIntegrante}</Text>
        <Text style={{marginLeft:'1%',fontSize:13.5,fontStyle:'italic'}}>{a.correoIntegrante}</Text>
        </View>
        <View style={{flexDirection:'row-reverse',flex:1,alignItems:'center'}}>
        <Feather onPress={()=>this.mailComposer(a.correoIntegrante)} name="send" size={30}/>
        </View>
        </View>
        </Card>
        )}

       

        </View>

   
                    
                    
                    <View style={{alignItems: 'center',marginTop:'15%'}}>
                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/team.png?raw=true'}} 
                                        style={{height: 150, 
                                           width: 150, 
                                           alignItems: 'center'}}/>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableHighlight style={styles.botonLogin}
                            onPress={()=>this.validarInvitaciones()}>
                            <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}> INVITAR MIEMBROS </Text>
                        </TouchableHighlight>                        
                    </View>
                </Content>
            </Container>
        )
    }  
}


const styles = StyleSheet.create({
    

    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#1ed695',
        padding: 10,
        width:175,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginTop:35,

    }
})