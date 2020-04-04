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

export default class AuditoriasVacia extends Component {

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

                    <Card>
                        <CardItem>
                            <Body style={{alignItems: 'center'}}>
                                <Text style={{alignItems: 'center',fontSize: 15,}}>Mis Auditorías</Text>
                            </Body>
                        </CardItem>
                        <CardItem cardBody style={{alignItems: 'center'}}>
                            <Body style={{alignItems: 'center'}}>
                                <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2032.png'}} 
                                   style={{height: 200, 
                                           width: 200, 
                                           alignItems: 'center'}}/>
                            </Body>               
                        </CardItem>
                        <CardItem>
                            <Body style={{alignItems: 'center', width:24,fontWeight: 'bold'}}>
                                <Text style={{color: '#636363', fontSize: 12, alignItems: 'center'}}>Aún no has realizado ninguna auditoría</Text>
                                <Text style={{color: '#636363', fontSize: 12, alignItems: 'center'}}>Encuentra las normas actualizadas y empieza a auditar</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{alignItems: 'center'}}>
                            <Body style={{alignItems: 'center'}}>

                                <TouchableHighlight
                                    style={styles.botonLogin} onPress={()=>this.props.navigation.navigate('CrearAuditoria')}>
                                    <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}> Crear </Text>
                                    </TouchableHighlight>
                                                        
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                 <FooterAuditoria/>
            </Container>
        );
    }  
}



const styles = StyleSheet.create({
    

    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#1ed695',
        padding: 10,
        width:142,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        
   

    }
  });
