import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Title, Content, Card, CardItem, Footer, Button, Left, Right, Body,  Font , Arrow} from 'native-base';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,Dimensions
} from 'react-native';

import HeaderBack from '../../shared/HeaderBack';
import EstadoCuenta from './../../shared/estadoCuenta';
import FooterCalendario from '../../shared/FooterCalendario';
import { Calendar } from 'react-native-calendars';
import {MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';
import moment from 'moment'


var nextDay =['2020-06-02',
       '2020-06-05',
       '2020-06-08',  
      ];

   const mark = {
    [nextDay]: {selected: true, marked: true,color: 'green', textColor: 'green'}
   };

   var nextDayold =['02-06-2020',
       '05-06-2020',
       '08-06-2020',  
      ];

   var nextDaynew = [];

export default class CalendarioPrograma extends Component {

  constructor(props){

    super(props);
    this.state = {
          fechastart: '',
          fechaend: '',
          tiempostart: '',
          tiempoend: '',
          loading: false,
          fechas: [],
          url: 'http://accountsolinal.pythonanywhere.com/api/fechas_get/'+idUserGlobal,
          array: ['2020-05-10','2020-05-11'],
          a : '2020-04-19',
          n:  '2020-04-25',
          marked: null,
          presentarDetalle:false,
          fechasDetalle:[]
    }
  }




  

      componentDidMount  ()  {

        this.getFechas();
       
      }

      anotherFunc = () => {

        const colores =['#F7F78B','#B9F957','#B1F9EB','#EE9BED','#6E6FAB','#C97E34','#9EEC4F']
    var obj = nextDaynew.reduce((c, v,a) => Object.assign(c, {[v]: {selected: true,marked: true, color: colores[a], textColor: 'black'}}), {});
    this.setState({ marked : obj});
   
}

       getMarkedDates = () => {
        const marked = {};
        this.props.weekly.forEach(item => {
            marked[item] = {marked: true, dotColor: Colors.green};
        });
        InteractionManager.runAfterInteractions(() => {
            this.setState({markedDates: JSON.parse(JSON.stringify(marked))})
        });
    };

      getFechas = () => {
        const array = [];
        this.setState({loading:true})
          fetch(this.state.url)
          .then(res=>res.json())
          .then(res=>{ 
            console.log(res)
              this.setState({
              fechas: res,
              url: res.next,
              loading: false,    
              })
              this.changeFormatDate();
              this.anotherFunc();
          })
    
         
      }

      
  changeFormatDate = () => {
    var day = '';
    var end = '';
    const fechas = this.state.fechas;
  

    fechas.forEach(function(element){
      
      day = moment(element.fecha_inicio,'DD-MM-YYYY').format('YYYY-MM-DD');
      nextDaynew.push(day);
    })
 
  
  }

  mostrarDetalle=(day)=>{
    console.log(day)
    

   

    

    const fechas = this.state.fechas
    let fechasDetalle = this.state.fechasDetalle
    

   
    var presentarDetalle = this.state.presentarDetalle
  //  fechasDetalle = []
    
    
  var cont = 0
    fechas.forEach(function(elemento){
      elemento.pos = cont
      console.log(elemento.fecha_inicio)
      

      if((moment(elemento.fecha_inicio,'DD-MM-YYYY').format('YYYY-MM-DD'))==day.dateString){
        fechasDetalle = []
        
        
        presentarDetalle = true
        fechasDetalle.push(elemento)
        //console.log(elemento)

      }
      cont = cont + 1


    
    })
    this.setState({presentarDetalle:presentarDetalle})
    this.setState({fechasDetalle:fechasDetalle})



  }

   
      render(){

        const array = this.state.array;

        const colores =['#F7F78B','#B9F957','#B1F9EB','#EE9BED','#6E6FAB','#C97E34','#9EEC4F']

        const n = this.state.n;
          return(
              <View style={{height:Dimensions.get('window').height,flex:1,marginTop:25}}>
                
                <View  style={{flexDirection:'row',backgroundColor:'#1ED695',height:55,alignContent:'center'}}>
                <View style={{marginTop:5,flexDirection:'row',}}>
                    <View style={{width:'100%',flexDirection: 'row',alignItems:'center',marginLeft:10}}>
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('Main')}>       
                        <MaterialIcons name="arrow-back" size={32} color="white" />
                        </TouchableHighlight>         
                        <Text style={{color:'white', fontSize:21, marginLeft:10}}>
                            Auditorias Pendientes
                        </Text>
                    </View>
                </View>
                </View>

                    <Content padder style={{backgroundColor: '#f6f6f6'}}>
                        <EstadoCuenta/>

                         <View>

                       
                        <Calendar
                          current={'2020-05-01'}
                          minDate={'2020-03-01'}
                          onDayPress={(day) => {this.mostrarDetalle(day)}}
                          onDayLongPress={(day) => {console.log('selected day', day)}}
                          monthFormat={'MMMM yyyy'}
                          //onMonthChange={(month) => {console.log('month changed', month)}}
                          firstDay={1}
                          onPressArrowLeft={substractMonth => substractMonth()}
                          onPressArrowRight={addMonth => addMonth()}
                          markedDates={this.state.marked}
                          markingType={'period'}
                          theme={{
                            backgroundColor: '#ffffff',
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#b6c1cd',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: '#1ED695',
                            monthTextColor: '#1ED695',
                            indicatorColor: '#1ED695',
                            textDayFontFamily: 'monospace',
                            textMonthFontFamily: 'monospace',
                            textDayHeaderFontFamily: 'monospace',
                            textDayFontWeight: '300',
                            textMonthFontWeight: 'bold',
                            textDayHeaderFontWeight: '300',
                            textDayFontSize: 16,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 16
                          }}
                        />
                        
                        </View>


                        <View>
                    {this.state.presentarDetalle ? (

                      <View>

                      
                        {this.state.fechasDetalle.map((r,i) => 



                        <View style={{flexDirection:'column',marginTop:10,}}>

                        
                        

                      

                        <View style={{flexDirection:'row',marginTop:'10%',}}>


                       

                         
                            <View style={{flexDirection:'column',backgroundColor:colores[r.pos],borderColor: '#d6d7da',borderRadius: 2,borderWidth: 1,alignItems:'center',width:'23%'}}>
                                <View style={{marginTop:'5%'}}>
                                  <Text style={styles.datos}>
                                    INICIA
                                  </Text>
                                  </View>
                                  <View>
                                    <Text key={r.id_fechas} style={styles.valores}>{r.hora_inicio}</Text>
                                  </View>
                                
                              
                                <View style={{marginTop:'5%'}}>
                                  <Text style={{fontSize:14}}>
                                    FINALIZA
                                  </Text>
                                  </View>
                                  <View style={{marginBottom:'15%',}}>
                                    <Text key={r.id_fechas} style={styles.valores}>{r.hora_fin}</Text>
                                  </View>
                            </View>

                            <View style={{backgroundColor:'white',borderColor: '#d6d7da',borderRadius: 2,borderWidth: 1,alignItems:'center',width:'70%',marginLeft:'5%'}}>
                          
                              <Text key={r.id_fechas} style={styles.descrip}>
                               
                                {r.detalle_auditoria}
                              </Text>
                            </View>
                          
                        </View>

                        </View>
                        )}

                        </View>



                    ): null}

                    </View>
                       
                        
                        
                       
                        
                     
                    </Content>

                    <View style={{height:62, flexDirection: 'row',width:'100%'}}>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriasVacia')} style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/autoria.png?raw=true'}} 
                            style={{height: 35, width: 25}}/>
                    <Text style={{color: '#636363', fontSize: 9}}>Auditorias</Text>
                    </View>
                </TouchableHighlight>

                 <TouchableHighlight onPress={()=>alert('en proceso')} style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2014.png'}}
                                   style= {{height: 35,width: 28}}>
                            </Image>
               <Text style={{color: '#636363',fontSize: 9}}>Accion Correctiva</Text></View>
                </TouchableHighlight>    

                 <TouchableHighlight onPress={()=>this.props.navigation.navigate('Main')} style={{marginLeft:'2%',marginRight:'2%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'8%'}}>
                           <MaterialCommunityIcons name="home-circle" size={50} />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight  onPress={()=>this.props.navigation.navigate('CalendarioVacio')}style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/calendario-active.png?raw=true'}}
                                   style= {{height: 35,width: 32}}>
                            </Image>
                    <Text style={{color: '#636363', fontSize: 9}}>Calendario</Text></View>
                </TouchableHighlight>
          
                <TouchableHighlight onPress={()=>alert('en proceso')} style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2015.png'}}
                                   style= {{height: 35,width: 34}}>
                            </Image>
               <Text style={{color: '#636363', fontSize: 9}}>No Conformidad</Text></View>
                </TouchableHighlight>
               
                </View>


            </View>
          )
      }
}


const styles = StyleSheet.create({

  valores:{
    color:'green',
    fontSize:14,
    alignItems:'center'
  },
  descrip:{
    fontSize:14,
    alignItems:'center',
    padding:2,
    width:'100%',
    marginLeft:'1%'
    
  }
  });
