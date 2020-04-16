import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container,  Title, Content, Card, CardItem,  Button, Left, Right, Body,  Font } from 'native-base';
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

import Header from '../../shared/Header';
import EstadoCuenta from './../../shared/estadoCuenta';

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
                <Header encabezado='Equipo'/>
                    
                <Content>

                
        <View style={{flex: 1, flexDirection: 'row', margin:5,padding:10, backgroundColor:'white',borderColor: '#d6d7da',borderRadius: 2,
        borderWidth: 1,}}>
            <View style={{marginRight:35, flexDirection:'row'}}>
                <View>
                <Text style={{color: '#636363',fontSize:15}}>
                    Equipo de:
                </Text>
                </View>  
                <View>
                    <Text style={{color: '#2ba855', marginLeft:2,fontSize:15}}>
                        {this.props.cantidad} Lenin
                    </Text>
                </View>
                
            </View>
            <View style={{flexDirection:'row',marginLeft:15}}>
                <Text style={{color: '#2ba855',fontSize:15}}>
                    0/5 
                </Text>
                <Text style={{color: '#2ba855',marginLeft:5,fontSize:15}}>
                    miembros de equipo
                </Text>
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
                    <View style={{alignItems: 'center',marginTop:'15%'}}>
                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/team.png?raw=true'}} 
                                        style={{height: 175, 
                                           width: 175, 
                                           alignItems: 'center'}}/>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableHighlight style={styles.botonLogin}
                            onPress={()=>this.props.navigation.navigate('InvitarMiembros')}>
                            <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}> INVITAR MIEMBROS </Text>
                        </TouchableHighlight>                        
                    </View>
                </Content>
            </Container>
        )
    }  
}


const styles = StyleSheet.create({
    

    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#1ed695',
        padding: 10,
        width:175,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginTop:35,
        
   

    }
})