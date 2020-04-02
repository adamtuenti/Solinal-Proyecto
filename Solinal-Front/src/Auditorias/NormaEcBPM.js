import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, DatePicker, Content, Card, CardItem, Button, Left, Label, Accordion, Right, Body, Font, Form, Item, Picker, Input, List, ListItem, Separator } from 'native-base';
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
                    
                    <Collapse>
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
                                    </View>
                                    </Card>
                                    <Card>
                                    <View>
                                        <View>
                                            <Text>b. Que el diseño y distribución de las áreas permita un mantenimiento, limpieza y desinfección apropiada;
                                            y, que minimice los riesgos de contaminación.</Text>
                                        </View>
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
                                    </View>
                                    </Card>
                                    <Card>
                                    <View>
                                        <View>
                                            <Text>c. Que las superficies y materiales, particularmente aquellos que estén en contacto con los alimentos,
                                            no sean tóxicos, y están diseñados para el uso pretendido, fáciles de mantener, limpiar y desinfectar.</Text>
                                        </View>
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
                                    </View>
                                    </Card>
                                    <Card>  
                                    <View>
                                        <View>
                                            <Text>d. Que facilite un control efectivo de plagas y dificulte el acceso y refugio de las mismas.</Text>
                                        </View>
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
                                        <Text>Bruto</Text>
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
                                    </View>
                                    </Card>
                                    <Card>
                                    <View>
                                        <View>
                                            <Text>b. La construcción sea sólida y disponga de espacio suficiente para la instalación, operación y mantenimiento de los equipos
                                            así como para el movimiento del personal y el traslado de materiales o alimentos</Text>
                                        </View>
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
                                    </View>
                                    </Card>
                                    <Card>
                                    <View>
                                        <View>
                                            <Text>c. Brinde facilidades para la higiene del personal.</Text>
                                        </View>
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
                                    </View>
                                    </Card>
                                    <Card> 
                                    <View>
                                        <View>
                                            <Text>d. Las áreas internas de protección se deben dividir en zonas según el nivel de higiene que requieran y dependiendo
                                            de los riesgos de contaminación de los alimentos.</Text>
                                        </View>
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
                                        <Text>Bruto</Text>
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
                                        <Text>Bruto</Text>
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
                    </Collapse>
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