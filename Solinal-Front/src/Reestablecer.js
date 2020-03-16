import React, { Component } from 'react'
import {
    StyleSheet, View, Text, StatusBar,
    TouchableOpacity, SafeAreaView,
    TouchableHighlight, Image, PixelRatio, ScrollView,
    TextInput, Alert
} from 'react-native';
import { Input, Button } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';


class Reestablecer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ''
        };
        this.handleChangeInput = this.handleChangeInput.bind(this);

    }
    myfun = () => {

        alert('Por favor revisa tu correo');

    }
    handleChangeInput(evento) {
        const { email, value } = evento.target;
        let regex = new RegExp("^[ a-zA-Z ]+$");
        for (let i = 0; i <= value.size - 1; i++) {
            let letra = value[i]
            if (!regex.test(letra) || !letra === " ") {
                return;
            }
        }

        this.setState({
            [email]: value  
        });
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
                            <Text style={styles.TextStyle}> Ingresa tu correo electrónico</Text>
                            <Text style={styles.TextStyle}> para reestablecer tu contraseña</Text>
                            <TextInput
                                id='nombre'
                                value={this.state.nombre}
                                onChange={this.handleChangeInput}
                                style={styles.input}
                                placeholder='E-MAIL'
                                autoCapitalize="none"
                                placeholderTextColor='lightgrey'
                            />


                        </View>

                    </View>

                    <View style={styles.MainContainer}>
                        <TouchableOpacity
                            style={styles.botonRegister} onPress={this.myfun}>
                            <Text style={{ fontWeight: 'bold', color: '#515254' }}> REESTABLECER </Text>
                        </TouchableOpacity>


                    </View>


                </SafeAreaView>
            </ScrollView>)
    }

}

export default Reestablecer;

const IconButton = (props) => {

    return (
        <TouchableOpacity style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000000',
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
    top: {

        alignItems: 'center',
        justifyContent: 'center',

        marginTop: "20%",
        marginBottom: 30
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
        marginTop: 30,
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
        margin: 25



    },

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },




    TextStyle: {
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 4,
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
