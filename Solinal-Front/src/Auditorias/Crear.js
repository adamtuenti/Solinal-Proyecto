import React, { Component } from 'react';
import { Image ,TouchableOpacity} from 'react-native';
import { Container, Title, Content, Card, CardItem, Footer, Button, Left, Right, Body,  Font,Input,DatePicker } from 'native-base';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
//import DatePicker from 'react-native-datepicker';

import AuditoriasProgramadas from '../../shared/AuditoriasProgramadas';
import FooterCalendario from '../../shared/FooterCalendario';
import { Calendar } from 'react-native-calendario';
import {MaterialIcons,FontAwesome,
MaterialCommunityIcons} from '@expo/vector-icons';
import TimePicker from "react-native-24h-timepicker";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import HeaderBack  from './../../shared/HeaderBack';

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
    submenu:['sub menu1','submenu2','ejemplo','a','n'],
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

export default class Crear extends Component {

   

      constructor(props){
    super(props)
        //set value in state for initial date
         this.state = {
           dateInicio:'',
           dateFin:'',
           paginaAnterior: this.props.navigation.state.params.paginaActual,
           time: '09:00',
           timeFin: '09:10',
           norma: this.props.navigation.state.params.norma,
            chosenDate: new Date(), pressStatus: false, selected: null, SelectedButton: '' 
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


  _onHideUnderlay() {
    this.setState({ pressStatus: false });
    }

    _onShowUnderlay() {
    this.setState({ pressStatus: true });
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


     onCancel() {
    this.TimePicker.close();
  }
 
  onConfirm(hourI, minuteI) {
    this.setState({ time: `${hourI}:${minuteI}` });
    this.TimePicker.close();
  }

  onConfirmFin(hour, minute) {
    this.setState({ timeFin: `${hour}:${minute}` });
    this.TimePicker.close();
  }


      render(){
        const var1 = 1;
          return(
              <Container>

              <HeaderBack encabezado={this.state.paginaAnterior}/>


       


                    <Content padder style={{backgroundColor: '#f6f6f6'}}>


                       

                      
                        <View>


                        
                    <View style = {{ backgroundColor: '#f6f6f6', borderBottomColor:2,width:'90%',alignItems:'center',marginLeft:'5%'}}>
                        
                            <Text style={styles.input}> {this.state.norma} </Text>
                        
                            <Input style={styles.input} placeholder="Organización" />
                        
                            <Input style={styles.input} placeholder="Dirección" />
                       
                       
                       
                            <Input style={styles.input} placeholder="Alcance de la auditoría" />

                            
                           
                        
                        
                           
                    </View>

                    <View style={{flexDirection:'column'}}>

                    <View style = {{ backgroundColor: '#f6f6f6', borderBottomColor:2,width:'90%',alignItems:'center',marginLeft:'5%'}}>
                    <Text style={styles.input}>Fecha de la auditoria</Text>
                    </View>


                      <View style={styles.container}>
                        

                        


                        <View style={{flexDirection:'column',width:'50%',marginBottom:10,marginTop:5}}>

                        <View style={{alignContent:'center',alignItems:'center'}}>
                        <Text>Fecha y hora de inicio</Text>
                        </View>


                        <View style={{flexDirection:'row',marginTop:15}}>


                        <View style={{marginLeft:2,  alignItems:'center',backgroundColor:'white',borderRadius: 8, borderWidth: 1,borderColor: '#d6d7da',width:'64.5%'}}>

                            <DatePicker
                            style={{width: 10,fontSize:10,color:'green'}}
                            date={this.state.dateInicio} //initial date from state
                            mode="date" //The enum of date, datetime and time
                            placeholder="AA/MM/DD"
                            placeHolderText="D/M/AA"
                            format="YYYY-MM-DD"
                            minDate="2020-04-01"
                            maxDate="2020-12-201"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                                size:50
                                },
                                dateInput: {
                                marginLeft: 0,
                                fontSize:10,
                                color:'green'
                                }
                            }}
                            onDateChange={(date) => {this.setState({dateInicio: date})}}
                            />

                        </View>

                                                    
                           
                                <View style={{marginLeft:2,  alignItems:'center',backgroundColor:'white',borderRadius: 8,borderWidth: 1,borderColor: '#d6d7da',width:'30%'}}>
                                <TouchableOpacity onPress={() => this.TimePicker.open()}>
                                <Text style={styles.text}>{this.state.time}</Text>

                                </TouchableOpacity>
                                <TimePicker
                                ref={ref => {
                                    this.TimePicker = ref;
                                }}
                                
                                onCancel={() => this.onCancel()}
                                onConfirm={(hourI, minuteI) => this.onConfirm(hourI, minuteI)}
                                />
                                </View>


                            </View>
                        </View>







                    

                    <View style={{flexDirection:'column',width:'50%',marginBottom:10,marginTop:5}}>

                        <View style={{alignContent:'center',alignItems:'center'}}>
                        <Text >Fecha y hora de cierre</Text>
                        </View>


                        <View style={{flexDirection:'row',marginTop:15}}>

                        <View style={{marginLeft:2,  alignItems:'center',backgroundColor:'white',borderRadius: 8,borderWidth: 1,borderColor: '#d6d7da',width:'64.5%'}}>

                            <DatePicker
                           
                            date={this.state.dateFin} //initial date from state
                            mode="date" //The enum of date, datetime and time
                            placeHolderText="D/M/AA"

                            format="DD-MM-YYYY"
                            minDate="01-04-2020"
                            maxDate="31-12-2020"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                                size:100
                                },
                                dateInput: {
                                marginLeft: 15,
                                fontSize:15,
                                color:'green'
                                }
                            }}
                            onDateChange={(date) => {this.setState({dateFin: date})}}
                            />

                        </View>

                                                    
                            <View>
                            
                                

                                </View>
                                <View style={{marginLeft:2,  alignItems:'center',backgroundColor:'white',borderRadius: 8,borderWidth: 1,borderColor: '#d6d7da',width:'30%'}}>
                                <TouchableOpacity onPress={() => this.TimePicker.open()}>
                                <Text style={styles.text}>{this.state.timeFin}</Text>
                                </TouchableOpacity>
                                <TimePicker
                                ref={ref => {
                                    this.TimePicker = ref;
                                }}
                                
                                onCancel={() => this.onCancel()}
                                onConfirm={(hour, minute) => this.onConfirmFin(hour, minute)}
                                />
                                </View>
                            </View>
                        </View>



                    </View>

                    </View>



                  


        


                      
                        </View>
                         <View style={styles.colapse}>
                  
                {
                  list.map((l, i) => (
                   

                    
                    
                    

                   
                      <Collapse>
                        <CollapseHeader>
                        
                            
                            <View style={styles.titulo}>


                            <View style={{width:'85%'}}>


                            

                            
                                <Text style={styles.tituloLetra}>{l.titulo} </Text>
                            
                            </View>


                              <View style={{flexDirection:'column',alignItems:'flex-end',marginLeft:'7%'}}>
                                <View>
                                  <Text>1/{l.menu.length}</Text>
                                </View>
                                <View>
                                  <Text>{i}%</Text>
                                </View>
                              </View>
                           


                            </View>
                            
                        </CollapseHeader>
                        <CollapseBody>

                            
                      
                                        
                                            
                                            <View>
                                             {
                                                l.menu.map((m, n) => (

                                                    <Collapse>
                                                    

                                                        <CollapseHeader>
                                                                <View style={styles.menu}>
                                                                <View style={{width:'90%'}}>
                                                                <Text style={styles.menuLetra}>{m} </Text>
                                                                </View>
                                                                <View style={{marginLeft:'15%',flexDirection:'row-reverse', alignItems:'center',alignContent:'center'}}>
                                                                <View><Text>  0/{l.submenu.length}</Text></View>
                                                                </View>
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
                                                                                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/nota.png?raw=true'}} 
                                                                                        style={{height: 35, 
                                                                                                    width: 35,
                                                                                                    marginLeft:7
                                                                                                    }}/>
                                                                                <Text style={{fontSize:12,marginLeft:5,marginTop:2}}>Agregar nota</Text>
                                                                                </View>

                                                                                <View style={{flexDirection:'row',alignItems: 'center',marginLeft:5}}>
                                                                                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/evidencia.png?raw=true'}} 
                                                                                        style={{height: 35, 
                                                                                                    width: 35,
                                                                                                    marginLeft:7
                                                                                                    }}/>
                                                                                <Text style={{fontSize:12,marginLeft:5,marginTop:2}}>Agregar evidencia</Text>
                                                                                </View>

                                                                            </View>
                                                                            
                                                                            </CollapseHeader>
                                                                            <CollapseBody>
                                                                            <View style={{flexDirection:'column',marginTop:5,backgroundColor:'#F5F5F5'}}>
                                                                                <View>
                                                                                <Input numberOfLines={4} style={styles.input} placeholder="Escriba su nota" />
                                                                                </View>

                                                                                <View style={{flexDirection:'row-reverse',marginTop:2, marginBottom:10,marginLeft:10 }}>
                                                                                <TouchableHighlight style={styles.botonAgregarNota}>
                                                                                    <View>
                                                                                        <Text style={{fontSize:12}}>Agregar</Text>
                                                                                    </View>
                                                                                </TouchableHighlight>
                                                                                </View>
                                                                            

                                                                            </View>
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

                    <FooterCalendario />
              </Container>
          )
      }
}


const styles = StyleSheet.create({
  datos:{
    fontSize:14
  }, input: {
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
    

    },
  valores:{
    color:'green',
    fontSize:14,
    alignItems:'center'
  },
  descrip:{
    fontSize:12,
    alignItems:'center',
    padding:5
    
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#CED3CE",
    
    marginBottom:15,
    flexDirection:'row',

        width: '100%',
        alignItems: 'center',
      
        padding:1,
        fontSize: 14,
    
        borderRadius:5,
 
  },
  text: {
    fontSize: 14,
    marginTop: 10
  },
  button: {
    backgroundColor: "#4EB151",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginVertical: 50
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
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
        marginTop:'10%',
        borderRadius:5,
    
        

    },
    titulo:{
        backgroundColor:'#B3F1C9',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        padding:6,
        flexDirection:'row',
        borderRadius:5,
        

    },tituloLetra:{
        fontSize:14,
        marginLeft:5

    },
    menu:{
        backgroundColor:'#FCF7B9',
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        padding:6,
        flexDirection:'row',
        flex:1,
          borderRadius:5,
      


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
    botonAgregarNota:{
      height:30,
      width:75,
      backgroundColor:'green',borderRadius: 4,
      alignItems: 'center',borderWidth: 1,borderColor: '#d6d7da',
      alignContent:'center'},
 
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
    

    }
  
  
  });
