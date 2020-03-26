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
/*
const sports = [
    {
        label: 'Football',
        value: 'football',
    },
    {
        label: 'Baseball',
        value: 'baseball',
    },
    {
        label: 'Hockey',
        value: 'hockey',
    },
];

*/

class Registro extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            password: '',
            email: '',

            loading: false,

        }
    }


    /*
            this.inputRefs = {
                firstTextInput: null,
                favSport0: null,
                favSport1: null,
                lastTextInput: null,
                favSport5: null,
            };
    
            this.state = {
                numbers: [
                    {
                        label: '1',
                        value: 1,
                        color: 'orange',
                    },
                    {
                        label: '2',
                        value: 2,
                        color: 'green',
                    },
                ],
                favSport0: undefined,
                favSport1: undefined,
                favSport2: undefined,
                favSport3: undefined,
                favSport4: 'baseball',
                previousFavSport5: undefined,
                favSport5: null,
                favNumber: undefined,
            };
    
            this.InputAccessoryView = this.InputAccessoryView.bind(this);
        }
    
        InputAccessoryView() {
            return (
                <View style={defaultStyles.modalViewMiddle}>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.setState(
                                {
                                    favSport5: this.state.previousFavSport5,
                                },
                                () => {
                                    this.inputRefs.favSport5.togglePicker(true);
                                }
                            );
                        }}
                        hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}>
                        <View testID="needed_for_touchable">
                            <Text
                                style={[
                                    defaultStyles.done,
                                    { fontWeight: 'normal', color: 'red' },
                                ]}>
                                Cancel
                    </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <Text>Name | Prefer</Text>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.inputRefs.favSport5.togglePicker(true);
                        }}
                        hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}>
                        <View testID="needed_for_touchable">
                            <Text style={defaultStyles.done}>Done</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            );
        }
        

    state = {
        isValid: null,
    };
*/

    validar() {

        const { nombre, password, apellido, email } = this.state;
        if (nombre === '' || apellido === '' || password === '' || email === '') { alert('Debe de llenar todos los campos'); }
        else
            alert('Usuario registrado');
        





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
        /*
        const placeholder = {
            label: 'Select  sport...',
            value: null,
            color: '#9EA0A4',
        };
 
        */
        return (
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.scrollContentContainer}>
                {/*const {isValid} = this.state*/}
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



                                {/** 
                            <Input
                                placeholder="Password"
                                style={styles.input}
                                pattern={[
                                    '^.{8,}$', // min 8 chars
                                    '(?=.*\\d)', // number required
                                    '(?=.*[A-Z])', // uppercase letter
                                ]}
                                onValidation={isValid => this.setState({ isValid })}
                            />
*/}
                                <TextInput secureTextEntry={true} style={styles.input}


                                    pattern={[
                                        '^.{8,}$', // min 8 chars
                                        '(?=.*\\d)', // number required
                                        '(?=.*[A-Z])', // uppercase letter
                                    ]}



                                    placeholder='CONTRASEÑA'
                                    onChangeText={password => this.setState({ password })} />

                                {/* PARA LISTPICKER

                            <View style={styles.container}>

                                <Text>werwe</Text>
                               
                                <RNPickerSelect
                                    placeholder={placeholder}
                                    items={sports}
                                    onValueChange={value => {
                                        this.setState({
                                            favSport0: value,
                                        });
                                    }}
                                    onUpArrow={() => {
                                        this.inputRefs.firstTextInput.focus();
                                    }}
                                    onDownArrow={() => {
                                        this.inputRefs.favSport1.togglePicker();
                                    }}
                                    style={pickerSelectStyles}
                                    value={this.state.favSport0}
                                    ref={el => {
                                        this.inputRefs.favSport0 = el;
                                    }}
                                />
                                <View paddingVertical={5} />

                            </View>
                        and iOS onUpArrow/onDownArrow toggle example */}


                            </View>

                        </View>
                        {/** 
                    <View>
                        <Text style={{ color: isValid && isValid[0] ? 'green' : 'red' }}>
                            Rule 1: min 8 chars
          </Text>
                        <Text style={{ color: isValid && isValid[1] ? 'green' : 'red' }}>
                            Rule 2: number required
          </Text>
                        <Text style={{ color: isValid && isValid[2] ? 'green' : 'red' }}>
                            Rule 3: uppercase letter
          </Text>
                    </View>
*/}
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

                            <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5} onPress={this.onG}>
                                <Image

                                    source={{
                                        uri:
                                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
                                    }}

                                    style={styles.ImageIconStyle}
                                />
                                <View style={styles.SeparatorLine} />
                                <Text style={styles.TextStyle}> Login Using Google Plus </Text>
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
        margin: 10,
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
        marginTop: 50,
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