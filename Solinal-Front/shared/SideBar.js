import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem, Left, Right, Body, TouchableHighlight, Thumbnail, View } from "native-base";

export default class SideBar extends React.Component {

    render(){
        return(
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
                           <TouchableHighlight onPress={()=> this._linkPressed('http://www.solinalfoodschool.org/restaurantes')}>
                               <Left>
                                    <Thumbnail square source={{ uri: 'Image URL' }} />
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
                                    <Thumbnail square source={{ uri: 'Image URL' }} />
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
                                    <Thumbnail square source={{ uri: 'Image URL' }} />
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
                                    <Thumbnail square source={{ uri: 'Image URL' }} />
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
                </Content>
            </Container>
        )
    }
}