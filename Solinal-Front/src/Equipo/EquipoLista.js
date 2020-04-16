import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container,  Title, Content, Card, CardItem,  Button, List, Left, Right, Body,  Font } from 'native-base';
import { Icon,Divider } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'
/*import * as Font from 'expo-font';*/
import { Ionicons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';

import Footer from '../../shared/Footer';

import Header from '../../shared/Header';
import EstadoCuenta from '../../shared/estadoCuenta';

export default class EquipoVacio extends Component {

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
                <Header>
                    <View style={{flexDirection:'row', backgroundColor:'#1ed695', height:'11%', paddingTop:'15%', alignContent:'center'}}>
                        <View style={{width: Dimensions.get('screen').width, flexDirection: 'row', alignItems:'center', marginLeft:10}}>
                            <TouchableHighlight onPress={()=>this.props.navigation.navigate('Main')}>
                                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/back.png?raw=true'}} style= {{height:40, width:40}}/>
                            </TouchableHighlight>
                            <Text style={{color:'white', fontSize:21, marginLeft:10}}>
                                EQUIPO
                            </Text>
                        </View>
                    </View>
                </Header>
                <Content>
                    <View>
                        <View>
                            <Text style={{color:'#1ed695'}}>EQUIPO DE [NOMBRE DE USUARIO]</Text>
                        </View>
                        <View>
                            <Text>2/5 miembros de equipo</Text>
                        </View>
                    </View>
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
                                        style= {{height: 56,
                                        width: 25}}>
                                </Image>
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <List>
                            <ListItem>                            
                                <Body>
                                    <Text>Nombre y Apellido del contacto</Text>
                                    <Text note>contacto@correo.com</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Body>
                                    <Text>Nombre y Apellido del contacto</Text>
                                    <Text note>contacto@correo.com</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </Card>
                    <View style={{alignItems: 'center'}}>
                        <TouchableHighlight style={{ alignItems: 'center', backgroundColor: '#1ed695', padding: 10, width:142, borderRadius: 4, borderWidth: 1, borderColor: '#d6d7da'}}
                            onPress={()=>this.props.navigation.navigate('InvitarMiembros')}>
                            <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}> INVITAR MIEMBROS </Text>
                        </TouchableHighlight>                        
                    </View>
                </Content>
            </Container>
        )
    }  
}