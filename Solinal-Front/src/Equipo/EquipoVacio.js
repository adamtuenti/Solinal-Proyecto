import React, { Component } from 'react';
import { Container,  Title, Content, Card, CardItem,  Button, Left, Right, Body,  Font } from 'native-base';
import { Icon,Divider, } from 'react-native-elements'
import {StyleSheet,TouchableHighlight,Text,View,Image} from 'react-native'
/*import * as Font from 'expo-font';*/
import { Ionicons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';
import {MaterialIcons,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';
import HeaderBack from '../../shared/HeaderBack';
import EstadoCuenta from './../../shared/estadoCuenta';

export default class EquipoVacio extends Component {


    constructor(props){
        super(props);
        this.state = {
          loading: false,
          equipo: [],
          mensajeError:'',
          urlEquipo: 'http://accountsolinal.pythonanywhere.com/api/equipo/'+idUserGlobal
        }  
    }

    componentDidMount(){
        this.getMiembrosEquipo();
    }

    getMiembrosEquipo = () => {
        this.setState({loading:true})
        fetch(this.state.urlEquipo)
        .then(res=>res.json())
        .then(res=>{ 
            console.log(res);
            this.setState({
            equipo: res,
            urlEquipo: res.next,
            loading: false,    
            })
        })
    }

    validarInvitaciones(){
        

        const { equipo } = this.state;

        if(equipo.length<5){
            this.props.navigation.navigate('InvitarMiembros')
        }
        else{
            alert('Miembros completos!')
        }
        
        
    }
 
      
    render(){
        return(
            <Container>
                <View  style={{flexDirection:'row',backgroundColor:'#1ED695',height:'11%',paddingTop:'8%',alignContent:'center'}}>
                <View style={{marginTop:'4.5%',flexDirection:'row',}}>
                    <View style={{width:'100%',flexDirection: 'row',alignItems:'center',marginLeft:10}}>
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('Main')}>       
                        <MaterialIcons name="arrow-back" size={32} color="white" />
                        </TouchableHighlight>         
                        <Text style={{color:'white', fontSize:21, marginLeft:10}}>
                            Equipo
                        </Text>
                    </View>
                </View>
                </View>
                    
                <Content padder style={{backgroundColor: '#f6f6f6'}}>

                
        <View style={{flex: 1, flexDirection: 'row', margin:5,padding:5, backgroundColor:'white',borderColor: '#d6d7da',borderRadius: 4,
        borderWidth: 1}}>
            <View style={{ flexDirection:'column',marginLeft:'2%'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color: '#636363',fontSize:15}}>Equipo de:</Text>
                    <Text style={{color: '#2ba855', marginLeft:'5%',fontSize:15}}>{nameGlobal}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color: '#2ba855',fontSize:15}}>{this.state.equipo.length}/5 </Text>
                    <Text style={{color: '#2ba855',marginLeft:5,fontSize:15}}>miembros de equipo</Text>
                </View>
                
            </View>
        
        </View>

       


        <View style={{marginTop:'2%',marginBottom:'2%'}}>

        {this.state.equipo.map(a=>

        <Card style={{borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',padding:'2%'}}>
        <View style={{flexDirection:'row'}}>
        <View>
        <Text style={{fontWeight:'bold',marginLeft:'1%',fontSize:15}}>{a.nombreIntegrante} {a.apellidoIntegrante}</Text>
        <Text style={{marginLeft:'1%',fontSize:13.5,fontStyle:'italic'}}>{a.correoIntegrante}</Text>
        </View>
        <View style={{flexDirection:'row-reverse',flex:1}}>
        <AntDesign name="deleteuser" size={35}/>
        </View>
        </View>
        </Card>
        )}

       

        </View>

   
                    
                    
                    <View style={{alignItems: 'center',marginTop:'15%'}}>
                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/team.png?raw=true'}} 
                                        style={{height: 150, 
                                           width: 150, 
                                           alignItems: 'center'}}/>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableHighlight style={styles.botonLogin}
                            onPress={()=>this.validarInvitaciones()}>
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