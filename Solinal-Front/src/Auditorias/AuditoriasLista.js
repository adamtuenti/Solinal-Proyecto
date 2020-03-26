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

export default class AuditoriasLista extends Component {
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


/*<Card>
                        <CardItem bordered>
                            <Body>
                                <View>
                                    <Text>
                                        Buscaste:
                                        <Text>FDA</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        Encontramos:
                                        <Text>Part 110 current good manufacturing practice in manufacturing, packing, or holding human food</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        Estados Unidos |
                                        <Text>FDA 21 CFR 110 |
                                            <Text>15 descargas</Text>
                                        </Text>
                                    </Text>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <View>
                                    <Text>
                                        Buscaste:
                                        <Text>FDA</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        Encontramos:
                                        <Text>Part 101 Food Ilbeling</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        Estados Unidos |
                                        <Text>FDA 21 CFR 101 |
                                            <Text>365 descargas</Text>
                                        </Text>
                                    </Text>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <View>
                                    <Text>
                                        Buscaste:
                                        <Text>FDA</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        Encontramos:
                                        <Text>Fish and Fishering Products</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        Estados Unidos |
                                        <Text>FDA 21 CFR 123 |
                                            <Text>498 descargas</Text>
                                        </Text>
                                    </Text>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>*/
    render(){
        return (
            <Container>

                <Header style={{justifyContent: 'flex-end',marginTop:5,backgroundColor: '#1ed695',height:75, alignItems: 'center',}}>
                <Left>
                    <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%201.png'}}
                                    style= {{height: 40,
                                            width: 40}}>
                    </Image>
                </Left>
                <Body>
                    <Title>Auditorias</Title>
                </Body>
                <Right>
                    <Button transparent>
                    <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%205.png'}}
                                    style= {{height: 20,
                                            width: 30}}>
                    </Image>
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

                    <View style={{paddingBottom:25}}>

                    <Card >

                        <CardItem bordered>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{marginRight:10}}>
                                    <Text style={{color: '#636363'}}>Buscador de normas y reglamentos</Text>
                                </View>

                                <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2010.png'}}style= {{height: 25,width: 15}}></Image>
                                </View>
                            </View>
                        </CardItem>

                        <CardItem bordered>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View>  
                                    <Text style={{color: '#636363'}}>Filtar por entidad (FDA, Codex, BRC, etc.)</Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                               
                                <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2010.png'}}style= {{height: 25,width: 15}}></Image>
                                </View>
                            </View>
                        </CardItem>

                    </Card>

                    </View> 



                    <Card>
                        <CardItem bordered>
                            <Body>
                                <View>
                                    <Text style={{color:'green'}}>
                                        Buscaste:
                                        <Text style={{color:'black',fontWeight: "bold"}}> 'FDA</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{color:'green'}}>
                                        Encontramos:
                                        <Text style={{color:'black',fontWeight: "bold"}}> 'Part 110 current good manufacturing practice in manufacturing, packing, or holding human food</Text>
                                    </Text>
                                </View>
                                <View style={{marginTop:5}}>
                                    <Text style={{color:'#A7AAA7'}}>
                                        Estados Unidos |
                                        <Text>FDA 21 CFR 110 |
                                            <Text>15 descargas</Text>
                                        </Text>
                                    </Text>
                                </View>
                            </Body>
                        </CardItem>
                      
                    </Card>
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