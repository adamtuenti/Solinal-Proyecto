import React, { Component } from 'react';
import { Image ,TouchableOpacity} from 'react-native';
import { Root,ActionSheet,Container, Title, Content, Card, CardItem, Footer, Button, Left, Right, Body,  Font,Input,DatePicker } from 'native-base';
import { Icon } from 'react-native-elements'
import {StyleSheet,TouchableHighlight,Text,View,Dimensions} from 'react-native';
//import DatePicker from 'react-native-datepicker';
import {RNCamera} from 'react-native-camera'
//import RNFetchBlob from 'rn-fetch-blob'
import AuditoriasProgramadas from '../../shared/AuditoriasProgramadas';
import FooterCalendario from '../../shared/FooterCalendario';
//import { Calendar } from 'react-native-calendario';
import {MaterialIcons,FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons';
//import TimePicker from "react-native-24h-timepicker";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import HeaderBack  from './../../shared/HeaderBack';


import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'




import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as Expo from 'expo';
import Toolbar from './../../shared/toolbar.component';

const dataItem1 = [
    { title: "Art. 73: De las condiciones mínimas básicas", content: "Lorem ipsum dolor sit amet" },
    { title: "Art. 74: De la localización", content: "Lorem ipsum dolor sit amet" },
    { title: "Art. 75: Diseño y construcción", content: "Lorem ipsum dolor sit amet" },
    { title: "Art. 76: Condiciones específicas de las áreas, estructuras internas y accesorios", content: "Lorem ipsum dolor sit amet" },
    { title: "Art. 77: Suministro de Agua", content: "Lorem ipsum dolor sit amet" },
];

const dataMain = [
    { title: "De las instalaciones y requisitos de buenas prácticas de manufactura", content: "Lorem ipsum dolor sit amet" },
    { title: "De los equipos y utensilios", content: "Lorem ipsum dolor sit amet" },
    { title: "Requisitos higiénicos de fabricación", content: "Lorem ipsum dolor sit amet" },
    { title: "Envasado, etiquetado y empaquetado", content: "Lorem ipsum dolor sit amet" },
    { title: "Almacenamiento, distribución, transporte y comercialización", content: "Lorem ipsum dolor sit amet" },
    { title: "Del aseguramiento y control de la calidad", content: "Lorem ipsum dolor sit amet" },
    { title: "Firma del auditor", content: "Lorem ipsum dolor sit amet" }
  ];


const list = [
  {
    titulo: 'De las instalaciones y requisitos de buenas prácticas de manufactura',
    menu: ['Art. 75: Diseño y construcción','Art. 76: Condiciones específicas de las áreas, estructuras internas y accesorios'],
    submenu:[['sub menu1','submenu2'],['hola','hola1']],
    url: 'AuditoriasBuscar',
    altura:30,
    anchura:40
  },
  {
   titulo: 'De los equipos y utensilios',
    menu: ['1a','2a'],
    submenu:[['sub menu3','submenu4'],['hola','hola1']],
    url: 'AuditoriasBuscar',
    altura:32,
    anchura:23
  },
  {
    titulo: 'Requisitos higiénicos de fabricación',
    menu: ['1 a'],
    submenu:['sub menu5','submenu6'],
    url: 'AuditoriasBuscar',
    altura:30,
    anchura:35
  }
]

export default class Crear extends Component {

  camera = null;

   

      constructor(props){
        
    super(props)
        //set value in state for initial date
        global.urifirma='https://i.pinimg.com/originals/e3/3c/2f/e33c2fa94c03efa06678116f80d62d0d.jpg'; 
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
            a:'http://accountsolinal.pythonanywhere.com/api/mainMenu/1',
            loading: false,
           // signature:this.props.navigation.state.params.signature,

           arrayRespuestas: [ ['pregunta','si'] ,['pregunta 1','n/a'],['pregunta 2','si']   ],
           arrayMain: ['main 1','main 2','main 3'],





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

           menu:['hola','hola1'],
           submenu:[['a','n'],['m']],
           item:[[['a1','a2'],['n1']],['m1']],

            loading: false,
          equipo: [],
          mensajeError:'',
          urlEquipo: 'http://accountsolinal.pythonanywhere.com/api/equipo/'+idUserGlobal,
          vacio:[],


           api:[
    {
      "id": 1,
      "mainMenu": "main1",
      "subMenuLista":['submenu1', 'sub menu1']
    },
    {
      "id": 2,
      "mainMenu": "main2",
      "subMenuLista":['submenu2', 'sub menu2']
    },
    {
      "id": 3,
      "mainMenu": "main3",
      "subMenuLista":['submenu3']
    },
 ],
           api1: [
             
             
    [[{
      "subMenuItem": "submenu1",
      "itemLista": ["item","item 0"]
    }],[

     {
      "subMenuItem": "sub menu1",
      "itemLista": ["item1","item 1"]
    }]]


           ,[[
      {
      "subMenuItem": "submenu2",
      "itemLista": ["item2","item 2"]
    }],[

     {
      "subMenuItem": "sub menu2",
      "itemLista": ["item01","item 02"]
    }
    ]],[[
      {
      "subMenuItem": "submenu3",
      "itemLista": ["item3"]
    }]]
    ],
    
           api2: [
             
    [[[{
      "item": "item",
      "subItemLista": ["goku","goku 1"]
    }],[
     {
      "item": "item0",
      "subItemLista": ["vegeta"]
    }  ]],
         
           
    [[{
      "item": "item1",
      "subItemLista": ["krilim","krilim 1"]
    }],[
     {
      "item": "item 1",
      "subItemLista": ["freezer",'papa frezer']
    },]]],
          


          
    [[[{
      "item": "item2",
      "subItemLista": ["goku saya","goku fase1"]
    }],[
     {
      "item": "item 2",
      "subItemLista": ["bulma","ulork"]
    }]],
          
           [[
    {
      "item": "item01",
      "subItemLista": ["rochi"]
    }],[

     {
      "item": "item 02",
      "subItemLista": ["bardock",'dodoria']
    }]]],

     [[[{
      "item": "item2",
      "subItemLista": ["goku saya","goku fase1"]
    }],[
     {
      "item": "item 2",
      "subItemLista": ["bulma","ulork"]
    }]]],
          
           [[[
    {
      "item": "item3",
      "subItemLista": ["yancha",'picoro','naruto']
    }]]],




           


           
           ]
  
        };
    }

     async componentDidMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          /*Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")*/
        });
        this.setState({ isReady: true });

        
        
      }



    getMiembrosEquipo = () => {
        this.setState({loading:true})
        fetch(this.state.urlEquipo)
        .then(res=>res.json())
        .then(res=>{ 
         // console.log(res)
           
           
            this.setState({
            equipo: res,
            urlEquipo: res.next,
            loading: false,   
            
            })
        })
        this.llenarArrary()
  
    }

    llenarArrary=()=>{
      console.log(this.state.equipo)
      this.state.api.map((a,n)=>(
        //console.log(n),
        this.state.vacio.push([])
      ))
      console.log(this.state.vacio)
    }

      componentDidMount = () => {
          this.getMiembrosEquipo();
    const camera = Permissions.askAsync(Permissions.CAMERA);
        const audio = Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const roll = Permissions.askAsync(Permissions.CAMERA_ROLL);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted' && roll.status === 'granted');

        this.setState({ hasCameraPermission });
  }

      


  _onHideUnderlay() {
    this.setState({ pressStatus: false });
    }

    _onShowUnderlay() {
    this.setState({ pressStatus: true });
    }


    handlePress=()=>{
        this.setState({ toggled: !this.state.toggled })
    }

     _handleClick(flag,button) {
       console.log(button);
        if (flag == 1) {
          this.setState({selected: true});
        }
        this.setState({SelectedButton: button})
       
      }


   

  onUpdateItem (i) {
   // alert('hola')
    this.setState(state => {
      const array = state.array.map((item, j) => {
         if (j === i) {
           if(item+1<3){
             return item+1;
           }else{
             return item;
           }      
                
              } else {
                return item;
              }
          });
        
     
 
      return {
        array
      };
    
    });
    console.log(this.state.array)
  
  }

  onUpdateRespuesta (i,pregunta,respuesta) {
   // alert('hola')
    this.setState(state => {
      const vacio = state.vacio.map((item, j) => {
         if (j === i) {
           return { 
             pregunta,respuesta
           }
           }      
                
               else {
                return item;
              }
          });
        
     
 
      return {
        vacio
      };
    
    });
    console.log(this.state.vacio)
  
  }

  onUpdateItem1(i,n) {
   // alert('hola')
    this.setState(state => {
      const subarray = state.subarray.map((item, j) => {   
         if (j === i) {
          // alert(item)
         //  console.log(item)
          const subarray1 = item.map((item1, o) => {
           /* console.log(item1)
            console.log(n)
            console.log(o)
            console.log('-')*/ 
             if (o === n) {
              /* alert(item1)
               console.log('/')
               console.log(item1)
               console.log('chao funcion')*/
               return item1+1
             }else {
             //  console.log(item1)
                return item1;
              }
          });
         console.log(subarray1)
          return {
            //console.log(subarray1)
            subarray1
          };
        } 
       else{
         console.log(item)
          return item
        //}          
        }
     // return {
       // subarray
      //};

      });
      return subarray
    

      });
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

  enviarFecha(){

    const {fechaInicio,fechaFin,horaInicio,horaFin}= this.state
    var dataToSend = {detalle_auditoria: 'detalle',fecha_inicio:fechaInicio,fecha_fin:fechaFin,hora_inicio:horaInicio,hora_fin:horaFin,id_usuario:idUserGlobal};
                    var formBody = [];
                    for (var key in dataToSend) {
                    var encodedKey = encodeURIComponent(key);
                    var encodedValue = encodeURIComponent(dataToSend[key]);
                    formBody.push(encodedKey + "=" + encodedValue);
                    }
                    formBody = formBody.join("&");
                    fetch('http://accountsolinal.pythonanywhere.com/api/fechaPost', {
                    method: "POST",//Request Type 
                    body: formBody,//post body 
                    headers: {//Header Defination 
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    })
                    .then((response) => response.json())
                    //If response is in json then in success
                    .then((responseJson) => {
                      alert(JSON.stringify(responseJson));
                       
                        //this.setState({mensajeError:'Usuari agregado!'})
                       // this.props.navigation.navigate('EquipoVacio')
                    })
  }



 onSelectedImage(image){
    let newImgData = this.state.fileList;
    const source = {uri: image.path};
    let item = {
      id: Date.now(),
      url: source,
      content: image.data
    }
    newImgData.push(item);
    this.setState({fileList: newImgData});
  }

  setFlashMode = (flashMode) => this.setState({ flashMode });
  setCameraType = (cameraType) => this.setState({ cameraType });
  handleCaptureIn = () => this.setState({ capturing: true });

  handleCaptureOut = () => {
      if (this.state.capturing)
          this.camera.stopRecording();
  };

  handleShortCapture = async () => {
      const photoData = await this.camera.takePictureAsync();
      console.log(photoData.uri);
      this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
  };

  handleLongCapture = async () => {
      const videoData = await this.camera.recordAsync();
      this.setState({ capturing: false, captures: [videoData, ...this.state.captures] });
  };

  tomarFoto = () => {
    console.log('hola')
    const { hasCameraPermission, flashMode, cameraType, capturing } = this.state;
    console.log('--')
    console.log(hasCameraPermission)

    if (hasCameraPermission === false) {
      console.log('bueno')
      this.props.navigation.navigate('Camara')
      
 
        } else if (hasCameraPermission === null) {
          console.log('no')
      return <Text>Acceso a cámara ha sido denegado.</Text>;
  }

 
  }

  _verFotoDesdeGaleria = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
     });
     if (!result.cancelled) {
      this.setState({ image: result.uri });
     }
  }

  verGaleria = () => {
    const { image, hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <View />
     }
     else if (hasCameraPermission === false) {
      return <Text>Acceso a galería ha sido denegado.</Text>;
     }
     else {
      return (
       <View style={{ flex: 1 }}>
        <View style={{flex: 1, width: Dimensions.get("window").width, height: Dimensions.get("window").height / 2, backgroundColor: "#eee", borderBottomWidth: 0.5, borderColor: "#fff"}}>
         {image ? (
          <Image source={{ uri: image }} style={{ flex: 1 }} />
         ) : (
          <View />
         )}
       </View>
       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button 
          onPress={this._verFotoDesdeGaleria.bind(this)} 
          title="Pantalla de galería"
        />
       </View>
      </View>
      );
     }
  }

  onClickAddImage(){
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
            console.log('foto')
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

                <View style={styles.preview}>
          {urifirma ? (
            <Image
              resizeMode={"contain"}
              style={{ width: 335, height: 114 }}
              source={{ uri: urifirma }}
            />
          ) : null}
        </View>
       


                    <Content padder style={{backgroundColor: '#f6f6f6'}}>


                       

                      
                        <View>


                        
                    <View style = {{ backgroundColor: '#f6f6f6', borderBottomColor:2,width:'90%',alignItems:'center',marginLeft:'5%'}}>
                        
                            <Text style={styles.input}> {this.state.norma} </Text>
                        
                            <Input style={styles.input} placeholder="Organización" />
                        
                            <Input style={styles.input} placeholder="Dirección" />
                       
                       
                       
                            <Input style={styles.input} placeholder="Alcance de la auditoría" />
                            <Input style={styles.input} placeholder="Nombre del auditado" />

                            
                           
                        
                        
                           
                    </View>

                    <View style={{flexDirection:'column'}}>

                    <View style = {{ backgroundColor: '#f6f6f6', borderBottomColor:2,width:'90%',alignItems:'center',marginLeft:'5%'}}>
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

                      
















                        <View style={{marginTop:15}}>
                        {this.state.api.map((a,a1)=>(

                          <Collapse>
                            <CollapseHeader>

                            <View style={{marginTop:10,backgroundColor:'green'}}>
                            <Text>{a.mainMenu}</Text>
                            <Text>{this.state.array[a1]}/{ a.subMenuLista.length}</Text>
                            <Text>{this.state.array[a1]/ a.subMenuLista.length*100}%</Text>
                            </View>

                            </CollapseHeader>
                        <CollapseBody>
              
                        <View>
                        {
                            a.subMenuLista.map((m1, n) => (
                              <Collapse>
                                <CollapseHeader>
                            
                                   <View style={{marginTop:5,backgroundColor:'#B6B82D'}}>
                                   <Text>{m1}</Text>
                                   <Text>{this.state.subarray[a1][n]}/{a.subMenuLista.length}</Text>
                                   </View>

                              
                               
                                </CollapseHeader>

                                  <CollapseBody>
                                  <View>
                                  {

                                    //console.log('=='),
                                    //console.log(this.state.api1[n]),
                                    //console.log('='),
                                    this.state.api1[a1][n].map((item,itemId)=>(
                                      
                                      //console.log(item),
                                      //console.log('-------'),

                                      
                                    
                                    <View>
                                      {item.itemLista.map((i,it)=>(
                                       // console.log(item[a1]),
                                        //console.log('-/'),

                                        <Collapse>

                                        <CollapseHeader>
                                        <View style={{backgroundColor:'yellow',marginTop:5}}>
                                        <Text>{i}</Text>
                                         <Text>{this.state.api2[a1][n][it].length}</Text>
                                      
                                        </View> 

                                        </CollapseHeader>
                                        <CollapseBody>
              
                                        <View>
                                        {
                                          this.state.api2[a1][n][it].map((goku,gokuId)=>(
                                            
                                            <View style={{backgroundColor:'#81B82D',marginTop:5}}>
                                             
                                              {goku.subItemLista.map((vegeta,vegetaId)=>(
                                                
                                                <Text onPress={()=>{this.onUpdateRespuesta(a1,vegeta,'si')}} style={{marginTop:5}}>{vegeta}</Text>
                                                
                                              ))

                                              }

                                              
                                            </View>

                                          ))
                                        
                                        }
                                        </View>
                                        </CollapseBody>

                                        </Collapse>

                                      ))
                                    }
                                    </View>

                                      

                                    ))
                           

                                    


                                  }
                                         

                                    </View>
                                  </CollapseBody>

                            </Collapse>


                            ))}

                           </View>
                                  </CollapseBody>

                            </Collapse>


                           

                              



                            ))


                        }

                        </View>
                     
                     




                      

                         



                         <View style={styles.colapse}>
                  
                {
                 // const variable1 = 0'
                // console.log(list),

                  list.map((l, i) => 
                  
                  (
                   // this.state.array.push(0),
                    

                    
                   

                    
                    
                    

                   
                      <Collapse>
                        <CollapseHeader>
                        
                            
                            <View style={styles.titulo}>


                            <View style={{width:'85%'}}>


                            

                            
                                <Text style={styles.tituloLetra}>{l.titulo} </Text>
                            
                            </View>


                              <View style={{flexDirection:'column',alignItems:'flex-end',marginLeft:'7%'}}>
                                <View>
                                  <Text>{this.state.array[i]}/{l.menu.length}</Text>
                                </View>
                                <View>
                                  <Text>{this.state.array[i]/l.menu.length*100}%</Text>
                                </View>
                              </View>
                           


                            </View>
                            
                        </CollapseHeader>
                        <CollapseBody>

                            
                      
                                        
                                            
                                            <View>
                                             {
                                                l.menu.map((m, n) => (

                                                 // i = i+n,
                                                  

                                                    <Collapse>
                                                    

                                                        <CollapseHeader>
                                                                <View style={styles.menu}>
                                                                <View style={{width:'90%'}}>
                                                                <Text style={styles.menuLetra}>{m} </Text>
                                                                </View>
                                                                <View style={{marginLeft:'15%',flexDirection:'row-reverse', alignItems:'center',alignContent:'center'}}>
                                                                <View><Text>  {this.state.subarray[i][n]}/{l.submenu.length}</Text></View>
                                                                </View>
                                                                </View>
                                                        
                                                        </CollapseHeader>

                                                        <CollapseBody>

                                                            <View>

                                                                {
                                                                    l.submenu.map((o,p)=>(

                                                                    contador+=1,
                                                                    
                                                                     
                                                                        <View style={styles.submenu}>
                                                                        <Text style={styles.submenuLetra}>   {o}</Text>

                                                                        <View style={{flexDirection:'row',marginTop:7,marginBottom:5}}>    
                                                                            <TouchableHighlight
                                                                            id={p}
                                                                            style={{backgroundColor: (this.state.SelectedButton === p+'1' ? 'green' : 'grey'),alignItems: 'center',padding: 10,width:'30%',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',marginLeft:7}}
                                                                           onPress={() =>this.onUpdateItem(i,'Si')
                                                                          // this.state.array[i]='Si',
                                                                           //console.log(this.state.array)
                                                                            }

                                                                           // onPress={() =>
                                                                            //this.onUpdateItem1(n)}
                                                                            
                                                                            

                                                                             // state=> {const array = state.array[i]+1
                                                                               // cont: this.state.cont + 1
                                                                             // })
                                                                            //console.log(this.state.array)
                                                                            //this._handleClick('any flag', p+'1',n),console.log(i)
                                                                            
                                                                           // }
                                                                            underlayColor="red"
                                                                            >
                                                                            <View>

                                                                            <Text style={{fontWeight: 'bold',color:'white'}}> Si </Text>
                                                                            </View>
                                                                            </TouchableHighlight>
                                                                            <TouchableHighlight
                                                                            id={p}

                                                                            style={{backgroundColor: (this.state.SelectedButton === p+'2' ? 'red' : 'grey'),alignItems: 'center',padding: 10,width:'30%',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',marginLeft:7}}
                                                                            onPress={() => this._handleClick('any flag', p+'2',n)}
                                                                            underlayColor="red">
                                                                            <View >

                                                                            <Text style={{fontWeight: 'bold',color:'white'}}> No </Text>
                                                                            </View>
                                                                            </TouchableHighlight>


                                                                            <TouchableHighlight
                                                                            id={p}
                                                                            style={ {backgroundColor: (this.state.SelectedButton === p+'3' ? 'orange' : 'grey'),alignItems: 'center',padding: 10,width:'30%',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',marginLeft:7}}
          
                                                                            onPress={() => this._handleClick('any flag', p+'3',n)}
                                                                            underlayColor="red">
                                                                            <View >

                                                                            <Text style={{fontWeight: 'bold',color:'white'}}> N/A </Text>
                                                                            </View>
                                                                            </TouchableHighlight>
                                                                            
                                                                        </View>
                                                                        <View style={{marginTop:5,marginBottom:7,marginLeft:5,flexDirection:'row'}}>
                                                                        <View>
                                                                        <Collapse>
                                                                            <CollapseHeader>

                                                                            <View style={{flexDirection:'row',alignItems: 'center',}}>
                                                                                <View style={{flexDirection:'row',alignItems: 'center',}}>
                                                                                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/nota.png?raw=true'}} 
                                                                                        style={{height: 35, 
                                                                                                    width: 35,
                                                                                                    marginLeft:7
                                                                                                    }}/>
                                                                                <Text style={{fontSize:12,marginLeft:5,marginTop:2}}>Agregar nota</Text>
                                                                                </View>

                                                                               

                                                                            </View>
                                                                            
                                                                            </CollapseHeader>
                                                                            <CollapseBody>
                                                                            <View style={{flexDirection:'column',marginTop:5,backgroundColor:'#F5F5F5'}}>
                                                                                <View>
                                                                                <Input numberOfLines={4} style={styles.input} placeholder="Escriba su nota" />
                                                                                </View>

                                                                                <View style={{flexDirection:'row-reverse',marginTop:2, marginBottom:10,marginLeft:10 }}>
                                                                                <TouchableHighlight style={styles.botonAgregarNota}>
                                                                                    <View>
                                                                                        <Text style={{fontSize:12}}>Agregar</Text>
                                                                                    </View>
                                                                                </TouchableHighlight>
                                                                                </View>
                                                                            

                                                                            </View>
                                                                            </CollapseBody>
                                                                            </Collapse>
                                                                          </View>
                                                                          <View>
                                                                           <View style={{flexDirection:'row',alignItems: 'center',marginLeft:5}}>
                                                                                        <Image source={{uri: 'https://github.com/adamtuenti/Solinal-Proyecto/blob/master/Solinal-Front/png/evidencia.png?raw=true'}} 
                                                                                        style={{height: 35, 
                                                                                                    width: 35,
                                                                                                    marginLeft:7
                                                                                                    }}/>
                                                                                <Text onPress={() => this.onClickAddImage()} style={{fontSize:12,marginLeft:5,marginTop:2}}>Agregar evidencia</Text>
                                                                                </View>
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
                    
                ))
                }
              </View>

              <View style={{alignItems:'center',marginTop:'5%'}}>
              <TouchableHighlight onPress={()=>this.props.navigation.navigate('FirmaAuditor')} style={styles.botonFirma}>
              <View>
                  <Text style={{fontSize:15}}>Firmar</Text>
              </View>
          </TouchableHighlight>



              </View>

              <View style={{alignItems:'center',marginTop:'5%'}}>
              <TouchableHighlight onPress={()=>this.props.navigation.navigate('AuditoriaFinalizada',{arrayRespuestas:this.state.arrayRespuestas,arrayMain:this.state.arrayMain})} style={styles.botonFirma}>
              <View>
                  <Text style={{fontSize:15}}>Finalizar</Text>
              </View>
          </TouchableHighlight>



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
