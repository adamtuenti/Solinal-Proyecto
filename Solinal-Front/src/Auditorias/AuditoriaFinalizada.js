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
import {MaterialIcons,MaterialCommunityIcons,AntDesign,Feather} from '@expo/vector-icons';
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
      file: '',
      cFile:'',
      arrayRespuestas: [ ['pregunta','si','https://d22uy85tnpcynx.cloudfront.net/2020/02/Messi-3-1024x574.jpg'] ,
                         ['pregunta 1','n/a','https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/05/10/15891435093664.jpg'],
                         ['pregunta 2','si','https://www.futboltotal.com.mx/wp-content/uploads/2020/01/biografia-de-ronaldo-nazario.jpg']   ],
      arrayMain: ['main 1','main 2','main 3'],
      };
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
    const arrayRespuestas = this.state.arrayRespuestas;
    const arrayMain =this.state.arrayMain;
    var cont = 0;

    var iduser = ''
    var tabledata = ''

    arrayRespuestas.forEach(function(element){
      /*console.log(element)
      var iduser = element.user
      var nombre = element.first_name
      var apellido = element.last_name
      var correo = element.email
      var tipoC = element.tipoCuenta*/
      var pregunta = element[0]
      var respuesta =element[1]
      var imagen = element [2]
      var titulo = arrayMain[cont]


      var jpregunta = JSON.stringify(pregunta)
      var jrespuesta = JSON.stringify(respuesta)
      var jmain = JSON.stringify(titulo)
     /* var japellido= JSON.stringify(apellido)
      var jcorreo = JSON.stringify(correo)
      var jtipoC = JSON.stringify(tipoC)*/

     /* console.log(iduser)
      console.log(jiduser)
      console.log(nombre)
      console.log(apellido)
      console.log(correo)
      console.log(tipoC)*/
      cont = cont + 1

      tabledata += `
      <h2>`+jmain+`</h2>
      <div>
      <table id='pregunta' key=`+cont+`>
        <tr>
          <th>Pregunta</th>
          <th>Respuesta</th>
        </tr>
        <tr>
           <td>`+jpregunta+`</td>
           <td>`+jrespuesta+`</td>
        </tr>
      <table>
      </div>
      <div align="center">
          <img height="210" width="250" class="center" src=" `+imagen+`">
      </div>
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
          <h1 id='title'>Informe</h1>
          <table id='students'>
               <tbody>
               
                `+tabledata+`
               </tbody>
          </table>
        </div>
        <div align="center">
          <img height="210" width="250" class="center" src=" `+urifirma+`">
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
    this.setState({file:filePath.uri})
    console.log('/')
    console.log(this.state.file)

    

    // console.log(filePath.uri);
    // console.log(FileSystem.cacheDirectory);
    // console.log(FileSystem.documentDirectory);

    FileSystem.getContentUriAsync(filePath.uri).then(cUri => {
      console.log(cUri);
      this.setState({cFile:cUri.uri})
      console.log('hola')
      console.log(this.state.cFile)
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
                <View  style={{flexDirection:'row',backgroundColor:'#1ED695',height:'11%',paddingTop:'8%',alignContent:'center'}}>
                <View style={{marginTop:'4.5%',flexDirection:'row',}}>
                    <View style={{width:'100%',flexDirection: 'row',alignItems:'center',marginLeft:10}}>
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('EquipoVacio')}>       
                        <MaterialIcons name="arrow-back" size={32} color="white" />
                        </TouchableHighlight>         
                        <Text style={{color:'white', fontSize:21, marginLeft:10}}>
                            Auditoria Finalizada
                        </Text>
                    </View>
                </View>
                </View>

                <Content padder style={{backgroundColor: '#f6f6f6'}}>
                   
                        <View style={{flexDirection:'column',flex:1}}>
                            <View style={{alignItems: 'center',marginTop:'15%'}}>
                                <Text style={{alignItems: 'center',fontSize: 24,color:'#1ED695',fontWeight:'bold'}}>EXCELENTE</Text>
                            </View>
                      
                        <View style={{alignItems: 'center',marginTop:'10%'}}>
                            
                                <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2062.png'}} 
                                   style={{height: 225, 
                                           width: 200, 
                                           alignItems: 'center'}}/>
                                   
                        </View>
                        
                            <View style={{alignItems: 'center',fontWeight: 'bold',marginTop:'10%'}}>
                                <Text style={{alignItems: 'center',fontSize: 19,color:'#1ED695',fontWeight:'bold'}}>AUDITORÍA FINALIZADA</Text>
                            </View>
                        

                       
                            <View style={{alignItems: 'center',marginTop:'10%'}}>

                                <TouchableHighlight onPress={()=>this.expoPDF()} style={{backgroundColor:'#B3F1C9',padding: 10,width:'55%',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da'}}>
                                    <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center'}}>

                                    <Feather style={{justifyContent:'center'}} name="download" size={28}  />


                                        <Text style={{fontWeight:'bold',fontSize:15,marginLeft:'3.5%',marginTop:'1.5%'}}>Descargar informe</Text>
                                    </View>
                                </TouchableHighlight>                    
                            </View>

                            <View style={{alignItems: 'center',marginTop:'10%'}}>

                                <TouchableHighlight onPress={()=>this.props.navigation.navigate('PdfCompartido',{file:this.state.file,cFile:this.state.cFile})} style={{backgroundColor:'#B3F1C9',padding: 10,width:'55%',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da'}}>
                                    <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center'}}>

                                    <Feather style={{justifyContent:'center'}} name="download" size={28}  />


                                        <Text style={{fontWeight:'bold',fontSize:15,marginLeft:'3.5%',marginTop:'1.5%'}}>Compartir informe</Text>
                                    </View>
                                </TouchableHighlight>                    
                            </View>

                            
                       
                        </View>


                    
                </Content>
            </Container>
        );
    } 
}