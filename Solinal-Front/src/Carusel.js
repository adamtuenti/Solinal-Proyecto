import {StyleSheet, TouchableHighlight, View, Text, Image} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'react-native-best-viewpager';
 import ViewPagerAndroid from "@react-native-community/viewpager";
 import {RNCamera} from 'react-native-camera'
//import RNFetchBlob from 'rn-fetch-blob'

export default class Carusel extends Component {

    /*<View>
                        <RNCamera
                        ref = {ref=>{
                            this.camera=ref
                        }
                        }
                        type={RNCamera.Constants.Type.back}
                        flashMode = {RNCamera.Constants.FlashMode.on}

                        >
                        </RNCamera>

                        <View>
                        <TouchableHighlight>
                        <Text>
                        tomar foto
                        </Text>
                        </TouchableHighlight>

                        </View>

                        </View>
*/

/*<View style={{width:'87%',alignItems:'center',marginTop:'3.5%'}}>
                        <Text style={styles.tituloText}>Ahorra tiempo y dinero mientras ejecutas una auditoría</Text>
                        </View>
                        <View style={{width:'87%',alignItems:'center',marginTop:'3%'}}>
                        <Text style={styles.bodyText}>Deshazte de tanto papel, todas las auditorias internas, de proveedor, inspecciones y checklist de verificación, en una app amigable.</Text>
                        </View>*/

    super(props){
        //set value in state for initial date
         this.state = {
           
           urlImage: this.props.navigation.state.params.url
        };
    }


    render() {
        return (
           
                <IndicatorViewPager
                    style={{flex:1,color:'green'}}
                    indicator={this._renderDotIndicator()}
                >


                    <View style={{ flexDirection:'column',alignItems:'center',flex:1,justifyContent:'center'}}>

                       
                        <View style={{alignItems:'center'}}>

                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%203.png?raw=true'}}style= {styles.imagen}></Image>
                        
                        </View>

                        <View style={{width:'87%',alignItems:'center',marginTop:'3.5%'}}>
                        <Text style={styles.tituloText}>Ahorra tiempo y dinero mientras ejecutas una auditoría</Text>
                        </View>
                        <View style={{width:'87%',alignItems:'center',marginTop:'3%'}}>
                        <Text style={styles.bodyText}>Deshazte de tanto papel, todas las auditorias internas, de proveedor, inspecciones y checklist de verificación, en una app amigable.</Text>
                        </View>



                        <View style={{alignItems:'center',marginTop:'10%'}}>
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
                       
                        
                    </View>




                    <View style={{ flexDirection:'column',alignItems:'center',justifyContent:'center',flex:1}}>

                       
                        <View style={{alignItems:'center'}}>

                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%204.png?raw=true'}}style= {styles.imagen}></Image>
                        
                        </View>

                        <View style={{width:'87%',alignItems:'center',marginTop:'3.5%'}}>
                        <Text style={styles.tituloText}>Dile adiós a tantas reuniones no productivas</Text>
                        </View>
                        <View style={{width:'92%',alignItems:'center',marginTop:'3%'}}>
                        <Text style={styles.bodyText}>Al finalizar una auditoría, checklist o inspección en planta, visualiza los resultados en un informe completo, dinámico y con indicadores de gestión.</Text>
                        </View>

                    

                        

                        <View style={{alignItems:'center',marginTop:'10%'}}>
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
                       
                        
                    </View>




                    

                    <View style={{ flexDirection:'column',alignItems:'center',justifyContent:'center',flex:1}}>

                       
                        <View style={{alignItems:'center'}}>

                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%205.png?raw=true'}}style= {styles.imagen3}></Image>
                        
                        </View>

                        <View style={{width:'87%',alignItems:'center',marginTop:'3.5%'}}>
                        <Text style={styles.tituloText}>Cierra no conformidades sin necesidad de tanto papel</Text>
                        </View>
                        <View style={{width:'92%',alignItems:'center',marginTop:'3%'}}>
                        <Text style={styles.bodyText3}>Olvídate de esas reuniones que no llegan a nada. Gestiona de una forma más intuitiva las acciones correctivar a implementar para cerrar las no conformidades.</Text>
                        </View>

                    

                        

                        <View style={{alignItems:'center',marginTop:'10%'}}>
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
                       
                     
                    </View>


                

                </IndicatorViewPager>
 
              
          
        );
    }
 
   
 
    _renderDotIndicator() {
        return <PagerDotIndicator style={{height:'4%',backgroundColor:'#B3F1C9',borderEndColor:"green"}} pageCount={3} />;
    }
    
 
 
}


const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        backgroundColor: 'white',
    },
    imagen:{
        height:197,
        width:195,
        
       

    },
    imagen3:{
       height:199,
        width:201.5,
        
    },
    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#B3F1C9',
        alignItems:'center',
        width:185,
        height:45,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        
   

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
        marginTop:'7%',
        textAlign:'center'
    },
    bodyText: {
        marginTop: '5%',
        marginBottom: '8%',
        fontSize: 15,
        textAlign: 'center',
        textAlign:'center'
    },bodyText3: {
        marginTop: '5%',
        marginBottom: '3%',
        fontSize: 15,
        textAlign: 'center',
        textAlign:'center'
    },
    bodyText1: {
        marginTop: '5%',
        marginBottom: 9.5,
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
       
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        fontSize:15,
        marginTop:'7%'
    },
   
 
 
    textLine1: {
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        fontSize:15,
        marginTop:'2.5%'
    },
    imageStyle: {
        width: 50,
        height: 50,
        margin: 10
    }
})