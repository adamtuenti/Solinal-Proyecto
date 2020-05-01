import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Title, Content, Card, CardItem, Footer, Button, Left, Right, Body,  Font , Arrow} from 'native-base';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';

import HeaderBack from '../../shared/HeaderBack';
import EstadoCuenta from './../../shared/estadoCuenta';
import FooterCalendario from '../../shared/FooterCalendario';
import { Calendar } from 'react-native-calendars';

export default class CalendarioPrograma extends Component {

  constructor(props){

    super(props);
    this.state = {
          fechastart: '',
          fechaend: '',
          tiempostart: '',
          tiempoend: '',
          loading: false,
          fechas: [],
          url: 'http://accountsolinal.pythonanywhere.com/api/fechas_get/1',
          paginaAnterior: this.props.navigation.state.params.paginaActual,
    }
  }




    async componentDidMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          /*Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")*/
        });
        this.setState({ isReady: true });
        this.getFechas();
      }

      componentDidMount = () => {
        this.getFechas();
      }

      getFechas = () => {
        const array = [];
        console.log(this.state.idUser)
        console.log(this.state.url)
          this.setState({loading:true})
          fetch(this.state.url)
  
          .then(res=>res.json())
         
          .then(res=>{ 
            console.log('--')
              console.log(res);
              this.setState({
              fechas: res,
              url: res.next,
              loading: false,    
              })
              console.log('----')
              console.log(this.state.fechas);
          })
          
      }

   
      render(){
          return(
              <Container>

                
                    <HeaderBack encabezado={this.state.paginaAnterior}/>
                    <Content padder style={{backgroundColor: '#f6f6f6'}}>
                        <EstadoCuenta/>
                        <Card>
                           
                        </Card>
                        <View>

                       
                        <Calendar
                          current={'2020-04-01'}
                          minDate={'2020-03-01'}
                          onDayPress={(day) => {console.log('selected day', day)}}
                          onDayLongPress={(day) => {console.log('selected day', day)}}
                          monthFormat={'MMMM yyyy'}
                          onMonthChange={(month) => {console.log('month changed', month)}}
                          firstDay={1}
                          onPressArrowLeft={substractMonth => substractMonth()}
                          onPressArrowRight={addMonth => addMonth()}
                          markedDates={{               
                            '2020-04-19': {startingDay: true, endingDay: false, color: 'green', textColor: 'white'},
                            '2020-04-20': {selected: true, startingDay: false, endingDay: true, color: 'green', textColor: 'white'},
                          }}
                          markingType={'period'}
                          theme={{
                            backgroundColor: '#ffffff',
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#b6c1cd',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: 'orange',
                            monthTextColor: 'blue',
                            indicatorColor: 'blue',
                            textDayFontFamily: 'monospace',
                            textMonthFontFamily: 'monospace',
                            textDayHeaderFontFamily: 'monospace',
                            textDayFontWeight: '300',
                            textMonthFontWeight: 'bold',
                            textDayHeaderFontWeight: '300',
                            textDayFontSize: 16,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 16
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
                            {this.state.fechas.length}
                          </Text>
                          </View>

                          <View style={{marginLeft:5}}>
                          <Text>
                            auditoría interna pendiente
                          </Text>
                          </View>
                        </View>
                        
                        
                     
                        {this.state.fechas.map((r,i) => 
                        <View style={{flexDirection:'row',marginTop:10,}}>
                         
                            <View style={{flexDirection:'column',backgroundColor:'#C0FC96',borderColor: '#d6d7da',borderRadius: 2,borderWidth: 1,alignItems:'center',width:'23%'}}>
                                <View style={{marginTop:'5%'}}>
                                  <Text style={styles.datos}>
                                    INICIA
                                  </Text>
                                  </View>
                                  <View>
                                    <Text key={i} style={styles.valores}>{r.hora_inicio}</Text>
                                  </View>
                                
                              
                                <View style={{marginTop:'5%'}}>
                                  <Text style={styles.datos}>
                                    FINALIZA
                                  </Text>
                                  </View>
                                  <View style={{marginBottom:'15%',}}>
                                    <Text key={i} style={styles.valores}>{r.hora_fin}</Text>
                                  </View>
                            </View>

                            <View style={{backgroundColor:'white',borderColor: '#d6d7da',borderRadius: 2,borderWidth: 1,alignItems:'center',width:'70%',marginLeft:'5%'}}>
                          
                              <Text key={i} style={styles.descrip}>
                                {r.detalle_auditoria}
                              </Text>
                            </View>
                          
                        </View>
                        )}
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
    fontSize:14,
    alignItems:'center',
    padding:2,
    width:'100%',
    marginLeft:'1%'
    
  }
  });
