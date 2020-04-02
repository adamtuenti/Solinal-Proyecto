import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/Cuenta/Login';
import Registro from './src/Cuenta/Registro';
//import CarouselB from './src/CarouselB';
import Home from './src/Home';
import Reestablecer from './src/Cuenta/Reestablecer';
import Main from './src/Main';
import AuditoriasVacia from './src/Auditorias/AuditoriasVacia';
import CrearAuditoria from './src/Auditorias/CrearAuditoria';

import AuditoriasLista from './src/Auditorias/AuditoriasLista';
import AuditoriasBuscar from './src/Auditorias/AuditoriasBuscar';


import Router from './src/Router';
import Carusel from './src/Carusel'

const AppNavigator = createStackNavigator(
  {
     Main,Carusel, Login, Registro, Home, Reestablecer, AuditoriasVacia, CrearAuditoria, AuditoriasLista, AuditoriasBuscar
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;