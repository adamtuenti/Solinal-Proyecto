import React, { Component } from 'react'
import {
    StyleSheet, View, Text, StatusBar,
    TouchableOpacity, SafeAreaView,
    TouchableHighlight, Image, PixelRatio, ScrollView,
    TextInput, Alert
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import FormData from 'form-data';


import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';


class Registro extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            password: '',
            email: '',
            usuario: '',
            mensajeError:'',

            loading: false,

        }
    }



    validar=async()=> {
       /* try{
            var formData = new FormData();
            } catch (error) {
            console.error('FormData ERROR', error);
            }*/
        const { nombre, password, apellido, email,usuario } = this.state;
       // formData.append('username','adaita');
        //formData.append('password','nuedsd');
        //formData.append('email','email@espol.ecom')


        
        if (nombre === '' || apellido === '' || password === '' || email === ''||usuario=='') { this.setState({mensajeError:'Llene todos los campos!'}) }

        else{

            let errorM = ''




            var dataToSend = {username: usuario, password: password, email: email,first_name:nombre,last_name:apellido};
            var formBody = [];
            for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            fetch('http://accountsolinal.pythonanywhere.com/api/register', {
            method: "POST",//Request Type 
            body: formBody,//post body 
            headers: {//Header Defination 
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            })
            .then((response) => response.json())
           
            .then((responseJson) => {
                //alert(JSON.stringify(responseJson));
                errorM='a'
                
                //this.setState({mensajeError:responseJson})
            })
            
            .catch((error) => {
                //alert(JSON.stringify(error));
                errorM = error
            });

            if(errorM==''){
                this.props.navigation.navigate('Registro')
            }else{
                this.setState({mensajeError:'usuario ya en uso!'})

            }

            

        }
        
          /*  try{

            fetch('http://accountsolinal.pythonanywhere.com/api/register', {
            method: 'POST',
           
            body: JSON.stringify({
                username: 'aditaa',
                                        password: 'clave',
                                        email: 'a@espol.edu.ec'
            }),
            });

            }catch(e){
                alert(e)
            }*/

           /* try{
                await fetch('http://accountsolinal.pythonanywhere.com/api/register',{
                    method: 'post',
                    mode: 'no-cors',
                    body: JSON.stringify(
                        {
                            usernme: 'aditaa',
                            passwrd: 'clave',
                            email: 'a@espol.edu.ec'

                        }
                    )
                })


            } catch(e){
                alert(e)
            }*/
            
          


            //}
            
    
    }


    





    onRegistro = () => {

        this.validar();

    }
    onFB = () => {

        alert('Registro por facebook');

    }
    onG = () => {

        alert('Registro por Google');

    }

    render() {
     
        return (
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.scrollContentContainer}>
              
                    <SafeAreaView >

                        <View style={styles.top}>
                            <View>

                                <Image
                                    style={{ width: 175, height: 242 }}
                                    source={{ uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Recurso%201.png?raw=true' }}
                                />

                            </View>

                        </View>
                        <View style={styles.center}>
                            <View>


                                <TextInput

                                    style={styles.input}
                                    placeholder='USER NAME'
                                    autoCapitalize="none"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={usuario => this.setState({ usuario })}
                                />

                                <TextInput
                                    style={styles.input} placeholder='NOMBRE'
                                    autoCapitalize="none"
                                    placeholderTextColor='lightgrey'
                                    name="nombre"
                                    onChangeText={nombre => this.setState({ nombre })}
                                />


                                <TextInput
                                    style={styles.input}
                                    placeholder='APELLIDO'

                                    autoCapitalize="none"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={apellido => this.setState({ apellido })}

                                />
                                <TextInput

                                    style={styles.input}
                                    placeholder='E-MAIL'
                                    autoCapitalize="none"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={email => this.setState({ email })}
                                />

        
                                <TextInput secureTextEntry={true} style={styles.input}


                                    pattern={[
                                        '^.{8,}$', // min 8 chars
                                        '(?=.*\\d)', // number required
                                        '(?=.*[A-Z])', // uppercase letter
                                    ]}



                                    placeholder='CONTRASEÑA'
                                    onChangeText={password => this.setState({ password })} />

                             

                        <Text style={{color:'red',paddingLeft: 15,marginTop:'2%'}}>{this.state.mensajeError}</Text>


                            </View>

                        </View>
                        {}
                        <View style={styles.MainContainer}>
                            <TouchableOpacity
                                style={styles.botonRegister} onPress={this.onRegistro}>
                                <Text style={{ fontWeight: 'bold', color: '#515254' }}> REGISTRARME </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={this.onFB}>

                                <Image

                                    source={{
                                        uri:
                                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
                                    }}

                                    style={styles.ImageIconStyle}
                                />
                                <View style={styles.SeparatorLine} />
                                <Text style={styles.TextStyle}> Login Using Facebook </Text>
                            </TouchableOpacity>

                        </View>


                    </SafeAreaView>
            </ScrollView>)
    }

}

export default Registro;

const styles = StyleSheet.create({
    top: {

        alignItems: 'center',
        justifyContent: 'center',

        marginTop: "20%",
        marginBottom: 10
    },

    center: {

        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    bot: {
        alignItems: 'center',

        justifyContent: 'center',

        padding: 10,

    },
    inputContainer: {

        height: 70
    },
    input: {
        height: 30,
        borderBottomColor: '#1ed796',
        borderBottomWidth: 1,
        paddingLeft: 15,
        paddingRight: 15,
        width: 200,
        alignItems: 'flex-start'
    },
    botonRegister: {
        alignItems: 'center',
        backgroundColor: '#b4f2ca',
        padding: 10,
        width: 142,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#c7f5d7',
        marginBottom: 5



    },

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },

    GooglePlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        width: 220,
        borderRadius: 5,
        margin: 5,
    },

    FacebookStyle: {
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        width: 220,
        borderRadius: 5,
        margin: 5,
    },

    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },

    TextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginRight: 20,
    },

    SeparatorLine: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },

    contentContainer: {
        backgroundColor: '#98FF7A',
        borderColor: '#fff',
        borderRadius: 18,
        padding: 9,
        marginVertical: 9,
        flexDirection: "row",
        alignItems: 'center',
        width: '100%'
    },


    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        paddingHorizontal: 15,
    },
    scrollContentContainer: {
        paddingTop: 40,
        paddingBottom: 10,
    },


});
/* para el listPicker
export const Dropdown = () => {
    return (
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
    );
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});
*/