import React, { Component } from 'react';
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
          <Left />
          <Body>
          <Icon active name="carryout" style={{color: '#636363'}}/>
            <Title>Hola, Nombre Apellido</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>



        <Content padder>
          <Card transparent>
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
              <Body>
                <Text style={{color: '#636363'}}>Crear Equipo</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={{color: '#636363'}}>
                  Mis Auditorías
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={{color: '#636363'}}>Recomienda Solinal Auditor</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="apps" style={{color: '#636363'}}/>
              <Body>
                <Text style={{color: '#1ed695'}}>CONVIÉRTETE EN PREMIUM</Text>
                <Text style={{color: '#636363'}}>Vea estadísticas de cumplimiento, cierre no conformidades, o crea más checklists de auditoría</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" style={{color: '#1ed695'}}/>
              </Right>
             </CardItem>
           </Card>
        </Content>





        
        <Footer>
          <FooterTab style={{backgroundColor:'white'}}>
          
              
            <Button vertical>
              <Icon active name="carryout" style={{color: '#636363'}}/>
              <Text style={{color: '#636363',fontSize:10}}>Auditorias</Text>
            </Button>
            
          
            <Button vertical>
              <Icon name="calendar" style={{color: '#636363'}} />
              <Text style={{color: '#636363',fontSize:10}}>Calendario</Text>
            </Button>

            <Icon active name="carryout" style={{color: '#636363'}}/>
            <Button vertical>
              <Icon active name="carryout" style={{color: '#636363'}}/>
              <Text style={{color: '#636363',fontSize:10}}>Acción Correctiva</Text>
            </Button>
            <Button vertical>
              <Icon name="ei-bell" style={{color: '#636363'}}/>
              <Text style={{color: '#636363', fontSize:10}}>No Conformidad</Text>
            </Button>
            
          </FooterTab>
        </Footer>



      </Container>
    );
  }
}