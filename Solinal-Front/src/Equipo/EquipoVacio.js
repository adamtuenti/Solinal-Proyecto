import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container,  Title, Content, Card, CardItem,  Button, Left, Right, Body,  Font } from 'native-base';
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

import HeaderBack from '../../shared/HeaderBack';
import EstadoCuenta from './../../shared/estadoCuenta';

export default class EquipoVacio extends Component {

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
                <HeaderBack encabezado='Equipo'/>
                    
                <Content padder style={{backgroundColor: '#f6f6f6'}}>

                
        <View style={{flex: 1, flexDirection: 'row', margin:5,padding:10, backgroundColor:'white',borderColor: '#d6d7da',borderRadius: 4,
        borderWidth: 1,}}>
            <View style={{ flexDirection:'row'}}>
                <View>
                <Text style={{color: '#636363',fontSize:15}}>
                    Equipo de:
                </Text>
                </View>  
                <View>
                    <Text style={{color: '#2ba855', marginLeft:'5%',fontSize:15}}>
                        {nameGlobal}
                    </Text>
                </View>
                
            </View>
            <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
                <Text style={{color: '#2ba855',fontSize:15}}>
                    0/5 
                </Text>
                <Text style={{color: '#2ba855',marginLeft:5,fontSize:15}}>
                    miembros de equipo
                </Text>
            </View>
        </View>

       


        <View style={{marginTop:'2%',marginBottom:'2%'}}>

        <Card style={{borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',padding:'2%'}}>
        <View>
        <Text style={{fontWeight:'bold',marginLeft:'1%',fontSize:15}}>Adan Navarrete</Text>
        <Text style={{marginLeft:'1%',fontSize:13.5,fontStyle:'italic'}}>micorreo@gmail.com</Text>
        </View>
        </Card>

        </View>

   
                    
                    <Card style={{borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da'}}>
                        <View style={{flex: 1, flexDirection: 'row', height:85, justifyContent:'flex-end', marginTop:'3%'}}>
                            <View style={{margin:7}}>
                                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/premium.png?raw=true'}}
                                        style= {{height: 50,
                                        width: 70}}>
                                </Image>
                            </View>
                            <View style={{flex: 1, flexDirection: 'column',marginLeft:5}}>
                                <Text style={{color: '#1ed695'}}>CONVIÉRTETE EN PREMIUM</Text>
                                <Text style={{color: '#636363',fontSize:13}}>Vea estadísticas de cumplimiento, cierre no conformidades, o crea más checklists de auditoría</Text>          
                            </View>
                            <View style={{marginLeft:'3%', marginRight:'1.5%',marginTop:"3.5%"}}>
                                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/ir.png?raw=true'}}
                                        style= {{height: 45,
                                        width: 24,marginRight:'1.5%'}}>
                                </Image>
                            </View>
                        </View>
                    </Card>
                    <View style={{alignItems: 'center',marginTop:'15%'}}>
                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/team.png?raw=true'}} 
                                        style={{height: 175, 
                                           width: 175, 
                                           alignItems: 'center'}}/>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableHighlight style={styles.botonLogin}
                            onPress={()=>this.props.navigation.navigate('InvitarMiembros')}>
                            <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}> INVITAR MIEMBROS </Text>
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