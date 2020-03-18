import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, Dimensions, ImageBackground, } from 'react-native';
import { Button } from 'react-native-elements';

import Carousel from 'react-native-anchor-carousel';

const { width } = Dimensions.get('window');

const carouselItems = [
    {
        top: 'https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/Recurso%203.png',
        titulo: 'Ahorra tiempo y dinero mientras ejecutas una auditoría',
        cuerpo: 'Deshazte de tanto papel, todas las auditorias internas, de proveedor, inspecciones y checklist de verificación, en una app amigable',
        button: 'https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/Recurso%202.png',
        text: '',
        icon: ''
    },
    {
        top: 'https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/Recurso%204.png',
        titulo: 'Dile adiós a tantas reuniones no productivas',
        cuerpo: 'Al finalizar una auditoría, checklist o inspección en planta, visualiza los resultados en un informe completo, dinámico y con indicadores de gestión',
        button: 'https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/Recurso%202.png',
        text: '',
        icon: ''
    },
    {
        top: 'https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/Recurso%205.png', //cual es la imagen q se hace zoom? las 3 pero dejame hacerle algo que creo que me saldra, las imagenes tienen q tener un tamano proporcional si no no sale todo, pilas.ok
        titulo: 'Cierra no conformidades sin necesidad de tanto papel',
        cuerpo: 'Olvídate de esas reuniones que no llegan a nada. Gestiona de una forma más intuitiva, las acciones correctivas a implementar para cerrar las no conformidades',
        button: 'https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/Recurso%202.png',
        text: '',
        icon: ''
    }
]

export default class CarouselS extends Component {
    renderItem = ({ item, index }) => {
      const { top, titulo, cuerpo, button } = item;
      return (
        <TouchableOpacity
          activeOpacity={1}
          style={styles.item}
          onPress={() => {
            this._carousel.scrollToIndex(index);
          }}
        >

        <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 58,

          marginLeft: 5
        }}>
        <Image
            source={{ uri: top }}
            style={styles.imageBackground}
          >
        </Image>
        <Text style={styles.tituloText}>{titulo}</Text>
        <Text style={styles.bodyText}>{cuerpo}</Text>
        <Button
                        title="COMENZAR"
                        type="clear"
                        onPress={()=>this.props.navigation.navigate('Registro')}
                        style={styles.botonLogin}
                        />
         <View style={styles.textLine}>
            <Text>¿Ya tienes una cuenta? </Text>
            <Text 
             onPress={()=>this.props.navigation.navigate('Login')}
             style={{color: 'green'}}>
             Inicia Sesión</Text>
          </View>
        </View>
          <View style={styles.navBarBottom}>
              <Image 
              source={{uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/blue-and-white-letter-p-logo-gbutton.png?raw=true'}} style={styles.imageStyle}></Image>
              <Image source={{uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Facebook-share-icon.png?raw=true'}} style={styles.imageStyle}></Image>
          </View>
      

        </TouchableOpacity>
      );
    };
    /* <Button
                        title="Olvido su clave?"
                        type="clear"
                        //onPress={alert("Siguiente avance!")}
                        />*/ //esto es un digamos un link, el on press es la accion q hara.
    render() {
        return (
          <Carousel
            style={styles.carousel}
            data={carouselItems}
            renderItem={ this.renderItem }
                itemWidth={0.7 * width}
                inActiveOpacity={0.3}
                containerWidth={width - 10}
                ref={(c) => {
                  this._carousel = c;
                  console.log('a')
                }}
              />
        );
      }
    }

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        backgroundColor: 'white',
    },
    item: {
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 1,
        /*borderRadius: 5,*/
        borderColor: 'white',

        alignItems: 'center',
      },
    imageBackground: {
        flex: 1,
        backgroundColor: 'white',
        width: 150,
        height: 150,
        margin: 5,
        borderColor: 'white',
        justifyContent: 'center',
    },
    tituloText: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
    },
    bodyText: {
        marginTop: 10,
        marginBottom: 15,
        fontSize: 16,
        textAlign: 'center',
    },
    imageBackground4: {
        flex: 1,
        backgroundColor: 'white',
        width: 245,
        borderColor: 'white',
    },
    navBarBottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 100,
    },
    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#35E119',
        width:142,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    textLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imageStyle: {
        width: 50,
        height: 50,
        margin: 10
    }
})