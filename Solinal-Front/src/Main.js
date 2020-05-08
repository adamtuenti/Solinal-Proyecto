import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Drawer, Title, Content, Card, List, ListItem, Thumbnail, CardItem, Header, Button, Left, Right, Body,  Font } from 'native-base';
import { Icon,Divider } from 'react-native-elements';
/*import Container from 'native-base';*/
import{
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native';
/*import * as Font from 'expo-font';*/
import { Ionicons } from '@expo/vector-icons';
/*import { ListItem } from 'react-native-elements';*/
import {MaterialIcons} from '@expo/vector-icons';

import Footer from './../shared/Footer';
/*import Header from '../shared/Header';*/
import EstadoCuenta from './../shared/estadoCuenta';
import SideBar from './../shared/SideBar';
import MenuDrawer from 'react-native-side-drawer';


const list = [
  {
    name: 'Crear Equipo',
    avatar_url: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/equipo.png?raw=true',
    subtitle: 'Vice President',
    url: 'EquipoVacio',
    altura:30,
    anchura:40
  },
  {
    name: 'Mis Auditorias',
    avatar_url: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%2047.png?raw=true',
    subtitle: 'Vice Chairman',
    url: 'AuditoriasVacia',
    altura:32,
    anchura:23
  },
  {
    name: 'Recomienda Solinal Auditor',
    avatar_url: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/compartir.png?raw=true',
    subtitle: 'Vice Chairman',
    url: 'CalendarioPrograma',
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
           open: false
        };
    }

    closeDrawer(){
      this._drawer._root.close()
  };

  openDrawer(){
      this._drawer._root.open()
  };

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
        <Container>
            <Content>
                <List>
                   <ListItem itemHeader>
                        <View>
                                <Text>Solinal®</Text>
                        </View>
                        <View>
                                <Text>Training {'&'} Certification Services</Text>
                        </View>
                    </ListItem>
                    <ListItem thumbnail>
                        
                        
                           <Left>
                                <Thumbnail square source={{ uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Sidebar01.jpg' }} />
                           </Left>
                           <Body>
                               <View>
                                    <Text>SOLINAL Para Restaurantes</Text>
                                </View>
                                <View>
                                    <Text note>Entrenamiento en el servicio, la manipulación de alimentos y administradores de restaurantes</Text>
                                </View>
                           </Body>
                        
                        
                    </ListItem>   
                    <ListItem thumbnail>
                       
                           <Left>
                                <Thumbnail square source={{ uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Sidebar02.jpg' }} />
                           </Left>
                            <Body>
                                <View>
                                    <Text>SOLINAL Para Industrias</Text>
                                </View>
                                <View>
                                    <Text note>Certificado de personas en la seguridad de los alimentos y auditores calificados</Text>
                                </View>
                            </Body>
                
                    </ListItem>
                    <ListItem thumbnail>
                        
                            <Left>
                                <Thumbnail square source={{ uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Sidebar03.jpg' }} />
                            </Left>
                            <Body>
                                <View>
                                    <Text>SOLINAL en la Competencia Laboral</Text>
                                </View>
                                <View>
                                    <Text note>Certificamos la experiencia de trabajo, habilidades y destrezas basados en las normas INEN</Text>
                                </View>
                            </Body>
                        
                    </ListItem>
                    <ListItem thumbnail>
                        
                            <Left>
                                <Thumbnail square source={{ uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Sidebar04.png' }} />
                            </Left>
                            <Body>
                                <View>
                                    <Text>SOLINAL Servicios de Asesoría</Text>
                                </View>
                                <View>
                                    <Text note>Resolución de problemas frecuentes presentes en restaurantes e industrias de alimentos</Text>
                                </View>
                            </Body>
                        
                    </ListItem>
                    <ListItem itemHeader>
                        <View>
                                <Text>Comparta nuestros servicios</Text>
                        </View>
                        <View>
                                    <Text>www.solinalfoodschool.org</Text>                      
                        </View>
                    </ListItem>
                </List>
            </Content>
        </Container>
            
    );
};

  render() {

    
    return (

      <Container>

      <MenuDrawer 
          open={this.state.open} 
          drawerContent={this.drawerContent()}
          drawerPercentage={75}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >

      <Header>
      <View  style={styles.back}>

      <View style={styles.container}>
        <View style={styles.izquierdo}>
        
          <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/user.png?raw=true'}}
                    style= {styles.imagen}/>
        
        
        <Text style={{color:'white', fontSize:19, marginLeft:10}}>
            Bienvenido usuario
        </Text>
      </View>

    


    <Button style={{flex: 1, flexDirection: 'row-reverse',marginLeft:5, alignItems:'center'}}
    onPress={() => this.toggleOpen()}>
        <MaterialIcons name='menu' size={30}  style={styles.icon}/>
    </Button>

    

      </View>
      </View>
      </Header>



        <Content padder style={{backgroundColor: '#f6f6f6'}}>

        

          <Card>


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
                      onPress={()=>this.props.navigation.navigate(l.url,{paginaActual:this.state.paginaActual})}
                      bottomDivider
                    />
                  ))
                }
              </View>

           


            


         
          </Card>


          <Card>




        <View style={{flex: 1, flexDirection: 'row', height:100, justifyContent:'flex-end', marginTop:15}}>

          <View style={{margin:7}}>
            
            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/premium.png?raw=true'}}
                            style= {{height: 50,
                                     width: 70}}>
              </Image>
          </View>
        <View style={{flex: 1, flexDirection: 'column',marginLeft:5}}>
            
                <Text style={{color: '#1ed695'}}>CONVIÉRTETE EN PREMIUM</Text>
                <Text style={{color: '#636363'}}>Vea estadísticas de cumplimiento, cierre no conformidades, o crea más checklists de auditoría</Text>
              

        </View>

          <View style={{marginLeft:5, marginRight:3,marginTop:10}}>    
                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/ir.png?raw=true'}}
                              style= {{height: 56,
                                      width: 25}}>
                </Image>
          
          </View>
        </View>

      </Card>

      <TouchableOpacity onPress={this.toggleOpen} style={styles.body}>
        <View>
            <Text>Open</Text>
            </View>
      </TouchableOpacity>
        
       
              
        </Content>


      <Footer />
      </MenuDrawer>                         
      </Container>
    );
   
  }
}

const styles = StyleSheet.create({
  izquierdo:{
      width: Dimensions.get('screen').width,
      
     
      flexDirection: 'row',
      alignItems:'center',
      marginLeft:10
        
      
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
      alignContent:'center'
      
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