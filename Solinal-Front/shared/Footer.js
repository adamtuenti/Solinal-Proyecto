import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header,  Button, Left, Label,Right, Body, Font, Form, Item, Picker, Input } from 'native-base';
import { Icon } from 'react-native-elements'
import {StyleSheet,TouchableHighlight,Text,View,TextInput} from 'react-native'



export default class Footer extends Component {
    

    render(){
        return (
            

                <View style={{height:63, flexDirection: 'row',width:'100%'}}>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2047.png?raw=true'}} 
                            style={{height: 35, 
                                        width: 24,
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
               <Text style={styles.letra}>Acción Correctiva</Text>
                    </View>
                </TouchableHighlight>


                


                 <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')} style={styles.botones1}>
                    <View style={{flexDirection:'column',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2013.png'}}
                                   style= {{height: 45,
                                            width: 45}}>
                            </Image>
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
        marginLeft:'4%',
        marginRight:'3%',
        justifyContent:'center'

    },
    letra:{
        color: '#636363', fontSize: 9

    }
    
  });
