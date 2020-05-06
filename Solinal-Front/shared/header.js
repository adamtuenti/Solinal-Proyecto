import React from 'react'
import { StyleSheet, Text, View, Dimensions,Image, Easing } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
import Form from 'react-bootstrap/Form'
import {MaterialIcons} from '@expo/vector-icons';
import { Container, Content, List, ListItem, Left, Right, Body, TouchableHighlight, Thumbnail, } from 'native-base';
import Drawer from 'react-native-drawer-menu';




export default class Header extends React.Component{

    closeDrawer(){
        this._drawer._root.close()
    };

    openDrawer(){
        this._drawer._root.open()
    };
    
    render(){

        var drawerContent = (<View>
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
                           <TouchableHighlight onPress={()=> this._linkPressed('http://www.solinalfoodschool.org/restaurantes')}>
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
                           </TouchableHighlight>
                        </ListItem>
                         <ListItem thumbnail>
                           <TouchableHighlight onPress={()=> this._linkPressed('http://www.solinalfoodschool.org/industrias')}>
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
                            </TouchableHighlight>
                        </ListItem>
                        <ListItem thumbnail>
                            <TouchableHighlight onPress={()=> this._linkPressed('http://www.solinalfoodschool.org/competencia')}>
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
                            </TouchableHighlight>
                        </ListItem>
                        <ListItem thumbnail>
                            <TouchableHighlight onPress={()=> this._linkPressed('http://www.solinalfoodschool.org/asesorias')}>
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
                            </TouchableHighlight>
                        </ListItem>
                        <ListItem itemHeader>
                            <View>
                                <View>
                                    <Text>Comparta nuestros servicios</Text>
                                </View>
                            </View>
                            <View>
                                <TouchableHighlight onPress={()=> this._linkPressed('http://www.solinalfoodschool.org')}>
                                    <View>
                                        <Text>www.solinalfoodschool.org</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </ListItem>
                    </List>
          </View>);
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

       // <Drawer ref={(ref) => { this._drawer = ref; }} 
         //       content={<SideBar navigator={this._navigator} />} 
           //     onClose={() => this.closeDrawer()}>

        <View  style={styles.back}>

        <View style={styles.container}>
            <View style={styles.izquierdo}>
                
                <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/user.png?raw=true'}}
                            style= {styles.imagen}/>
                

                



                
                <Text style={{color:'white', fontSize:19, marginLeft:10}}>
                    Bienvenido {userNameGlobal}
                </Text>
            </View>

            <Drawer
            style={styles.container}
            drawerWidth={300}
            drawerContent={drawerContent}
            type={Drawer.types.Overlay}
            customStyles={{drawer: styles.drawer}}
            drawerPosition={Drawer.positions.Right}
            onDrawerOpen={() => {console.log('Drawer is opened');}}
            onDrawerClose={() => {console.log('Drawer is closed')}}
            easingFunc={Easing.ease}
            >
                <View style={styles.content}>
                    <Text>{Object.values(Drawer.positions).join(' ')}</Text>
                    <Text>{Object.values(Drawer.types).join(' ')}</Text>
                </View>
            </Drawer>

            <Button style={{flex: 1, flexDirection: 'row-reverse',marginLeft:5, alignItems:'center'}}>
           // onPress={() => this.openDrawer()}>
                <MaterialIcons name='menu' size={30}  style={styles.icon}/>
            </Button>

        </View>
        </View>
       // </Drawer>
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