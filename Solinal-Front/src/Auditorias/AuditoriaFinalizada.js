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
    var tabledata = ''

    array.forEach(function(element){
      console.log(element)

      var iduser = element.user
      var nombre = element.first_name
      var apellido = element.last_name
      var correo = element.email
      var tipoC = element.tipoCuenta

      var jiduser = JSON.stringify(iduser)
      var jnombre = JSON.stringify(nombre)
      var japellido= JSON.stringify(apellido)
      var jcorreo = JSON.stringify(correo)
      var jtipoC = JSON.stringify(tipoC)

      console.log(iduser)
      console.log(jiduser)
      console.log(nombre)
      console.log(apellido)
      console.log(correo)
      console.log(tipoC)

      tabledata += `
        <tr key=`+jiduser+`>
           <td>`+jiduser+`</td>
           <td>`+jnombre+`</td>
           <td>`+japellido+`</td>
           <td>`+jcorreo+`</td>
           <td>`+jtipoC+`</td>
        </tr>
        `
    });

    console.log(tabledata)
    return tabledata;
 }

 renderTableHeader() {
   var tableheader = ''
   var k = ''
  let header = Object.keys(this.state.users[0])
  console.log(header)
   header.map((key, index) => {
    var i = index;
    var k = key.toUpperCase();
    var jk = JSON.stringify(k);
    console.log(k);

     tableheader = `<th key=`+index+`}>`+jk+`</th>`
  })

  console.log(tableheader);
  return tableheader;
}

  makeHTML = (tableheader,tabledata) => {
    const htmlstring = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
        #title {
          text-align: center;
          font-family: arial, sans-serif;
        }
        
        #students {
          text-align: center;
          font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          border: 3px solid #ddd;
          width: 100%;
        }
        
        #students td, #students th {
          border: 1px solid #ddd;
          padding: 8px;
        }
        
        #students tr:nth-child(even){background-color: #f2f2f2;}
        
        #students tr:hover {background-color: #ddd;}
        
        #students th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: center;
          background-color: #4CAF50;
          color: white;
        }
        </style>
      </head
      <body>
        <div>
          <h1 id='title'>Tabla de Usuarios</h1>
          <table id='usuarios'>
               <tbody>
               <tr>
                <th key=1>ID</th>
                <th key=2>NOMBRE</th>
                <th key=3>APELLIDO</th>
                <th key=4>CORREO</th>
                <th key=5>TIPO DE CUENTA</th>
               </tr>
                `+tabledata+`
               </tbody>
          </table>
        </div>
      </body>
    </html>
 `
 console.log(htmlstring)
 return htmlstring;
 
  }

  expoPDF = async () => {
    const tabledatahtml = this.renderTableData();
    const tableheaderhtml = this.renderTableHeader();
    console.log(tabledatahtml);
    let filePath = await Print.printToFileAsync({
      html: this.makeHTML(tableheaderhtml,tabledatahtml),
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