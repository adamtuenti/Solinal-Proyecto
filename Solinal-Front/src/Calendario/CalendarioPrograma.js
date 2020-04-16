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
import { Calendar } from 'react-native-calendario';

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
                        <View>
                        <Calendar
  onChange={(range) => console.log(range)}
minDate={'2020-01-01'}
                            maxDate={'2020-04-30'}
  startDate={new Date(2020, 3, 1)}
    endDate={new Date(2020, 3, 5)}
  theme={{
    activeDayColor: {},
    monthTitleTextStyle: {
      color: '#6d95da',
      fontWeight: '300',
      fontSize: 16,
      flexDirection:'row'
    },
    emptyMonthContainerStyle: {},
    emptyMonthTextStyle: {
      fontWeight: '200',
    },
    weekColumnsContainerStyle: {},
    weekColumnStyle: {
      paddingVertical: 10,
    },
    weekColumnTextStyle: {
      color: '#b6c1cd',
      fontSize: 13,
    },
    nonTouchableDayContainerStyle: {},
    nonTouchableDayTextStyle: {},
    startDateContainerStyle: {},
    endDateContainerStyle: {},
    dayContainerStyle: {},
    dayTextStyle: {
      color: '#2d4150',
      fontWeight: '200',
      fontSize: 15,
    },
    dayOutOfRangeContainerStyle: {},
    dayOutOfRangeTextStyle: {},
    todayContainerStyle: {},
    todayTextStyle: {
      color: '#6d95da',
    },
    activeDayContainerStyle: {
      backgroundColor: '#6d95da',
    },
    activeDayTextStyle: {
      color: 'white',
    },
    nonTouchableLastMonthDayTextStyle: {},
  }}
/>
                        </View>

                        <View style={{flexDirection:'row',marginTop:'2.5%',marginBottom:'2.5%',marginLeft:'2%'}}>

                          <View>
                          <Text>
                            Tienes 
                          </Text>
                          </View>

                          <View style={{marginLeft:5}}>
                          <Text style={{color:'green'}}>
                          1
                          </Text>
                          </View>

                          <View style={{marginLeft:5}}>
                          <Text>
                            auditoría interna pendiente
                          </Text>
                          </View>
                        </View>


                        <View style={{flexDirection:'row',marginTop:10,}}>
                         
                            <View style={{flexDirection:'column',backgroundColor:'#C0FC96',borderColor: '#d6d7da',borderRadius: 2,borderWidth: 1,alignItems:'center',width:'23%'}}>
                                <View style={{marginTop:'5%'}}>
                                  <Text style={styles.datos}>
                                    INICIA
                                  </Text>
                                  </View>
                                  <View>
                                    <Text style={styles.valores}>09:00 A.M.</Text>
                                  </View>
                                
                              
                                <View style={{marginTop:'5%'}}>
                                  <Text style={styles.datos}>
                                    FINALIZA
                                  </Text>
                                  </View>
                                  <View style={{marginBottom:'15%',}}>
                                    <Text style={styles.valores}>09:30 A.M.</Text>
                                  </View>
                            </View>

                            <View style={{backgroundColor:'white',borderColor: '#d6d7da',borderRadius: 2,borderWidth: 1,alignItems:'center',width:'72%',marginLeft:'3%'}}>
                          
                              <Text style={styles.descrip}>
                                Normativa técnica sanitaria para alimentos procesados, plantas procesadoras
                                de alimentos, establecimientos de distribución, comercialización, transporte
                                y establecimientos de alimentación colectiva
                              </Text>
                            </View>
                          
                        </View>
                    </Content>

                    <FooterCalendario />
              </Container>
          )
      }
}


const styles = StyleSheet.create({
  datos:{
    fontSize:14
  },
  valores:{
    color:'green',
    fontSize:14,
    alignItems:'center'
  },
  descrip:{
    fontSize:12,
    alignItems:'center',
    padding:5
    
  }
  });
