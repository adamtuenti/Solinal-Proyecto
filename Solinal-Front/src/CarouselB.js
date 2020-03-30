import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, Dimensions, ImageBackground, } from 'react-native';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon } from 'native-base';
import { Button } from 'react-native-elements';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/png/Recurso%203.png')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Ahorra tiempo y dinero mientras ejecutas una auditoría</h3>
            <p>Deshazte de tanto papel, todas las auditorias internas, de proveedor, inspecciones y checklist de verificación, en una app amigable.</p>
            <a href="">
            <img
            className="d-block w-100"
            src={require('https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/png/Recurso%202.png')}
            alt="Third slide"
            />
            </a>
            <p>¿Ya tienes una cuenta? <a href="/">Inicia Sesión</a></p>
            <img src={require('https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/png/Recurso%206.png')}></img>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/png/Recurso%204.png')}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Dile adiós a tantas reuniones no productivas</h3>
            <p>Al finalizar una auditoría, checklist o inspección en planta, visualiza los resultados en un informe completo, dinámico y con indicadores de gestión</p>
            <a href="">
            <img
            className="d-block w-100"
            src={require('https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/png/Recurso%202.png')}
            />
            </a>
            <p>¿Ya tienes una cuenta? <a href="/">Inicia Sesión</a></p>
            <img src={require('https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/png/Recurso%206.png')}></img>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/png/Recurso%205.png')}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Cierra no conformidades sin necesidad de tanto papel</h3>
            <p>
            Olvídate de esas reuniones que no llegan a nada. Gestiona de una forma más intuitiva, las acciones correctivas a implementar para cerrar las no conformidades
            </p>
            <a href="">
            <img
            className="d-block w-100"
            src={require('https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/png/Recurso%202.png')}
            />
            </a>
            <p>¿Ya tienes una cuenta? <a href="/">Inicia Sesión</a></p>
            <img src={require('https://raw.githubusercontent.com/adamtuenti/FrontEnd/master/Solinal-Front/png/Recurso%206.png')}></img>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  render(<ControlledCarousel />);