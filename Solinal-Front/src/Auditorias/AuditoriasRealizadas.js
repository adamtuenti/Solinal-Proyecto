import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Title, Content, Card, CardItem,  Button, Left, Right, Body,  Font } from 'native-base';
import { Icon } from 'react-native-elements'
import {StyleSheet,TouchableHighlight,Text,View,Dimensions} from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';
import FooterAuditoria from './../../shared/FooterAuditoria';
import HeaderBack from './../../shared/HeaderBack';
import EstadoCuenta from './../../shared/estadoCuenta';
import {MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';

export default class AuditoriasRealizadas extends Component {



      constructor(props) {
        super(props);
        this.state = {
            loading: false,
          datos: [],
          url: 'http://accountsolinal.pythonanywhere.com/api/auditoriasRealizadasGet/'+idEquipoGlobal,
          audioriasPendientes:[],
          urlAuditoriaPendiente:'http://accountsolinal.pythonanywhere.com/api/fechas_get/'+idUserGlobal,
        };
    }


     componentDidMount(){
        this.getDatos();
        this.getDatosPendientes();
    }

    getDatos = () => {

        this.setState({loading:true})
        fetch(this.state.url)

        .then(res=>res.json())
       
        .then(res=>{ 
       
            

            this.setState({
            datos: res,
            url: res.next,
            loading: false,    
            })
        })
    }

    getDatosPendientes=()=>{
        this.setState({loading:true})
        fetch(this.state.urlAuditoriaPendiente)

        .then(res=>res.json())
       
        .then(res=>{ 
       
            

            this.setState({
            audioriasPendientes: res,
            urlAuditoriaPendiente: res.next,
            loading: false,    
            })
        })

    }


    descargarPdf=(uriPdf)=>{
        alert(uriPdf)

      IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
          data: uriPdf,

          flags: 1,
          type: 'application/pdf'
       });
   
    }


  

    render() {
       // if(this.state.datos.numero_auditorias_pendientes<2){
        if(0<1){
        
        return (
            <View style={{height:Dimensions.get('window').height,flex:1,marginTop:25}}>


                <View  style={{flexDirection:'row',backgroundColor:'#1ED695',height:55,alignContent:'center'}}>
                <View style={{marginTop:5,flexDirection:'row',}}>
                    <View style={{width:'100%',flexDirection: 'row',alignItems:'center',marginLeft:10}}>
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('Main')}>       
                        <MaterialIcons name="arrow-back" size={32} color="white" />
                        </TouchableHighlight>         
                        <Text style={{color:'white', fontSize:21, marginLeft:10}}>
                            Auditorias
                        </Text>
                    </View>
                </View>
                </View>


                <Content padder style={{backgroundColor: '#f6f6f6'}}>

                    <EstadoCuenta/>

                    {this.state.datos.map((element,a)=>(

                                <View style={{flexDirection:'column',marginTop:'5%',backgroundColor:'#CDFBAB'}}>

                                <View style={{flexDirection:'row',borderRadius: 4,borderWidth: 1, borderColor: '#d6d7da',padding:'2%'}}>

                                    <View style={{alignItems:'center',width:'21%',flex:1,justifyContent:'center'}}>

                                    <TouchableHighlight onPress={()=>this.descargarPdf(element.pdfAuditoriaI)}>
                                    

                                        <Image   source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2047.png'}} 
                                        style={{height: 45, width: 31}}/>

                                    </TouchableHighlight>
                                    </View>


                                    <View style={{width:'76%',flexDirection:'column',marginTop:'2.5%',marginBottom:'2.5%',marginLeft:'3%'}}>

                                        <View style={{flexDirection:'row'}}>

                                            <Text style={{fontWeight:'bold'}}>Autor:</Text>
                                            <Text onPress={()=>this.descargarPdf(element.pdfAuditoriaI)} style={{marginLeft:'2%'}} >{element.nombre} {element.apellido}</Text>
                              
                                        </View>

                                        <View style={{flexDirection:'row'}}>

                                            <Text style={{fontWeight:'bold'}}>Fecha de la auditoria:</Text>
                                            <Text style={{marginLeft:'2%'}} >{element.fechaInicio}</Text>
                                                                                                                    
                                        </View>

                                        <View style={{flexDirection:'row'}}>
                                            <Text style={{fontSize:12,color:'#8C8C8B'}}>{element.norma} | </Text>
                                            <Text style={{marginLeft:'1%',fontSize:12,color:'#8C8C8B'}} >{element.pais}</Text>                                                                                                           
                                        </View>
                                    </View>
                                </View>

                                </View>

                    ))}


                    {this.state.audioriasPendientes.map((element,a)=>(

                                <View style={{flexDirection:'column',marginTop:'5%',backgroundColor:'#F0E292'}}>

                                <View style={{flexDirection:'row',borderRadius: 4,borderWidth: 1, borderColor: '#d6d7da',padding:'2%'}}>

                                    <View style={{alignItems:'center',width:'21%',flex:1,justifyContent:'center'}}>

                                    <TouchableHighlight >
                                    

                                        <Image   source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2047.png'}} 
                                        style={{height: 45, width: 31}}/>

                                    </TouchableHighlight>
                                    </View>


                                    <View style={{width:'76%',flexDirection:'column',marginTop:'2.5%',marginBottom:'2.5%',marginLeft:'3%'}}>

                                        <View style={{flexDirection:'row'}}>

                                            <Text style={{fontWeight:'bold'}}>Autor:</Text>
                                            <Text onPress={()=>this.descargarPdf(element.pdfAuditoriaI)} style={{marginLeft:'2%'}} >{nameGlobal}</Text>
                              
                                        </View>

                                        <View style={{flexDirection:'row'}}>

                                            <Text style={{fontWeight:'bold'}}>Fecha de la auditoria:</Text>
                                            <Text style={{marginLeft:'2%'}} >{element.fecha_inicio}</Text>
                                                                                                                    
                                        </View>

                                        <View style={{flexDirection:'column'}}>

                                            <Text style={{fontWeight:'bold'}}>Detalle de la auditoria</Text>
                                            <Text style={{width:'95%'}} >{element.detalle_auditoria}</Text>
                                                                                                                    
                                        </View>

                                       
                                    </View>
                                </View>

                                </View>

                    ))}


                </Content>
                 


                 <View style={{height:62, flexDirection: 'row',width:'100%'}}>
                <TouchableHighlight  style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2047.png'}} 
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
        );

    }
    else{
      
        return(
            
        this.props.navigation.navigate('Home')
        );
    }

    }
    
     
}



const styles = StyleSheet.create({
    

    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#1ED695',
        padding:5,
        width:142,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        
   

    }
  });
