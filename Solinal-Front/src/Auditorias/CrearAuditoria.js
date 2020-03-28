import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body,  Font } from 'native-base';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'
/*import * as Font from 'expo-font';*/
import { Ionicons } from '@expo/vector-icons';

export default class CrearAuditoria extends Component {

    /*<Card style={{height: 200}}>
                        <CardItem>
                            <Body>
                                <Text style={{color: '#1ed695'}}>BUSCAR LISTAS DE AUDITORÍAS BASADA EN NORMAS</Text>
                            </Body>
                        </CardItem>
                        <CardItem cardBody style={{alignItems: 'center', paddingLeft: 10}}>
                            <Left style={{alignItems: 'center'}}>
                                <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2035.png'}} 
                                       style={{height: 100, 
                                               width: 100}}/>
                            </Left>
                            <Body style={{alignItems: 'center'}}>
                                <Text style={{color: '#636363'}}>
                                    Busca las normas que quieras auditar, ya sea por entidad privada o gobernamental, como el Codex Alimentarius, FDA, BRC, ISO International, y las que se encuentran vigentes en tu país.
                                </Text>
                            </Body>               
                        </CardItem>
                    </Card>*/

    async componentDidMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          /*Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")*/
        });
        this.setState({ isReady: true });
      }

    render() {
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
                    <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%205.png'}}
                                    style= {{height: 20,
                                            width: 30}}>
                    </Image>
                    </Button>
                </Right>
                </Header>
                <Content padder style={{backgroundColor: '#f6f6f6'}}>
                    


                    <Card style={{height:175}}>

                    <View style={{flex: 1, flexDirection: 'column', height:100, justifyContent:'center', marginTop:5}}>

                        <Text style={{color: '#1ed695', marginLeft:10, fontSize:15}}>CREAR UNA NUEVA PLANTILLA</Text>

                    <View style={{flexDirection: 'row', marginTop:5}}>    
                    

                    <View style={{margin:7}}>
                        
                        <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2036.png'}} 
                                       style={{height: 100, 
                                        width: 100,
                                        paddingLeft: 10}}/>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column',marginLeft:5}}>
                            
                            <Text style={{color: '#636363', fontSize: 14}}>Puedes crear tus propias listas de inspección, ideal para auditorías personalizadas, auditorías a proveedores, checklists de verificación basado en la actividad del negocio.</Text>
                    </View>
                    </View>                  
                </View>

                </Card>
               


                    <Card style={{height:175}} onPress={()=>this.props.navigation.navigate('AuditoriasVacia')}>

                    <View style={{flex: 1, flexDirection: 'column', height:100, justifyContent:'center', marginTop:5}}>

                        <Text style={{color: '#1ed695', marginLeft:10, fontSize:15}}>BUSCAR AUDITORÍAS BASADA EN NORMAS</Text>

                    <View style={{flexDirection: 'row', marginTop:5}}>    
                    

                    <View style={{margin:7}}>
                        
                        <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2035.png'}} 
                                       style={{height: 100, 
                                               width: 100}}  onPress={()=>this.props.navigation.navigate('AuditoriasVacia')}/>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column',marginLeft:5}}>
                        
                            
                            <Text style={{color: '#636363', fontSize: 14}}>Busca las normas que quieras auditar, ya sea por entidad privada o gobernamental, como el Codex Alimentarius, FDA, BRC, ISO International, y las que se encuentran vigentes en tu país.</Text>
                        

                    </View>
                    </View>

                   
                </View>

                </Card>



                </Content>





                <Footer style={{height:63}}>
                    <FooterTab style={{backgroundColor: '#f6f6f6'}}>
                        <Button vertical>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%207.png'}}
                                   style= {{height: 29,
                                            width: 23}}>
                            </Image>
                            <Text style={{color: '#636363',fontSize: 9}}>Auditorias</Text>
                        </Button>
                        <Button vertical>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/calendario.png?raw=true'}}
                                   style= {{height: 29,
                                            width: 27}}>
                            </Image>
                            <Text style={{color: '#636363',fontSize: 9}}>Calendario</Text>
                        </Button>
                        <Button vertical onPress={()=>this.props.navigation.navigate('AuditoriasVacia')}>                  
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
                            <Text style={{color: '#636363',fontSize: 9}}>Acción Correctiva</Text>
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
        );
    }  
}