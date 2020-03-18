import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Font } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class Main extends Component {

    async componentDidMount() {
        await Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        })
        this.setState({ loading: false })
      }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'lightgreen'}}>
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
        <Content>
          <Text>
            Contenido
          </Text>
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor:'white'}}>
          <Button vertical>
              <Icon name="apps" />
              <Text>Auditorías</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Calendario</Text>
            </Button>
            <Button vertical>
              <Icon active name="navigate" />
              <Text>Acción Correctiva</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>No Conformidad</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}