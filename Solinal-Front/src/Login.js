import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView,FlatList, TouchableHighlight,Image, TextInput,Alert,TouchableOpacity } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
import Form from 'react-bootstrap/Form'


import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends Component{


    constructor(props){

        
        super(props);
        this.state = {
          username : '',
          password : '',
          loading: false,
          pacientes: [],
          url: 'http://accountsolinal.pythonanywhere.com/api/user'
        }
        /*super(props)


        https://pokeapi.co/api/v2/pokemon/


            this.timestamp =1;
            this.public_key="36700780168bdcf1bb2901333a59575a";
            this.private_key="55323dc109f7cc180247ef518c2155dd51aca969";
            this.state={
                loaded: false,
                marvel: [],
                url: 'http://gateway.marvel.com:80/v1/public/characters'
            }*/
               /* dataSource: new FlatList.Da({
                    rowHasChanged: (row1,row2)=>row1!=row2
                }),
                loaded: false*/


                /*<Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        
        
        <TextInput
                    
                    placeholder='Clave'
                    onChangeText={
                        password => this.setState({password})
                    }
                    class="form-control"
                    autoCapitalize="none"
                    placeholderTextColor='blue'
            //onChangeText={val => this.onChangeText('username', val)}

             //onPress={() => this.props.navigation.navigate('Registro')}
                />
                
                 <Input
                    style={styles.default}
                    placeholder='Usuario'
                    onChangeText={username=>this.setState({username})}
                    leftIcon={
                        <Icon
                        name='user'
                        size={24}
                        color='black'
                        />
                    }
                    />*/
            
    }
    cambiar=()=>{
        this.props.navigation.navigate('Registro');

    }



    myfun=()=>{
        const{username,password}=this.state;
        console.log(this.state.pacientes)

        const array1 = this.state.pacientes
        
        var bandera = 0

        array1.forEach(function(element){
            var name = element.username
            var pass = element.id

            if (name==username){
                
                console.log(name);
                console.log(pass);
                
                
                
                if (password == pass){
                    bandera = 1;
                    

                }
                else{
                    bandera = 2;
                    alert("clave mal ingresada");
                    

                }
            }

        }); 
        if(bandera==0){
            alert("Usuario no registrado");

        }
        else if(bandera==1){
            this.props.navigation.navigate('CarouselS')
        }


       
       // console.log(element.name)
       
        
        /*if (username == "A") {
            alert("Clave o usuario incorrecto");
        }
        else{
            this.props.navigation.navigate('Registro')

        }*/
    }
    
    componentDidMount(){
        this.getPacientes();
    }

    getPacientes = () => {
        this.setState({loading:true})
        fetch(this.state.url)
        .then(res=>res.json())
        .then(res=>{ 
            //console.log(res);
            this.setState({
            pacientes: res,
            url: res.next,
            loading: false,    
            })
        })
    }

    render() {
        return ( 
            <SafeAreaView >
                <View style = {styles.container}>
                

                

                <Image
                        style={{width: 125, height: 175, margin:25}}
                        source={{uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Recurso%201.png?raw=true'}}
                        />


                
                
            
                <TextInput
                    style={{height: 35,width:  142,borderColor: "gray",borderWidth: 1, alignItems:'center', fontWeight: 'bold',margin:5, padding:5}}
                    placeholder='Usuario'
                    autoCapitalize="none"
                    onChangeText={username=>this.setState({username})}
                    
                    />
                    

                    <TextInput
                        style={{height: 35,width:  142,borderColor: "gray",borderWidth: 1, alignItems:'center', fontWeight: 'bold', margin:5, padding:5}}
                        secureTextEntry={true}
                        placeholder='Clave'
                    onChangeText={
                        password => this.setState({password})
                    }
                    
                    />

                

                <TouchableHighlight
         style={styles.botonLogin} onPress={this.myfun}>
         <Text style={{fontWeight: 'bold',color:'white'}}> Conectar </Text>
        </TouchableHighlight>

        

                </View>

                
                    
                <View style = {styles.abajo}>
                    

                    

                    <Button
                        title="Crear cuenta"
                        type="clear"
                     //   onPress={
                           // alert("Esta es la pestaña que hara David")
                      //  }
                        />
                    <Button
                        title="Olvido su clave?"
                        type="clear"
                        //onPress={alert("Siguiente avance!")}
                        />

                

                <SocialIcon style={{height: 35,width:  175}}
                    title='Sign in With Google'
                    button
                    type='google'
                    />

                




                    
                </View>
            </SafeAreaView>
            )
        }

    

    
    

    

   

   
}


export default Login;

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
      
      
      
      
      alignItems: 'center',
      justifyContent: 'center',
    
      marginTop: "70%",
      margin:10
    },

    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#35E119',
        padding: 10,
        width:142,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
   

    },botonGoogle:{
        
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,

        elevation: 1,

    },
    default:{
        backgroundColor:'blue'
    },
    abajo: {    
        alignItems: 'center',

       // flexDirection: 'row',

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
