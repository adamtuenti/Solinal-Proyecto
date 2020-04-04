import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Title, Content, Card, CardItem, Footer, Button, Left, Right, Body,  Font } from 'native-base';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import Header from '../../shared/Header';
import AuditoriasProgramadas from '../../shared/AuditoriasProgramadas';
import FooterCalendario from '../../shared/FooterCalendario';

export default class CalendarioVacia extends Component {

    async componentDidMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          /*Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")*/
        });
        this.setState({ isReady: true });
      }

      render(){
          return(
              <Container>
                    <Header encabezado='Calendario'/>
                    <Content padder style={{backgroundColor: '#f6f6f6'}}>
                        <AuditoriasProgramadas cantidad='0' tipoCuenta='GRATIS'/>
                        <Card>
                            
                        </Card>
                    </Content>
              </Container>
          )
      }
}