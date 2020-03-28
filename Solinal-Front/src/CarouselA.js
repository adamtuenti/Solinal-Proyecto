import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, Dimensions, ImageBackground, } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import { Button } from 'react-native-elements';

const { width } = Dimensions.get('window');

const carouselItems = [
    {
        top: require('https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/Recurso%203.png'),
        titulo: 'Ahorra tiempo y dinero mientras ejecutas una auditoría',
        cuerpo: 'Deshazte de tanto papel, todas las auditorias internas, de proveedor, inspecciones y checklist de verificación, en una app amigable',
        button: 'https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/Recurso%202.png',
        text: '',
        icon: ''
    },
    {
        top: require('https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/Recurso%204.png'),
        titulo: 'Dile adiós a tantas reuniones no productivas',
        cuerpo: 'Al finalizar una auditoría, checklist o inspección en planta, visualiza los resultados en un informe completo, dinámico y con indicadores de gestión',
        button: 'https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/Recurso%202.png',
        text: '',
        icon: ''
    },
    {
        top: require('https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/Recurso%205.png'),
        titulo: 'Cierra no conformidades sin necesidad de tanto papel',
        cuerpo: 'Olvídate de esas reuniones que no llegan a nada. Gestiona de una forma más intuitiva, las acciones correctivas a implementar para cerrar las no conformidades',
        button: 'https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/Recurso%202.png',
        text: '',
        icon: ''
    }
]

export default class CarouselA extends Component {
  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={carouselItems}
            renderItem={item =>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                paddingTop: 58, marginLeft: 5  }}>
                    <Image  source={item.top}  style={styles.imageBackground}></Image>
                    <Text style={styles.tituloText}>{item.titulo}</Text>
                    <Text style={styles.bodyText}>{item.cuerpo}</Text>
                    <Button title="COMENZAR"
                            type="clear"
                            onPress={()=>this.props.navigation.navigate('Registro')}
                            style={styles.botonLogin}/>
                    <View style={styles.textLine}>
                        <Text>¿Ya tienes una cuenta? </Text>
                        <Text onPress={()=>this.props.navigation.navigate('Login')}
                            style={{color: 'green'}}>
                             Inicia Sesión</Text>
                    </View>                     
                    <View style={styles.navBarBottom}>
                        <Image source={{uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/blue-and-white-letter-p-logo-gbutton.png?raw=true'}} style={styles.imageStyle}></Image>
                        <Image source={{uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Facebook-share-icon.png?raw=true'}} style={styles.imageStyle}></Image>
                    </View>
                </View>    
                }         
            />
        </View>
      </Container>
    );
  }
}