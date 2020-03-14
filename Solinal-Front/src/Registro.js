import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Button, Image, TextInput,Alert,TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import Form from 'react-bootstrap/Form'

import Icon from 'react-native-vector-icons/FontAwesome';

class Registro extends Component{

    render() {
        return ( 
            <View style = {styles.container}>
                <View>

                

                <Image
                        style={{width: 150, height: 150}}
                        source={{uri: 'https://i.pinimg.com/originals/cc/a2/2b/cca22be5a0634443f9a37ed663ae62bc.jpg'}}
                        />


                <TextInput
                    style={styles.input}
                    placeholder='Usuario'
                    autoCapitalize="none"
                    placeholderTextColor='blue'
            //onChangeText={val => this.onChangeText('username', val)}

                />
                <Text h1>Heading 1</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Clave'
                    autoCapitalize="none"
                    placeholderTextColor='blue'
            //onChangeText={val => this.onChangeText('username', val)}
                />

                
                    
                <Input
                    placeholder='INPUT WITH ERROR MESSAGE'
                    placeholderTextColor='blue'
                    
                    />

                    <Button
                        title="Registro"
                        onPress={() => this.props.navigation.navigate('Login')}
                    />

<Button
  large
  rightIcon={{name: 'code'}}
  title='LARGE WITH RIGHT ICON' />


                    
                </View>
            </View>
            )
        }

    

    
    

    

   

   
}


export default Registro;

const IconButton = (props) => {
    return (
            <TouchableOpacity style={{ 
                width: 50, 
                height: 50, 
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'#000000',
                marginHorizontal: 6,
                }}>
                <Icon 
                name={props.icono} 
                size={38} 
                color="#ffffff" />
            </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft:10,
      
      alignItems: 'baseline',
      justifyContent: 'center',
    },
    contentContainer:{
        backgroundColor: '#98FF7A',
        borderColor: '#fff',
        borderRadius: 18,
            padding: 9,
            marginVertical:9,
            flexDirection: "row",
            alignItems: 'center',
            width:'100%'
    }
  });
