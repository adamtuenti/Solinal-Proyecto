import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableHighlight,Image} from 'react-native';
import Signature from 'react-native-signature-canvas';

export default class FirmaAuditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signature: null,firma:'',mensajeError:'' };
      }
     
      handleSignature = signature => {
        this.setState({ signature ,firma:'ok',mensajeError:'Firma guardada!'});
        
       
      };
     
      handleEmpty = () => {
        this.setState({mensajeError:'Firma Vacia!'})
      }

      enviarFirma=()=>{
        
        urifirma=this.state.signature;

        if(this.state.firma!=''){
          this.props.navigation.navigate('Crear')

        }
        else{
          this.setState({mensajeError:'No ha guardado la firma!'})
        }
        
        
       
      }
     
      render() {
        const style = `.m-signature-pad--footer
        .button {
          background-color: #1ED695 ;
          color: #FFF;
        }`;
        return (
          <View style={{ flex: 1 }}>
            <View style={styles.preview}>
          {this.state.signature ? (
            <Image
              resizeMode={"contain"}
              style={{ width: 335, height: 104 }}
              source={{ uri: this.state.signature }}
            />
          ) : null}
        </View>
        <View style={{alignItems:'center'}}>
        <Text style={{color:'red',fontSize:15,fontStyle:'italic'}} >{this.state.mensajeError}</Text>
        </View>
            <Signature
              onOK={this.handleSignature}
              onEmpty={this.handleEmpty}
              descriptionText="Firma del Auditor"
              clearText="Borrar"
              confirmText="Guardar"
              webStyle={style}
            />

              <View style={{alignItems:'center'}}>

              <TouchableHighlight style={{alignItems:'center',width:150,height:35,marginBottom:'2%',justifyContent:'center',alignItems: 'center',backgroundColor: '#1ED695',padding: 10,borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',marginTop:'1%'}} onPress={()=>{this.enviarFirma()}}><View><Text style={{fontSize:15,color:'white',marginBottom:'8%'}}>Aceptar</Text></View></TouchableHighlight>
          </View>
          </View>

        

          

          
        );
      }
    }
     
    const styles = StyleSheet.create({
      preview: {
        width: 335,
        height: 104,
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
      },
      previewText: {
        color: "#FFF",
        fontSize: 14,
        height: 40,
        lineHeight: 40,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#69B2FF",
        width: 120,
        textAlign: "center",
        marginTop: 10
      }
    });