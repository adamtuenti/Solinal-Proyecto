import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Title, Content, Card, CardItem,  Button, Left, Right, Body,  Font } from 'native-base';
import { Icon } from 'react-native-elements'
import {StyleSheet,TouchableHighlight,Text,View} from 'react-native'
import FooterAuditoria from './../../shared/FooterAuditoria';
import HeaderBack from './../../shared/HeaderBack';
import EstadoCuenta from './../../shared/estadoCuenta';
import {MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';

export default class AuditoriasVacia extends Component {



      constructor(props) {
        super(props);
        this.state = {
            loading: false,
            //paginaAnterior: this.props.navigation.state.params.paginaActual,
          datos: [],
          url: 'http://accountsolinal.pythonanywhere.com/api/user/'+idUserGlobal
        };
    }


     componentDidMount(){
        this.getDatos();
    }

    getDatos = () => {

        this.setState({loading:true})
        fetch(this.state.url)

        .then(res=>res.json())
       
        .then(res=>{ 
            

            this.setState({
            datos: res,
            url: res.next,
            loading: false,    
            })
        })
    }


  

    render() {
       // if(this.state.datos.numero_auditorias_pendientes<2){
        
        return (
            <Container>


                <View  style={{flexDirection:'row',backgroundColor:'#1ED695',height:80,paddingTop:'8%',alignContent:'center'}}>
            <View style={{marginTop:'4.5%',flexDirection:'row',}}>
                <View style={{width:'100%',flexDirection: 'row',alignItems:'center',marginLeft:10}}>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('Main')}>       
                    <MaterialIcons name="arrow-back" size={32} color="white" />
                    </TouchableHighlight>         
                    <Text style={{color:'white', fontSize:21, marginLeft:10}}>
                        Auditorias
                    </Text>
                </View>
            </View>
            </View>


                <Content padder style={{backgroundColor: '#f6f6f6'}}>

                    <EstadoCuenta/>

                    <Card>
                        <CardItem>
                            <Body style={{alignItems: 'center'}}>
                                <Text style={{alignItems: 'center',fontSize: 19,fontWeight: 'bold',marginTop:5,marginBottom:5}}>Mis Auditorías</Text>
                            </Body>
                        </CardItem>
                        <CardItem cardBody style={{alignItems: 'center'}}>
                            <Body style={{alignItems: 'center'}}>
                                <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2032.png'}} 
                                   style={{height: 200, 
                                           width: 200, 
                                           alignItems: 'center'}}/>
                            </Body>               
                        </CardItem>
                        <CardItem>
                            <Body style={{alignItems: 'center', width:24,fontWeight: 'bold'}}>
                                <Text style={{color: '#636363', fontSize: 14, alignItems: 'center'}}>Aún no has realizado ninguna auditoría</Text>
                                <Text style={{color: '#636363', fontSize: 14, alignItems: 'center',textAlign:'center'}}>Encuentra las normas actualizadas y empieza a auditar</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{alignItems: 'center'}}>
                            <Body style={{alignItems: 'center'}}>

                                <TouchableHighlight
                                    style={styles.botonLogin} onPress={()=>this.props.navigation.navigate('CrearAuditoria')}>
                                    <Text style={{fontWeight: 'bold',color:'white',fontSize:23}}> Crear </Text>
                                    </TouchableHighlight>
                                                        
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                 <FooterAuditoria/>
            </Container>
        );
    
    //}
    /*else{
        console.log(idUserGlobal)
        console.log('-')
        console.log(this.state.datos.numero_auditorias_pendientes)
        return(
        this.props.navigation.navigate('Home')
        );
    }*/
    }
     
}



const styles = StyleSheet.create({
    

    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#1ED695',
        padding:5,
        width:142,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        
   

    }
  });
