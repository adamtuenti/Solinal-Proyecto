import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Title, Content, Card, CardItem,  Button, Left, Right, Body, Font, Form, Item, Picker, Input } from 'native-base';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'
/*import * as Font from 'expo-font';*/
import { Ionicons } from '@expo/vector-icons';
import Footer from './../../shared/Footer';
import HeaderBack from './../../shared/HeaderBack';
import EstadoCuenta from './../../shared/estadoCuenta';
import FooterAuditoria from '../../shared/FooterAuditoria';
//import {idPais} from './AuditoriasBuscar'


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
            selected3: undefined,
            idPais: this.props.navigation.state.params.idPais
        };
    }

    componentDidMount(){
        this.getPaises();
    }

    getPaises = () => {
        this.setState({loading:true})
        fetch(this.state.urlPaises)
        .then(res=>res.json())
        .then(res=>{ 
            console.log(res);
            this.setState({
            paises: res,
            urlPaises: res.next,
            loading: false,    
            })
        })
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

                <HeaderBack />


                <Content padder style={{backgroundColor: '#f6f6f6'}}>

                    <EstadoCuenta cantidad={this.state.idPais}  tipoCuenta='GRATS'/>

                    <View style={{paddingBottom:25}}>

                    <Card >

                        <CardItem bordered>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{marginRight:10}}>
                                    <Text style={{color: '#636363'}}>Buscador de normas y reglamentos {global.idPa}</Text>
                                </View>

                                <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')}>
                                    <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/ir.png?raw=true'}}style= {{height: 25,width: 15}}></Image>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </CardItem>

                        <CardItem bordered>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View>  
                                    <Text style={{color: '#636363'}}>Filtar por entidad (FDA, Codex, BRC, etc.)</Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                               
                                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')}>
                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/ir.png?raw=true'}}style= {{height: 25,width: 15}}></Image>
                </TouchableHighlight>
                                </View>
                            </View>
                        </CardItem>

                    </Card>

                    </View> 

                    <View>


                    </View>



                    <Card>
                        <CardItem bordered>
                            <Body>
                                <View>
                                    <Text style={{color:'#1ED695'}}>
                                        Buscaste:
                                        <Text style={{color:'black',fontWeight: "bold"}}> FDA</Text>
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{color:'#1ED695'}}>
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
                 <FooterAuditoria/>
            </Container>
        )
    }
}