import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container,Title, Content, Card, CardItem, Button, Left, Label,Right, Body, Font, Form, Item, Picker, Input } from 'native-base';
import { Icon } from 'react-native-elements'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  TextInput,
  
} from 'react-native'
import Dropdown from 'react-bootstrap/Dropdown';
/*import * as Font from 'expo-font';*/
import { Ionicons } from '@expo/vector-icons';

import FooterAuditoria from './../../shared/FooterAuditoria';
import Header from './../../shared/Header';
import EstadoCuenta from './../../shared/estadoCuenta';

export const idPa = 'neira';

/*
                    <Form style ={{paddingTop:25}}>


                    
                    
                    
                      
                     
                    
                        <Item picker>

                        
                        
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="¿A qué país pertenece la norma o reglamento?"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.idPais}
                                onValueChange={(itemValue, itemIndex) => this.setState({idPais: itemValue})}

                             >
                            
                            {this.state.paises.map(r =>
                                <Picker.Item label={r.pais} value={r.id_pais} />
                              
                             )}
                                
                            </Picker>
                        </Item>

                   
                    </Form>
                    
                    
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="hola"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected3}
                                onValueChange={this.onValueChange3.bind(this)}
                            >
                         
                             {this.state.normas.map(r =>
                                
                                <Picker.Item label={r.norma} value={r.id_norma} />
                                
                              
                             )}
                            
                            
                                
                            </Picker>
                        </Item>*/

export default class AuditoriasBuscar extends Component {
    async componentDidMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          /*Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")*/
        });
        this.setState({ isReady: true });
      }

      

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

    componentDidMount(){
        this.getPaises();
        this.getNorma();
    }

    getPaises = () => {
        this.setState({loading:true})
        fetch(this.state.url)
        .then(res=>res.json())
        .then(res=>{ 
            console.log(res);
            this.setState({
            paises: res,
            url: res.next,
            loading: false,    
            })
        })
    }

    getNorma=()=>{
         this.setState({loadingnorma:true})
        fetch(this.state.urlnorma)
        .then(res=>res.json())
        .then(res=>{ 
            console.log(res);
            this.setState({
            normas: res,
            urlnorma: res.next,
            loadingnorma: false,    
            })
        })

    }
    onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
      
    onValueChange3(value) {
        this.setState({
          selected3: value
        });
      }   


    myfun=(variable)=>{

        
        console.log(variable)
        console.log(':)')
        console.log(this.state.idPais);
        this.setState({idPais:variable})
        
        
        console.log(this.state.idPais)
        console.log('-')
        this.props.navigation.navigate('AuditoriasLista',variable)
        

    }

    cambiar(){
        this.props.navigation.navigate('AuditoriasLista',{idPais:this.state.idPais})

    }
    render(){
        return (
            
            <Container>
            

                <Header encabezado='Auditoria'/>



                <Content padder style={{backgroundColor: '#f6f6f6'}}>

                <EstadoCuenta cantidad='0' tipoCuenta='GRATIS'/>

                    


                    <Card>
                        <CardItem bordered>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View >
                                    <Text style={{marginRight:10, color: '#636363', fontWeight: "bold"}}>Buscador de normas y reglamentos</Text>
                                </View>

                                <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                               
                                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')}>
                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/ir.png?raw=true'}}style= {{height: 25,width: 15}}></Image>
                </TouchableHighlight>
                                </View>

                            </View>
                        </CardItem>
                        <CardItem bordered>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View>  
                                    <Text style={{marginRight:10, color: '#636363', fontWeight: "bold"}}>Filtar por entidad (FDA, Codex, BRC, etc.)</Text>
                                </View>

                                <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                               
                                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')}>
                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/ir.png?raw=true'}}style= {{height: 25,width: 15}}></Image>
                </TouchableHighlight>
                                </View>


                            </View>
                        </CardItem>
                    </Card>

                    

                    
                   
                    <Form style={{paddingBottom:15}}>

         <View style={styles.colapse}>

         
           <Collapse>
                        <CollapseHeader>
                            
                            <View style={styles.seleccion}>
                                <Text style={styles.letraSeleccion}>Seleccione el pais</Text>
                            </View>
                            
                        </CollapseHeader>

                        <CollapseBody>
                       
                         {this.state.paises.map(r =>

                         <Collapse>

                         <CollapseHeader>
                            <View style={styles.paisStyle}>
                            <Text style={styles.letraPais}>{r.pais}</Text>
                            </View>
                         </CollapseHeader>

                                <CollapseBody>  
                                                                    
                                        {this.state.normas.map(m =>
                                        
                                                
                                                
                                                <View style={{flexDirection: 'row',alignItems:'center'}}>
                                                <TouchableHighlight  style={styles.normaStyle}onPress={() => {
                                                             this.setState({idPais: m.norma});
                                                             alert('seleccionaste: '+m.norma)

                                                           // this.myfun(m.norma); 
                                                        }}>
                                                        <View ><Text  style={styles.letraNorma}>{m.norma}</Text></View></TouchableHighlight>
                                               
                                                </View>
                                                

                                     
                                        
                                           

                                               
                                           
                                                    
                                                

                                           
                                                                            
                                                                  
                                        )}
                                        
                               
                                </CollapseBody>
                         </Collapse>
                         )}

                    </CollapseBody>
                       
            </Collapse>
                              
                             
                
              </View>
                       
              

                    
                    </Form>

                    <CardItem style={{alignItems: 'center', marginTop:25, backgroundColor:'f6f6f6'}}>
                            <Body style={{alignItems: 'center'}}>
                                <TouchableHighlight
                                    style={styles.botonLogin} onPress={()=>{
                                     this.props.navigation.navigate('AuditoriasLista',{idPais:this.state.idPais})   
                                    }}>
                                    <Text style={{fontWeight: 'bold',color:'white',fontSize:19}}> Buscar </Text>
                                    </TouchableHighlight>
                            </Body>
                    </CardItem>


                    <CardItem style={{alignItems: 'center', marginTop:25, backgroundColor:'f6f6f6'}}>
                            <Body style={{alignItems: 'center'}}>
                                <TouchableHighlight
                                    style={styles.botonLogin} onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')}>
                                    <Text style={{fontWeight: 'bold',color:'white',fontSize:19}}> Crear Auditoria </Text>
                                    </TouchableHighlight>
                            </Body>
                    </CardItem>


                    <View style={{flex: 1, flexDirection: 'column', margin:5,padding:10,  backgroundColor:'#9A9E9A',marginTop:35, borderRadius: 5,}}>

                        <View style={{marginRight:35}}>
                            <Text style={{color: '#AFF9AF', fontSize:14, marginBottom:5}}>
                                ¿No encuentras a tu país en tu lista?  
                            </Text>

                        </View>

                        <View style={{flexDirection: 'row'}}>

                            <View style={{flexDirection: 'column'}}> 

                                <View style={{width:'88%'}}>
                                <Text style={{color:'white',fontSize:12}}>Indíquenos la norma o reglamento para poder aumentar las bases de datos.</Text>
                                </View>
                                <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder=''

                                    autoCapitalize="none"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={apellido => this.setState({ apellido })}

                                />  
                                </View>
                            </View>

                                <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                    <TouchableHighlight
                                        style={styles.botonEnviar} onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')}>
                                        <Text style={{fontWeight: 'bold',color:'#9A9E9A',fontSize:15}}> Enviar </Text>
                                        </TouchableHighlight>                                 
                                </View>


                        </View>
                       
                    </View>
                </Content>


                <FooterAuditoria/>
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
        
   

    },colapse:{
width:'100%'
    },
    letraSeleccion:{
        fontSize:15.5,
        marginLeft:'2%',
        fontWeight:'bold'
    },
    seleccion:{
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
          padding:'3%',
       backgroundColor:'white',
      
        
        borderBottomWidth: 3,
      

    },
    letraPais:{
        fontSize:15,
        marginLeft:'2%',

    },
    letraNorma:{
         fontSize:15,
         marginLeft:'3%',
         alignItems:'center'

    },
    paisStyle:{
       // marginTop:'2%',
       flexDirection:'row',
      // marginLeft:'2%',
      // backgroundColor:'#B5FB84',
       padding:'2%',
       backgroundColor:'#B0F8B3',
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        borderRadius: 4,
        borderColor: '#d6d7da',
      

    },normaStyle:{
      // marginTop:'2%',
       flexDirection:'row',
       flex:1,
     //  marginLeft:'3%',
       padding:'2%',
       backgroundColor:'#EAF8B0',
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        borderRadius: 4,
        borderColor: '#d6d7da',

    },
    botonCrear:{
        alignItems: 'center',
        backgroundColor: '#1ed695',
        padding: 7,
        width:115,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
  

    },
    input: {
        height: 25,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 15,
        width: 219,
        alignItems: 'flex-start'
    },
    botonEnviar:{
        alignItems: 'center',
        backgroundColor: '#FAFDC2',
        padding: 10,
        width:75,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        height:45
        
        
   

    }
  });
