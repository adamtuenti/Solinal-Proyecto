import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body, Font, Form, Item, Picker, Input } from 'native-base';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'
/*import * as Font from 'expo-font';*/
import { Ionicons } from '@expo/vector-icons';

export default class AuditoriasBuscar extends Component {
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
        this.state = {
            selected2: undefined,
            selected3: undefined
        };
    }
    onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
      
    onValueChange3(value) {
        this.setState({
          selected3: value
        });
      }   

    render(){
        return (
            <Container>
                <Header>
                    <Left>
                        <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%201.png'}}
                                style= {{height: 40,
                                        width: 40}}>
                        </Image>
                    </Left>
                    <Body>
                        <Title>Auditorías</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%205.png'}}
                                style= {{height: 20,
                                width: 30}}/>
                        </Button>
                    </Right>
                </Header>
                <Content padder style={{backgroundColor: '#f6f6f6'}}>
                    <View style={{flex: 1, flexDirection: 'row', margin:5,padding:10}}>
                        <View style={{marginRight:35}}>
                            <Text style={{color: '#636363'}}>
                                Auditorias realizadas: #    
                                <Text style={{color: '#2ba855'}}>
                                    0
                                </Text>
                            </Text>
                        </View>
                        <View>
                            <Text style={{color: '#2ba855'}}>
                                CUENTA GRATUITA
                            </Text>
                        </View>
                    </View>
                    <Card>
                        <CardItem bordered>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{marginRight:10}}>
                                    <Text style={{color: '#636363'}}>Buscador de normas y reglamentos</Text>
                                </View>
                            </View>
                        </CardItem>
                        <CardItem bordered>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View>  
                                    <Text style={{color: '#636363'}}>Filtar por entidad (FDA, Codex, BRC, ARCSA, MINSA, etc.)</Text>
                                </View>
                            </View>
                        </CardItem>
                    </Card>
                    <Form>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="¿A qué país pertenece la norma o reglamento?"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                <Picker.Item label="Argentina" value="key0" />
                                <Picker.Item label="Bolivia" value="key1" />
                                <Picker.Item label="Brasil" value="key2" />
                                <Picker.Item label="Chile" value="key3" />
                                <Picker.Item label="Colombia" value="key4" />
                                <Picker.Item label="Ecuador" value="key5" />
                                <Picker.Item label="Paraguay" value="key6" />
                                <Picker.Item label="Perú" value="key7" />
                                <Picker.Item label="Uruguay" value="key8" />
                                <Picker.Item label="Venezuela" value="key9" />
                            </Picker>
                        </Item>
                    </Form>
                    <Form>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Elige la norma o reglamento"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected3}
                                onValueChange={this.onValueChange3.bind(this)}
                            >
                                <Picker.Item label="Argentina" value="key0" />
                                <Picker.Item label="Bolivia" value="key1" />
                                <Picker.Item label="Brasil" value="key2" />
                                <Picker.Item label="Chile" value="key3" />
                                <Picker.Item label="Colombia" value="key4" />
                                <Picker.Item label="Ecuador" value="key5" />
                                <Picker.Item label="Paraguay" value="key6" />
                                <Picker.Item label="Perú" value="key7" />
                                <Picker.Item label="Uruguay" value="key8" />
                                <Picker.Item label="Venezuela" value="key9" />
                            </Picker>
                        </Item>
                    </Form>
                    <CardItem style={{alignItems: 'center'}}>
                            <Body style={{alignItems: 'center'}}>
                                <Button style={{backgroundColor:'#1ed695', alignItems: 'center', width: 200}}
                                        onPress={()=>this.props.navigation.navigate('CrearAuditoria')}>
                                    <Text style={{color: 'white', textAlign: 'center'}}>CREAR AUDITORÍA</Text>
                                </Button>
                            </Body>
                    </CardItem>
                    <View style={{flex: 1, flexDirection: 'row', margin:5,padding:10}}>
                        <View style={{marginRight:35}}>
                            <Text style={{color: '#636363'}}>
                                ¿No encuentras a tu país en tu lista?  
                            </Text>
                            <Form>
                                <Item inlineLabel>
                                    <Label>No te preocupes, indíquenos qué norma o reglamento crees que deba estar en esta aplicación para poder aumentar las bases de datos</Label>
                                    <Input />
                                </Item>
                            </Form>
                        </View>
                        <View>
                                <Button style={{backgroundColor:'#1ed695', alignItems: 'center', width: 200}}>
                                    <Text style={{color: 'white', textAlign: 'center'}}>ENVIAR</Text>
                                </Button>
                        </View>
                    </View>
                </Content>
                <Footer style={{height:63}}>
                    <FooterTab style={{backgroundColor: '#f6f6f6'}}>
                        <Button vertical>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%207.png'}}
                                   style= {{height: 29,
                                            width: 23}}>
                            </Image>
                            <Text style={{color: '#636363', fontSize: 9}}>Auditorias</Text>
                        </Button>
                        <Button vertical>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2012.png'}}
                                   style= {{height: 29,
                                            width: 27}}>
                            </Image>
                            <Text style={{color: '#636363', fontSize: 9}}>Calendario</Text>
                        </Button>
                        <Button vertical>                  
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2013.png'}}
                                   style= {{height: 45,
                                            width: 45}}>
                            </Image>
                        </Button>
                        <Button vertical>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2014.png'}}
                                   style= {{height: 29,
                                            width: 25}}>
                            </Image>
                            <Text style={{color: '#636363', fontSize: 9}}>Acción Correctiva</Text>
                        </Button>
                        <Button vertical>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2015.png'}}
                                   style= {{height: 29,
                                            width: 25}}>
                            </Image>
                            <Text style={{color: '#636363', fontSize: 9}}>No Conformidad</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}