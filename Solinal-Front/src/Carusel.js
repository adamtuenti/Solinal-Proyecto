import {StyleSheet, TouchableHighlight, View, Text, Image} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'react-native-best-viewpager';
 import ViewPagerAndroid from "@react-native-community/viewpager";
export default class Carusel extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={{height:'100%'}}
                    indicator={this._renderDotIndicator()}
                >


                    <View style={{ flexDirection:'column',paddingTop:'15%'}}>

                       
                        <View style={{alignItems:'center'}}>
                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%203.png?raw=true'}}style= {styles.imagen}></Image>
                        <View styles={{width:'15%'}}>
                         <Text style={styles.tituloText}>Ahorra tiempo y dinero mientras ejecutas una auditoría</Text>
                        <Text style={styles.bodyText}>Deshazte de tanto papel, todas las auditorias internas, de proveedor, inspecciones y checklist de verificación, en una app amigable.</Text>
                        </View>
                        </View>


                        <View style={{alignItems:'center'}}>
                        <TouchableHighlight style={styles.botonLogin} onPress={()=>this.props.navigation.navigate('Main')}>
                            <View>
                            <Text style={styles.letraBoton}>Comenzar</Text>
                            </View>
                        </TouchableHighlight>
                        </View>

                        <View style={styles.textLine}>
                            <Text>¿Ya tienes una cuenta? </Text>
                            <Text 
                            onPress={()=>this.props.navigation.navigate('Main')}
                            style={{color: '#23d697'}}>
                            Inicia Sesión</Text>
                        </View>
                       
                        <View style={{alignItems:'center',marginTop:'2%'}}>
                            <Image 
                            source={{uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Facebook-share-icon.png?raw=true'}} style={styles.imageStyle}></Image>
                        </View>
                    </View>



                    <View style={{ flexDirection:'column',paddingTop:'15%'}}>

                        <View style={{alignItems:'center'}}>
                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%204.png?raw=true'}}style= {styles.imagen}></Image>
                        <View styles={{width:150}}>
                         <Text style={styles.tituloText}>Dile adiós a tantas reuniones no productivas</Text>
                        <Text style={styles.bodyText}>Al finalizar una auditoría, checklist o inspección en planta, visualiza los resultados en un informe completo, dinámico y con indicadores de gestión.</Text>
                        </View>
                        </View>

                        <View style={{alignItems:'center'}}>
                        <TouchableHighlight style={styles.botonLogin} onPress={()=>this.props.navigation.navigate('Registro')}>
                            <View>
                            <Text style={styles.letraBoton}>Comenzar</Text>
                            </View>
                        </TouchableHighlight>
                        </View>

                        <View style={styles.textLine}>
                            <Text>¿Ya tienes una cuenta? </Text>
                            <Text 
                            onPress={()=>this.props.navigation.navigate('Login')}
                            style={{color: '#23d697'}}>
                            Inicia Sesión</Text>
                        </View>
                       
                        <View style={{alignItems:'center',marginTop:'2%'}}>
                            <Image 
                            source={{uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Facebook-share-icon.png?raw=true'}} style={styles.imageStyle}></Image>
                        </View>
                    </View>


                
                    <View style={{ flexDirection:'column',paddingTop:'12%'}}>

                        <View style={{alignItems:'center'}}>
                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%205.png?raw=true'}}style= {styles.imagen3}></Image>
                        <View styles={{width:150}}>
                         <Text style={styles.tituloText}>Cierra no conformidades sin necesidad de tanto papel</Text>
                        <Text style={styles.bodyText}>Olvídate de esas reuniones que no llegan a nada. Gestiona de una forma más intuitiva las acciones correctivar a implementar para cerrar las no conformidades.</Text>
                        </View>
                        </View>
                   
                   
                   <View style={{alignItems:'center'}}>
                        <TouchableHighlight style={styles.botonLogin} onPress={()=>this.props.navigation.navigate('Registro')}>
                            <View>
                            <Text style={styles.letraBoton}>Comenzar</Text>
                            </View>
                        </TouchableHighlight>
                        </View>

                        <View style={styles.textLine}>
                            <Text>¿Ya tienes una cuenta? </Text>
                            <Text 
                            onPress={()=>this.props.navigation.navigate('Login')}
                            style={{color: '#23d697'}}>
                            Inicia Sesión</Text>
                        </View>
                       
                        <View style={{alignItems:'center',marginTop:'2%'}}>
                            <Image 
                            source={{uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Facebook-share-icon.png?raw=true'}} style={styles.imageStyle}></Image>
                        </View>
                    </View>
                 

                </IndicatorViewPager>
 
              
            </View>
        );
    }
 
    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
    }
 
    _renderDotIndicator() {
        return <PagerDotIndicator style={{height:25}} pageCount={3} />;
    }
    
    _renderTabIndicator() {
        let tabs = [{
                text: 'Home',
               
            },{
                text: 'Message',
              
            },{
                text: 'Profile',
             
        }];
        return <PagerTabIndicator tabs={tabs} />;
    }
 
}


const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        backgroundColor: 'white',
    },
    imagen:{
        height:'57.2%',
        width:'82.7%',
        marginTop:'2%'

    }, botonLogin:{
        alignItems: 'center',
        backgroundColor: '#B3F1C9',
        alignItems:'center',
        width:'62%',
        height:45,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        
   

    },
     imagen3:{
        height:'55.5%',
        width:'83%',
        marginTop:'2%'
    },
    item: {
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 1,
        /*borderRadius: 5,*/
        borderColor: 'white',

        alignItems: 'center',
      },
  
    tituloText: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        alignItems:'center',
        marginTop:'7%'
    },
    bodyText: {
        marginTop: '5%',
        marginBottom: 15,
        fontSize: 15,
        textAlign: 'center',
    },
    letraBoton:{
        alignItems:'center',
        fontWeight: 'bold',color:'#565958',
        fontSize:23,
        textAlign:'center',
        marginTop:2,


    },
    
   
 
 
    textLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        fontSize:15,
        marginTop:'7%'
    },
    imageStyle: {
        width: 50,
        height: 50,
        margin: 10
    }
})