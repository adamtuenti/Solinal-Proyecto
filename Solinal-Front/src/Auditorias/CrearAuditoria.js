import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Title, Content, Card, CardItem,  Button, Left, Right, Body,  Font } from 'native-base';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'
/*import * as Font from 'expo-font';*/

import Footer from './../../shared/Footer';
import HeaderBack from './../../shared/HeaderBack';
import EstadoCuenta from './../../shared/estadoCuenta';
import FooterAuditoria from '../../shared/FooterAuditoria';
import {MaterialIcons,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';

export default class CrearAuditoria extends Component {


    async componentDidMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          /*Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")*/
        });
        this.setState({ isReady: true });
      }

    render() {
        return (
            <Container>
                 <View  style={{flexDirection:'row',backgroundColor:'#1ED695',height:'11%',paddingTop:'8%',alignContent:'center'}}>
                <View style={{marginTop:'4.5%',flexDirection:'row',}}>
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

                    <EstadoCuenta cantidad='0' tipoCuenta='GRATIS'/>
                    


                    <Card style={{height:175,borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da'}}>

                    <View style={{flex: 1, flexDirection: 'column', height:100, justifyContent:'center', marginTop:3}}>

                        <Text style={{color: '#1ED695', marginLeft:10, fontSize:15}}>CREAR UNA NUEVA PLANTILLA</Text>

                    <View style={{flexDirection: 'row', marginTop:5}}>    
                    

                    <View style={{margin:7}}>
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2036.png'}} style={{height: 100, 
                                        width: 100,
                                        paddingLeft: 10}}/>
                        </TouchableHighlight>
                        
                    </View>
                    <View style={{flex: 1, flexDirection: 'column',marginLeft:5}}>
                            
                            <Text style={{color: '#636363', fontSize: 14}}>Puedes crear tus propias listas de inspección, ideal para auditorías personalizadas, auditorías a proveedores, checklists de verificación basado en la actividad del negocio.</Text>
                    </View>
                    </View>                  
                </View>

                </Card>
               


                    <Card style={{height:175,borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da'}} onPress={()=>this.props.navigation.navigate('AuditoriasLista')}>

                    <View style={{flex: 1, flexDirection: 'column', height:100, justifyContent:'center', marginTop:3}}>

                        <Text style={{color: '#1ED695', marginLeft:10, fontSize:15}}>BUSCAR AUDITORÍAS BASADA EN NORMAS</Text>

                    <View style={{flexDirection: 'row', marginTop:5}}>    
                    

                    <View style={{margin:7}}>

                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasLista')}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2035.png'}} 
                                       style={{height: 100, 
                                               width: 100}}/>
                        </TouchableHighlight>
                        
                        
                    </View>
                    <View style={{flex: 1, flexDirection: 'column',marginLeft:5}}>
                        
                            
                            <Text style={{color: '#636363', fontSize: 14}}>Busca las normas que quieras auditar, ya sea por entidad privada o gobernamental, como el Codex Alimentarius, FDA, BRC, ISO International, y las que se encuentran vigentes en tu país.</Text>
                        

                    </View>
                    </View>

                   
                </View>

                </Card>



                </Content>





                <FooterAuditoria/>
            </Container>
        );
    }  
}