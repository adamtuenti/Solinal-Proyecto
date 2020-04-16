import React, { Component } from 'react';
import { Image } from 'react-native';
import {Icon, Container, Item, Input, Button, Title, Content, Card, CardItem, CheckBox, List,  Left, Right, Body,  Font } from 'native-base';
import { Divider } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'
/*import * as Font from 'expo-font';*/
import { Ionicons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';

import Header from '../../shared/Header';

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
            <Header encabezado='Invitar Miembros'/>
                
                    
                <Content padder>
                    <Card searchBar rounded>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                        
                            <Icon style={{marginLeft:10}} name="ios-search" />
                        
                            <Input style={{marginLeft:5}} placeholder="Buscar" />
                        </View>
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
                        <TouchableHighlight style={styles.botonLogin}
                            onPress={()=>this.props.navigation.navigate('CrearAuditoria')}>
                            <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}> ENVIAR INVITACIÓN </Text>
                        </TouchableHighlight>                        
                    </View>
                </Content>
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
        marginTop:35,
        
   

    }
})