import React, { Component } from 'react'
import {StyleSheet, View, Text, StatusBar,TouchableOpacity, SafeAreaView,TouchableHighlight, Image, PixelRatio, ScrollView,TextInput, Alert} from 'react-native';
import { Input } from 'react-native-elements';
import { Container, Title, Content, Card, CardItem,  Button, Left, Right, Body,  Font } from 'native-base';
import FormData from 'form-data';
import PasswordInputText from 'react-native-hide-show-password-input';
import {MaterialIcons,MaterialCommunityIcons,Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderBack from './../../shared/HeaderBack';
import EstadoCuenta from './../../shared/estadoCuenta';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import FooterAuditoria from './../../shared/FooterAuditoria';

class AuditoriasBuscar extends Component {


    constructor(props) {
        super(props);
        

        this.state = {
            selected2: undefined,
            selected3: undefined,
            loading: false,
            paises: [],
            urlPaises: 'http://accountsolinal.pythonanywhere.com/api/pais',
            urlnorma: 'http://accountsolinal.pythonanywhere.com/api/norma',
            normas:[],
            loadingnorma: false,
            paginaActual:'AuditoriasBuscar',
            paisEnvio:'a',
            mensajeError:'',
        };
    }

    componentDidMount(){
        this.getPaises();
        this.getNorma();
    }

    getPaises = () => {
        this.setState({loading:true})
        fetch(this.state.urlPaises)
        .then(res=>res.json())
        .then(res=>{ 
            //console.log(res);
            this.setState({
            paises: res,
            urlPaises: res.next,
            loading: false,    
            })
        })
    }

    getNorma=()=>{
         this.setState({loadingnorma:true})
        fetch(this.state.urlnorma)
        .then(res=>res.json())
        .then(res=>{ 
            //console.log(res);
            this.setState({
            normas: res,
            urlnorma: res.next,
            loadingnorma: false,    
            })
        })

    }


   



  

  
  

    enviarPais=()=> {

        const { paisEnvio } = this.state;

        
        if (paisEnvio=='') { this.setState({mensajeError:'Ingrese el pais o la norma!'}) }

        else{

            let errorM = ''

            var dataToSend = {pais_norma: paisEnvio,usuario:idUserGlobal};
            var formBody = [];
            for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            fetch('http://accountsolinal.pythonanywhere.com/api/correoPaisNorma', {
            method: "POST",//Request Type 
            body: formBody,//post body 
            headers: {//Header Defination 
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            })
             .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
               // alert(JSON.stringify(responseJson));
                //console.log(responseJson);
                this.setState({mensajeError:'Pais/Norma enviado!'})
               // this.setState({paisEnvio:''})

            })
            //If response is not in json then in error
           
            }
    }


    



  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      /*Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")*/
    });
    this.setState({ isReady: true });
  }


  
    render() {
     
        return (
             <Container>

                <View  style={{flexDirection:'row',backgroundColor:'#1ED695',height:'11%',paddingTop:'8%',alignContent:'center'}}>
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
                                    <Text style={{marginRight:10, color: '#636363', fontWeight: "bold"}}>Filtrar por entidad (FDA, Codex, BRC, etc.)</Text>
                                </View>

                                <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                               
                                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasBuscar')}>
                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/ir.png?raw=true'}}style= {{height: 25,width: 15}}></Image>
                </TouchableHighlight>
                                </View>


                            </View>
                        </CardItem>
                    </Card>

                    <View style={{paddingBottom:15}}>

         <View style={styles.colapse}>

         
           <Collapse>
                        <CollapseHeader>
                            
                            <View style={styles.seleccion}>
                                <View>
                                    <Text style={{marginRight:10, color: '#636363', fontWeight: "bold"}}>Seleccione el pais</Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row-reverse',marginRight:'10%'}}>
                                    <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/ir.png?raw=true'}}style= {{height: 25,width: 15}}></Image>
                                </View>
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
                                                                    
                                        {r.normas.map(m =>
                                        
                                                
                                                
                                                <View style={styles.normaStyle}>

                                                <View>
                                                <Text  style={styles.letraNorma}>{m}</Text>
                                                </View>

                                                <View style={{flexDirection:'row-reverse',flex:1}}>
                                               


                                                <TouchableHighlight
                                                            style={styles.botonLogin} onPress={()=>{this.cambiar
                                                            //this.props.navigation.navigate('Crear',{norma:m,pais:r.pais,paginaActual:'Auditorias'})   
                                                            }}>
                                                        <Text style={{fontWeight: 'bold',color:'white',fontSize:15.5}}> Crear </Text>
                                                        </TouchableHighlight>
                                              

                                                </View>
                      
                                                </View>                                                                       
                                                                  
                                        )}
                                        
                               
                                </CollapseBody>
                         </Collapse>
                         )}

                    </CollapseBody>
                       
            </Collapse>
                              
                             
                
              </View>
                       
              

                    
                    </View>

                   


                    <View style={{flex: 1, flexDirection: 'column', margin:5,padding:10,  backgroundColor:'#515254',marginTop:35, borderRadius: 5,}}>

                        <View style={{marginRight:35}}>
                            <Text style={{color: '#B3F1C9', fontSize:14, marginBottom:5}}>
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

                                    autoCapitalize="words"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={paisEnvio => this.setState({ paisEnvio })}

                                />  
                                </View>
                            </View>

                                <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                    <TouchableOpacity
                                        style={styles.botonEnviar}  onPress={this.enviarPais}>
                                        <Text style={{fontWeight: 'bold',color:'#9A9E9A',fontSize:15}}> Enviar </Text>
                                        </TouchableOpacity>                                 
                                </View>
                                



                        </View>
                         <Text style={{color:'red',marginTop:'1.5%',marginLeft:'5%',fontStyle:'italic',fontWeight:'bold'}}>{this.state.mensajeError}</Text>
                       
                    </View>
                </Content>


                <FooterAuditoria/>
            </Container>
            )
    }

}

export default AuditoriasBuscar;

const styles = StyleSheet.create({
  


     

    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#1ed695',
        padding: 2,
        width:90,
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
       flexDirection:'row',
      
        
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
        alignItems:'center',
       

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
        paddingLeft: '1.75%',
        paddingRight: 15,
        width: 219,
        alignItems: 'flex-start',
        color:'#B3F1C9',
        marginTop:'1.5%'
    },
    botonEnviar:{
        alignItems: 'center',
        backgroundColor: '#FCF7B9',
        padding: 10,
        width:75,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        height:45
        
        
   

    }


});
