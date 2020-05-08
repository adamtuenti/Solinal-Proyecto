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
import NormaEcBPM from './src/Auditorias/NormaEcBPM';
import FirmaAuditor from './src/Auditorias/FirmaAuditor';
import Crear from './src/Auditorias/Crear';
import AuditoriaFinalizada from './src/Auditorias/AuditoriaFinalizada';

import CalendarioVacia from './src/Calendario/CalendarioVacia';
import CalendarioPrograma from './src/Calendario/CalendarioPrograma';



import Router from './src/Router';
import Carusel from './src/Carusel';
import FooterAuditoria from './shared/FooterAuditoria';
import Footer from './shared/Footer';
import Header from './shared/Header';
import EquipoLista from './src/Equipo/EquipoLista';
import EquipoVacio from './src/Equipo/EquipoVacio';
import InvitarMiembros from './src/Equipo/InvitarMiembros'


const AppNavigator = createStackNavigator(
  {
    Main,Login,Carusel,Login,Crear,FirmaAuditor,AuditoriasBuscar,AuditoriaFinalizada,Crear,Login,Main,CalendarioPrograma,Carusel,Footer,CalendarioVacia,NormaEcBPM,EquipoVacio,EquipoLista,InvitarMiembros,Main, Login, Registro, Home, Reestablecer, AuditoriasVacia, CrearAuditoria, AuditoriasLista, AuditoriasBuscar,FooterAuditoria
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;