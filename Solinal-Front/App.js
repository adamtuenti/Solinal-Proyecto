import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/Login';
import Registro from './src/Registro';
import CarouselS from './src/CarouselS';
import Home from './src/Home';
import Reestablecer from './src/Reestablecer';
import Main from './src/Main';
import AuditoriasVacia from './src/AuditoriasVacia';




import Router from './src/Router';

const AppNavigator = createStackNavigator(
  {
    Main, CarouselS, Login, Registro, Home, Reestablecer, AuditoriasVacia,
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
