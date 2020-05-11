import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Title, Content, Card, CardItem,  Button, Left, Right, Body,  Font } from 'native-base';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'
/*import * as Font from 'expo-font';*/
import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';
import { Ionicons } from '@expo/vector-icons';
import Footer from './../../shared/Footer';
import HeaderBack from './../../shared/HeaderBack';
import EstadoCuenta from './../../shared/estadoCuenta';
import FooterAuditoria from '../../shared/FooterAuditoria';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import RNPrint from 'react-native-print';


export default class AuditoriaFinalizada extends Component{

  constructor(props) {
    super(props);
    this.state = { 
      loading: false,
      users: [],
      url: 'http://accountsolinal.pythonanywhere.com/api/users',
      };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      /*Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")*/
    });
    this.setState({ isReady: true });
  }

  componentDidMount = () => {
    this.getUsers();
  }

  getUsers = () => {
    const array = [];
    console.log(this.state.url)
      this.setState({loading:true})
      fetch(this.state.url)

      .then(res=>res.json())
     
      .then(res=>{ 
        console.log('--')
          console.log(res);
          this.setState({
          users: res,
          url: res.next,
          loading: false,    
          })
          console.log('----')
          console.log(this.state.users);
      })
      
  }

  renderTableData() {
    const array = this.state.users;

    var iduser = ''

    array.forEach(function(element){
      console.log(element)
      iduser = element.user
      var nombre = element.first_name
      var apellido = element.last_name
      var correo = element.email
      var tipoC = element.tipoCuenta

      console.log(iduser)
      console.log(nombre)
      console.log(apellido)
      console.log(correo)
      console.log(tipoC)

      tabledata = `
        <tr key=`+{iduser}+`>
           <td>`+{iduser}+`</td>
           <td>{nombre}</td>
           <td>{apellido}</td>
           <td>{correo}</td>
           <td>{tipoC}</td>
        </tr>
        `
    });

    console.log(tabledata)
    return tabledata;
 }

 renderTableHeader() {
  let header = Object.keys(this.state.users[0])
  return header.map((key, index) => {
     return <th key={index}>{key.toUpperCase()}</th>
  })
}

  makeHTML = (tabledata) => {
    const htmlstring = `
    <div>
      <h1 id='title'>Tabla de Usuarios</h1>
        <table id='usuarios'>
               <tbody>
                `+tabledata+`
               </tbody>
            </table>
    </div>
 `
 console.log(htmlstring)
 return htmlstring;
 
  }

  expoPDF = async () => {
    const tabledatahtml = this.renderTableData();
    console.log(tabledatahtml);
    let filePath = await Print.printToFileAsync({
      html: this.makeHTML(tabledatahtml),
      width: 612,
      height: 792,
      base64: false
    });
    alert('PDF Generado',filePath.uri);

    console.log(filePath.uri);
    console.log(FileSystem.cacheDirectory);
    console.log(FileSystem.documentDirectory);

    FileSystem.getContentUriAsync(filePath.uri).then(cUri => {
      console.log(cUri);
      IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
          data: cUri.uri,
          flags: 1,
          type: 'application/pdf'
       });
    });
  }

      render() {
        return (
            <Container>
                <HeaderBack encabezado='Auditoria'/>
                <Content padder style={{backgroundColor: '#f6f6f6'}}>
                    <Card>
                        <CardItem>
                            <Body style={{alignItems: 'center'}}>
                                <Text style={{alignItems: 'center',fontSize: 15,}}>EXCELENTE</Text>
                            </Body>
                        </CardItem>
                        <CardItem cardBody style={{alignItems: 'center'}}>
                            <Body style={{alignItems: 'center'}}>
                                <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2062.png'}} 
                                   style={{height: 200, 
                                           width: 200, 
                                           alignItems: 'center'}}/>
                            </Body>               
                        </CardItem>
                        <CardItem>
                            <Body style={{alignItems: 'center', width:24,fontWeight: 'bold'}}>
                                <Text style={{color: '#636363', fontSize: 12, alignItems: 'center'}}>AUDITORÍA FINALIZADA</Text>
                            </Body>
                        </CardItem>

                        <CardItem style={{alignItems: 'center'}}>
                            <Body style={{alignItems: 'center'}}>

                                <TouchableHighlight
                                     onPress={()=>this.expoPDF()}>
                                    <View>
                                        <Text>Descargar informe</Text>
                                    </View>
                                </TouchableHighlight>                    
                            </Body>
                            <Body style={{alignItems: 'center'}}>

                                <TouchableHighlight
                                     onPress={()=>this.props.navigation.navigate()}>
                                    <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2064.png'}}></Image>
                                </TouchableHighlight>                    
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    } 
}