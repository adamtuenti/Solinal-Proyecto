import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Title, Content, Card, CardItem, Footer, Button, Left, Right, Body,  Font } from 'native-base';
import { Icon } from 'react-native-elements'
import {StyleSheet,TouchableHighlight,Text,View,Dimensions} from 'react-native';
import Header from '../../shared/Header';
import AuditoriasProgramadas from '../../shared/AuditoriasProgramadas';
import FooterCalendario from '../../shared/FooterCalendario';
import {MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';

export default class CalendarioVacio extends Component {

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
              <View style={{height:Dimensions.get('window').height,flex:1,marginTop:25}}>
                
                <View  style={{flexDirection:'row',backgroundColor:'#1ED695',height:55,alignContent:'center'}}>
                <View style={{marginTop:5,flexDirection:'row',}}>
                    <View style={{width:'100%',flexDirection: 'row',alignItems:'center',marginLeft:10}}>
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('Main')}>       
                        <MaterialIcons name="arrow-back" size={32} color="white" />
                        </TouchableHighlight>         
                        <Text style={{color:'white', fontSize:21, marginLeft:10}}>
                            Calendario
                        </Text>
                    </View>
                </View>
                </View>

                <Content padder style={{backgroundColor: '#f6f6f6'}}>
                    <AuditoriasProgramadas cantidad='0' tipoCuenta='GRATIS'/>


                     <View>

                    {idEquipoGlobal!=null ? (


                    <Card>
                        <CardItem>
                            <Body style={{alignItems: 'center'}}>
                                <Text style={{alignItems: 'center',fontSize: 19,fontWeight: 'bold',marginTop:5,marginBottom:5}}>Auditorías Programadas</Text>
                            </Body>
                        </CardItem>
                        <CardItem cardBody style={{alignItems: 'center'}}>
                            <Body style={{alignItems: 'center'}}>
                                <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2065.png'}} 
                                   style={{height: 200, 
                                           width: 200, 
                                           alignItems: 'center'}}/>
                            </Body>               
                        </CardItem>
                        <CardItem>
                            <View style={{alignItems: 'center', width:'100%',marginTop:10,justifyContent: 'center',}}>
                                <Text style={{color: '#636363', fontSize: 14, alignItems: 'center'}}>Aún no existen auditorías programadas</Text>
                                <Text style={{color: '#636363', fontSize: 14, alignItems: 'center',marginTop:5,textAlign:'center'}}>Para programar auditorías, debes crear una auditoría</Text>
                            </View>
                        </CardItem>
                        <CardItem style={{alignItems: 'center'}}>
                            <Body style={{alignItems: 'center'}}>

                                <TouchableHighlight
                                    style={styles.botonLogin} onPress={()=>this.props.navigation.navigate('AgendarAuditorias')}>
                                    <Text style={{fontWeight: 'bold',color:'white',fontSize:15}}> CREAR AUDITORÍA </Text>
                                    </TouchableHighlight>
                                                        
                            </Body>
                        </CardItem>
                    </Card>


                    ) : 

                     <View style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center'}}>

                     <Text style={{marginTop:'70%',fontSize:25}}>No pertene a ningun equipo</Text>

                     <Text 
                            onPress={()=>this.props.navigation.navigate('EquipoVacio')}
                            style={{color: 'black',marginTop:'10%',color:'#1ED695',fontWeight:'bold',fontStyle:'italic',fontSize:19}}>
                            Crea a un equipo!</Text>


                     </View>

                     
                     }
                    </View>
                </Content>
                

                <View style={{height:62, flexDirection: 'row',width:'100%'}}>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasVacia')} style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/autoria.png?raw=true'}} 
                            style={{height: 35, width: 25}}/>
                    <Text style={{color: '#636363', fontSize: 9}}>Auditorias</Text>
                    </View>
                </TouchableHighlight>

                 <TouchableHighlight onPress={()=>alert('en proceso')} style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2014.png'}}
                                   style= {{height: 35,width: 28}}>
                            </Image>
               <Text style={{color: '#636363',fontSize: 9}}>Accion Correctiva</Text></View>
                </TouchableHighlight>    

                 <TouchableHighlight onPress={()=>this.props.navigation.navigate('Main')} style={{marginLeft:'2%',marginRight:'2%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'8%'}}>
                           <MaterialCommunityIcons name="home-circle" size={50} />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight  style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/calendario-active.png?raw=true'}}
                                   style= {{height: 35,width: 32}}>
                            </Image>
                    <Text style={{color: '#636363', fontSize: 9}}>Calendario</Text></View>
                </TouchableHighlight>
          
                <TouchableHighlight onPress={()=>alert('en proceso')} style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2015.png'}}
                                   style= {{height: 35,width: 34}}>
                            </Image>
               <Text style={{color: '#636363', fontSize: 9}}>No Conformidad</Text></View>
                </TouchableHighlight>
               
                </View>


            </View>
          )
      }
}

const styles = StyleSheet.create({
    
  

    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#35E119',
        padding: 10,
        width:177,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        padding:10,
        marginBottom:15
        
   

    },botonGoogle:{
        
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,

        elevation: 1,

    },
   
  });
