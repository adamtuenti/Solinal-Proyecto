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

          valoresMain:[],  //[0,0,0]
          
          valoresMenu:[],  //[ [0,0]   , [0,0]       ,      ]
          valoresSubMenu:[],
          clickRespuestas:[],
          clickColorBoton:[],

          textButtonCamera:'Guardar',
          colorButtonCamera:'orange',

          nombreNorma:this.props.navigation.state.params.nombreNorma,
          idNorma:this.props.navigation.state.params.idNorma,
          idPais:this.props.navigation.state.params.idPais,

          
          
          datosAuditoria:['','',[],'','','','',0],
          organizacion:'',
          direccion:'',
          alcance:'',
          auditado:'',
          auditor:'',
          mensajeError:'',
          contadorRespuestas:0,
          totalPreguntas:0,
          listPreguntas:[],
          datosAuditoriaPost: [moment().format('YYYY-MM-DD'),1,1,this.props.navigation.state.params.idPais,this.props.navigation.state.params.idNorma],//[moment().format('YYYY-MM-DD'),idUserGlobal,idEquipoGlobal,this.props.navigation.state.params.idPais,this.props.navigation.state.params.idNorma],
        

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
        var cont = 0
        elemento.menu=[]
        elemento.submenu=[]
        elemento.cantidad=[[],0,0] //contador promedio,num de items,total:contador/num *100
        
        valoresMain.push(0)
       
        const temporalMenu = []
        const temporalRespuestas = []
        const temporalBotonColor = []
        //item=[]
      //  console.log(elemento)

      var contMain = 0
        
        lista1.forEach(function(element1){
          
          
           
          if(elemento.id_mainmenu==element1.key_mainmenu){

            elemento.cantidad[1]= elemento.cantidad[1]+1
            elemento.cantidad[0].push(0)


            
            elemento.menu.push([element1.detalle_submenu,0]) //detalle menu, total % en las preguntas
           
            //temporalMenu.push([0,element1.detalle_submenu.length,0,0]) //aumentador, num de preguntas, respondidas, total
           
            const temp = []
            const temporalSubRespuestas=[] 
            const temporalSubBotonColor=[] 

             let cont1 = 0
            
            lista2.forEach(function(element2){
             
            
                
             
              
             // this.state.totalPregunta=this.state.y+1
            // console.log(element1)
            
              if(element1.id_submenu==element2.key_submenu){
               // console.log(temporalMenu[1])
               // console.log('..')
                cont1 = cont1 + 1
                
                listPreguntas.push(0)
               //  temporalMenu[cont1][1]=temporalMenu[cont1][1]+1
               
             
                 
                temp.push([element2.detalle_submenud,'','https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/sinevidencia.png?raw=true','No hay comentario'])
                temporalSubRespuestas.push([true,true,true])  //primera vez que se aplasta, segunda vez que se aplasta, N/A
                temporalSubBotonColor.push(['','','',''])

                 
                //temp1=[]
                //foreach
                 //valido
                 //temp1.push elemento
                 //}
                 ////push.temp1
                  
               
              } 
              
             
             
              
              
             
              
            })
            
       //   cont1 = cont1+1  
              
            elemento.submenu.push(temp) 
            temporalRespuestas.push(temporalSubRespuestas)   
            temporalBotonColor.push(temporalSubBotonColor)
            temporalMenu.push([0,temp.length,0,0]) //aumentador, num de preguntas, respondidas, total       
          }
        })

        cont = cont + 1
       // elemento.cantidad=valoresMain
        
        valoresMenu.push(temporalMenu)
        clickRespuestas.push(temporalRespuestas)
        clickColorBoton.push(temporalBotonColor)
        })

    this.setState({totalPreguntas:listPreguntas.length})
    console.log('-')
   console.log(lista)


        


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

      


      if(respuesta=='Si'){
           if(this.state.clickRespuestas[main][menu][submenu1][1]){
               let clickColorBoton= this.state.clickColorBoton
                  this.state.clickColorBoton[main][menu][submenu1][0]=boton
                  this.state.clickColorBoton[main][menu][submenu1][3]=1
                  this.setState({clickColorBoton:clickColorBoton})
            }
            if(this.state.clickRespuestas[main][menu][submenu1][0]){
                this.state.contadorRespuestas=this.state.contadorRespuestas+1

                let valoresMenu = this.state.valoresMenu
                    if(valoresMenu[main][menu][2]+1<=this.state.lista[main].submenu[menu].length){
                      this.state.clickRespuestas[main][menu][submenu1][0]=false
                      valoresMenu[main][menu][0]=valoresMenu[main][menu][0]+1
                      valoresMenu[main][menu][2]=valoresMenu[main][menu][2]+1
                      if(valoresMenu[main][menu][2]==this.state.lista[main].submenu[menu].length){
                        let valoresMain = this.state.valoresMain;
                        
                        valoresMain[main]=valoresMain[main]+1
                        this.setState({valoresMain:valoresMain})

                        let lista = this.state.lista;
                    
                        lista[main].cantidad[0][menu]=valoresMenu[main][menu][0]/valoresMenu[main][menu][1]
                        this.setState({lista:lista})

                      }
                    }

          this.setState({valoresMenu:valoresMenu})

          }

                                                        else{
                                                          //alert('hola')

                                                            if(this.state.clickRespuestas[main][menu][submenu1][1]){

                                                              let clickColorBoton= this.state.clickColorBoton
                                                              this.state.clickColorBoton[main][menu][submenu1][0]=boton
                                                              this.state.clickColorBoton[main][menu][submenu1][3]=1

                                                              this.setState({clickColorBoton:clickColorBoton})

                                                              let valoresMenu = this.state.valoresMenu

                                                                if(this.state.lista[main].submenu[menu][submenu1][1]=='No'){
                                                                this.state.lista[main].submenu[menu][submenu1][1]=respuesta
                                                                  valoresMenu[main][menu][0]=valoresMenu[main][menu][0]+1
                                                                  this.state.clickRespuestas[main][menu][submenu1][1]=false

                                                                  let valoresMain = this.state.valoresMain;

                                                                  if(valoresMain[main]==this.state.lista[main].cantidad[1]){

                                                                    let lista = this.state.lista;
                                                                    const arr = lista[main].cantidad[0]                                                
                                                                    var arrSum = 0
                                                                    arr.map((num,a)=>(arrSum=arrSum+num ))                
                                                                    lista[main].cantidad[2]=Number((arrSum/lista[main].cantidad[1]*100).toFixed(1))
                                                                    this.setState({lista:lista})
                                                                    }

                                                                  
                                                                }
                                                       
                                                              else if(this.state.lista[main].submenu[menu][submenu1][1]=='N/A'){
                                                                this.state.lista[main].submenu[menu][submenu1][1]=respuesta
                                                                alert(this.state.clickRespuestas[main][menu][submenu1][2])

                                                            

                                                                if(!this.state.clickRespuestas[main][menu][submenu1][2]){
                                                                
                                                                    alert('aqui esta')
                                                                      valoresMenu[main][menu][0]=valoresMenu[main][menu][0]+1
                                                                        this.state.clickRespuestas[main][menu][submenu1][1]=false

                                                                        let valoresMain = this.state.valoresMain;

                                                                  if(valoresMain[main]==this.state.lista[main].cantidad[1]){

                                                                    let lista = this.state.lista;
                                                                    const arr = lista[main].cantidad[0]                                                
                                                                    var arrSum = 0
                                                                    arr.map((num,a)=>(arrSum=arrSum+num ))                
                                                                    lista[main].cantidad[2]=Number((arrSum/lista[main].cantidad[1]*100).toFixed(1))
                                                                    this.setState({lista:lista})
                                                                    }
                                                                
                                                                    

                                                                }

                                                                else{
                                                                  alert(this.state.clickRespuestas[main][menu][submenu1][2])
                                                                  alert('hola aca')
                                                                
                                                                      valoresMenu[main][menu][0]=valoresMenu[main][menu][0]+1
                                                                  valoresMenu[main][menu][1]=valoresMenu[main][menu][1]+1

                                                                  let valoresMain = this.state.valoresMain;

                                                                  if(valoresMain[main]==this.state.lista[main].cantidad[1]){

                                                                    let lista = this.state.lista;
                                                                    const arr = lista[main].cantidad[0]                                                
                                                                    var arrSum = 0
                                                                    arr.map((num,a)=>(arrSum=arrSum+num ))                
                                                                    lista[main].cantidad[2]=Number((arrSum/lista[main].cantidad[1]*100).toFixed(1))
                                                                    this.setState({lista:lista})
                                                                    }
                                                                

                                                                }
                                                          
                                                        }
                                                        this.setState({valoresMenu:valoresMenu})
                                                         

                                                            }
                                                        }
      

            

          }



      
      else if(respuesta=='No'){
        if(this.state.clickRespuestas[main][menu][submenu1][1]){
               let clickColorBoton= this.state.clickColorBoton
              this.state.clickColorBoton[main][menu][submenu1][0]=boton
              this.state.clickColorBoton[main][menu][submenu1][3]=0

              this.setState({clickColorBoton:clickColorBoton})

        }
   

        if(this.state.clickRespuestas[main][menu][submenu1][0]){
        this.state.contadorRespuestas=this.state.contadorRespuestas+1


        

        let valoresMenu = this.state.valoresMenu
        if(valoresMenu[main][menu][2]+1<=this.state.lista[main].submenu[menu].length){
          this.state.clickRespuestas[main][menu][submenu1][0]=false
            valoresMenu[main][menu][2]=valoresMenu[main][menu][2]+1
         
          if(valoresMenu[main][menu][2]==this.state.lista[main].submenu[menu].length){
            let valoresMain = this.state.valoresMain;
            
            valoresMain[main]=valoresMain[main]+1
            this.setState({valoresMain:valoresMain})

            let lista = this.state.lista;
            
            lista[main].cantidad[0][menu]=valoresMenu[main][menu][0]/valoresMenu[main][menu][1]
            this.setState({lista:lista})

          }
        }

        this.setState({valoresMenu:valoresMenu})

      }

                                        
                                                        else{

                                                           if(this.state.clickRespuestas[main][menu][submenu1][1]){

                                                             let clickColorBoton= this.state.clickColorBoton
                                                          this.state.clickColorBoton[main][menu][submenu1][0]=boton
                                                          this.state.clickColorBoton[main][menu][submenu1][3]=0

                                                          this.setState({clickColorBoton:clickColorBoton})
          
                                                        let valoresMenu = this.state.valoresMenu
                      
                                                        if(this.state.lista[main].submenu[menu][submenu1][1]=='Si'){
                                                          this.state.lista[main].submenu[menu][submenu1][1]=respuesta
                                                          valoresMenu[main][menu][0]=valoresMenu[main][menu][0]-1
                                                           this.state.clickRespuestas[main][menu][submenu1][1]=false

                                                           let valoresMain = this.state.valoresMain;

                                                                  if(valoresMain[main]==this.state.lista[main].cantidad[1]){

                                                                    let lista = this.state.lista;
                                                                    const arr = lista[main].cantidad[0]                                                
                                                                    var arrSum = 0
                                                                    arr.map((num,a)=>(arrSum=arrSum+num ))                
                                                                    lista[main].cantidad[2]=Number((arrSum/lista[main].cantidad[1]*100).toFixed(1))
                                                                    this.setState({lista:lista})
                                                                    }

                                                        }
                                                       
                                                        else if(this.state.lista[main].submenu[menu][submenu1][1]=='N/A'){


                                                           if(this.state.clickRespuestas[main][menu][submenu1][2]){
                                                             this.state.lista[main].submenu[menu][submenu1][1]=respuesta
                                                            valoresMenu[main][menu][1]=valoresMenu[main][menu][1]+1
                      
                                                            this.state.clickRespuestas[main][menu][submenu1][1]=false

                                                            let valoresMain = this.state.valoresMain;

                                                                  if(valoresMain[main]==this.state.lista[main].cantidad[1]){

                                                                    let lista = this.state.lista;
                                                                    const arr = lista[main].cantidad[0]                                                
                                                                    var arrSum = 0
                                                                    arr.map((num,a)=>(arrSum=arrSum+num ))                
                                                                    lista[main].cantidad[2]=Number((arrSum/lista[main].cantidad[1]*100).toFixed(1))
                                                                    this.setState({lista:lista})
                                                                    }
                       
                                                          }else{
                                                             this.state.lista[main].submenu[menu][submenu1][1]=respuesta
                                                            //valoresMenu[main][menu][0]=valoresMenu[main][menu][0]-1
                                                           
                                                            this.state.clickRespuestas[main][menu][submenu1][1]=false

                                                            let valoresMain = this.state.valoresMain;

                                                                  if(valoresMain[main]==this.state.lista[main].cantidad[1]){

                                                                    let lista = this.state.lista;
                                                                    const arr = lista[main].cantidad[0]                                                
                                                                    var arrSum = 0
                                                                    arr.map((num,a)=>(arrSum=arrSum+num ))                
                                                                    lista[main].cantidad[2]=Number((arrSum/lista[main].cantidad[1]*100).toFixed(1))
                                                                    this.setState({lista:lista})
                                                                    }

                                                          }
                                                         
                                                           
                                
                                                          
                                                        }
                                                        this.setState({valoresMenu:valoresMenu})
                                                       

                                                           }
                                                        }
      




      }

       else if(respuesta=='N/A'){
           if(this.state.clickRespuestas[main][menu][submenu1][1]){
               let clickColorBoton= this.state.clickColorBoton
              this.state.clickColorBoton[main][menu][submenu1][0]=boton
              this.state.clickColorBoton[main][menu][submenu1][3]='-'

              this.setState({clickColorBoton:clickColorBoton})

        }


          if(this.state.clickRespuestas[main][menu][submenu1][0]){
        this.state.contadorRespuestas=this.state.contadorRespuestas+1


     


       let valoresMenu = this.state.valoresMenu
        if(valoresMenu[main][menu][2]+1<=this.state.lista[main].submenu[menu].length){
          this.state.clickRespuestas[main][menu][submenu1][0]=false
            valoresMenu[main][menu][2]=valoresMenu[main][menu][2]+1

            if(valoresMenu[main][menu][2]==this.state.lista[main].submenu[menu].length){
            let valoresMain = this.state.valoresMain;
            
            valoresMain[main]=valoresMain[main]+1

            this.setState({valoresMain:valoresMain})

            let lista = this.state.lista;
            
            lista[main].cantidad[0][menu]=valoresMenu[main][menu][0]/valoresMenu[main][menu][1]
            this.setState({lista:lista})



          }

             if(valoresMenu[main][menu][1]-1>0){

            valoresMenu[main][menu][1]=valoresMenu[main][menu][1]-1


             }
             else{
               this.state.clickRespuestas[main][menu][submenu1][2]=false
               
             }

         

          
         
        }

        this.setState({valoresMenu:valoresMenu})

      }

                                  else{
                                                          
                                                            if(this.state.clickRespuestas[main][menu][submenu1][1]){

                                                              let clickColorBoton= this.state.clickColorBoton
                                                          this.state.clickColorBoton[main][menu][submenu1][0]=boton
                                                          this.state.clickColorBoton[main][menu][submenu1][3]='-'

                                                          this.setState({clickColorBoton:clickColorBoton})
                    

                                                        let valoresMenu = this.state.valoresMenu
                                         

                                                        if(this.state.lista[main].submenu[menu][submenu1][1]=='Si'){
                                                     
                                                           this.state.lista[main].submenu[menu][submenu1][1]=respuesta
                                                          


                                                           if(valoresMenu[main][menu][1]-1>0){
                                                             valoresMenu[main][menu][1]=valoresMenu[main][menu][1]-1
                                                             valoresMenu[main][menu][0]=valoresMenu[main][menu][0]-1
                                                           this.state.clickRespuestas[main][menu][submenu1][1]=false

                                                           let valoresMain = this.state.valoresMain;

                                                                  if(valoresMain[main]==this.state.lista[main].cantidad[1]){

                                                                    let lista = this.state.lista;
                                                                    const arr = lista[main].cantidad[0]                                                
                                                                    var arrSum = 0
                                                                    arr.map((num,a)=>(arrSum=arrSum+num ))                
                                                                    lista[main].cantidad[2]=Number((arrSum/lista[main].cantidad[1]*100).toFixed(1))
                                                                    this.setState({lista:lista})
                                                                    }

                                                           }
                                                           else{
                                                             valoresMenu[main][menu][0]=valoresMenu[main][menu][0]-1
                                                             //valoresMenu[main][menu][1]=valoresMenu[main][menu][1]-1
                                                           this.state.clickRespuestas[main][menu][submenu1][1]=false
                                                           let valoresMain = this.state.valoresMain;

                                                                  if(valoresMain[main]==this.state.lista[main].cantidad[1]){

                                                                    let lista = this.state.lista;
                                                                    const arr = lista[main].cantidad[0]                                                
                                                                    var arrSum = 0
                                                                    arr.map((num,a)=>(arrSum=arrSum+num ))                
                                                                    lista[main].cantidad[2]=Number((arrSum/lista[main].cantidad[1]*100).toFixed(1))
                                                                    this.setState({lista:lista})
                                                                    }
                                                           }

                                                          
                                         
                                                          
                                                        }
                                                       
                                                        else if(this.state.lista[main].submenu[menu][submenu1][1]=='No'){
                                                           this.state.lista[main].submenu[menu][submenu1][1]=respuesta

                                                           

                                                           if(valoresMenu[main][menu][1]-1<1){
                                                              this.state.clickRespuestas[main][menu][submenu1][1]=false

                                                              let valoresMain = this.state.valoresMain;

                                                                  if(valoresMain[main]==this.state.lista[main].cantidad[1]){

                                                                    let lista = this.state.lista;
                                                                    const arr = lista[main].cantidad[0]                                                
                                                                    var arrSum = 0
                                                                    arr.map((num,a)=>(arrSum=arrSum+num ))                
                                                                    lista[main].cantidad[2]=Number((arrSum/lista[main].cantidad[1]*100).toFixed(1))
                                                                    this.setState({lista:lista})
                                                                    }

                                                           }
                                                           else{
                                                              valoresMenu[main][menu][1]=valoresMenu[main][menu][1]-1
                                                           this.state.clickRespuestas[main][menu][submenu1][1]=false

                                                           let valoresMain = this.state.valoresMain;

                                                                  if(valoresMain[main]==this.state.lista[main].cantidad[1]){

                                                                    let lista = this.state.lista;
                                                                    const arr = lista[main].cantidad[0]                                                
                                                                    var arrSum = 0
                                                                    arr.map((num,a)=>(arrSum=arrSum+num ))                
                                                                    lista[main].cantidad[2]=Number((arrSum/lista[main].cantidad[1]*100).toFixed(1))
                                                                    this.setState({lista:lista})
                                                                    }

                                                           }
                                                         
                                    
                                                          
                                                        }
                                                        this.setState({valoresMenu:valoresMenu})
                                                          

                                                       }
                                                        
                                                        }

     

      }

      if(this.state.clickRespuestas[main][menu][submenu1][1]){

       this.state.lista[main].submenu[menu][submenu1][1]=respuesta

      }

      let valoresMain = this.state.valoresMain;

       if(valoresMain[main]==this.state.lista[main].cantidad[1]){

         let lista = this.state.lista;
         console.log(lista)

         const arr = lista[main].cantidad[0]
         console.log(arr)

         var arrSum = 0
         arr.map((num,a)=>(
           arrSum=arrSum+num
         ))
         console.log(arrSum)
// arrSum([20, 10, 5, 10]) -> 45
            
            lista[main].cantidad[2]=Number((arrSum/lista[main].cantidad[1]*100).toFixed(1))
            this.setState({lista:lista})



      
      }


      
    


    }

    
 
 
 
  
 

  

 

  



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

      var valorCalculado = 0
      var numPreguntas = 0
      const clickColorBoton = this.state.clickColorBoton
      clickColorBoton.forEach(function(element){
        element.forEach(function(arr){
          arr.forEach(function(subarr){
            if(subarr[3]!='-'){
               numPreguntas = numPreguntas + 1
               if(subarr[3]==1){
                 valorCalculado=valorCalculado+1
               }

            }

          })

        })


      })

       console.log(this.state.clickColorBoton)

      let lista = this.state.lista;

        lista.map((elemento,a)=>{

          elemento.menu.map((elemento1,n)=>{
            
            lista[a].menu[n][1]=Number((this.state.valoresMenu[a][n][0]/this.state.valoresMenu[a][n][1]*100).toFixed(1))
          })
         

          
        })
        
     
        this.setState({lista:lista})

        console.log(this.state.lista)
  

      var calificacionTotal = Number((valorCalculado/numPreguntas*100).toFixed(1))
    
        let datosAuditoria = this.state.datosAuditoria;
        datosAuditoria[7]=calificacionTotal
     
        this.setState({datosAuditoria:datosAuditoria})


       






       if(urifirma!=''){
      this.props.navigation.navigate('AuditoriaFinalizada',{lista:this.state.lista,datosAuditoria:this.state.datosAuditoria,datosAuditoriaPost:this.state.datosAuditoriaPost})

    }
    else{
      alert('Debe firmar primero')
      //this.props.navigation.navigate('AuditoriaFinalizada',{lista:this.state.lista})
    }

    }
    else{
      alert('Responda todas las preguntas')
     
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
           datosAuditoria[3]=moment().format('YYYY-MM-DD')
          
           datosAuditoria[4]=organizacion
           datosAuditoria[5]=direccion
           datosAuditoria[6]=alcance
         
      


     
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
      
      alert('ya esta agregado!')
      
    }
  }









      render(){
        //var array = [0,10,5];
        const arrayApi = this.state.api1
    
       
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
      console.log(integrante),
      <View style={{backgroundColor:'#D0F5A9',flexDirection:'row',alignItems:'center',width:'100%',borderBottomColor: 'black',borderBottomWidth: 1}}>
      <View >
      <Text onPress={()=>{console.log(this.state.datosAuditoria)}}style={{marginLeft:'10%'}}>{integrante.nombre} {integrante.apellido}</Text>
      </View>
      <View style={{flexDirection:'row-reverse',flex:1,marginLeft:'2.5%'}}>
      <MaterialIcons name={'group-add'} size={25} onPress={()=>{this.agregarIntegrante(integrante.nombre+' '+integrante.apellido)}}/>
      </View>
      
      </View>

    ))

    }
    </View>
    ) : null}
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
                                  <Text>{this.state.valoresMain[iterator]}/{elemento.menu.length}</Text>
                                </View>

                                  {this.state.valoresMain[iterator]==elemento.menu.length ?(
                                <View>
                                  <Text>{elemento.cantidad[2]} %</Text>
                                </View>

                                ):null}

                      

                                
                                <View>
                                  
                                
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

                             <Text style={styles.menuLetra}>{a[0]} </Text>
                            </View>

                            <View style={{flexDirection:'column',alignItems:'flex-end',marginLeft:'5%'}}>
                                <View>
                                  <Text>{this.state.valoresMenu[iterator][n][2]}/{elemento.submenu[n].length}</Text>
                                </View>
                                {this.state.valoresMenu[iterator][n][2]==elemento.submenu[n].length ?(
                                <View>
                                  <Text>{Number((this.state.valoresMenu[iterator][n][0]/this.state.valoresMenu[iterator][n][1]).toFixed(1))*100}%</Text>
                                </View>

                                ):null}
                              </View>
                         
                             
                             </View>

                             
                                </CollapseHeader>

                                  <CollapseBody>
                                  <View>
                             
                             {elemento.submenu[n].map((m,p)=>(

                               

                               <View style={styles.submenu}>

                               <Text style={styles.submenuLetra}>{m[0]}</Text>

                               

                  

                                        <View style={{flexDirection:'row',marginTop:'5%'}}>


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
                                                                   <View style={{marginTop:'5%',marginBottom:7,marginLeft:5,flexDirection:'column'}}>
                                                                       
                                                                        <Collapse>
                                                                              <CollapseHeader>

                                                                                  <View style={{flexDirection:'row',alignItems: 'center',width:'100%'}}>
                                                                                      <View style={{flexDirection:'row',alignItems: 'center',}}>
                                                                                              <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/nota.png?raw=true'}}  style={{height: 35,width: 35,marginLeft:7}}/>                                                                                                      
                                                                                              <Text onPress={()=>console.log(this.state.lista[iterator].submenu[n][p][2])} style={{fontSize:12,marginLeft:5,marginTop:2}}>Agregar nota</Text>
                                                                                      </View>

                                                                                    
                                                                                  </View>
                                                                              
                                                                              </CollapseHeader>
                                                                                <CollapseBody>
                                                                                    <View style={{flexDirection:'column',marginTop:5,backgroundColor:'#F5F5F5', alignItems: 'center',width:300,borderRadius: 4,borderWidth: 1, borderColor: '#d6d7da'}}>
                                                                                        <View style={{width:'95%',alignItems:'center'}}>
                                                                                        <Input numberOfLines={4}  onChangeText={comentarioNota => this.setState({ comentarioNota })} style={styles.input} placeholder="Escriba su nota" />
                                                                                        </View>

                                                                                        <View style={{alignItems:'flex-end',marginTop:2, marginBottom:10,marginLeft:10,flex:1 }}>
                                                                                        <TouchableHighlight onPress={()=>{this.agregarComentario(iterator,n,p,p)}}style={{ height:30, width:75,backgroundColor: (this.state.clickColorBoton[iterator][n][p][2] === p ? '#35E119' : 'orange'),borderRadius: 4,alignItems: 'center',borderWidth: 1,borderColor: '#d6d7da',alignContent:'center',width:75,height:30}}>
                                                                                            <View>
                                                                                                <Text style={{fontSize:12.5,color:'white',alignItems:'center',marginTop:'3.5%'}}>{(this.state.clickColorBoton[iterator][n][p][2] === p ? 'Agregado' : 'Agregar')}</Text>
                                                                                            </View>
                                                                                        </TouchableHighlight>
                                                                                        </View>
                                                                                    </View>
                                                                            </CollapseBody>
                                                                            </Collapse>
                                                                          

                                                                          
                                                                             <Collapse >
                                                                              <CollapseHeader>
                                                                               <View style={{flexDirection:'row',alignItems: 'center',marginTop:'5%'}}>
                                                                                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/evidencia.png?raw=true'}} 
                                                                                        style={{height: 35, 
                                                                                                    width: 35,
                                                                                                    marginLeft:7
                                                                                                    }}/>
                                                                                <Text onPress={() => this.onClickAddImage(iterator,n,p)} style={{fontSize:12,marginLeft:5,marginTop:2}}>Agregar evidencia</Text>
                                                                                </View>
                                                                                
                                                                              </CollapseHeader>
                                                                              <CollapseBody>
                                                                                <View style={{flexDirection:'row',alignItems: 'center',marginTop:15}}>                                                            
                                                                                     
                                                                                      <TouchableHighlight  onPress={()=>{this.agregarEvidencia(iterator,n,p,p)}} style={{ height:30, width:75,backgroundColor: (this.state.clickColorBoton[iterator][n][p][1] === p ? '#35E119' : 'orange'),borderRadius: 4,alignItems: 'center',borderWidth: 1,borderColor: '#d6d7da',alignContent:'center',width:75,height:30}}>
                                                                                    <View>

                                                                                      <Text style={{fontSize:12.5,color:'white',alignItems:'center',marginTop:'3.5%'}}>{(this.state.clickColorBoton[iterator][n][p][1] === p ? 'Guardado' : 'Guardar')}</Text>
                                                                                    </View>
                                                                                  </TouchableHighlight>
                                                                                  
                                                                                </View>
                                                                              </CollapseBody>
                                                                            </Collapse>
                                                                         
                                                                       
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
              <View style={{alignItems:'center',alignContent:'center',flex:1}}>
                  <Text style={{textAlign:'center', fontSize:15,alignItems:'center'}}>Firmar</Text>
              </View>
          </Button>



              </View>

              <View style={{alignItems:'center',marginTop:'5%'}}>
              <Button onPress={()=>this.finalizarAuditoria()} style={styles.botonFirma}>
              <View style={{alignItems:'center',alignContent:'center',flex:1}}>
                  <Text style={{alignItems:'center', fontSize:15}}>Finalizar</Text>
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
        marginTop:'1%',
       

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
