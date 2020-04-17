import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header,  Button, Left, Label,Right, Body, Font, Form, Item, Picker, Input } from 'native-base';
import { Icon } from 'react-native-elements'
import {StyleSheet,TouchableHighlight,Text,View,TextInput} from 'react-native'
import {MaterialIcons,
MaterialCommunityIcons} from '@expo/vector-icons';



export default class FooterAuditoria extends React.Component{
    constructor(props) {
        super(props);
        global.idPa ='neira'
        this.state = {
            selected2: undefined,
            selected3: undefined,
            loading: false,
            paises: [],
            url: 'http://accountsolinal.pythonanywhere.com/api/pais',
            urlnorma: 'http://accountsolinal.pythonanywhere.com/api/norma',
            normas:[],
            loadingnorma: false,
            idPais:'hola',
        };
    }
    render(){
    

    
        return (
            

                <View style={{height:63, flexDirection: 'row',width:'100%'}}>
              

                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2047.png'}} 
                            style={{height: 35, 
                                        width: 25,
                                        }}/>
                    <Text style={styles.letra}>Auditorias</Text>
                    </View>
                </TouchableHighlight>

                
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2014.png'}}
                                   style= {{height: 35,
                                            width: 28}}>
                            </Image>
               <Text style={styles.letra}>Accion Correctiva</Text>
                    </View>
                </TouchableHighlight>               




                



                 <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones1}>
                    <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'8%'}}>
                            <MaterialIcons name="home"  size={50}  />
                            


                    </View>
                </TouchableHighlight>


                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/calendario.png?raw=true'}}
                                   style= {{height: 35,
                                            width: 32}}>
                            </Image>
                    <Text style={styles.letra}>Calendario</Text>
                    </View>
                </TouchableHighlight>

                

                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2015.png'}}
                                   style= {{height: 35,
                                            width: 34}}>
                            </Image>
               <Text style={styles.letra}>No Conformidad</Text>
                    </View>
                </TouchableHighlight>
                   
                   
                       
                     
                     
               
                </View>
          
        )
    }
}


const styles = StyleSheet.create({
    botones:{
        justifyContent:'center',
        width:'20%'
        
    },
    botones1:{
        marginLeft:'1.5%',
        marginRight:'2%',
        alignItems:'center',justifyContent:'center'

    },
    letra:{
        color: '#636363', fontSize: 9

    }
    
  });