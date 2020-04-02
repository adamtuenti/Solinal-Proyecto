import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, DatePicker, Content, Card, CardItem, Button, Left, Label, Accordion, Right, Body, Font, Form, Item, Picker, Input } from 'native-base';
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

import Footer from './../../shared/Footer';

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

export default class NormaEcBPM extends Component {

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

      _renderHeader(item, expanded) {
        return (
          <View style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "center" ,
            backgroundColor: "#A9DAD6" }}>
          <Text style={{ fontWeight: "600" }}>
              {" "}{item.title}
            </Text>
            {expanded
              ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
              : <Icon style={{ fontSize: 18 }} name="add-circle" />}
          </View>
        );
      }

      _renderHeader1(item, expanded) {
        return (
          <View style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "center" ,
            backgroundColor: "#A9DAD6" }}>
          <Text style={{ fontWeight: "600" }}>
              {" "}{item.title}
            </Text>
            {expanded
              ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
              : <Icon style={{ fontSize: 18 }} name="add-circle" />}
          </View>
        );
      }

      _renderContent(item) {
        return (
            <Accordion 
            dataArray={dataItem1}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader1}
            renderContent={this._renderContent11}>>
           </Accordion>
        );
      }

      _renderContent11(item) {
        return (
            <View>
                <View>
                    <Text>
                        Los establecimientos donde se producen y manipulan alimentos serán diseñados y construidos de acuerdo
                        a las operaciones y riesgos asociados a la actividad y al alimento, de manera que puedan cumplir los siguientes requisitos:
                    </Text>
                </View>
                <View>
                    <Text>
                        a. Que el riesgo de contaminación y alteración sea el mismo.
                    </Text>
                    <View>
                        <Button disabled rounded>
                            <Text>SÍ</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>NO</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>NO APLICA</Text>
                        </Button>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                        <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2060.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
                                        }}/>
                        </View>
                        <Text>Agregar nota</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                        <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2061.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
                                        }}/>
                        </View>
                        <Text>Agregar evidencia</Text>
                    </TouchableHighlight>
                    </View>
                </View>
                <View>
                    <Text>
                        b. Que el diseño y distribución de las áreas permita un mantenimiento, limpieza y desinfección apropiada;
                        y, que minimice los riesgos de contaminación.
                    </Text>
                    <View>
                        <Button disabled rounded>
                            <Text>SÍ</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>NO</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>NO APLICA</Text>
                        </Button>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                        <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2060.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
                                        }}/>
                        </View>
                        <Text>Agregar nota</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                        <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2061.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
                                        }}/>
                        </View>
                        <Text>Agregar evidencia</Text>
                    </TouchableHighlight>
                    </View>
                </View>
                <View>
                    <Text>
                        c. Que las superficies y materiales, particularmente aquellos que estén en contacto con los alimentos,
                        no sean tóxicos, y están diseñados para el uso pretendido, fáciles de mantener, limpiar y desinfectar.
                    </Text>
                    <View>
                        <Button disabled rounded>
                            <Text>SÍ</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>NO</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>NO APLICA</Text>
                        </Button>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                        <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2060.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
                                        }}/>
                        </View>
                        <Text>Agregar nota</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                        <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2061.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
                                        }}/>
                        </View>
                        <Text>Agregar evidencia</Text>
                    </TouchableHighlight>
                    </View>
                    <View>
                    <Text>
                        d. Que facilite un control efectivo de plagas y dificulte el acceso y refugio de las mismas.
                    </Text>
                    <View>
                        <Button disabled rounded>
                            <Text>SÍ</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>NO</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>NO APLICA</Text>
                        </Button>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                        <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2060.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
                                        }}/>
                        </View>
                        <Text>Agregar nota</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                        <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2061.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
                                        }}/>
                        </View>
                        <Text>Agregar evidencia</Text>
                    </TouchableHighlight>
                    </View>
                </View>
                </View>
            </View>
        );
      }

      _renderContent13(item) {
        return (
            <View>
                <View>
                    <Text>
                        La edificicación debe construirse de manera que:
                    </Text>
                </View>
                <View>
                    <Text>
                        a. Ofrezca protección contra polvo, materias extrañas, insectos, roedores, aves y otros elementos de ambiente exterior
                        y que mantenga las condiciones sanitarias apropiadas según el proceso. 
                    </Text>
                    <View>
                        <Button disabled rounded>
                            <Text>SÍ</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>NO</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>NO APLICA</Text>
                        </Button>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                        <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2060.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
                                        }}/>
                        </View>
                        <Text>Agregar nota</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                        <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2061.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
                                        }}/>
                        </View>
                        <Text>Agregar evidencia</Text>
                    </TouchableHighlight>
                    </View>
                </View>
                <View>
                    <Text>
                        b. La construcción sea sólida y disponga de espacio suficiente para la instalación, operación y mantenimiento de los equipos
                        así como para el movimiento del personal y el traslado de materiales o alimentos
                    </Text>
                    <View>
                        <Button disabled rounded>
                            <Text>SÍ</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>NO</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>NO APLICA</Text>
                        </Button>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                        <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2060.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
                                        }}/>
                        </View>
                        <Text>Agregar nota</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                        <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2061.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
                                        }}/>
                        </View>
                        <Text>Agregar evidencia</Text>
                    </TouchableHighlight>
                    </View>
                </View>
                <View>
                    <Text>
                        c. Brinde facilidades para la higiene del personal.
                    </Text>
                    <View>
                        <Button disabled rounded>
                            <Text>SÍ</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>NO</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>NO APLICA</Text>
                        </Button>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                        <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2060.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
                                        }}/>
                        </View>
                        <Text>Agregar nota</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                        <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2061.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
                                        }}/>
                        </View>
                        <Text>Agregar evidencia</Text>
                    </TouchableHighlight>
                    </View>
                    <View>
                    <Text>
                        d. Las áreas internas de protección se deben dividir en zonas según el nivel de higiene que requieran y dependiendo
                        de los riesgos de contaminación de los alimentos.
                    </Text>
                    <View>
                        <Button disabled rounded>
                            <Text>SÍ</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>NO</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>NO APLICA</Text>
                        </Button>
                    </View>
                    <View>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                        <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2060.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
                                        }}/>
                        </View>
                        <Text>Agregar nota</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                        <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2061.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
                                        }}/>
                        </View>
                        <Text>Agregar evidencia</Text>
                    </TouchableHighlight>
                    </View>
                </View>
                </View>
            </View>
        );
      }

      render(){
        return (
            <Container>

                <Header style={{justifyContent: 'flex-end',marginTop:5,backgroundColor: '#1ed695',height:75, alignItems: 'center',}}>
                <Left>
                    <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/user.png?raw=true'}}
                                    style= {{height: 40,
                                            width: 40}}>
                    </Image>
                </Left>
                <Body>
                    <Title>Auditorias</Title>
                </Body>
                <Right>
                    <Button transparent>
                    <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/menu.png?raw=true'}}
                                    style= {{height: 20,
                                            width: 30}}>
                    </Image>
                    </Button>
                </Right>
                </Header>



                <Content padder style={{backgroundColor: '#f6f6f6'}}>

                    <Card>
                        <Item>
                            <Input placeholder="Norma" />
                        </Item>
                        <Item>
                            <Input placeholder="Organización" />
                        </Item>
                        <Item>
                            <Input placeholder="Dirección" />
                        </Item>
                        <Item>
                            <Input placeholder="Alcance de la auditoría" />
                        </Item>
                        <DatePicker
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
                        <Item>
                            <Input placeholder="Auditor" />
                        </Item>
                    </Card>

                    <Accordion 
                     dataArray={dataMain}
                     animation={true}
                    expanded={true}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}>
                    </Accordion>

                    
                </Content>

                <Footer/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    

    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#1ed695',
        padding: 10,
        width:175,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        
   

    },input: {
        height: 25,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 15,
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