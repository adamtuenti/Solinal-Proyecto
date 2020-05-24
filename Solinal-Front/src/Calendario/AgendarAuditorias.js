import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Title, Content, Card, CardItem, Footer, Button, Left, Right, Body,  Font , Arrow} from 'native-base';
import { Icon } from 'react-native-elements'
import {StyleSheet,TouchableHighlight,Text,View,Dimensions,TextInput} from 'react-native';

import HeaderBack from '../../shared/HeaderBack';
import EstadoCuenta from './../../shared/estadoCuenta';
import FooterCalendario from '../../shared/FooterCalendario';
import { Calendar } from 'react-native-calendars';
import {MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

export default class AgendarAuditorias extends Component {

  constructor(props){

    super(props);
    this.state = {
            isVisibleFI:false,
            isVisibleFF:false,
            isVisibleHI:false,
            isVisibleHF:false,
    
            fechaInicio:moment().format('DD-MM-YYYY'),
            fechaFin:moment().format('DD-MM-YYYY'),
            horaInicio:moment().format('HH:mm'),
            horaFin:moment().format('HH:mm'),

            detalleAuditoria:'',
            mensajeError:'',

            iconName : 'calendar-clock', //down
            textButton:'AGENDAR',
            envioMensaje:true, //lo mismo
    }
  }

  showDatePickerHI ()  {
     
    this.setState({
            isVisibleHI:true
        })
  };
 
 hideDatePickerHI = () => {
     // console.log("A date has been picked: ", moment(date).format('MMMM, Do YYYY HH:mm'));
    this.setState({
            isVisibleHI:false
        })
  };
 
  handleConfirmHI = (date) => {
    this.setState({horaInicio:moment(date).format('HH:mm')})
    this.hideDatePickerHI();
  };

  showDatePickerHF ()  {
    
    this.setState({
            isVisibleHF:true
        })
  };
 
 hideDatePickerHF = () => {
     // console.log("A date has been picked: ", moment(date).format('MMMM, Do YYYY HH:mm'));
    this.setState({
            isVisibleHF:false
        })
  };
 
  handleConfirmHF = (date) => {
    this.setState({horaFin:moment(date).format('HH:mm')})
    this.hideDatePickerHF();
  };


  showDatePickerFI ()  {
     
    this.setState({
            isVisibleFI:true
        })
  };
 
 hideDatePickerFI = () => {
     // console.log("A date has been picked: ", moment(date).format('MMMM, Do YYYY HH:mm'));
    this.setState({
            isVisibleFI:false
        })
  };
 
  handleConfirmFI = (date) => {
    this.setState({fechaInicio:moment(date).format('DD-MM-YYYY')})
    this.hideDatePickerFI();
  };

  showDatePickerFF ()  {
     
    this.setState({
            isVisibleFF:true
        })
  };
 
 hideDatePickerFF = () => {
     // console.log("A date has been picked: ", moment(date).format('MMMM, Do YYYY HH:mm'));
    this.setState({
            isVisibleFF:false
        })
  };
 
  handleConfirmFF = (date) => {
    this.setState({fechaFin:moment(date).format('DD-MM-YYYY')})
    this.hideDatePickerFF();
  };

  enviarFecha(){

     

    const {fechaInicio,fechaFin,horaInicio,horaFin,detalleAuditoria}= this.state
    var dataToSend = {detalle_auditoria: detalleAuditoria,fecha_inicio:fechaInicio,fecha_fin:fechaFin,hora_inicio:horaInicio,hora_fin:horaFin,id_usuario:idUserGlobal};
                    var formBody = [];
                    for (var key in dataToSend) {
                    var encodedKey = encodeURIComponent(key);
                    var encodedValue = encodeURIComponent(dataToSend[key]);
                    formBody.push(encodedKey + "=" + encodedValue);
                    }
                    formBody = formBody.join("&");
                    fetch('http://accountsolinal.pythonanywhere.com/api/fechaPost', {
                    method: "POST",//Request Type 
                    body: formBody,//post body 
                    headers: {//Header Defination 
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    })
                    .then((response) => response.json())
                    //If response is in json then in success
                    .then((responseJson) => {
                      //alert(JSON.stringify(responseJson));
                      if('error' in responseJson){
                        this.setState({mensajeError:'Consiga la cuenta premium!'})
                        
                        
                      }else{

                         let iconName = (this.state.envioMensaje)? "check":"calendar-clock";  //up:down
                         let textButton = (this.state.envioMensaje)? "AGENDADO":"AGENDAR";
                          this.setState({
                              envioMensaje:!this.state.envioMensaje, //--
                              iconName:iconName, //--
                              textButton:textButton
                          });
                      }
                       
                        //this.setState({mensajeError:'Usuari agregado!'})
                       // this.props.navigation.navigate('EquipoVacio')
                    })
  }




  

      

   
      render(){
          return(
              <View style={{height:Dimensions.get('window').height,flex:1,marginTop:25}}>
                
                <View  style={{flexDirection:'row',backgroundColor:'#1ED695',height:55,alignContent:'center'}}>
                <View style={{marginTop:5,flexDirection:'row',}}>
                    <View style={{width:'100%',flexDirection: 'row',alignItems:'center',marginLeft:10}}>
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('Main')}>       
                        <MaterialIcons name="arrow-back" size={32} color="white" />
                        </TouchableHighlight>         
                        <Text style={{color:'white', fontSize:21, marginLeft:10}}>
                            Agendar Auditorias
                        </Text>
                    </View>
                </View>
                </View>

                    <Content padder style={{backgroundColor: '#f6f6f6',width:'100%'}}>
                        <EstadoCuenta/>

                    <View style={{flexDirection:'column',marginBottom:10,marginTop:5,marginTop:'5%'}}>

                        <View style={{flexDirection:'column',marginBottom:10}}>






                        <View style={{flexDirection:'row',marginBottom:10,marginTop:5,alignContent:'center',alignItems:'center'}}>

                        <View style={{alignContent:'center',alignItems:'center'}}>
                        <Text>Fecha y hora de inicio</Text>
                        </View>


                        <View style={{flexDirection:'row',marginLeft:'8%'}}>


                        <View style={{marginLeft:'5%',  alignItems:'center',backgroundColor:'white',borderRadius: 5,padding:5, borderWidth: 1,borderColor: '#d6d7da',width:'38%'}}>

                        
                        <TouchableHighlight title="Show Date Picker" onPress={()=>this.showDatePickerFI()}><Text>{this.state.fechaInicio}</Text></TouchableHighlight>
                        
                        <DateTimePickerModal
                          isVisible={this.state.isVisibleFI}
                          mode="date"
                          onConfirm={this.handleConfirmFI}
                          onCancel={this.hideDatePickerFI}
                          is24Hour={true}
                        />
   
                           

                        </View>

                                                    
                           
                                <View style={{marginLeft:'2.5%',  alignItems:'center',backgroundColor:'white',borderRadius: 5,padding:5, borderWidth: 1,borderColor: '#d6d7da',width:'28%'}}>
                                <TouchableHighlight title="Show Date Picker" onPress={()=>this.showDatePickerHI()}><Text>{this.state.horaInicio}</Text></TouchableHighlight>
                        
                                <DateTimePickerModal
                                  isVisible={this.state.isVisibleHI}
                                  mode="time"
                                  onConfirm={this.handleConfirmHI}
                                  onCancel={this.hideDatePickerHI}
                                  is24Hour={true}
                                />

                                </View>


                            </View>
                        </View>







                    

                 <View style={{flexDirection:'row',marginBottom:10,marginTop:5,alignContent:'center',alignItems:'center'}}>

                        <View style={{alignContent:'center',alignItems:'center'}}>
                        <Text>Fecha y hora de cierre</Text>
                        </View>

                      
                        <View style={{flexDirection:'row',marginLeft:'8%'}}>


                        <View style={{marginLeft:'4.5%',  alignItems:'center',backgroundColor:'white',borderRadius: 5,padding:5, borderWidth: 1,borderColor: '#d6d7da',width:'38%'}}>


                            <TouchableHighlight title="Show Date Picker" onPress={()=>this.showDatePickerFF()}><Text>{this.state.fechaFin}</Text></TouchableHighlight>
                        
                                <DateTimePickerModal
                                  isVisible={this.state.isVisibleFF}
                                  mode="date"
                                  onConfirm={this.handleConfirmFF}
                                  onCancel={this.hideDatePickerFF}
                                  is24Hour={true}
                                />

                        </View>

                                                    
                            
                                <View style={{marginLeft:'2.5%',  alignItems:'center',backgroundColor:'white',borderRadius: 5,padding:5, borderWidth: 1,borderColor: '#d6d7da',width:'28%'}}>
                                <TouchableHighlight title="Show Date Picker" onPress={()=>this.showDatePickerHF()}><Text>{this.state.horaFin}</Text></TouchableHighlight>
                        
                                <DateTimePickerModal
                                  isVisible={this.state.isVisibleHF}
                                  mode="time"
                                  onConfirm={this.handleConfirmHF}
                                  onCancel={this.hideDatePickerHF}
                                  is24Hour={true}
                                />
                                </View>

                                
                            </View>

                            

                            
                        </View>

                        </View>


                       
                        <View style={{alignItems:'center',flexDirection:'column'}}>

                         <View style={{ alignItems:'center',backgroundColor:'white',borderRadius: 5,padding:5, borderWidth: 1,borderColor: '#d6d7da',width:'85%',marginTop:'2.5%'}}>
                                
                                <TextInput
                                    style={{ height: 30,borderBottomColor: '#1ed796',borderBottomWidth: 1,width: '95%',alignItems: 'center',fontSize: 15}}
                                    placeholder='Ingrese detalle de la auditoria'

                                    autoCapitalize="words"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={detalleAuditoria => this.setState({ detalleAuditoria })}

                              />
                         
                      
                      

                        </View>
                        <View>
                        <Text style={{color:'red',marginTop:'2%',marginBottom:'2%',alignContent:'center',fontSize:15,fontStyle:'italic',textAlign:'center'}}>{this.state.mensajeError}</Text>
                        </View>
                      
                      </View>

                        <View style={{alignItems:'center',marginTop:'10%'}}>
                        <TouchableHighlight style={{backgroundColor:'#c7f5d7',width:'50%',alignItems:'center',padding:'2%',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',}}onPress={()=>{this.enviarFecha()}}><View style={{flexDirection:'row',alignItems:'center'}}><MaterialCommunityIcons name={this.state.iconName} size={30} color={'green'}/><Text style={{marginLeft:'5%'}}>{this.state.textButton}</Text></View></TouchableHighlight>
                        </View>

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

                <TouchableHighlight  style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/calendario-active.png?raw=true'}}
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


const styles = StyleSheet.create({

  valores:{
    color:'green',
    fontSize:14,
    alignItems:'center'
  },
  descrip:{
    fontSize:14,
    alignItems:'center',
    padding:2,
    width:'100%',
    marginLeft:'1%'
    
  }
  });
