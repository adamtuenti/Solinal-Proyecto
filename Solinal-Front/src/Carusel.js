import {StyleSheet, View, Text, Image} from 'react-native';
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
                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/Recurso%203.png?raw=true'}}style= {{height: '65%',width: '70%'}}></Image>
                        </View>

                        <View styles={{width:150}}>
                         <Text style={styles.tituloText}>Ahorra tiempo y dinero mientras ejecutas una auditoría</Text>
                        <Text style={styles.bodyText}>Deshazte de tanto papel, todas las auditorias internas, de proveedor, inspecciones y checklist de verificación, en una app amigable.</Text>
                        </View>

                        <View style={styles.textLine}>
                            <Text>¿Ya tienes una cuenta? </Text>
                            <Text 
                            onPress={()=>this.props.navigation.navigate('Login')}
                            style={{color: 'green'}}>
                            Inicia Sesión</Text>
                        </View>
                       
                        <View style={styles.navBarBottom}>
                            <Image 
                            source={{uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/blue-and-white-letter-p-logo-gbutton.png?raw=true'}} style={styles.imageStyle}></Image>
                            <Image source={{uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Facebook-share-icon.png?raw=true'}} style={styles.imageStyle}></Image>
                        </View>
                    </View>



                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page twu</Text>
                    </View>



                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
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
    item: {
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 1,
        /*borderRadius: 5,*/
        borderColor: 'white',

        alignItems: 'center',
      },
    imageBackground: {
        flex: 1,
        backgroundColor: 'white',
        width: 150,
        height: 150,
        margin: 5,
        borderColor: 'white',
        justifyContent: 'center',
    },
    tituloText: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        alignItems:'center'
    },
    bodyText: {
        marginTop: 10,
        marginBottom: 15,
        fontSize: 15,
        textAlign: 'center',
    },
    imageBackground4: {
        flex: 1,
        backgroundColor: 'white',
        width: 245,
        borderColor: 'white',
    },
    navBarBottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
       
        width: 100,
    },
    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#35E119',
        width:142,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    textLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        fontSize:15
    },
    imageStyle: {
        width: 50,
        height: 50,
        margin: 10
    }
})