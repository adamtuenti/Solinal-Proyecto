import React from 'react'
import { StyleSheet, Text, View, Dimensions,Image, Easing, NativeModules } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
import Form from 'react-bootstrap/Form'
import {MaterialIcons} from '@expo/vector-icons';
import { Container, Drawer, Content, List, ListItem, Left, Right, Body, TouchableHighlight, TouchableOpacity, Thumbnail, } from 'native-base';
import MenuDrawer from 'react-native-side-drawer';
import SideBar from './SideBar';




export default class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          open: false
        };
        this.drawerContent = this.drawerContent.bind(this);
      }
    
    closeDrawer(){
        this._drawer._root.close()
    };

    openDrawer(){
        this._drawer._root.open()
    };

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
                                <View>
                                    <Text>Solinal®</Text>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <Text>Training {'&'} Certification Services</Text>
                                </View>
                            </View>
                        </ListItem>
                        <ListItem thumbnail>
                            <View>
                            
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
                            
                            </View>
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
                                <View>
                                    <Text>Comparta nuestros servicios</Text>
                                </View>
                            </View>
                            <View>
                                
                                    <View>
                                        <Text>www.solinalfoodschool.org</Text>
                                    </View>
                                
                            </View>
                        </ListItem>
                    </List>
                </Content>
            </Container>
                
        );
    };


    render(){

       
          // customize drawer's style (Optional)
          var customStyles = {
            drawer: {
              shadowColor: '#000',
              shadowOpacity: 0.4,
              shadowRadius: 10
            },
            mask: {}, // style of mask if it is enabled
            main: {} // style of main board
          };

    return(


        <View  style={styles.back}>

        <View style={styles.container}>
            <View style={styles.izquierdo}>
                
                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/user.png?raw=true'}}
                            style= {styles.imagen}/>
                

                



                
                <Text style={{color:'white', fontSize:19, marginLeft:10}}>
                    Bienvenido {userNameGlobal}
                </Text>
            </View>

            
        

            <Button style={{flex: 1, flexDirection: 'row-reverse',marginLeft:5, alignItems:'center'}}>
            onPress={() => this.toggleOpen()}>
                <MaterialIcons name='menu' size={30}  style={styles.icon}/>
            </Button>

            

        </View>
        </View>
       
    );
    }
}

NativeModules.expo

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