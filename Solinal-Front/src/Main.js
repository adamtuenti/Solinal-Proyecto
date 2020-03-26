import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Button, Left, Right, Body,  Font } from 'native-base';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'
/*import * as Font from 'expo-font';*/
import { Ionicons } from '@expo/vector-icons';

export default class Main extends Component {

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



        <Header style={{justifyContent: 'flex-end',marginTop:5,backgroundColor: '#1ed695',height:75, alignItems: 'center',}}>
          <Left>
            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%201.png'}}
                            style= {{height: 40,
                                     width: 40}}>
            </Image>
          </Left>
          <Body>
            <Title>Hola, Nombre Apellido</Title>
          </Body>
          <Right>
            <Button transparent>
            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%205.png'}}
                            style= {{height: 20,
                                     width: 30}}>
            </Image>
            </Button>
          </Right>
        </Header>



        <Content padder style={{backgroundColor: '#f6f6f6'}}>
          <View style={{flex: 1, flexDirection: 'row', margin:5,padding:10}}>
          <View style={{marginRight:35}}>
              <Text style={{color: '#636363'}}>
                  Auditorias realizadas: #
                
                <Text style={{color: '#2ba855'}}>
                  0
                </Text>
                </Text>
          </View>

          <View>
               
                <Text style={{color: '#2ba855'}}>
                  CUENTA GRATUITA
                </Text>
          </View>
            
          </View>


          <Card>

            <CardItem bordered>
              <View style={{flex: 1, flexDirection: 'row'}}>

              <View style={{marginRight:10}}>
                




          
              <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%206.png'}}
                            style= {{height: 30,
                                     width: 40}}>
              </Image>
              </View>

              <View style={{marginRight:10}}>
            
           
                <Text style={{color: '#636363'}}>Crear Equipo</Text>
              </View>
              
              </View>
            
            </CardItem>


            <CardItem bordered>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{marginRight:25}}>      
                  <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%207.png'}}
                                style= {{height: 35,
                                        width: 25}}>
                  </Image>
                  </View>
                <View>  
                  <Text style={{color: '#636363'}}>
                    Mis Auditorías
                  </Text>
                </View>
              
              </View>

            </CardItem>


            <CardItem bordered>


              <View style={{flex: 1, flexDirection: 'row'}}>

              <View style={{marginRight:15}}>
          
              <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%208.png'}}
                            style= {{height: 30,
                                     width: 35}}>
              
              </Image>
              </View>
              <View>

                <Text style={{color: '#636363'}}>Recomienda Solinal Auditor</Text>
              </View>
              
              </View>
            </CardItem>
          </Card>


          <Card>




        <View style={{flex: 1, flexDirection: 'row', height:100, justifyContent:'flex-end', marginTop:15}}>

          <View style={{margin:7}}>
            
            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%209.png'}}
                            style= {{height: 50,
                                     width: 70}}>
              </Image>
          </View>
        <View style={{flex: 1, flexDirection: 'column',marginLeft:5}}>
            
                <Text style={{color: '#1ed695'}}>CONVIÉRTETE EN PREMIUM</Text>
                <Text style={{color: '#636363'}}>Vea estadísticas de cumplimiento, cierre no conformidades, o crea más checklists de auditoría</Text>
              

        </View>

        <View style={{marginLeft:5, marginRight:3,marginTop:10}}>    
              <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2010.png'}}
                            style= {{height: 50,
                                     width: 24}}>
              </Image>
        
        </View>
       </View>

      </Card>
        
       
              
        </Content>

        
        <Footer style={{height:63}}>
          <FooterTab style={{backgroundColor: '#f6f6f6'}}>
          
              
            <Button onPress={()=>this.props.navigation.navigate('AuditoriasVacia')}>
            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2011.png'}}
                            style= {{height: 29,
                                     width: 23}}>
              </Image>
              <Text style={{color: '#636363', fontSize: 9}}>Auditorias</Text>
            </Button>
            
          
            <Button vertical>
            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2012.png'}}
                            style= {{height: 29,
                                     width: 27}}>
              </Image>
              <Text style={{color: '#636363', fontSize: 9}}>Calendario</Text>
            </Button>

            <Button vertical>                  
            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2013.png'}}
                            style= {{height: 45,
                                     width: 45}}>
              </Image>
              </Button>
            <Button vertical>
            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2014.png'}}
                            style= {{height: 29,
                                     width: 25}}>
              </Image>
              <Text style={{color: '#636363', fontSize: 9}}>Acción Correctiva</Text>
            </Button>
            <Button vertical>
            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2015.png'}}
                            style= {{height: 29,
                                     width: 25}}>
              </Image>
              <Text style={{color: '#636363', fontSize: 9}}>No Conformidad</Text>
            </Button>
            
          </FooterTab>
        </Footer>



      </Container>
    );
  }
}