import React, { Component } from 'react';
import { Image ,TouchableOpacity} from 'react-native';
import { Container, Title, Content, Card, CardItem, Footer, Button, Left, Right, Body,  Font } from 'native-base';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Header from '../../shared/Header';
import AuditoriasProgramadas from '../../shared/AuditoriasProgramadas';
import FooterCalendario from '../../shared/FooterCalendario';
import { Calendar } from 'react-native-calendario';
import {MaterialIcons,FontAwesome,
MaterialCommunityIcons} from '@expo/vector-icons';
import TimePicker from "react-native-24h-timepicker";

export default class Crear extends Component {

    async componentDidMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          /*Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")*/
        });
        this.setState({ isReady: true });
      }

      constructor(props){
    super(props)
        //set value in state for initial date
         this.state = {
           dateInicio:'',
           dateFin:'',
           time: '09:00',
           timeFin: 'Seleccione Hora de fin'
        };
    }

     onCancel() {
    this.TimePicker.close();
  }
 
  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }

  onConfirm1(hour, minute) {
    this.setState({ timeFin: `${hour}:${minute}` });
    this.TimePicker.close();
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

                        <View style={styles.container}>


                        <View style={{flexDirection:'column'}}>

                        <View>
                        <Text>Fecha y Hora de Inicio</Text>
                        </View>


                        <View style={{flexDirection:'row',marginTop:15}}>

                            <DatePicker
                            style={{width: 100,fontSize:50,color:'green'}}
                            date={this.state.dateInicio} //initial date from state
                            mode="date" //The enum of date, datetime and time
                            placeholder="DD/MM/AA"
                            format="DD-MM-YYYY"
                            minDate="01-04-2020"
                            maxDate="31-12-2020"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                                size:100
                                },
                                dateInput: {
                                marginLeft: 30,
                                fontSize:50,
                                color:'green'
                                }
                            }}
                            onDateChange={(date) => {this.setState({dateInicio: date})}}
                            />

                                                    
                            <View>
                            
                                

                                </View>
                                <View style={{marginLeft:2, width:75, alignItems:'center'}}>
                                <TouchableOpacity onPress={() => this.TimePicker.open()}>
                                <Text style={styles.text}>{this.state.time}</Text>
                                </TouchableOpacity>
                                <TimePicker
                                ref={ref => {
                                    this.TimePicker = ref;
                                }}
                                
                                onCancel={() => this.onCancel()}
                                onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
                                />
                                </View>
                            </View>
                        </View>





                            


                    

                    <View style={{flexDirection:'column'}}>

                        <View>
                        <Text>Fecha y Hora de Fin</Text>
                        </View>


                        <View style={{flexDirection:'row',marginTop:15}}>

                            <DatePicker
                            style={{width: 100,fontSize:50,color:'green'}}
                            date={this.state.dateInicio} //initial date from state
                            mode="date" //The enum of date, datetime and time
                            placeholder="DD/MM/AA"
                            format="DD-MM-YYYY"
                            minDate="01-04-2020"
                            maxDate="31-12-2020"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                                size:100
                                },
                                dateInput: {
                                marginLeft: 30,
                                fontSize:50,
                                color:'green'
                                }
                            }}
                            onDateChange={(date) => {this.setState({dateInicio: date})}}
                            />

                                                    
                            <View>
                            
                                

                                </View>
                                <View style={{marginLeft:2, width:75, alignItems:'center'}}>
                                <TouchableOpacity onPress={() => this.TimePicker.open()}>
                                <Text style={styles.text}>{this.state.time}</Text>
                                </TouchableOpacity>
                                <TimePicker
                                ref={ref => {
                                    this.TimePicker = ref;
                                }}
                                
                                onCancel={() => this.onCancel()}
                                onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
                                />
                                </View>
                            </View>
                        </View>



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
    
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#CED3CE",
    marginTop:15,
    marginBottom:15,
    flexDirection:'row'
 
  },
  text: {
    fontSize: 14,
    marginTop: 10
  },
  button: {
    backgroundColor: "#4EB151",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginVertical: 50
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  }
  
  
  });
