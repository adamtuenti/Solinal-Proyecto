import React, { Component } from 'react';
import { Image ,TouchableOpacity} from 'react-native';
import { Root,ActionSheet,Container, Title, Content, Card, CardItem, Footer, Button, Left, Right, Body,  Font,Input,DatePicker } from 'native-base';
import { Icon ,Divider} from 'react-native-elements'
import {StyleSheet,TouchableHighlight,Text,View,Dimensions} from 'react-native';
//import DatePicker from 'react-native-datepicker';
import {RNCamera} from 'react-native-camera'
//import RNFetchBlob from 'rn-fetch-blob'
import AuditoriasProgramadas from '../../shared/AuditoriasProgramadas';

//import { Calendar } from 'react-native-calendario';
import {MaterialIcons,FontAwesome,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';
//import TimePicker from "react-native-24h-timepicker";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";



import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'




import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as Expo from 'expo';
import Toolbar from './../../shared/toolbar.component';



export default class Crear extends Component {

  camera = null;

   

      constructor(props){
        
        
    super(props)
        //set value in state for initial date
        global.fotoEvidencia=''
        global.urifirma=''; 
         this.state = {
           dateInicio:'',
           dateFin:'',
           array:[0,0,0],
           subarray:[[10,0],[8,0],[0]],
           cont:0,
           paginaAnterior: 'Main',//this.props.navigation.state.params.paginaActual,
           time: '09:00',
           timeFin: '09:10',
           norma: 'norma',//this.props.navigation.state.params.norma,
            chosenDate: new Date(), 
            pressStatus: false, 
            selected: null, 
            SelectedButton: '' ,
         
            loading: false,
           // signature:this.props.navigation.state.params.signature,






            isVisibleFI:false,
            isVisibleFF:false,
            isVisibleHI:false,
            isVisibleHF:false,
    
            fechaInicio:moment().format('DD-MM-YYYY'),
            fechaFin:moment().format('DD-MM-YYYY'),
            horaInicio:moment().format('HH:mm'),
            horaFin:moment().format('HH:mm'),


            captures: [],
           flashMode: Camera.Constants.FlashMode.off,
           capturing: null,
           cameraType: Camera.Constants.Type.back,
           hasCameraPermission: null,
           image: null,

     

            loading: false,
            loading1: false,
          equipo: [],
          mensajeError:'',
          urlEquipo: 'http://accountsolinal.pythonanywhere.com/api/mostrarEquipo/'+idEquipoGlobal,
          vacio:[],

          user:[],
          arr:[],
          arrId:[],
          
          listo:false,

          lista:[],
          lista1:[],
          lista2:[],

          valoresMain:[],
          valoresMenu:[],
          valoresSubMenu:[],
          clickRespuestas:[],
          clickColorBoton:[],

          textButtonCamera:'Guardar',
          colorButtonCamera:'orange',

          nombreNorma: this.props.navigation.state.params.nombreNorma,
          idNorma: this.props.navigation.state.params.idNorma,

          
          
          datosAuditoria:['','',[],'','','','',''],
          organizacion:'',
          direccion:'',
          alcance:'',
          auditado:'',
          auditor:'',
          mensajeError:'',
          contadorRespuestas:0,
          totalPreguntas:0,
          listPreguntas:[],
        

        equipo: [],
          mensajeError:'',
         

        iconName : 'down', 
        iconStateValue:false, 
        comentarioNota:'',
        collapsed:false,
        botonGuardar: 'orange',
        botonGuardarTexto: 'Guardar',
        botonGuardarEstado: false
    
        };
    }

    iconState(){
      let iconName = (this.state.iconStateValue)? "down":"up"; 
                          this.setState({
                              iconStateValue:!this.state.iconStateValue, 
                              iconName:iconName, 
                          });
    }

      fotoGuardada(){
        let botonGuardar = (this.state.botonGuardarEstado)? "orange":"green";
        let botonGuardarTexto = (this.state.botonGuardarEstado) ? "Guardar":"Guardado";
                    this.setState({
                      botonGuardarEstado:!this.state.botonGuardarEstado,
                      botonGuardar:botonGuardar,
                      botonGuardarTexto:botonGuardarTexto,
                    })
      }


    componentDidMount = () => {
       
        this.getLista();
        this.getMiembrosEquipo();
      //  this.getLista1();
        //this.getMiembrosEquipo();
       
      }


       getMiembrosEquipo = () => {
        this.setState({loading:true})
        fetch(this.state.urlEquipo)
        .then(res=>res.json())
        .then(res=>{ 
           // console.log(res);
            this.setState({
            equipo: res,
            urlEquipo: res.next,
            loading: false,    
            })
        })
    }


    getLista=()=>{
      

       this.setState({loading1:true}),
            fetch('http://accountsolinal.pythonanywhere.com/api/mainMenu/'+this.state.idNorma)
            .then(res=>res.json())
            .then(res=>{ 
              //  console.log(res);
                this.setState({
                lista: res,
               // urlEquipo: res.next,
                loading1: false,    
                })

                this.getLista1()
                //this.state.arrId.push(res)
            })

    }

    getLista1=()=>{
     

       this.setState({loading1:true}),
            fetch('http://accountsolinal.pythonanywhere.com/api/subMenu/'+this.state.idNorma)
            .then(res=>res.json())
            .then(res=>{ 
                //console.log(res);
                this.setState({
                lista1: res,
               // urlEquipo: res.next,
                loading1: false,    
                })
               // console.log(this.state.lista1)
                this.getLista2()
               
                //this.state.arrId.push(res)

            })


    }


      getLista2=()=>{
     

       this.setState({loading1:true}),
            fetch('http://accountsolinal.pythonanywhere.com/api/subMenuDos/'+this.state.idNorma)
            .then(res=>res.json())
            .then(res=>{ 
               ////console.log(res);
                this.setState({
                lista2: res,
               // urlEquipo: res.next,
                loading1: false,    
                })
                this.funcionLista()
               
                //this.state.arrId.push(res)

            })


    }
    ///submenu:[['sub menu1','submenu2'],['hola','hola1']]
    funcionLista=()=>{

      const lista1 = this.state.lista1;
      const lista = this.state.lista;
      const lista2 = this.state.lista2;
      const valoresMain = this.state.valoresMain;
      const valoresMenu = this.state.valoresMenu;

      const clickRespuestas = this.state.clickRespuestas;
      const clickColorBoton = this.state.clickColorBoton;
      const listPreguntas = this.state.listPreguntas;
      
      //lista3

      
       //alert(this.state.lista)
      lista.forEach(function(elemento){
        elemento.menu=[]
        elemento.submenu=[]
        valoresMain.push(0)
        const temporalMenu = []
        const temporalRespuestas = []
        const temporalBotonColor = []
        //item=[]
      //  console.log(elemento)
        lista1.forEach(function(element1){
          if(elemento.id_mainmenu==element1.key_mainmenu){
            elemento.menu.push(element1.detalle_submenu)
            temporalMenu.push(0)
            const temp = []
            const temporalSubRespuestas=[] 
            const temporalSubBotonColor=[] 
            lista2.forEach(function(element2){
              
             // this.state.totalPregunta=this.state.y+1
            // console.log(element1)
              if(element1.id_submenu==element2.key_submenu){
                listPreguntas.push(0)
                temp.push([element2.detalle_submenud,'','https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/sinevidencia.png?raw=true','No hay comentario'])
                temporalSubRespuestas.push(true)
                temporalSubBotonColor.push(['','',''])

                //temp1=[]
                //foreach
                 //valido
                 //temp1.push elemento
                 //}
                 ////push.temp1
              }    
            })
            elemento.submenu.push(temp) 
            temporalRespuestas.push(temporalSubRespuestas)   
            temporalBotonColor.push(temporalSubBotonColor)       
          }
        })
        
        valoresMenu.push(temporalMenu)
        clickRespuestas.push(temporalRespuestas)
        clickColorBoton.push(temporalBotonColor)
        })

    this.setState({totalPreguntas:listPreguntas.length})

    console.log(this.state.lista)
  // alert(this.state.totalPreguntas)
   

       

        


    }





  

      

 









  agregarComentario=(iterator,n,p,boton)=>{

    
     let clickColorBoton= this.state.clickColorBoton
      this.state.clickColorBoton[iterator][n][p][2]=boton

      this.setState({clickColorBoton:clickColorBoton})
      
      

    this.state.lista[iterator].submenu[n][p][3]=this.state.comentarioNota
  }




       


      
  agregarEvidencia=(main,menu,submenu1,boton)=>{
   

     let clickColorBoton= this.state.clickColorBoton
      this.state.clickColorBoton[main][menu][submenu1][1]=boton

      this.setState({clickColorBoton:clickColorBoton})
      
      this.state.lista[main].submenu[menu][submenu1][2]=fotoEvidencia

  

  }
    
 
    
    agregarElemento=(main,menu,submenu1,respuesta,boton)=>{
      let clickColorBoton= this.state.clickColorBoton
      this.state.clickColorBoton[main][menu][submenu1][0]=boton

      this.setState({clickColorBoton:clickColorBoton})
    

      
      
      this.state.lista[main].submenu[menu][submenu1][1]=respuesta
      //console.log(this.state.lista[main].submenu[menu][submenu1][1])

      // this.state.subarray[0][0]=this.state.subarray[0][0]+1
      // console.log(this.state.subarray)
      
      if(this.state.clickRespuestas[main][menu][submenu1]){
        this.state.contadorRespuestas=this.state.contadorRespuestas+1

        let valoresMenu = this.state.valoresMenu
        if(valoresMenu[main][menu]+1<=this.state.lista[main].submenu[menu].length){
          this.state.clickRespuestas[main][menu][submenu1]=false
          valoresMenu[main][menu]=valoresMenu[main][menu]+1
          if(valoresMenu[main][menu]==this.state.lista[main].submenu[menu].length){
            let valoresMain = this.state.valoresMain;
            
            valoresMain[main]=valoresMain[main]+1
            this.setState({valoresMain:valoresMain})

          }
        }

        this.setState({valoresMenu:valoresMenu})

      }
      
     // else{
       // alert('ya aplastaste')
      //}
      

     

      
       // console.log(this.state.lista)
    
      
      //variable.respuesta = respuesta

    }

    
  showDatePickerHI ()  {
     
    this.setState({
            isVisibleHI:true
        })
  };
 
 hideDatePickerHI = () => {
     // console.log("A date has been picked: ", moment(date).format('MMMM, Do YYYY HH:mm'));
    this.setState({
            isVisibleHI:false
        })
  };
 
  handleConfirmHI = (date) => {
    this.setState({horaInicio:moment(date).format('HH:mm')})
    this.hideDatePickerHI();
  };

  showDatePickerHF ()  {
    
    this.setState({
            isVisibleHF:true
        })
  };
 
 hideDatePickerHF = () => {
     // console.log("A date has been picked: ", moment(date).format('MMMM, Do YYYY HH:mm'));
    this.setState({
            isVisibleHF:false
        })
  };
 
  handleConfirmHF = (date) => {
    this.setState({horaFin:moment(date).format('HH:mm')})
    this.hideDatePickerHF();
  };


  showDatePickerFI ()  {
     
    this.setState({
            isVisibleFI:true
        })
  };
 
 hideDatePickerFI = () => {
     // console.log("A date has been picked: ", moment(date).format('MMMM, Do YYYY HH:mm'));
    this.setState({
            isVisibleFI:false
        })
  };
 
  handleConfirmFI = (date) => {
    this.setState({fechaInicio:moment(date).format('DD-MM-YYYY')})
    this.hideDatePickerFI();
  };

  showDatePickerFF ()  {
     
    this.setState({
            isVisibleFF:true
        })
  };
 
 hideDatePickerFF = () => {
     // console.log("A date has been picked: ", moment(date).format('MMMM, Do YYYY HH:mm'));
    this.setState({
            isVisibleFF:false
        })
  };
 
  handleConfirmFF = (date) => {
    this.setState({fechaFin:moment(date).format('DD-MM-YYYY')})
    this.hideDatePickerFF();
  };


    


  

  

 

  



  onClickAddImage(main,menu,submenu1){

    //this.state.lista[main].submenu[menu][submenu1][2]=urifoto

    const BUTTONS = ['Tomar Foto','Añadir desde Galería','Cancelar'];
    ActionSheet.show(
      { options: BUTTONS,
        cancelButtonIndex: 2,
        title: 'Seleccione una opción'
      },
      buttonIndex => {
        switch(buttonIndex){
          case 0:
            this.props.navigation.navigate('Camara');
            //console.log('a')
           // this.state.lista[main].submenu[menu][submenu1][2]=fotoEvidencia
            
            //console.log('foto')
            break;
          case 1:
            
            console.log('galeria')
            this.props.navigation.navigate('Galeria');
            
            break;
          default:
            break;
        }
      }
    )
  }


  finalizarAuditoria(){
     //this.props.navigation.navigate('AuditoriaFinalizada',{lista:this.state.lista,datosAuditoria:this.state.datosAuditoria})

    if(this.state.totalPreguntas==this.state.contadorRespuestas){

       if(urifirma!=''){
      this.props.navigation.navigate('AuditoriaFinalizada',{lista:this.state.lista,datosAuditoria:this.state.datosAuditoria})

    }
    else{
      alert('firma primero')
      //this.props.navigation.navigate('AuditoriaFinalizada',{lista:this.state.lista})
    }

    }
    else{
      alert('responda todas las preguntas')
      console.log('-')
      console.log(this.state.totalPreguntas)
    }
   
    
  }


  inicarAuditoria(){

         const{organizacion,direccion,alcance}=this.state;

        if ( organizacion === ''||direccion==''||alcance=='') { this.setState({mensajeError:'LLene todos los campos!'}); alert('llene los datos personales primero')}

         else{ 

           let datosAuditoria = this.state.datosAuditoria;

           datosAuditoria[0]=this.state.nombreNorma

           datosAuditoria[1]='Adan Navarrete'
           //datosAuditoria[2]=auditado
           datosAuditoria[3]='15/10/2020'
           datosAuditoria[4]='15/10/2020'
           datosAuditoria[5]=organizacion
           datosAuditoria[6]=direccion
           datosAuditoria[7]=alcance
         
      


     
      this.setState({datosAuditoria:datosAuditoria})
     // console.log(this.state.datosAuditoria)
           
           this.setState({listo:true})

    }
    
  }

  agregarIntegrante(integrante){
    if(this.state.datosAuditoria[2].includes(integrante) == false){
     
      this.state.datosAuditoria[2].push(integrante)
      
    }
    else{
      
      alert('ya esta')
      
    }
  }









      render(){
        //var array = [0,10,5];
        const arrayApi = this.state.api1
        var a = 'Hotel'
       
        var contador = 0;
          return(

              
              <View style={{height:Dimensions.get('window').height,flex:1,marginTop:25}}>
              
              <Root>

              <View  style={{flexDirection:'row',backgroundColor:'#1ED695',height:55,alignContent:'center'}}>
                <View style={{marginTop:5,flexDirection:'row',}}>
                    <View style={{width:'100%',flexDirection: 'row',alignItems:'center',marginLeft:10}}>
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('Main')}>       
                        <MaterialIcons name="arrow-back" size={32} color="white" />
                        </TouchableHighlight>         
                        <Text style={{color:'white', fontSize:21, marginLeft:10}}>
                            Auditorias
                        </Text>
                    </View>
                </View>
                </View>

             
       


                    <Content padder style={{backgroundColor: '#f6f6f6'}}>
                    <View>


                        
                    <View style = {{ backgroundColor: '#f6f6f6', borderBottomColor:2,width:'90%',alignItems:'center',marginLeft:'5%'}}>
                        
                            <Text style={styles.input}> {this.state.nombreNorma} </Text>
                        
                            <Input onChangeText={organizacion => this.setState({organizacion })} style={styles.input} placeholder="Organización" />
                        
                            <Input onChangeText={direccion => this.setState({direccion })} style={styles.input} placeholder="Dirección" />
                       
                       
                       
                            <Input onChangeText={alcance => this.setState({alcance })} style={styles.input} placeholder="Alcance de la auditoría" />
                       
                           
      <View  style={{flexDirection:'row',alignItems:'center',height: 30,marginTop:'1%', borderBottomColor: '#1ed796', borderBottomWidth: 1, paddingRight: 10, width: '100%', padding:5, fontSize: 14,}}> 
      
      <View >
        <Text style={{marginLeft:'2.5%'}}>Nombres de los auditados</Text>
        </View>
        <View style={{flexDirection:'row-reverse',flex:1,marginRight:'5%'}}>  
       
        <AntDesign onPress={()=>{this.iconState()}} name={this.state.iconName} size={30} color={'#1ED695'}/>
      
      </View>
       
      </View>

      <View>
       
                    {this.state.iconStateValue ? (
                      <View style={{width:'100%'}}>
     
  
    {this.state.equipo.map((integrante,n)=>(
      <View style={{backgroundColor:'#D0F5A9',flexDirection:'row',alignItems:'center',width:'100%',borderBottomColor: 'black',borderBottomWidth: 1}}>
      <View >
      <Text onPress={()=>{console.log(this.state.datosAuditoria)}}style={{marginLeft:'10%'}}>{integrante.nombreIntegrante} {integrante.apellidoIntegrante}</Text>
      </View>
      <View style={{flexDirection:'row-reverse',flex:1,marginLeft:'2.5%'}}>
      <MaterialIcons name={'group-add'} size={25} onPress={()=>{this.agregarIntegrante(integrante.nombreIntegrante+' '+integrante.apellidoIntegrante)}}/>
      </View>
      
      </View>

    ))

    }
    </View>
    ) : null}
</View>
    
                            
                           
                        
                        
                           
                    </View>

                    <View style={{flexDirection:'column'}}>

                    <View style = {{ backgroundColor: '#f6f6f6', borderBottomColor:2,width:'90%',alignItems:'center',marginLeft:'5%',marginTop:'1%'}}>
                    <Text style={styles.input}>Fecha de la auditoria</Text>
                    </View>


                      <View style={styles.container}>
                        

                        


                        <View style={{flexDirection:'column',width:'50%',marginBottom:10,marginTop:5}}>

                        <View style={{alignContent:'center',alignItems:'center'}}>
                        <Text>Fecha y hora de inicio</Text>
                        </View>


                        <View style={{flexDirection:'row',marginTop:11}}>


                        <View style={{marginLeft:2,  alignItems:'center',backgroundColor:'white',borderRadius: 5,padding:5, borderWidth: 1,borderColor: '#d6d7da',width:'55%'}}>

                        
                        <TouchableHighlight title="Show Date Picker" onPress={()=>this.showDatePickerFI()}><Text>{this.state.fechaInicio}</Text></TouchableHighlight>
                        
                        <DateTimePickerModal
                          isVisible={this.state.isVisibleFI}
                          mode="date"
                          onConfirm={this.handleConfirmFI}
                          onCancel={this.hideDatePickerFI}
                          is24Hour={true}
                        />
   
                           

                        </View>

                                                    
                           
                                <View style={{marginLeft:2,  alignItems:'center',backgroundColor:'white',borderRadius: 5,padding:5, borderWidth: 1,borderColor: '#d6d7da',width:'38%'}}>
                                <TouchableHighlight title="Show Date Picker" onPress={()=>this.showDatePickerHI()}><Text>{this.state.horaInicio}</Text></TouchableHighlight>
                        
                                <DateTimePickerModal
                                  isVisible={this.state.isVisibleHI}
                                  mode="time"
                                  onConfirm={this.handleConfirmHI}
                                  onCancel={this.hideDatePickerHI}
                                  is24Hour={true}
                                />

                                </View>


                            </View>
                        </View>







                    

                    <View style={{flexDirection:'column',width:'50%',marginBottom:10,marginTop:5}}>

                        <View style={{alignContent:'center',alignItems:'center'}}>
                        <Text >Fecha y hora de cierre</Text>
                        </View>


                        <View style={{flexDirection:'row',marginTop:11,alignItems:'center'}}>

                        <View style={{marginLeft:2,  alignItems:'center',backgroundColor:'white',borderRadius: 5,padding:5, borderWidth: 1,borderColor: '#d6d7da',width:'55%'}}>

                            <TouchableHighlight title="Show Date Picker" onPress={()=>this.showDatePickerFF()}><Text>{this.state.fechaFin}</Text></TouchableHighlight>
                        
                                <DateTimePickerModal
                                  isVisible={this.state.isVisibleFF}
                                  mode="date"
                                  onConfirm={this.handleConfirmFF}
                                  onCancel={this.hideDatePickerFF}
                                  is24Hour={true}
                                />

                        </View>

                                                    
                            <View>
                            
                                

                                </View>
                                <View style={{marginLeft:2,  alignItems:'center',backgroundColor:'white',borderRadius: 5,padding:5, borderWidth: 1,borderColor: '#d6d7da',width:'38%'}}>
                                <TouchableHighlight title="Show Date Picker" onPress={()=>this.showDatePickerHF()}><Text>{this.state.horaFin}</Text></TouchableHighlight>
                        
                                <DateTimePickerModal
                                  isVisible={this.state.isVisibleHF}
                                  mode="time"
                                  onConfirm={this.handleConfirmHF}
                                  onCancel={this.hideDatePickerHF}
                                  is24Hour={true}
                                />
                                </View>

                                
                            </View>

                           
                            
                        </View>



                    </View>

                    </View>



                  


        


                      
                        </View>

                    


                  

                     <View style={{marginTop:15,alignItems:'center'}}>
                     <TouchableHighlight style={styles.botonFirma} onPress={()=>this.inicarAuditoria()}>
                     <View>
                    <Text style={{fontSize:15}}>Iniciar Auditoria</Text>
                    </View>
                    </TouchableHighlight>
                    </View>

                    <View>
                    {this.state.listo ? (



                             <View style={styles.colapse}>
                        {this.state.lista.map((elemento,iterator)=>(

                          <Collapse>
                            <CollapseHeader>

                          <View style={styles.titulo}>

                          <View style={{width:'85%'}}>

                          <Text style={styles.tituloLetra}>{elemento.detalle_mainmenu} </Text>
                          </View>
                          
                          <View style={{flexDirection:'column',alignItems:'flex-end',marginLeft:'7%'}}>
                                <View>
                                  <Text>{this.state.valoresMain[iterator]}/{this.state.valoresMenu[iterator].length}</Text>
                                </View>
                                <View>
                                  <Text>{Number((this.state.valoresMain[iterator]/this.state.valoresMenu[iterator].length).toFixed(1))*100}%</Text>

                              
                                </View>
                              </View>


                          </View>

                           </CollapseHeader>
                        <CollapseBody>


                          <View>

                          {elemento.menu.map((a,n)=>(

                             <Collapse>
                                <CollapseHeader>

                            <View style={styles.menu}>

                            <View style={{width:'85%'}}>

                             <Text style={styles.menuLetra}>{a} </Text>
                            </View>

                            <View style={{flexDirection:'column',alignItems:'flex-end',marginLeft:'5%'}}>
                                <View>
                                  <Text>{this.state.valoresMenu[iterator][n]}/{elemento.submenu[n].length}</Text>
                                </View>
                                <View>
                                  <Text>{Number((this.state.valoresMenu[iterator][n]/elemento.submenu[n].length).toFixed(1))*100}%</Text>
                                </View>
                              </View>


                            
                             
                             </View>

                             
                                </CollapseHeader>

                                  <CollapseBody>
                                  <View>
                             
                             {elemento.submenu[n].map((m,p)=>(

                               

                               <View style={styles.submenu}>

                               <Text style={styles.submenuLetra}>{m[0]}</Text>

                               

                  

                                        <View style={{flexDirection:'row'}}>


                               <TouchableHighlight style={{backgroundColor: (this.state.clickColorBoton[iterator][n][p][0] === p+'1' ? 'green' : 'grey'),alignItems: 'center',padding: 10,width:'30%',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',marginLeft:7}} onPress={()=>this.agregarElemento(iterator,n,p,'Si',p+'1')}>
                               <View>
                               <Text>Si</Text>
                               </View>
                               </TouchableHighlight >
                                <TouchableHighlight style={{backgroundColor: (this.state.clickColorBoton[iterator][n][p][0] === p+'2' ? 'red' : 'grey'),alignItems: 'center',padding: 10,width:'30%',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',marginLeft:7}} onPress={()=>this.agregarElemento(iterator,n,p,'No',p+'2')}>
                               <View>
                               <Text>No</Text>
                               </View>
                               </TouchableHighlight>
                                <TouchableHighlight style={{backgroundColor: (this.state.clickColorBoton[iterator][n][p][0] === p+'3' ? 'orange' : 'grey'),alignItems: 'center',padding: 10,width:'30%',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',marginLeft:7}} onPress={()=>this.agregarElemento(iterator,n,p,'N/A',p+'3')}>
                               <View>
                               <Text>N/A</Text>
                               </View>
                               </TouchableHighlight>


                               </View>
                                                                   <View style={{marginTop:5,marginBottom:7,marginLeft:5,flexDirection:'row'}}>
                                                                        <View>
                                                                        <Collapse>
                                                                            <CollapseHeader>

                                                                            <View style={{flexDirection:'row',alignItems: 'center',width:'100%'}}>
                                                                                <View style={{flexDirection:'row',alignItems: 'center',}}>
                                                                                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/nota.png?raw=true'}} 
                                                                                        style={{height: 35, 
                                                                                                    width: 35,
                                                                                                    marginLeft:7
                                                                                                    }}/>
                                                                                <Text onPress={()=>console.log(this.state.lista[iterator].submenu[n][p][2])} style={{fontSize:12,marginLeft:5,marginTop:2}}>Agregar nota</Text>
                                                                                </View>

                                                                                
                                                                            </View>
                                                                            
                                                                            </CollapseHeader>
                                                                            <CollapseBody>
                                                                            <View style={{flexDirection:'column',marginTop:5,backgroundColor:'#F5F5F5', alignItems: 'center',width:'100%'}}>
                                                                                <View style={{alignItems: 'center',width:'100%'}}>
                                                                                <Input numberOfLines={4}  onChangeText={comentarioNota => this.setState({ comentarioNota })} style={styles.input} placeholder="Escriba su nota" />
                                                                                </View>

                                                                                <View style={{flexDirection:'row-reverse',marginTop:2, marginBottom:10,marginLeft:10 }}>
                                                                                <TouchableHighlight onPress={()=>{this.agregarComentario(iterator,n,p,p)}}style={{ height:30, width:75,backgroundColor: (this.state.clickColorBoton[iterator][n][p][2] === p ? '#35E119' : 'orange'),borderRadius: 4,alignItems: 'center',borderWidth: 1,borderColor: '#d6d7da',alignContent:'center',width:105,height:35}}>
                                                                                    <View>
                                                                                        <Text style={{fontSize:17,color:'white',alignItems:'center',marginTop:'3.5%'}}>{(this.state.clickColorBoton[iterator][n][p][2] === p ? 'Agregado' : 'Agregar')}</Text>
                                                                                    </View>
                                                                                </TouchableHighlight>
                                                                                </View>
                                                                            </View>
                                                                            </CollapseBody>
                                                                            </Collapse>
                                                                             <Collapse >
                                                                              <CollapseHeader>
                                                                               <View style={{flexDirection:'row',alignItems: 'center',marginLeft:5}}>
                                                                                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/evidencia.png?raw=true'}} 
                                                                                        style={{height: 35, 
                                                                                                    width: 35,
                                                                                                    marginLeft:7
                                                                                                    }}/>
                                                                                <Text onPress={() => this.onClickAddImage(iterator,n,p)} style={{fontSize:12,marginLeft:5,marginTop:2}}>Agregar evidencia</Text>
                                                                                </View>
                                                                                
                                                                              </CollapseHeader>
                                                                              <CollapseBody>
                                                                                <View style={{flexDirection:'row',alignItems: 'center',width:'100%'}}>                                                            
                                                                                     
                                                                                      <TouchableHighlight  onPress={()=>{this.agregarEvidencia(iterator,n,p,p)}} style={{ height:30, width:75,backgroundColor: (this.state.clickColorBoton[iterator][n][p][1] === p ? '#35E119' : 'orange'),borderRadius: 4,alignItems: 'center',borderWidth: 1,borderColor: '#d6d7da',alignContent:'center',width:105,height:35}}>
                                                                                    <View>

                                                                                      <Text style={{fontSize:17,color:'white',alignItems:'center',marginTop:'3.5%'}}>{(this.state.clickColorBoton[iterator][n][p][1] === p ? 'Guardado' : 'Guardar')}</Text>
                                                                                    </View>
                                                                                  </TouchableHighlight>
                                                                                  
                                                                                </View>
                                                                              </CollapseBody>
                                                                            </Collapse>
                                                                          </View>
                                                                       
                                                                        </View>
                               </View>

                                   
                              


                          



                             ))


                           

                             }
                                                                      
                                                                </View>

                                                    </CollapseBody>
                                                </Collapse>
                                               




                   

                          ))



                          }
</View>

                           
                        </CollapseBody>
                    </Collapse>
                            ))}

                           </View>



            
                      
          ) : null}
</View>
                    



                       

                      
                      















                     
                 


              <View style={{alignItems:'center',marginTop:'5%'}}>
              <Button onPress={()=>this.props.navigation.navigate('FirmaAuditor')} style={styles.botonFirma}>
              <View>
                  <Text style={{fontSize:15}}>Firmar</Text>
              </View>
          </Button>



              </View>

              <View style={{alignItems:'center',marginTop:'5%'}}>
              <Button onPress={()=>this.finalizarAuditoria()} style={styles.botonFirma}>
              <View>
                  <Text style={{fontSize:15}}>Finalizar</Text>
              </View>
          </Button>



              </View>
                    

                     
                    </Content>

                   <View style={{height:62, flexDirection: 'row',width:'100%'}}>
                <TouchableHighlight  style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://raw.githubusercontent.com/adamtuenti/Solinal-Proyecto/master/Solinal-Front/png/Recurso%2047.png'}} 
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

                <TouchableHighlight onPress={()=>this.props.navigation.navigate('CalendarioVacio')} style={{justifyContent:'center',width:'20%'}}>
                    <View style={{flexDirection:'column',alignItems: 'center',}}>
                            <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/calendario.png?raw=true'}}
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
</Root>
            </View>

          )
      }
}


const styles = StyleSheet.create({
  botonFirma:{
  
        alignItems: 'center',
        backgroundColor: '#35E119',
        padding: 10,
        width:142,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginTop:'1%'

  },
  datos:{
    fontSize:14
  }, input: {
        height: 30,
        borderBottomColor: '#1ed796',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        alignItems: 'center',
        margin:5, 
        padding:5,
        fontSize: 14,
    

    },
  valores:{
    color:'green',
    fontSize:14,
    alignItems:'center'
  },
  descrip:{
    fontSize:12,
    alignItems:'center',
    padding:5
    
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#CED3CE",
    
    marginBottom:15,
   
    flexDirection:'row',

        width: '100%',
        alignItems: 'center',
      
        padding:1,
        fontSize: 14,
    
        borderRadius:5,
 
  },
  text: {
    fontSize: 14,
    marginTop: 10
  },
  button: {
    backgroundColor: "#4EB151",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginVertical: 50
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  },
  button: {
    borderColor: "#000066",
    backgroundColor:'gray',
    borderWidth: 1,
    borderRadius: 10
},
buttonPressYes: {
    borderColor: "#000066",
    backgroundColor: "green",
    borderWidth: 1,
    borderRadius: 10
},
buttonPressNo: {
    borderColor: "#000066",
    backgroundColor: "red",
    borderWidth: 1,
    borderRadius: 10
},

buttonPressApply: {
    borderColor: "#000066",
    backgroundColor: "orange",
    borderWidth: 1,
    borderRadius: 10
},
    colapse:{
        width:'98%',
        marginLeft:'1%',
        marginTop:'10%',
        borderRadius:5,
    
        

    },
    titulo:{
        backgroundColor:'#B3F1C9',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        padding:6,
        flexDirection:'row',
        borderRadius:5,
        

    },tituloLetra:{
        fontSize:14,
        marginLeft:5

    },
    menu:{
        backgroundColor:'#FCF7B9',
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        padding:6,
        flexDirection:'row',
        flex:1,
          borderRadius:5,
      


    },menuLetra:{
        fontSize:14,
        marginLeft:5

    },
    submenu:{
        backgroundColor:'white',
        padding:6

    },submenuLetra:{
        fontSize:14,
        marginLeft:5

    },
    

    boton:{
         alignItems: 'center',
        backgroundColor: 'gray',
        padding: 10,
        width:'30%',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginLeft:7
   

    },
    botonYes:{
        alignItems: 'center',
       backgroundColor: '#35E119',
       padding: 10,
       width:'30%',
       borderRadius: 4,
       borderWidth: 1,
       borderColor: '#d6d7da',
       marginLeft:7
  

   },
   botonNo:{
    alignItems: 'center',
   backgroundColor: 'red',
   padding: 10,
   width:'30%',
   borderRadius: 4,
   borderWidth: 1,
   borderColor: '#d6d7da',
   marginLeft:7


},
botonApply:{
    alignItems: 'center',
   backgroundColor: 'orange',
   padding: 10,
   width:'30%',
   borderRadius: 4,
   borderWidth: 1,
   borderColor: '#d6d7da',
   marginLeft:7


},
    Textboton:{
        fontSize:14,
        alignItems:'center',
        alignContent:'center',
        

    },
    botonAgregarNota:{
      height:30,
      width:75,
      backgroundColor:'green',borderRadius: 4,
      alignItems: 'center',borderWidth: 1,borderColor: '#d6d7da',
      alignContent:'center'},
 
    inputDate: {
        height: 30,
        borderBottomColor: '#1ed796',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        alignItems: 'flex-start',
        margin:5, 
        padding:5,
        fontSize: 14,
        color: 'black'
    

    }
  
  
  });
