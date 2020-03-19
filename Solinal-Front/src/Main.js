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
            <Title>Hola, Nombre Apellido</Title>
          </Body>
          <Right>
            <Button transparent>
            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%205.png'}}
                            style= {{height: 20,
                                     width: 30}}>
            </Image>
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
            <CardItem bordered>
              <Left>
              <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%206.png'}}
                            style= {{height: 30,
                                     width: 40}}>
              </Image>
              </Left>
              <Body>
                <Text style={{color: '#636363'}}>Crear Equipo</Text>
              </Body>
              <Right />
            </CardItem>
            <CardItem bordered>
              <Left>
              <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%207.png'}}
                            style= {{height: 30,
                                     width: 40}}>
              </Image>
              </Left>
              <Body>
                <Text style={{color: '#636363'}}>
                  Mis Auditorías
                </Text>
              </Body>
              <Right />
            </CardItem>
            <CardItem bordered>
              <Left>
              <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%208.png'}}
                            style= {{height: 30,
                                     width: 40}}>
              </Image>
              </Left>
              <Body>
                <Text style={{color: '#636363'}}>Recomienda Solinal Auditor</Text>
              </Body>
              <Right />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%209.png'}}
                            style= {{height: 60,
                                     width: 80}}>
              </Image>
              <Body>
                <Text style={{color: '#1ed695'}}>CONVIÉRTETE EN PREMIUM</Text>
                <Text style={{color: '#636363'}}>Vea estadísticas de cumplimiento, cierre no conformidades, o crea más checklists de auditoría</Text>
              </Body>
              <Right>
              <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2010.png'}}
                            style= {{height: 53,
                                     width: 30}}>
              </Image>
              </Right>
             </CardItem>
           </Card>
        </Content>

        
        <Footer>
          <FooterTab style={{backgroundColor: '#f6f6f6'}}>
          
              
            <Button onPress={()=>this.props.navigation.navigate('AuditoriasVacia')}>
            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2011.png'}}
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