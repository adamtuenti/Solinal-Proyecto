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
import { Ionicons } from '@expo/vector-icons';
import Footer from './../../shared/Footer';
import Header from './../../shared/Header';
import EstadoCuenta from './../../shared/estadoCuenta';

export default class CrearAuditoria extends Component {

    /*<Card style={{height: 200}}>
                        <CardItem>
                            <Body>
                                <Text style={{color: '#1ed695'}}>BUSCAR LISTAS DE AUDITORÍAS BASADA EN NORMAS</Text>
                            </Body>
                        </CardItem>
                        <CardItem cardBody style={{alignItems: 'center', paddingLeft: 10}}>
                            <Left style={{alignItems: 'center'}}>
                                <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2035.png'}} 
                                       style={{height: 100, 
                                               width: 100}}/>
                            </Left>
                            <Body style={{alignItems: 'center'}}>
                                <Text style={{color: '#636363'}}>
                                    Busca las normas que quieras auditar, ya sea por entidad privada o gobernamental, como el Codex Alimentarius, FDA, BRC, ISO International, y las que se encuentran vigentes en tu país.
                                </Text>
                            </Body>               
                        </CardItem>
                    </Card>*/

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
                <Header encabezado='Auditoria'/>
                <Content padder style={{backgroundColor: '#f6f6f6'}}>

                    <EstadoCuenta cantidad='0' tipoCuenta='GRATIS'/>
                    


                    <Card style={{height:175}}>

                    <View style={{flex: 1, flexDirection: 'column', height:100, justifyContent:'center', marginTop:5}}>

                        <Text style={{color: '#1ed695', marginLeft:10, fontSize:15}}>CREAR UNA NUEVA PLANTILLA</Text>

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
               


                    <Card style={{height:175}} onPress={()=>this.props.navigation.navigate('AuditoriasLista')}>

                    <View style={{flex: 1, flexDirection: 'column', height:100, justifyContent:'center', marginTop:5}}>

                        <Text style={{color: '#1ed695', marginLeft:10, fontSize:15}}>BUSCAR AUDITORÍAS BASADA EN NORMAS</Text>

                    <View style={{flexDirection: 'row', marginTop:5}}>    
                    

                    <View style={{margin:7}}>

                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')}>
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





                <Footer/>
            </Container>
        );
    }  
}