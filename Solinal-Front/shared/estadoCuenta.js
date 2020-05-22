import React from 'react'
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
import Form from 'react-bootstrap/Form'
import {MaterialIcons} from '@expo/vector-icons'


export default class EstadoCuenta extends React.Component{
    constructor(props) {
        super(props);
        this.state = {


            loading: false,
          datos: [],
    
          url: 'http://accountsolinal.pythonanywhere.com/api/user/'+idUserGlobal
        };
    }


     componentDidMount(){
        this.getDatos();
    }

    getDatos = () => {

        this.setState({loading:true})
        fetch(this.state.url)

        .then(res=>res.json())
       
        .then(res=>{ 

            this.setState({
            datos: res,
            url: res.next,
            loading: false,    
            })
        })
    }


    

    
    render(){

    return(

        <View style={{flex: 1, flexDirection: 'row', margin:5,padding:10, backgroundColor:'white',borderColor: '#d6d7da',borderRadius: 4,
        borderWidth: 1,}}>
            <View style={{marginRight:35, flexDirection:'row'}}>
                <View>
                <Text style={{color: '#636363'}}>
                    Auditorias pendientes:
                </Text>
                </View>  
                <View>
                    <Text style={{color: '#2ba855', marginLeft:5}}>
                    {this.state.datos.auditoriasPendientes}
                  
                    </Text>
                </View>
                
            </View>
            <View style={{flexDirection:'row-reverse',flex:1}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{color: '#2ba855',fontSize:15}}>
                    Cuenta
                </Text>
                <Text style={{color: '#2ba855',marginLeft:5,fontSize:15}}>
                    {this.state.datos.tipoCuenta}
                </Text>
            </View>
            </View>
        </View>
        
    );
    }
}

