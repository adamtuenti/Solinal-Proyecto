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
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
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
                            <Calendar 
                            current={Date()}
                            minDate={'2020-04-01'}
                            maxDate={'2020-04-30'}
                            onDayPress={(day) => {console.log('selected day', day)}}
                            onDayLongPress={(day) => {console.log('selected day', day)}}
                            monthFormat={'yyyy MM'}
                            onMonthChange={(month) => {console.log('month changed', month)}}
                            hideArrows={true}
                            renderArrow={(direction) => (<Arrow />)}
                            hideExtraDays={true}
                            disableMonthChange={true}
                            firstDay={1}
                            hideDayNames={true}
                            showWeekNumbers={true}
                            onPressArrowLeft={substractMonth => substractMonth()}
                            onPressArrowRight={addMonth => addMonth()}
                            />
                        </Card>
                        <View>
                          <Text>
                            Tienes 1 auditoría interna pendiente
                          </Text>
                        </View>
                        <View>
                          <Card>
                            <View>
                              <Text>
                                INICIA
                                <Text>09:00 A.M.</Text>
                              </Text>
                            </View>
                            <View>
                              <Text>
                                FINALIZA
                                <Text>05:00 P.M.</Text>
                              </Text>
                            </View>
                          </Card>
                          <Card>
                            <Text>
                              Normativa técnica sanitaria para alimentos procesados, plantas procesadoras
                              de alimentos, establecimientos de distribución, comercialización, transporte
                              y establecimientos de alimentación colectiva
                            </Text>
                          </Card>
                        </View>
                    </Content>
              </Container>
          )
      }
}