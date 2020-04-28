import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container,  Title, DatePicker, Content, Card, CardItem, Button, Left, Label, Accordion, Right, Body, Font, Form, Item, Picker, Input, List,  Separator } from 'native-base';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  TextInput,
  
} from 'react-native'
import Dropdown from 'react-bootstrap/Dropdown';
/*import * as Font from 'expo-font';*/
import { Ionicons } from '@expo/vector-icons';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { ListItem , Divider} from 'react-native-elements';
import Header from './../../shared/Header';
import FooterAuditoria from '../../shared/FooterAuditoria';


const dataItem1 = [
    { title: "Art. 73: De las condiciones mínimas básicas", content: "Lorem ipsum dolor sit amet" },
    { title: "Art. 74: De la localización", content: "Lorem ipsum dolor sit amet" },
    { title: "Art. 75: Diseño y construcción", content: "Lorem ipsum dolor sit amet" },
    { title: "Art. 76: Condiciones específicas de las áreas, estructuras internas y accesorios", content: "Lorem ipsum dolor sit amet" },
    { title: "Art. 77: Suministro de Agua", content: "Lorem ipsum dolor sit amet" },
];

const dataMain = [
    { title: "De las instalaciones y requisitos de buenas prácticas de manufactura", content: "Lorem ipsum dolor sit amet" },
    { title: "De los equipos y utensilios", content: "Lorem ipsum dolor sit amet" },
    { title: "Requisitos higiénicos de fabricación", content: "Lorem ipsum dolor sit amet" },
    { title: "Envasado, etiquetado y empaquetado", content: "Lorem ipsum dolor sit amet" },
    { title: "Almacenamiento, distribución, transporte y comercialización", content: "Lorem ipsum dolor sit amet" },
    { title: "Del aseguramiento y control de la calidad", content: "Lorem ipsum dolor sit amet" },
    { title: "Firma del auditor", content: "Lorem ipsum dolor sit amet" }
  ];


const list = [
  {
    titulo: 'De las instalaciones y requisitos de buenas prácticas de manufactura',
    menu: ['Art. 73: De las condiciones mínimas básicas','Art. 74: De la localización','Art. 75: Diseño y construcción','Art. 76: Condiciones específicas de las áreas, estructuras internas y accesorios'],
    submenu:['sub menu1','submenu2'],
    url: 'AuditoriasBuscar',
    altura:30,
    anchura:40
  },
  {
   titulo: 'De los equipos y utensilios',
    menu: ['1a','2a'],
    submenu:['sub menu1','submenu2'],
    url: 'AuditoriasBuscar',
    altura:32,
    anchura:23
  },
  {
    titulo: 'Requisitos higiénicos de fabricación',
    menu: ['1 a','2a'],
    submenu:['sub menu1','submenu2'],
    url: 'AuditoriasBuscar',
    altura:30,
    anchura:35
  }
]

export default class NormaEcBPM extends Component {
// <Card style={{backgroundColor: '#f6f6f6', borderBottomColor:2,width:'90%',alignItems:'center',marginLeft:'5%'}}>
    async componentDidMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          /*Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")*/
        });
        this.setState({ isReady: true });
      }

    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
      }

      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }

      render(){
        return (
            <Container>

                <Header encabezado='Auditoria'/>
                


                <Content padder style={{backgroundColor: '#f6f6f6', borderBottomColor:2,width:'100%'}}>

                   

                     <View style = {styles.container}>
                        
                            <Input style={styles.input} placeholder="Nombre de la persona que es auditada" />
                        
                            <Input style={styles.input} placeholder="Cargo dentro de la organización" />
                        
                            <Input style={styles.input} placeholder="Area de trabajo" />
                       
                            <Input style={styles.input} placeholder="Email de contacto" />
                       
                            <Input style={styles.input} placeholder="Alcance de la auditoría" />
                       
                        <DatePicker
                            style={styles.input}
                            defaultDate={new Date()}
                            minimumDate={new Date(2020, 1, 1)}
                            maximumDate={new Date(2020, 12, 31)}
                            locale={"es"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Fecha de la auditoría"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            disabled={false}
                        />
                        
                            <Input style={styles.input} placeholder="Nombre de la persona que audita" />
                       
                    </View>

                 


              <View style={styles.colapse}>
                {
                  list.map((l, i) => (
                      <Collapse>
                        <CollapseHeader>
                            
                            <View style={styles.titulo}>
                                <Text style={styles.tituloLetra}>{l.titulo}</Text>
                            </View>
                            
                        </CollapseHeader>
                        <CollapseBody>

                            
                         
                                        
                                            
                                            <View>
                                             {
                                                l.menu.map((m, n) => (

                                                    <Collapse>

                                                        <CollapseHeader>
                                                                <View style={styles.menu}>
                                                                <Text style={styles.menuLetra}>{m}</Text>
                                                                </View>
                                                        
                                                        </CollapseHeader>

                                                        <CollapseBody>

                                                            <View>

                                                                {
                                                                    l.submenu.map((o,p)=>(
                                                                        <View style={styles.submenu}>
                                                                        <Text style={styles.submenuLetra}>{o}</Text>

                                                                        <View style={{flexDirection:'row',marginTop:7,marginBottom:5}}>    
                                                                            <TouchableHighlight
                                                                            style={styles.boton} underlayColor={'white'}  onPress={this.myfun}>
                                                                            <Text style={{fontWeight: 'bold',color:'white'}}> Si </Text>
                                                                            </TouchableHighlight><TouchableHighlight
                                                                            style={styles.boton} onPress={this.myfun}>
                                                                            <Text style={{fontWeight: 'bold',color:'white'}}> No </Text>
                                                                            </TouchableHighlight>
                                                                            <TouchableHighlight
                                                                            style={styles.boton} onPress={this.myfun}>
                                                                            <Text style={{fontWeight: 'bold',color:'white'}}> N/A </Text>
                                                                            </TouchableHighlight>
                                                                            
                                                                        </View>
                                                                        <View style={{marginTop:5,marginBottom:7,marginLeft:5}}>
                                                                        <Collapse>
                                                                            <CollapseHeader>
                                                                            
                                                                            <View style={{flexDirection:'row',alignItems: 'center',}}>
                                                                                <View style={{flexDirection:'row',alignItems: 'center',}}>
                                                                                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/nota.png?raw=true'}} 
                                                                                        style={{height: 35, 
                                                                                                    width: 25,
                                                                                                    marginLeft:7
                                                                                                    }}/>
                                                                                <Text style={{fontSize:12,marginLeft:5,marginTop:2}}>Agregar nota</Text>
                                                                                </View>

                                                                                <View style={{flexDirection:'row',alignItems: 'center',}}>
                                                                                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/evidencia.png?raw=true'}} 
                                                                                        style={{height: 35, 
                                                                                                    width: 25,
                                                                                                    marginLeft:7
                                                                                                    }}/>
                                                                                <Text style={{fontSize:12,marginLeft:5,marginTop:2}}>Agregar evidenc</Text>
                                                                                </View>

                                                                            </View>
                                                                            
                                                                            </CollapseHeader>
                                                                            <CollapseBody>
                                                                            <Input style={styles.input} placeholder="Escriba su nota" />
                                                                            </CollapseBody>
                                                                            </Collapse>
                                                                        </View>

                                                                        </View>

                                                                        

                                                                    ))
                                                                }



                                                                
                                                                </View>

                                                    </CollapseBody>
                                                </Collapse>
                                               
                                            ))
                                            }
                                            </View>

                           
                        </CollapseBody>
                    </Collapse>
                    
                ))
                }
              </View>
                    
  
                </Content>
                <FooterAuditoria/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#f6f6f6', borderBottomColor:2,width:'90%',alignItems:'center',marginLeft:'5%'
    },
    colapse:{
        width:'98%',
        marginLeft:'1%',
        marginTop:'10%'
        

    },
    titulo:{
        backgroundColor:'#70FA76',
        borderBottomColor: 'white',
        borderBottomWidth: 5,
        padding:7
        

    },tituloLetra:{
        fontSize:14,
        marginLeft:5

    },
    menu:{
        backgroundColor:'#FBFE91',
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        padding:6
      


    },menuLetra:{
        fontSize:14,
        marginLeft:5

    },
    submenu:{
        backgroundColor:'white',
        padding:6

    },submenuLetra:{
        fontSize:14,
        marginLeft:5

    },
    

    boton:{
         alignItems: 'center',
        backgroundColor: '#35E119',
        padding: 10,
        width:'30%',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginLeft:7
   

    },
    Textboton:{
        fontSize:14,
        alignItems:'center',
        alignContent:'center',
        

    },
    input: {
        height: 30,
        borderBottomColor: '#1ed796',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        alignItems: 'center',
        margin:5, 
        padding:5,
        fontSize: 14,
    

    },input1: {
        fontSize:14,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingLeft: 10,
        color:'green',
      
        width: 219,
        alignItems: 'flex-start'
    },
    botonEnviar:{
        alignItems: 'center',
        backgroundColor: '#FAFDC2',
        padding: 10,
        width:75,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        height:45
        
        
   

    }
  });