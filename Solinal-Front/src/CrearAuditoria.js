import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body,  Font } from 'native-base';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'
/*import * as Font from 'expo-font';*/
import { Ionicons } from '@expo/vector-icons';

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
                <Header style={{backgroundColor: '#1ed695', height:75}}>
                    <Left>
                        <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%201.png'}}
                            style= {{height: 40,
                                     width: 40}}>
                        </Image>
                    </Left>
                    <Body>
                        <Title>Auditorías</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%205.png'}}
                               style= {{height: 20,
                                     width: 30}}/>
                        </Button>
                    </Right>
                </Header>
                <Content padder style={{backgroundColor: '#f6f6f6'}}>
                    <Card style={{height: 200}}>
                        <CardItem>
                            <Body>
                                <Text style={{color: '#1ed695'}}>CREAR UNA NUEVA PLANTILLA</Text>
                            </Body>
                        </CardItem>
                        <CardItem cardBody style={{alignItems: 'center'}}>
                            <Left style={{alignItems: 'center', paddingLeft: 10}}>
                                <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2036.png'}} 
                                       style={{height: 100, 
                                        width: 100,
                                        paddingLeft: 10}}/>
                            </Left>
                            <Body style={{alignItems: 'center'}}>
                                <Text style={{color: '#636363'}}>
                                    Puedes crear tus propias listas de inspección, ideal para auditorías personalizadas, auditorías a proveedores, checklists de verificación basado en la actividad del negocio
                                </Text>
                            </Body>               
                        </CardItem>
                    </Card>
                    <Card style={{height: 200}}>
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
                                    Busca las normas que quieras auditar, ya sea por entidad privada o gobernamental, como el Codex Alimentarius, FDA, BRC, ISO International, y las que se encuentran vigentes en tu país
                                </Text>
                            </Body>               
                        </CardItem>
                    </Card>
                </Content>
                <Footer style={{height:63}}>
                    <FooterTab style={{backgroundColor: '#f6f6f6'}}>
                        <Button vertical>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%207.png'}}
                                   style= {{height: 29,
                                            width: 23}}>
                            </Image>
                            <Text style={{color: '#636363',fontSize:10}}>Auditorias</Text>
                        </Button>
                        <Button vertical>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2012.png'}}
                                   style= {{height: 25,
                                            width: 25}}>
                            </Image>
                            <Text style={{color: '#636363',fontSize:10}}>Calendario</Text>
                        </Button>
                        <Button vertical>                  
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2013.png'}}
                                   style= {{height: 25,
                                            width: 25}}>
                            </Image>
                        </Button>
                        <Button vertical>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2014.png'}}
                                   style= {{height: 25,
                                            width: 25}}>
                            </Image>
                            <Text style={{color: '#636363',fontSize:10}}>Acción Correctiva</Text>
                        </Button>
                        <Button vertical>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2015.png'}}
                                   style= {{height: 25,
                                            width: 25}}>
                            </Image>
                            <Text style={{color: '#636363', fontSize:10}}>No Conformidad</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }  
}