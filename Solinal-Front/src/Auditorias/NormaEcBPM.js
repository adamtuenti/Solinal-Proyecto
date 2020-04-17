import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container,  Title, DatePicker, Content, Card, CardItem, Button, Left, Label, Accordion, Right, Body, Font, Form, Item, Picker, Input, List,  Separator } from 'native-base';
import { Icon } from 'react-native-elements'
import {StyleSheet,TouchableHighlight,Text,View,TextInput} from 'react-native'
import {MaterialIcons,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons';
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
    submenu:['sub menu3','submenu4'],
    url: 'AuditoriasBuscar',
    altura:32,
    anchura:23
  },
  {
    titulo: 'Requisitos higiénicos de fabricación',
    menu: ['1 a','2a'],
    submenu:['sub menu5','submenu6'],
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
        this.state = { chosenDate: new Date(), pressStatus: false, selected: null, SelectedButton: '' };
        this.setDate = this.setDate.bind(this);
      }

      _onHideUnderlay() {
    this.setState({ pressStatus: false });
    }

    _onShowUnderlay() {
    this.setState({ pressStatus: true });
    }

    getInitialState=()=>{
        return({toggled: false});
    }

    handlePress=()=>{
        this.setState({ toggled: !this.state.toggled })
    }

     _handleClick(flag, button) {
        if (flag == 1) {
          this.setState({selected: true});
        }
        this.setState({SelectedButton: button})
      }

    myfun=()=>{
    alert("clave mal ingresada");

    this.setState({ pressStatus: true });

}

      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }

      render(){
        return (
            <Container>

                <Header encabezado='Auditoria'/>

                
                


                <Content padder style={{backgroundColor: '#f6f6f6', borderBottomColor:2,width:'100%'}}>
                <Card>




                    <View style={{flex: 1, flexDirection: 'row', height:100, justifyContent:'flex-end', marginTop:15}}>
                    <Text style={{fontSize:14, marginLeft:'2%'}}>Normativa tecnica sanitaria para alimentos procesados, plantas procesadoras de alimentos, establecimientos de distribución, comercialización, transporte y establecimientos de alimentacion colectiva.</Text>

                    

                    </View>


                </Card>

                   

                     <View style = {styles.container}>
                        
                            <Input style={styles.input} placeholder="Nombre de la persona que es auditada" />
                        
                            <Input style={styles.input} placeholder="Cargo dentro de la organización" />
                        
                            <Input style={styles.input} placeholder="Area de trabajo" />
                       
                            <Input style={styles.input} placeholder="Email de contacto" />
                       
                            <Input style={styles.input} placeholder="Alcance de la auditoría" />
                        <View style={{alignContent:'flex-end'}}>
                       
                        <DatePicker
                            style={{backgroundColor:'blue'}}
                            defaultDate={new Date()}
                            minimumDate={new Date(2020, 1, 1)}
                            maximumDate={new Date(2020, 12, 31)}
                            locale={"es"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Fecha de la auditoría"
                            textStyle={styles.inputDate}
                            placeHolderTextStyle={styles.inputDate}
                            onDateChange={this.setDate}
                            disabled={false}
                        />
                        </View>
                        
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

                            
                         {console.log(l.size)}
                                        
                                            
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
                                                                            style={{backgroundColor: (this.state.SelectedButton === '1' ? 'green' : 'grey'),alignItems: 'center',padding: 10,width:'30%',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',marginLeft:7}}
                                                                            onPress={() => this._handleClick('any flag', '1')}
                                                                            underlayColor="red"
                                                                            >
                                                                            <View>

                                                                            <Text style={{fontWeight: 'bold',color:'white'}}> Si </Text>
                                                                            </View>
                                                                            </TouchableHighlight>
                                                                            <TouchableHighlight

                                                                            style={{backgroundColor: (this.state.SelectedButton === '2' ? 'red' : 'grey'),alignItems: 'center',padding: 10,width:'30%',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',marginLeft:7}}
                                                                            onPress={() => this._handleClick('any flag', '2')}
                                                                            underlayColor="red">
                                                                            <View >

                                                                            <Text style={{fontWeight: 'bold',color:'white'}}> No </Text>
                                                                            </View>
                                                                            </TouchableHighlight>


                                                                            <TouchableHighlight
                                                                            style={ {backgroundColor: (this.state.SelectedButton === '3' ? 'orange' : 'grey'),alignItems: 'center',padding: 10,width:'30%',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',marginLeft:7}}
          
                                                                            onPress={() => this._handleClick('any flag', '3')}
                                                                            underlayColor="red">
                                                                            <View >

                                                                            <Text style={{fontWeight: 'bold',color:'white'}}> N/A </Text>
                                                                            </View>
                                                                            </TouchableHighlight>
                                                                            
                                                                        </View>
                                                                        <View style={{marginTop:5,marginBottom:7,marginLeft:5}}>
                                                                        <Collapse>
                                                                            <CollapseHeader>

                                                                            <View style={{flexDirection:'row',alignItems: 'center',}}>
                                                                            
                                                                                <View style={{flexDirection:'row',alignItems: 'center',}}>
                                                                                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/autoria.png?raw=true'}} 
                                                                                        style={{height: 35, 
                                                                                                    width: 25,
                                                                                                    marginLeft:7
                                                                                                    }}/>
                                                                                <Text style={{fontSize:12,marginLeft:5,marginTop:2}}>Agregar nota</Text>
                                                                                </View>


                                                                                <View>
                                                                                <TouchableHighlight>
                                                                                <View style={{flexDirection:'row',marginLeft:'5%',alignItems:'center'}}>
                                                                                <AntDesign name="camera" size={45} />
                                                                                <Text>Agregar evidencia</Text>
                                                                                </View>
                                                                                </TouchableHighlight>
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
button: {
    borderColor: "#000066",
    backgroundColor:'gray',
    borderWidth: 1,
    borderRadius: 10
},
buttonPressYes: {
    borderColor: "#000066",
    backgroundColor: "green",
    borderWidth: 1,
    borderRadius: 10
},
buttonPressNo: {
    borderColor: "#000066",
    backgroundColor: "red",
    borderWidth: 1,
    borderRadius: 10
},

buttonPressApply: {
    borderColor: "#000066",
    backgroundColor: "orange",
    borderWidth: 1,
    borderRadius: 10
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
        backgroundColor: 'gray',
        padding: 10,
        width:'30%',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginLeft:7
   

    },
    botonYes:{
        alignItems: 'center',
       backgroundColor: '#35E119',
       padding: 10,
       width:'30%',
       borderRadius: 4,
       borderWidth: 1,
       borderColor: '#d6d7da',
       marginLeft:7
  

   },
   botonNo:{
    alignItems: 'center',
   backgroundColor: 'red',
   padding: 10,
   width:'30%',
   borderRadius: 4,
   borderWidth: 1,
   borderColor: '#d6d7da',
   marginLeft:7


},
botonApply:{
    alignItems: 'center',
   backgroundColor: 'orange',
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
        color: 'black'
    

    },
    inputDate: {
        height: 30,
        borderBottomColor: '#1ed796',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        alignItems: 'flex-start',
        margin:5, 
        padding:5,
        fontSize: 14,
        color: 'black'
    

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