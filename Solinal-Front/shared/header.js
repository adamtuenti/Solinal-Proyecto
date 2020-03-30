import React from 'react'
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
import Form from 'react-bootstrap/Form'
import {MaterialIcons} from '@expo/vector-icons'
/*
<Header style={{justifyContent: 'flex-end',marginTop:5,backgroundColor: '#1ed695',height:75, alignItems: 'center',}}>
                <Left>
                    <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/user.png?raw=true'}}
                                    style= {{height: 40,
                                            width: 40}}>
                    </Image>
                </Left>
                <Body>
                    <Title>Auditorias</Title>
                </Body>
                <Right>
                    <Button transparent>
                    <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/menu.png?raw=true'}}
                                    style= {{height: 20,
                                            width: 30}}>
                    </Image>
                    </Button>
                </Right>
                </Header>*/

export default function Header({navigation,title}){

    const openMenu=()=>{
        navigation.openDrawer()
    }

    return(

        <View  style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.header}>
        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/user.png?raw=true'}}
                                    style= {{height: 40,
                                            width: 40}}/>

            



            <View>
            <Text style={{color:'white', fontSize:19, marginLeft:10}}>
                {title}
            </Text>
            </View>

        </View>

        <View style={{flex: 1, flexDirection: 'row-reverse',marginLeft:25}}>
            <MaterialIcons name='menu' size={25}  onPress={openMenu} style={styles.icon}/>
            </View>

        </View>
        
    );
}

const styles = StyleSheet.create({
    header:{
        width: Dimensions.get('screen').width,
        height:'100%',
        backgroundColor:'#1ed695',
        flexDirection: 'row'
    },
    icon:{
       position:'absolute',
       left:15
        
    }
})