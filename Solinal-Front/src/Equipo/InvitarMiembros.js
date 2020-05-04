import React, { Component } from 'react';
import { Image } from 'react-native';
import {Icon, Container, Item, Input, Button, Title, Content, Card, CardItem, CheckBox, List,  Left, Right, Body,  Font } from 'native-base';
import { Divider } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  TextInput
} from 'react-native'
/*import * as Font from 'expo-font';*/
import { Ionicons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';

import HeaderBack from '../../shared/HeaderBack';

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
            
            <Container style={{flex:1}}>
            <HeaderBack encabezado='Invitar Miembros'/>


            <Card style={{marginBottom:'10%',marginTop:'5%',marginLeft:'2.5%',width:'95%',alignItems:'center',alignContent:'center',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da'}}>

            <View style={{alignItems:'center',padding:'2%'}} >

            <Text style={{marginLeft:'2%', fontWeight:'bold',textAlign:'center'}}>Escriba el correo del usuario que desea que forme parte de su equipo.</Text>
            </View>


            </Card>

            
                    
                
                    
                        <View style={{alignItems:'center',marginTop:'5%'}}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                        
                            <Icon style={{height:30,marginTop:'1%'}}  name="ios-search" />
                        
                             <TextInput
                                    style={styles.input}
                                    placeholder='Ingrese correo'

                                    autoCapitalize="none"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={username => this.setState({ username })}

                            />
                        </View>
                        </View>
              
                    
                    <View style={{alignItems: 'center'}}>
                        <TouchableHighlight style={styles.botonEnviar}
                            onPress={()=>this.props.navigation.navigate('CrearAuditoria')}>
                            <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}> ENVIAR INVITACIÓN </Text>
                        </TouchableHighlight>                        
                    </View>
             
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    

    botonEnviar:{
        alignItems: 'center',
        backgroundColor: '#1ed695',
        padding: 10,
        width:175,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginTop:35,
        
   

    },
     input: {
        height: 35,
        borderBottomColor: '#1ed796',
        borderBottomWidth: 1,
        paddingLeft: 8,
        paddingRight: 10,
        width: 175,
        alignItems: 'center',
        marginLeft:'2%', 
       
        fontSize: 15
    },
})