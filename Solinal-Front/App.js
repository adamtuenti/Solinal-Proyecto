import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/Login';
import Registro from './src/Registro';



import Router from './src/Router';

const AppNavigator = createStackNavigator(
  {
    Login, Registro
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
