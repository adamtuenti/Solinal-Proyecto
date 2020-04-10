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
                        <CardItem>
                            <Body style={{alignItems: 'center'}}>
                                <Text style={{alignItems: 'center',fontSize: 19,fontWeight: 'bold',marginTop:5,marginBottom:5}}>Auditorías Programadas</Text>
                            </Body>
                        </CardItem>
                        <CardItem cardBody style={{alignItems: 'center'}}>
                            <Body style={{alignItems: 'center'}}>
                                <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2065.png'}} 
                                   style={{height: 250, 
                                           width: 250, 
                                           alignItems: 'center'}}/>
                            </Body>               
                        </CardItem>
                        <CardItem>
                            <View style={{alignItems: 'center', width:'100%',marginTop:10,justifyContent: 'center',}}>
                                <Text style={{color: '#636363', fontSize: 14, alignItems: 'center'}}>Aún no existen auditorías programadas</Text>
                                <Text style={{color: '#636363', fontSize: 12, alignItems: 'center',marginTop:5}}>Para programar auditorías, debes crear una auditoría</Text>
                            </View>
                        </CardItem>
                        <CardItem style={{alignItems: 'center'}}>
                            <Body style={{alignItems: 'center'}}>

                                <TouchableHighlight
                                    style={styles.botonLogin} onPress={()=>this.props.navigation.navigate('CalendarioPrograma')}>
                                    <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}> CREAR AUDITORÍA </Text>
                                    </TouchableHighlight>
                                                        
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <FooterCalendario />
            </Container>
          )
      }
}

const styles = StyleSheet.create({
    
  

    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#35E119',
        padding: 10,
        width:177,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        padding:10,
        marginBottom:15
        
   

    },botonGoogle:{
        
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,

        elevation: 1,

    },
   
  });
