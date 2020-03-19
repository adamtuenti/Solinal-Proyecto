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

export default class Main extends Component {

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
                <Header style={{backgroundColor: '#1ed695',height:75}}>
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
                    <Card transparent style={{backgroundColor: '#f6f6f6'}}>
                        <CardItem>
                            <Left style={{width:175}}>
                                <Text style={{color: '#636363'}}>
                                Auditorias realizadas: #      
                                    <Text style={{color: '#2ba855'}}>
                                    0
                                    </Text>
                                </Text>
                            </Left>
                            <Body />
                            <Right>
                                <Text style={{color: '#2ba855'}}>
                                CUENTA GRATUITA
                                </Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body style={{alignItems: 'center'}}>
                                <Text style={{alignItems: 'center'}}>Mis Auditorías</Text>
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
                            <Body style={{alignItems: 'center'}}>
                                <Text style={{color: '#636363', fontSize: 8, alignItems: 'center'}}>Aún no has realizado ninguna auditoría</Text>
                                <Text style={{color: '#636363', fontSize: 8, alignItems: 'center'}}>Encuentra las normas actualizadas y empieza a auditar</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{alignItems: 'center'}}>
                            <Body style={{alignItems: 'center'}}>
                                <Button style={{backgroundColor:'#1ed695', alignItems: 'center', width: 200}}>
                                    <Text style={{color: 'white', textAlign: 'center'}}>CREAR</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    <FooterTab style={{backgroundColor: '#f6f6f6'}}>
                        <Button vertical>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%207.png'}}
                                   style= {{height: 25,
                                            width: 25}}>
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