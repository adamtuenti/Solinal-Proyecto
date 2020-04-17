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
import HeaderBack from './../../shared/HeaderBack';
import EstadoCuenta from './../../shared/estadoCuenta';
import FooterAuditoria from '../../shared/FooterAuditoria';

export default class AuditoriaFinalizada extends Component{

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
                <HeaderBack encabezado='Auditoria'/>
                <Content padder style={{backgroundColor: '#f6f6f6'}}>
                    <Card>
                        <CardItem>
                            <Body style={{alignItems: 'center'}}>
                                <Text style={{alignItems: 'center',fontSize: 15,}}>EXCELENTE</Text>
                            </Body>
                        </CardItem>
                        <CardItem cardBody style={{alignItems: 'center'}}>
                            <Body style={{alignItems: 'center'}}>
                                <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2062.png'}} 
                                   style={{height: 200, 
                                           width: 200, 
                                           alignItems: 'center'}}/>
                            </Body>               
                        </CardItem>
                        <CardItem>
                            <Body style={{alignItems: 'center', width:24,fontWeight: 'bold'}}>
                                <Text style={{color: '#636363', fontSize: 12, alignItems: 'center'}}>AUDITORÍA FINALIZADA</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{alignItems: 'center'}}>
                            <Body style={{alignItems: 'center'}}>

                                <TouchableHighlight
                                     onPress={()=>this.props.navigation.navigate()}>
                                    <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2063.png'}}></Image>
                                </TouchableHighlight>                    
                            </Body>
                            <Body style={{alignItems: 'center'}}>

                                <TouchableHighlight
                                     onPress={()=>this.props.navigation.navigate()}>
                                    <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2064.png'}}></Image>
                                </TouchableHighlight>                    
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    } 
}