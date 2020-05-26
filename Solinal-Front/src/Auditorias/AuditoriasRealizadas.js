import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Title, Content, Card, CardItem,  Button, Left, Right, Body,  Font } from 'native-base';
import { Icon } from 'react-native-elements'
import {StyleSheet,TouchableHighlight,Text,View,Dimensions} from 'react-native'
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
          url: 'http://accountsolinal.pythonanywhere.com/api/user/'+idUserGlobal
        };
    }


     componentDidMount(){
        this.getDatos();
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

                    <View style={{flexDirection:'column',marginTop:'5%'}}>

                    <View style={{flexDirection:'row',borderRadius: 4,borderWidth: 1, borderColor: '#d6d7da',padding:'2%'}}>
       
 


                        <View style={{alignItems:'center',width:'25%',marginTop:'5%'}}>

                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2047.png'}} 
                            style={{height: 45, width: 31}}/>
                        </View>


                        <View style={{width:'75%',flexDirection:'column',marginTop:'5%'}}>

                            <View style={{flexDirection:'row'}}>

                                <Text style={{fontWeight:'bold'}}>Autor:</Text>
                                <Text style={{marginLeft:'2%'}} >Adam Navarrete</Text>
                                
                               

                               
                            </View>

                            <View style={{flexDirection:'row'}}>

                                <Text style={{fontWeight:'bold'}}>Fecha de la auditoria:</Text>
                                <Text style={{marginLeft:'2%'}} >2015-10-12</Text>
                                
                               

                               
                            </View>

                             <View style={{flexDirection:'row'}}>

                                <Text style={{fontSize:12,color:'#8C8C8B'}}>Norma | </Text>
                                <Text style={{marginLeft:'1%',fontSize:12,color:'#8C8C8B'}} >Pais</Text>
                                
                               

                               
                            </View>



                        </View>


                    </View>


                    </View>
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
            alert(this.state.datos.auditoriasPendientes),
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
