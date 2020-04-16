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

import Footer from './../shared/Footer';
import Header from './../shared/Header';
import EstadoCuenta from './../shared/estadoCuenta';


const list = [
  {
    name: 'Crear Equipo',
    avatar_url: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/equipo.png?raw=true',
    subtitle: 'Vice President',
    url: 'EquipoVacio',
    altura:30,
    anchura:40
  },
  {
    name: 'Mis Auditorias',
    avatar_url: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2047.png?raw=true',
    subtitle: 'Vice Chairman',
    url: 'AuditoriasVacia',
    altura:32,
    anchura:23
  },
  {
    name: 'Recomienda Solinal Auditor',
    avatar_url: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/compartir.png?raw=true',
    subtitle: 'Vice Chairman',
    url: 'AuditoriasBuscar',
    altura:30,
    anchura:35
  }
]

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


              <View>
                {
                  list.map((l, i) => (
                    <ListItem style={{height:65}}
                      key={i}
                      leftAvatar={
                        <View style={{width:'11%'}}>
                        <Image source={{uri: l.avatar_url}}style= {{height: l.altura,width: l.anchura}}></Image>
                        </View> 
                      }
                      title={
                        <View >
                        <Text style={{fontSize:15}}> {l.name}</Text>
                        </View>
                      }       
                      onPress={()=>this.props.navigation.navigate(l.url)}
                      bottomDivider
                    />
                  ))
                }
              </View>

           


            


         
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
                              style= {{height: 56,
                                      width: 25}}>
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