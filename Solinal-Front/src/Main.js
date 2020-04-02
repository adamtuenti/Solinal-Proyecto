import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container,  Title, Content, Card, CardItem,  Button, Left, Right, Body,  Font } from 'native-base';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'
/*import * as Font from 'expo-font';*/
import { Ionicons } from '@expo/vector-icons';

import Accordion from 'react-bootstrap/Accordion'
import Footer from './../shared/Footer';
import Header from './../shared/Header';
import EstadoCuenta from './../shared/estadoCuenta';

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

      <Header encabezado='Bienvenido'/>

      






        <Content padder style={{backgroundColor: '#f6f6f6'}}>

        <EstadoCuenta cantidad='0' tipoCuenta='GRATIS'/>
          


          <Card>

            <CardItem bordered >
              <View style={{flex: 1, flexDirection: 'row'}}>

              <View style={{marginRight:10}}>
                




          
              <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/equipo.png?raw=true'}}
                            style= {{height: 30,
                                     width: 40}}>
              </Image>
              </View>

              <View style={{marginRight:10}}>
            
           
                <Text style={{color: '#636363'}}>Crear Equipo</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')}>
                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/ir.png?raw=true'}}style= {{height: 30,width: 23}}></Image>
                </TouchableHighlight>
             
                </View>
              
              
              </View>
            
            </CardItem>

           


            <CardItem bordered>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{marginRight:25}}>      
                  <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2047.png?raw=true'}}
                                style= {{height: 30,
                                        width: 23}}>
                  </Image>
                  </View>
                <View>  
                  <Text style={{color: '#636363'}}>
                    Mis Auditorías
                  </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasVacia')}>
                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/ir.png?raw=true'}}style= {{height: 30,width: 23}}></Image>
                </TouchableHighlight>
             
                </View>
              
              </View>

            </CardItem>


            <CardItem bordered>


              <View style={{flex: 1, flexDirection: 'row'}}>

              <View style={{marginRight:15}}>
          
              <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/compartir.png?raw=true'}}
                            style= {{height: 30,
                                     width: 35}}>
              
              </Image>
              </View>
              <View>

                <Text style={{color: '#636363'}}>Recomienda Solinal Auditor</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasVacia')}>
                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/ir.png?raw=true'}}style= {{height: 35,width: 25}}></Image>
                </TouchableHighlight>
             
                </View>
              
              </View>
            </CardItem>
          </Card>


          <Card>




        <View style={{flex: 1, flexDirection: 'row', height:100, justifyContent:'flex-end', marginTop:15}}>

          <View style={{margin:7}}>
            
            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/premium.png?raw=true'}}
                            style= {{height: 50,
                                     width: 70}}>
              </Image>
          </View>
        <View style={{flex: 1, flexDirection: 'column',marginLeft:5}}>
            
                <Text style={{color: '#1ed695'}}>CONVIÉRTETE EN PREMIUM</Text>
                <Text style={{color: '#636363'}}>Vea estadísticas de cumplimiento, cierre no conformidades, o crea más checklists de auditoría</Text>
              

        </View>

        <View style={{marginLeft:5, marginRight:3,marginTop:10}}>    
              <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/ir.png?raw=true'}}
                            style= {{height: 55,
                                     width: 24}}>
              </Image>
        
        </View>
       </View>

      </Card>
        
       
              
        </Content>


      <Footer title='Main'/>

    
        
        



      </Container>
    );
  }
}