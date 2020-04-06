import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Title, Content, Card, CardItem, CheckBox, List, ListItem, Button, Left, Right, Body,  Font } from 'native-base';
import { Icon,Divider } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'
/*import * as Font from 'expo-font';*/
import { Ionicons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';

export default class InvitarMiembros extends Component {

    async componentDidMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          /*Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")*/
        });
        this.setState({ isReady: true });
      }

    render(){
        return(
            <Container>
                <Header>
                    <View style={{flexDirection:'row', backgroundColor:'#1ed695', height:'11%', paddingTop:'15%', alignContent:'center'}}>
                        <View style={{width: Dimensions.get('screen').width, flexDirection: 'row', alignItems:'center', marginLeft:10}}>
                            <TouchableHighlight onPress={()=>this.props.navigation.navigate('EquipoVacio')}>
                                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/back.png?raw=true'}} style= {{height:40, width:40}}/>
                            </TouchableHighlight>
                            <Text style={{color:'white', fontSize:21, marginLeft:10}}>
                                INVITAR MIEMBROS
                            </Text>
                        </View>
                    </View>
                </Header>
                <Content padder>
                    <Card searchBar rounded>
                        <CardItem>
                            <Icon name="ios-search" />
                            <Input placeholder="Buscar" />
                        </CardItem>
                    </Card>
                    <Card>
                        <List>
                            <ListItem>
                                <CheckBox checked={false} color='#1ed695'/>
                                <Body>
                                    <Text>Nombre y Apellido del contacto</Text>
                                    <Text note>contacto@correo.com</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <CheckBox checked={false} color='#1ed695'/>
                                <Body>
                                    <Text>Nombre y Apellido del contacto</Text>
                                    <Text note>contacto@correo.com</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <CheckBox checked={true} color='#1ed695'/>
                                <Body>
                                    <Text>Nombre y Apellido del contacto</Text>
                                    <Text note>contacto@correo.com</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <CheckBox checked={false} color='#1ed695'/>
                                <Body>
                                    <Text>Nombre y Apellido del contacto</Text>
                                    <Text note>contacto@correo.com</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <CheckBox checked={false} color='#1ed695'/>
                                <Body>
                                    <Text>Nombre y Apellido del contacto</Text>
                                    <Text note>contacto@correo.com</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </Card>
                    <View style={{alignItems: 'center'}}>
                        <TouchableHighlight style={{ alignItems: 'center', backgroundColor: '#1ed695', padding: 10, width:142, borderRadius: 4, borderWidth: 1, borderColor: '#d6d7da'}}
                            onPress={()=>this.props.navigation.navigate('CrearAuditoria')}>
                            <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}> ENVIAR INVITACIÓN </Text>
                        </TouchableHighlight>                        
                    </View>
                </Content>
            </Container>
        )
    }
}