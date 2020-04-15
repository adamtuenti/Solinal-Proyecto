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

/*<Collapse>
                        <CollapseHeader>
                            <Card>
                            <View>
                                <Text>De las instalaciones y requisitos de buenas prácticas de manufactura</Text>
                            </View>
                            </Card>
                        </CollapseHeader>
                        <CollapseBody>
                            <Collapse>
                                <CollapseHeader>
                                    <Card>
                                    <View>
                                        <Text>Art. 73: De las condiciones mínimas básicas</Text>
                                    </View>
                                    </Card>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Card>
                                    <View>
                                        <View>
                                            <Text>De las instalaciones y requisitos de buenas prácticas de manufactura</Text>
                                        </View>
                                        <View>
                                            <Text>a. Que el riesgo de contaminación y alteración sea el mismo.</Text>
                                        </View>
                                            <View style={{flexDirection:'row',marginTop:7,marginBottom:5}}>    
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '1')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '1' ? 'green' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> Si </Text>
                                                    </View>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '2')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '2' ? 'red' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> No </Text>
                                                    </View>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '3')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '3' ? 'orange' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> N/A </Text>
                                                    </View>
                                                </TouchableHighlight>
                                            </View>
                                        </View>
                                    </Card>
                                    <Card>
                                    <View>
                                        <View>
                                            <Text>b. Que el diseño y distribución de las áreas permita un mantenimiento, limpieza y desinfección apropiada;
                                            y, que minimice los riesgos de contaminación.</Text>
                                        </View>
                                        </View>
                                            <View style={{flexDirection:'row',marginTop:7,marginBottom:5}}>    
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '1')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '1' ? 'green' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> Si </Text>
                                                    </View>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '2')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '2' ? 'red' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> No </Text>
                                                    </View>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '3')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '3' ? 'orange' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> N/A </Text>
                                                    </View>
                                                </TouchableHighlight>
                                            </View>
                                        </View>
                                    </View>
                                    </Card>
                                    <Card>
                                    <View>
                                        <View>
                                            <Text>c. Que las superficies y materiales, particularmente aquellos que estén en contacto con los alimentos,
                                            no sean tóxicos, y están diseñados para el uso pretendido, fáciles de mantener, limpiar y desinfectar.</Text>
                                        </View>
                                        </View>
                                            <View style={{flexDirection:'row',marginTop:7,marginBottom:5}}>    
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '1')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '1' ? 'green' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> Si </Text>
                                                    </View>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '2')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '2' ? 'red' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> No </Text>
                                                    </View>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '3')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '3' ? 'orange' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> N/A </Text>
                                                    </View>
                                                </TouchableHighlight>
                                            </View>
                                        </View>
                                    </View>
                                    </Card>
                                    <Card>  
                                    <View>
                                        <View>
                                            <Text>d. Que facilite un control efectivo de plagas y dificulte el acceso y refugio de las mismas.</Text>
                                        </View>
                                        </View>
                                            <View style={{flexDirection:'row',marginTop:7,marginBottom:5}}>    
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '1')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '1' ? 'green' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> Si </Text>
                                                    </View>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '2')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '2' ? 'red' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> No </Text>
                                                    </View>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '3')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '3' ? 'orange' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> N/A </Text>
                                                    </View>
                                                </TouchableHighlight>
                                            </View>
                                        </View>
                                    </View>
                                    </Card>     
                                </CollapseBody>
                            </Collapse>
                            <Collapse>
                                <CollapseHeader>
                                    <Card>
                                    <View>
                                        <Text>Art. 74: De la localización</Text>
                                    </View>
                                    </Card>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Card>
                                    <View>
                                        <Text>SubMenú</Text>
                                    </View>
                                    </Card>
                                </CollapseBody>
                            </Collapse>
                            <Collapse>
                                <CollapseHeader>
                                    <Card>
                                    <View>
                                        <Text>Art. 75: Diseño y construcción</Text>
                                    </View>
                                    </Card>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Card>
                                    <View>
                                        <View>
                                            <Text>La edificicación debe construirse de manera que:</Text>
                                        </View>
                                        <View>
                                            <Text>a. Ofrezca protección contra polvo, materias extrañas, insectos, roedores, aves y otros elementos de ambiente exterior
                                            y que mantenga las condiciones sanitarias apropiadas según el proceso. </Text>
                                        </View>
                                        </View>
                                            <View style={{flexDirection:'row',marginTop:7,marginBottom:5}}>    
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '1')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '1' ? 'green' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> Si </Text>
                                                    </View>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '2')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '2' ? 'red' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> No </Text>
                                                    </View>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '3')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '3' ? 'orange' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> N/A </Text>
                                                    </View>
                                                </TouchableHighlight>
                                            </View>
                                        </View>
                                    </View>
                                    </Card>
                                    <Card>
                                    <View>
                                        <View>
                                            <Text>b. La construcción sea sólida y disponga de espacio suficiente para la instalación, operación y mantenimiento de los equipos
                                            así como para el movimiento del personal y el traslado de materiales o alimentos</Text>
                                        </View>
                                        </View>
                                            <View style={{flexDirection:'row',marginTop:7,marginBottom:5}}>    
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '1')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '1' ? 'green' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> Si </Text>
                                                    </View>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '2')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '2' ? 'red' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> No </Text>
                                                    </View>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '3')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '3' ? 'orange' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> N/A </Text>
                                                    </View>
                                                </TouchableHighlight>
                                            </View>
                                        </View>
                                    </View>
                                    </Card>
                                    <Card>
                                    <View>
                                        <View>
                                            <Text>c. Brinde facilidades para la higiene del personal.</Text>
                                        </View>
                                        </View>
                                            <View style={{flexDirection:'row',marginTop:7,marginBottom:5}}>    
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '1')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '1' ? 'green' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> Si </Text>
                                                    </View>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '2')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '2' ? 'red' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> No </Text>
                                                    </View>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '3')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '3' ? 'orange' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> N/A </Text>
                                                    </View>
                                                </TouchableHighlight>
                                            </View>
                                        </View>
                                    </View>
                                    </Card>
                                    <Card> 
                                    <View>
                                        <View>
                                            <Text>d. Las áreas internas de protección se deben dividir en zonas según el nivel de higiene que requieran y dependiendo
                                            de los riesgos de contaminación de los alimentos.</Text>
                                        </View>
                                        </View>
                                            <View style={{flexDirection:'row',marginTop:7,marginBottom:5}}>    
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '1')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '1' ? 'green' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> Si </Text>
                                                    </View>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '2')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '2' ? 'red' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> No </Text>
                                                    </View>
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                style={styles.boton}
                                                onPress={() => this._handleClick('any flag', '3')}
                                                underlayColor="red">
                                                    <View style={{backgroundColor: (this.state.SelectedButton === '3' ? 'orange' : 'grey')}}>
                                                        <Text style={{fontWeight: 'bold',color:'white'}}> N/A </Text>
                                                    </View>
                                                </TouchableHighlight>
                                            </View>
                                        </View>
                                    </View>
                                    </Card> 
                                </CollapseBody>
                            </Collapse>
                            <Collapse>
                                <CollapseHeader>
                                    <Card>
                                    <View>
                                        <Text>Art. 76: Condiciones específicas de las áreas, estructuras internas y accesorios</Text>
                                    </View>
                                    </Card>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Card>
                                    <View>
                                        <Text>Submenu</Text>
                                    </View>
                                    </Card>
                                </CollapseBody>
                            </Collapse>
                            <Collapse>
                                <CollapseHeader>
                                    <Card>
                                    <View>
                                        <Text>Art. 77: Suministro de Agua</Text>
                                    </View>
                                    </Card>
                                </CollapseHeader>
                                <CollapseBody>
                                    <Card>
                                    <View>
                                        <Text>Submenu</Text>
                                    </View>
                                    </Card>
                                </CollapseBody>
                            </Collapse>
                        </CollapseBody>
                    </Collapse>
                    <Collapse>
                        <CollapseHeader>
                            <Card>
                            <View>
                                <Text>De los equipos y utensilios</Text>
                            </View>
                            </Card>
                        </CollapseHeader>
                        <CollapseBody>
                            <Card>
                            <View>
                                <Text>Collapse 2</Text>
                            </View>
                            </Card>
                        </CollapseBody>
                    </Collapse>
                    <Collapse>
                        <CollapseHeader>
                            <Card>
                            <View>
                                <Text>Requisitos higiénicos de fabricación</Text>
                            </View>
                            </Card>
                        </CollapseHeader>
                        <CollapseBody>
                            <Card>
                            <View>
                                <Text>Collapse 3</Text>
                            </View>
                            </Card>
                        </CollapseBody>
                    </Collapse>
                    <Collapse>
                        <CollapseHeader>
                            <Card>
                            <View>
                                <Text>Envasado, etiquetado y empaquetado</Text>
                            </View>
                            </Card>
                        </CollapseHeader>
                        <CollapseBody>
                            <Card>
                            <View>
                                <Text>Collapse 4</Text>
                            </View>
                            </Card>
                        </CollapseBody>
                    </Collapse>
                    <Collapse>
                        <CollapseHeader>
                            <Card>
                            <View>
                                <Text>Almacenamiento, distribución, transporte y comercialización</Text>
                            </View>
                            </Card>
                        </CollapseHeader>
                        <CollapseBody>
                            <Card>
                            <View>
                                <Text>Collapse 5</Text>
                            </View>
                            </Card>
                        </CollapseBody>
                    </Collapse>
                    <Collapse>
                        <CollapseHeader>
                            <Card>
                            <View>
                                <Text>Del aseguramiento y control de calidad</Text>
                            </View>
                            </Card>
                        </CollapseHeader>
                        <CollapseBody>
                            <Card>
                            <View>
                                <Text>Collapse 6</Text>
                            </View>
                            </Card>
                        </CollapseBody>
                    </Collapse>
                    <Collapse>
                        <CollapseHeader>
                            <Card>
                            <View>
                                <Text>Firma del auditor</Text>
                            </View>
                            </Card>
                        </CollapseHeader>
                        <CollapseBody>
                            <Card>
                            <View>
                                <Text>Nombre y Firma del Auditor</Text>
                            </View>
                            <Form>
                                <Item inlineLabel>
                                <Label>Escriba su nombre y su apellido</Label>
                                <Input />
                                </Item>
                            </Form>
                            <View>
                                <Button warning rounded>
                                    <Text>FINALIZAR AUDITORIA</Text>
                                </Button>
                            </View>
                            </Card>
                        </CollapseBody>
                    </Collapse>*/

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
                            textStyle={{ color: "#1ed695" }}
                            placeHolderTextStyle={{ color: "#1ed695" }}
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
                                                                            style={styles.boton}
                                                                            onPress={() => this._handleClick('any flag', '1')}
                                                                            underlayColor="red"
                                                                            >
                                                                            <View style={{backgroundColor: (this.state.SelectedButton === '1' ? 'green' : 'grey')}}>
                                                                            <Text style={{fontWeight: 'bold',color:'white'}}> Si </Text>
                                                                            </View>
                                                                            </TouchableHighlight>
                                                                            <TouchableHighlight
                                                                            style={styles.boton}
                                                                            onPress={() => this._handleClick('any flag', '2')}
                                                                            underlayColor="red">
                                                                            <View style={{backgroundColor: (this.state.SelectedButton === '2' ? 'red' : 'grey')}}>
                                                                            <Text style={{fontWeight: 'bold',color:'white'}}> No </Text>
                                                                            </View>
                                                                            </TouchableHighlight>
                                                                            <TouchableHighlight
                                                                            style={styles.boton}
                                                                            onPress={() => this._handleClick('any flag', '3')}
                                                                            underlayColor="red">
                                                                            <View style={{backgroundColor: (this.state.SelectedButton === '3' ? 'orange' : 'grey')}}>
                                                                            <Text style={{fontWeight: 'bold',color:'white'}}> N/A </Text>
                                                                            </View>
                                                                            </TouchableHighlight>
                                                                            
                                                                        </View>
                                                                        <View style={{marginTop:5,marginBottom:7,marginLeft:5}}>
                                                                        <Collapse>
                                                                            <CollapseHeader>
                                                                            
                                                                                <View style={{flexDirection:'row',alignItems: 'center',}}>
                                                                                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/autoria.png?raw=true'}} 
                                                                                        style={{height: 35, 
                                                                                                    width: 25,
                                                                                                    marginLeft:7
                                                                                                    }}/>
                                                                                <Text style={{fontSize:12,marginLeft:5,marginTop:2}}>Agregar nota</Text>
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