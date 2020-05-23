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
      datos: ["Norma INEN","Jesse Pinkman",["Skyler White","Jon Snow"],"Ayer","Hoy","Los Pollos Hermanos","La casa de Walter White","5 cms"],
      normas:[
        {
        detalle_mainmenu: 'De las instalaciones y requisitos de buenas practicas de manufactura',
        id_mainmenu: 9,
        key_norma: 2,
        key_pais: 1,
        menu: [
          'Art. 73.- De las condiciones mínimas básicas.-',
          'Art. 74.- De la localización.-',
          'Art. 75.- Diseño y construcción.-',
        ],
        submenu: [
        [
          ["a. Que el riesgo de contaminación y alteración sea mínimo",
           "",
           "https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/sinevidencia.png?raw=true",
           "No hay comentario"],
          ["b. Que el diseño y distribución de las áreas permita un mantenimiento, limpieza y desinfección apropiada; y, que minimice los riesgos de contaminación",
          "",
          "https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/sinevidencia.png?raw=true",
          "No hay comentario"],
        ],
        [
          ["Los establecimientos donde se procesen, envasen o distribuyan alimentos serán responsables que su funcionamiento",
          "",
          "https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/sinevidencia.png?raw=true",
          "No hay comentario",],
        ],
        [
          ["a. Ofrezca protección contra polvo, materias extrañas, insectos, roedores, aves y otros elementos del ambiente exterior y que mantenga las condiciones sanitarias apropiadas según el proceso",
          "",
          "https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/sinevidencia.png?raw=true",
          "No hay comentario",],
          ["c. Brinde facilidades para la higiene del personal",
          "",
          "https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/sinevidencia.png?raw=true",
          "No hay comentario",],
        ],
        ],
      },
      {
        detalle_mainmenu: 'De los equipos y utensilios',
        id_mainmenu: 10,
        key_norma: 2,
        key_pais: 1,
        menu: [
          "Art. 78. – de los equipos",
          ],
        submenu: [
            [
              [
                "a. Construidos con materiales tales que sus superficies de contacto no transmitan sustancias tóxicas, olores ni sabores, ni reaccionen con los ingredientes o materiales que intervengan en el proceso de fabricación",
                "",
                "https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/sinevidencia.png?raw=true",
                "No hay comentario",
              ],
            ],
        ],     
      },
      {
        detalle_mainmenu: 'Requisitos higiénicos de fabricación',
        id_mainmenu: 11,
        key_norma: 2,
        key_pais: 1,
        menu: [
          'Obligaciones del personal',
          'De las materias primas e insumos',
        ],
        submenu: [
            [
              [
                "a. Comportarse y operar de la manera descrita en el artículo 78 de la presente norma técnica",
                "",
                "https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/sinevidencia.png?raw=true",
                "No hay comentario",
              ],
            ],
            [
              [
                "b. Mantener la higiene y el cuidado personal;",
                "",
                "https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/sinevidencia.png?raw=true",
                "No hay comentario",
              ],
            ],
            [
              [
                ". La operación de lavado debe hacérsela en un lugar apropiado",
                "",
                "https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/sinevidencia.png?raw=true",
                "No hay comentario",
              ],
            ],
        ], 
      }
      ]
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

  renderInfoData(){
    const datos = this.state.datos;

    var infotable = ''
    var auditados = ''

    datos[2].forEach(function(name){
      auditados +=
      `
      <ul>
        <li>Jesse Pinkman</li>
      </ul>
      `
    })

    infotable = 
    `
    <div>
      <table id="tablaInfo">
        <tr>
          <td>Norma</td>
          <td>`+datos[0]+`</td>
        </tr>
        <tr>
          <td>Persona que audita</td>
          <td>`+datos[1]+`</td>
        </tr>
        <tr>
          <td>Persona auditada</td>
          <td>`+auditados+`</td>
        </tr>
        <tr>
          <td>Fecha de inicio</td>
          <td>`+datos[3]+`</td>
        </tr>
        <tr>
          <td>Fecha de cierre</td>
          <td>`+datos[4]+`</td>
        </tr>
        <tr>
          <td>Organización</td>
          <td>`+datos[5]+`</td>
        </tr>
        <tr>
          <td>Dirección</td>
          <td>`+datos[6]+`</td>
        </tr>
        <tr>
          <td>Alcance de la auditoría</td>
          <td>`+datos[7]+`</td>
        </tr>
      </table>
    </div>
    `
    return infotable
  }

  renderTableData() {
    const normas = this.state.normas;
    const arrayMain =this.state.arrayMain;
    var cont = 0;

    var iduser = ''
    var tabledata = ''

    normas.forEach(function(element){
      /*console.log(element)
      var iduser = element.user
      var nombre = element.first_name
      var apellido = element.last_name
      var correo = element.email
      var tipoC = element.tipoCuenta*/


      var detalle = element.detalle_mainmenu
      //var idmenu =element[1]
      //var keyn = element [2]
      //var keyp = element [3]
     // var titulo = arrayMain[cont]


     

      var contMain=0
      var contSubMenu=0
      
     /* var japellido= JSON.stringify(apellido)
      var jcorreo = JSON.stringify(correo)
      var jtipoC = JSON.stringify(tipoC)*/

     /* console.log(iduser)
      console.log(jiduser)
      console.log(nombre)
      console.log(apellido)
      console.log(correo)
      console.log(tipoC)*/
     // cont = cont + 1

      var titletable = ''
      var data = ''
      
      element.menu.map((mainmenu) => {
         titletable +=
        `
        <table style="width:100%";>
        <tr>
        <th>
        <h4 align="left">`+mainmenu+`</h4>
        </th>
        </tr>
        </table>
        `
        element.submenu[contSubMenu].map((question) => {
          var preg = question[0]
          var answer = question[1]
          var imagen = question[2]
          var comentario = question[3]
          
          titletable += 
          `
          <table class="final">
          <div>
            <tr>
              <th class="pregunta">`+preg+`</th>
              <th class="respuesta">`+answer+`</th>
              <th class="evidencia"><img src="`+imagen+`"  width="185" height="155"></th>
            </tr>
            </div>
            <div>
            <table class="final">
            <tr>
              <th class="pregunta">Comentario: `+comentario+`</th>
            </tr>
            </table>
            <div>
          </table>
          `
        })
        contSubMenu+=1  //Comentario: 'comentario'
       
      })
      

      tabledata += `
      <table class="final" style="margin-top: 25px">
      <div>
      <tr>
        <th class="detalle">
      <h2 align=center>`+detalle+`</h2>
      </th>
        </tr>
        </div>
      <div>
        `+titletable+`
      </div>
      </table>
      
        `
    });

   // console.log(tabledata)
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

makeHTML = (tableinfo,tableheader,tabledata) => {
  const htmlstring = `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
      #title {
        text-align: center;
        font-family: arial, sans-serif;
      }
      
      table, th, td {
border: 1px solid black;
border-collapse: collapse;
}
th, td {
padding: 15px;
}
table, th, td {
border: 1px solid black;
border-collapse: collapse;
page-break-inside: avoid;
}
th, td {
padding: 15px;
page-break-inside: avoid;
}
table, th, td {
border: 1px solid black;
border-collapse: collapse;
page-break-inside: avoid;
}
.final{
width:100%; 
}
.detalle{
border: 1px solid black;
border-collapse: collapse;
page-break-inside: avoid;
}
.pregunta{
width:50%;
text-align: left;
}
.respuesta{
width:15%
}
.evidencia{
width:35%;
}
#tablaInfo{
width:100%;
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
        <div>
        <div align="center">
        <img src="https://github.com/adamtuenti/Solinal-Proyecto/blob/rama/Solinal-Front/png/Recurso%201.png?raw=true"  width="125" height="135">
        </div>
        <div align="center">
        <h1 >Informe de la auditoria</h1>
        </div>
       
       
      
      </div>
      <div>
      `+tableinfo+`
      </div>
        <table id='students'>
             <tbody>
             
              `+tabledata+`
             </tbody>
        </table>
      </div>
      <div align="center">
        <img height="210" width="250" class="center" src=" `+urifirma+`">
      </div>
      <div align="center">
      <h3 style="font-style: italic;">Firma del auditor</h3>
      </div>
    </body>
  </html>
`
console.log(htmlstring)
return htmlstring;

}

expoPDF = async () => {
  const infodatahtml = this.renderInfoData();
  const tabledatahtml = this.renderTableData();
  const tableheaderhtml = this.renderTableHeader();
  console.log(tabledatahtml);
  let filePath = await Print.printToFileAsync({
    html: this.makeHTML(infodatahtml,tableheaderhtml,tabledatahtml),
    width: 612,
    height: 792,
    base64: false
  });
  alert('PDF Generado',filePath.uri);
  this.setState({file:filePath.uri})
 // console.log('/')
  //console.log(this.state.file)

  

  // console.log(filePath.uri);
  // console.log(FileSystem.cacheDirectory);
  // console.log(FileSystem.documentDirectory);

  FileSystem.getContentUriAsync(filePath.uri).then(cUri => {
   // console.log(cUri);
    this.setState({cFile:cUri.uri})
   // console.log(this.state.cFile)
    IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
        data: cUri.uri,
        flags: 1,
        type: 'application/pdf'
     });
  });
}

compartirPdf = async () => {
  const infodatahtml = this.renderInfoData();
const tabledatahtml = this.renderTableData();
const tableheaderhtml = this.renderTableHeader();
//console.log(tabledatahtml);
let filePath = await Print.printToFileAsync({
html: this.makeHTML(infodatahtml,tableheaderhtml,tabledatahtml),
width: 612,
height: 792,
base64: false
});
alert('PDF Compartido',filePath.uri);
this.setState({file:filePath.uri})
this.props.navigation.navigate('PdfCompartido',{file:this.state.file,cFile:this.state.cFile})
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