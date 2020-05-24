import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/Cuenta/Login';
import Registro from './src/Cuenta/Registro';
//import CarouselB from './src/CarouselB';
import Home from './src/Home';
import Reestablecer from './src/Cuenta/Reestablecer';
import ValidacionClave from './src/Cuenta/ValidacionClave';
import Main from './src/Main';
import AuditoriasVacia from './src/Auditorias/AuditoriasVacia';
import CrearAuditoria from './src/Auditorias/CrearAuditoria';

import AuditoriasLista from './src/Auditorias/AuditoriasLista';
import AuditoriasBuscar from './src/Auditorias/AuditoriasBuscar';
import NormaEcBPM from './src/Auditorias/NormaEcBPM';
import FirmaAuditor from './src/Auditorias/FirmaAuditor';
import AuditoriaFinalizada from './src/Auditorias/AuditoriaFinalizada';
import Crear from './src/Auditorias/Crear';
import PdfCompartido from './src/Auditorias/pdfCompartido';
import Camara from './src/Auditorias/Camara';
import Galeria from './src/Auditorias/Galeria';

import CalendarioVacio from './src/Calendario/CalendarioVacio';
import CalendarioPrograma from './src/Calendario/CalendarioPrograma';
import AgendarAuditorias from './src/Calendario/AgendarAuditorias';



import Router from './src/Router';
import Carusel from './src/Carusel';
import FooterAuditoria from './shared/FooterAuditoria';
import Footer from './shared/Footer';
import EquipoLista from './src/Equipo/EquipoLista';
import EquipoVacio from './src/Equipo/EquipoVacio';
import InvitarMiembros from './src/Equipo/InvitarMiembros';
import RecomiendaSolinal from './src/Equipo/RecomiendaSolinal'


const AppNavigator = createStackNavigator(
  {
   Login,Galeria,Camara,Carusel,Camara,Login,PdfCompartido,RecomiendaSolinal,AgendarAuditorias,AuditoriaFinalizada,Main,Login,Crear,ValidacionClave,FirmaAuditor,AuditoriasBuscar,Crear,Login,Main,CalendarioPrograma,Carusel,Footer,CalendarioVacio,NormaEcBPM,EquipoVacio,EquipoLista,InvitarMiembros,Main, Login, Registro, Home, Reestablecer, AuditoriasVacia, CrearAuditoria, AuditoriasLista, AuditoriasBuscar,FooterAuditoria
  },  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;