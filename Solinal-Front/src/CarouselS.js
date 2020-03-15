import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, Dimensions, ImageBackground, } from 'react-native';

import Carousel from 'react-native-anchor-carousel';

const { width } = Dimensions.get('window');

const carouselItems = [
    {
        top: 'https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/Recurso%203.png',
        body: 'https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/Recurso%2010.png',
        circles: 'https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/Recurso%207.png',
        button: 'https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/Recurso%202.png',
        text: '',
        icon: ''
    },
    {
        top: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Recurso%204.png?raw=true',
        body: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Recurso%2011.png?raw=true',
        circles: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Recurso%208.png?raw=true',
        button: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Recurso%202.png?raw=true',
        text: '',
        icon: ''
    },
    {
        top: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Recurso%205.png?raw=true',
        body: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Recurso%2012.png?raw=true',
        circles: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Recurso%209.png?raw=true',
        button: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Recurso%201.png?raw=true',
        text: '',
        icon: ''
    }
]

export default class CarouselS extends Component {
    renderItem = ({ item, index }) => {
      const { top, body, circles, button } = item;
      return (
        <TouchableOpacity
          activeOpacity={1}
          style={styles.item}
          onPress={() => {
            this._carousel.scrollToIndex(index);
          }}
        >
        <ImageBackground
            source={{ top: top }}
            style={styles.imageBackground}
          >
        </ImageBackground>
        <ImageBackground
            source={{ body: body }}
            style={styles.imageBackground}
          >
        </ImageBackground>
        <ImageBackground
            source={{ circles: circles }}
            style={styles.imageBackground}
          >
        </ImageBackground>
        <ImageBackground
            source={{ button: button }}
            style={styles.imageBackground}
          >
        </ImageBackground>
          <View style={styles.textLine}>
            <Text>Ya tienes una cuenta?</Text> 
            <Text>Inicia Sesión</Text>
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
            renderItem={({ item, index })}
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
        /*elevation: 3*/
        alignItems: 'center',
      },
    imageBackground: {
        flex: 2,
        backgroundColor: 'white',
        borderWidth: 5,
        borderColor: 'white'
    },
    navBarBottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 100,
        paddingLeft: 8
    },
    textLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imageStyle: {
        width: 50,
        height: 50
    }
})