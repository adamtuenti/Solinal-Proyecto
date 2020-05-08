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

  state = {
    selectedPrinter: null,
  };

  expoPDF = async () => {
    let filePath = await Print.printToFileAsync({
      html: "<h1>PDF TEST SOLINAL</h1>",
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

    createPDF = async () => {
        const page1 = PDFPage
.create()
.setMediaBox(200, 200)
.drawText('You can add text and rectangles to the PDF!', {
  x: 5,
  y: 235,
  color: '#007386',
})
.drawRectangle({
  x: 25,
  y: 25,
  width: 150,
  height: 150,
  color: '#FF99CC',
})
.drawRectangle({
  x: 75,
  y: 75,
  width: 50,
  height: 50,
  color: '#99FFCC',
});

const page2 = PDFPage
  .create()
  .setMediaBox(250, 250)
  .drawText('You can add JPG images too!')
  

  const docsDir =  await PDFLib.getDocumentsDirectory();
const pdfPath = `${docsDir}/sample.pdf`;
PDFDocument
  .create(pdfPath)
  .addPages(page1, page2)
  .write() // Returns a promise that resolves with the PDF's path
  .then(path => {
    console.log('PDF created at: ' + path);
    // Do stuff with your shiny new PDF!
  });
    }

    constructor(props) {
        super(props)
        this.state ={}
    };

    generatePDF = () => {
        var document = new jsPDF('p', 'pt');
        
        document.text(20, 20, 'This is the first title.')
  
        document.setFont('helvetica')
        document.setFontType('normal')
        document.text(20, 60, 'This is the second title.')
  
        document.setFont('helvetica')
        document.setFontType('normal')
        document.text(20, 100, 'This is the thrid title.')      
  
        
        document.save('demo.pdf')
      }   
    
    async componentDidMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          /*Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")*/
        });
        this.setState({ isReady: true });
      }

      async printHTML() {
        await RNPrint.print({
          html:
            '<h1>Here will be Heading 1</h1><h2>Here will be Heading 2</h2><h3>Here will be Heading 3</h3>',
        });
      }

      async printPDF() {
        const results = await RNHTMLtoPDF.convert({
          html: '<h1>Demo Text to converted to PDF</h1>',
          fileName: 'test',
          base64: true,
        });
        await RNPrint.print({ filePath: results.filePath });
      }

      async printRemotePDF() {
        await RNPrint.print({
          filePath: 'http://www.africau.edu/images/default/sample.pdf',
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