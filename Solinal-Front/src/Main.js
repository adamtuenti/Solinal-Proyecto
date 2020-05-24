import React, { Component } from 'react';
import { Container, Drawer, Title, Content, Card, Thumbnail, CardItem, Header, Button, Left, Right, Body,  Font,Badge  } from 'native-base';
import { Icon,Divider, List, ListItem, } from 'react-native-elements';
import{StyleSheet,TouchableHighlight,TouchableOpacity,Text,View,Dimensions,Linking,Image} from 'react-native';
/*import * as Font from 'expo-font';*/
/*import { ListItem } from 'react-native-elements';*/
import {MaterialIcons,MaterialCommunityIcons,Ionicons} from '@expo/vector-icons';

import Footer from './../shared/Footer';
/*import Header from '../shared/Header';*/
import EstadoCuenta from './../shared/estadoCuenta';
import MenuDrawer from 'react-native-side-drawer';


const list = [
  {
    name: 'Crear Equipo',
    avatar_url: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/equipo.png?raw=true',
    url: 'EquipoVacio',
    altura:30,
    anchura:40
  },
  {
    name: 'Mis Auditorias',
    avatar_url: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2047.png?raw=true',
    url: 'AuditoriasVacia',
    altura:32,
    anchura:23
  },
  {
    name: 'Recomienda Solinal Auditor',
    avatar_url: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/compartir.png?raw=true',
    url: 'RecomiendaSolinal',
    altura:30,
    anchura:35
  }
]

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           paginaActual:'Main',
           tipoCuenta:'Premium',
          
        };
    }



  

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      /*Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")*/
    });
    this.setState({ isReady: true });
  }

   toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  drawerContent = () => {
    return (
        
                <View style={{backgroundColor:'#616261',justifyContent:'center',alignContent:'center',height:'100%'}}>

                <View style={{marginBottom:'10%',marginLeft:'3.5%'}}>
                   
                        <View style={{flexDirection:'column'}}>
                        <View>
                                <Text style={{color:'white',fontSize:25, fontWeight: 'bold'}}>Solinal ®</Text>
                        </View>
                        <View>
                                <Text style={{color:'white',fontSize:17}}>Training {'&'} Certification Services</Text>
                        </View>

                        </View>
                  </View>
                 
                    <View style={{flexDirection:'row'}}>
                        
                        
                           <View style={{marginLeft:'3.5%',marginTop:'2.5%'}}>
                                <Thumbnail square source={{ uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Sidebar01.jpg' }} />
                           </View>
                           
                           <View style={{flexDirection:'column',marginLeft:'5%',width:'72%'}}>
                               <View >
                                    <Text style={{color:'white',fontSize:15.5, fontWeight: 'bold'}}>Solinal para restaurantes</Text>
                                </View>
                                <View>
                                    <Text style={{color:'white',fontSize:12,fontStyle:'italic',marginTop:'1.5%',marginRight:'2%'}}>Entrenamiento en el servicio, la manipulación de alimentos y administradores de restaurantes</Text>
                                </View>

                          </View>
                          
                        
                        
                    </View>   
                    <View style={{flexDirection:'row',marginTop:'5%'}}>
                       
                           <View style={{marginLeft:'3.5%',marginTop:'2.5%'}}>
                                <Thumbnail square source={{ uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Sidebar02.jpg' }} />
                           </View>
                            <View style={{flexDirection:'column',marginLeft:'5%',width:'72%'}}>
                                <View>
                                    <Text style={{color:'white',fontSize:15.5, fontWeight: 'bold'}}>Solinal para industrias</Text>
                                </View>
                                <View>
                                    <Text style={{color:'white',fontSize:12,fontStyle:'italic',marginTop:'1.5%',marginRight:'2%'}}>Certificado de personas en la seguridad de los alimentos y auditores calificados</Text>
                                </View>
                             </View>
                
                    </View>
                    <View style={{flexDirection:'row',marginTop:'5%'}}>
                        
                            <View style={{marginLeft:'3.5%',marginTop:'2.5%'}}>
                                <Thumbnail square source={{ uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Sidebar03.jpg' }} />
                            </View>
                            <View style={{flexDirection:'column',marginLeft:'5%',width:'72%'}}>
                                <View>
                                    <Text style={{color:'white',fontSize:15.5, fontWeight: 'bold'}}>Solinal en la competencia laboral</Text>
                                </View>
                                <View>
                                    <Text style={{color:'white',fontSize:12,fontStyle:'italic',marginTop:'1%',marginRight:'2%'}}>Certificamos la experiencia de trabajo, habilidades y destrezas basados en las normas INEN</Text>
                                </View>
                            </View>
                        
                    </View>
                    <View style={{flexDirection:'row',marginTop:'5%',}}>
                        
                            <View style={{marginLeft:'3.5%',marginTop:'2.5%'}}>
                                <Thumbnail square  source={{ uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Sidebar04.png' }} />
                            </View>
                            <View style={{flexDirection:'column',marginLeft:'5%',width:'72%'}}>
                                <View>
                                    <Text style={{color:'white',fontSize:15.5, fontWeight: 'bold'}} onPress={ ()=>{ Linking.openURL('https://google.com')}}>Solinal servicios de asesoría</Text>
                                </View>
                                <View>
                                    <Text style={{color:'white',fontSize:12,fontStyle:'italic',marginTop:'1.5%',marginRight:'2%'}}>Resolución de problemas frecuentes presentes en restaurantes e industrias de alimentos</Text>
                                </View>
                            </View>
                        
                    </View>
                    <View style={{flexDirection:'column',marginLeft:'3.5%'}}>
                        <View>
                                <Text style={{color:'white',fontSize:14,marginTop:'10%'}}>Comparta nuestros servicios</Text>
                               
                        </View>
                        <View >
                                    <Text style={{color:'yellow',fontSize:14,marginTop:'1%',fontStyle:'italic'}} onPress={ ()=>{ Linking.openURL('https://google.com')}}>www.solinalfoodschool.org</Text>                      
                        </View>
                    </View>
                </View>
           
            
    );
};

  

render() {

    
    return (

      <View style={{height:Dimensions.get('window').height,flex:1,marginTop:21}}>

              <MenuDrawer 
          open={this.state.open} 
          drawerContent={this.drawerContent()}
          drawerPercentage={80}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >

      

      <View style={{backgroundColor:'#1ED695',height:58,width:'100%',alignContent:'center'}}>

      <View  style={{  alignContent:'center',marginTop:10,   width:'100%',flexDirection:'row',}}>

        <View style={{flexDirection: 'row',marginLeft:'3.75%'}}>
                
                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/user.png?raw=true'}}
                            style= {{ height:40,width:40,}}/>
                <Text style={{color:'white', fontSize:19, marginLeft:10,marginTop:'3.25%'}}>Bienvenido {nameGlobal}
                </Text>
        </View>
        <View style={{flexDirection:'row-reverse',flex:1}}>
          <TouchableHighlight onPress={this.toggleOpen}  style={{ alignItems:'center'}}>
          <View><MaterialCommunityIcons size={35} name="menu"/></View>
          </TouchableHighlight>
        </View>
        </View>

    </View>
      
      






        <Content padder style={{backgroundColor: '#f6f6f6'}}>



        <EstadoCuenta />

          <Card style={{borderRadius: 5,borderWidth: 1,borderColor: '#d6d7da'}}>


              <View>
                {
                  list.map((l, i) => (
                    <ListItem style={{height:65}}
                      key={i}
                      leftAvatar={
                        <View style={{width:'11%'}}>
                        <Image source={{uri: l.avatar_url}}style= {{height: l.altura,width: l.anchura}}></Image>
                        </View> 
                      }
                      title={
                        <View >
                        <Text style={{fontSize:15}}> {l.name}</Text>
                        </View>
                      }       
                      onPress={()=>this.props.navigation.navigate(l.url,{signature:'https://i0.wp.com/www.bitme.gg/wp-content/uploads/2020/05/Dragon-Ball_-%C2%BFPor-que%CC%81-se-celebra-el-Di%CC%81a-de-Goku-el-9-de-mayo_.jpg?fit=1280%2C720&ssl=1'})}
                      bottomDivider
                    />
                  ))
                }
              </View>
           


            


         
          </Card>


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

                          
        
      
              
            
        </Content>

        

        

            <View style={{height:62, flexDirection: 'row',width:'100%'}}>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasVacia')} style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/autoria.png?raw=true'}} 
                            style={{height: 35, width: 25}}/>
                    <Text style={{color: '#636363', fontSize: 9}}>Auditorias</Text>
                    </View>
                </TouchableHighlight>

                 <TouchableHighlight onPress={()=>this.props.navigation.navigate('CalendarioPrograma')} style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2014.png'}}
                                   style= {{height: 35,width: 28}}>
                            </Image>
               <Text style={{color: '#636363',fontSize: 9}}>Accion Correctiva</Text></View>
                </TouchableHighlight>    

                 <TouchableHighlight  style={{marginLeft:'2%',marginRight:'2%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'8%'}}>
                           <MaterialCommunityIcons name="home-circle" size={50} color={'green'}/>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={()=>this.props.navigation.navigate('CalendarioVacio')} style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/calendario.png?raw=true'}}
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

     </MenuDrawer>

                              
      </View>
    );
   
  }
}


const styles = StyleSheet.create({
  izquierdo:{
      width: Dimensions.get('screen').width,

      
     
      flexDirection: 'row',
      alignItems:'center',
      marginLeft:250
        
      
  },
  icon:{
     position:'absolute',
     left:25,
     //marginTop:12
      
  },
  back:{
      flexDirection:'row',
       backgroundColor:'#1ED695',
      height:'11%',
      paddingTop:'8%',
      alignContent:'center',
      flex:1
      
  },
  imagen:{
      height:40,
      width:40,
      
     // marginLeft:10,
      //marginTop:8
  },
  container:{
      marginTop:'4.5%',
      flexDirection:'row',
  
  }
})