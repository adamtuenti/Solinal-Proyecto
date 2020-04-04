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
import EstadoCuenta from '../../shared/estadoCuenta';

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
                    <EstadoCuenta cantidad='0' tipoCuenta='GRATIS'/>
                    <Card>
                        <CardItem>
                            <Body style={{alignItems: 'center'}}>
                                <Text style={{alignItems: 'center',fontSize: 15,}}>Auditorías Programadas</Text>
                            </Body>
                        </CardItem>
                        <CardItem cardBody style={{alignItems: 'center'}}>
                            <Body style={{alignItems: 'center'}}>
                                <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2065.png'}} 
                                   style={{height: 200, 
                                           width: 200, 
                                           alignItems: 'center'}}/>
                            </Body>               
                        </CardItem>
                        <CardItem>
                            <Body style={{alignItems: 'center', width:24,fontWeight: 'bold'}}>
                                <Text style={{color: '#636363', fontSize: 12, alignItems: 'center'}}>Aún no existen auditorías programadas</Text>
                                <Text style={{color: '#636363', fontSize: 12, alignItems: 'center'}}>Para programar auditorías, debes crear una auditoría</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{alignItems: 'center'}}>
                            <Body style={{alignItems: 'center'}}>

                                <TouchableHighlight
                                    style={styles.botonLogin} onPress={()=>this.props.navigation.navigate('CrearAuditoria')}>
                                    <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}> CREAR AUDITORÍA </Text>
                                    </TouchableHighlight>
                                                        
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    <View style={{height:63, flexDirection: 'row',width:'100%'}}>
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                            <View style={{flexDirection:'column',alignItems: 'center',}}>
                                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/autoria.png?raw=true'}} 
                                style={{height: 35, 
                                        width: 25,
                                        }}/>
                                <Text style={styles.letra}>Auditorias</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/calendario-active.png?raw=true'}}
                                   style= {{height: 35,
                                            width: 32}}>
                            </Image>
                    <Text style={styles.letra}>Calendario</Text>
                    </View>
                </TouchableHighlight>

                 <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones1}>
                    <View style={{flexDirection:'column',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2013.png'}}
                                   style= {{height: 45,
                                            width: 45}}>
                            </Image>
                    </View>
                </TouchableHighlight>


                
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2014.png'}}
                                   style= {{height: 35,
                                            width: 28}}>
                            </Image>
               <Text style={styles.letra}>Accion Correctiva</Text>
                    </View>
                </TouchableHighlight>
                   

                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2015.png'}}
                                   style= {{height: 35,
                                            width: 34}}>
                            </Image>
               <Text style={styles.letra}>No Conformidad</Text>
                    </View>
                </TouchableHighlight>
  
               
                </View>
                </Footer>    
              </Container>
          )
      }

}