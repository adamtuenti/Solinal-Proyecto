import React, { Component } from 'react';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Font } from 'native-base';
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
        <Header style={{backgroundColor: '#1ed695'}}>
          <Left />
          <Body>
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
              <Left>
              <Text style={{color: '#2ba855'}}>
                  0 
                </Text>
                <Text style={{color: '#636363'}}>
                     el número de auditorías realizadas
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
              <Icon name="apps" style={{color: '#636363'}}/>
              <Text style={{color: '#636363'}}>Auditorías</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" style={{color: '#636363'}} />
              <Text style={{color: '#636363'}}>Calendario</Text>
            </Button>
            <Button vertical>
              <Icon active name="navigate" style={{color: '#636363'}}/>
              <Text style={{color: '#636363'}}>Acción Correctiva</Text>
            </Button>
            <Button vertical>
              <Icon name="person" style={{color: '#636363'}}/>
              <Text style={{color: '#636363'}}>No Conformidad</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}