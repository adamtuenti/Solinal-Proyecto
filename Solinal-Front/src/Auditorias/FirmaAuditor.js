import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableHighlight,Image} from 'react-native';
import Signature from 'react-native-signature-canvas';

export default class FirmaAuditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signature: null,firma:'' };
      }
     
      handleSignature = signature => {
        this.setState({ signature ,firma:'ok'});
        
       
      };
     
      handleEmpty = () => {
        alert('Firma vacia')
      }

      enviarFirma=()=>{
        
        urifirma=this.state.signature;

        if(this.state.firma!=''){
          this.props.navigation.navigate('Crear',{signature:this.state.signature})

        }
        else{
          alert('firma no')
        }
        
        
       
      }
     
      render() {
        const style = `.m-signature-pad--footer
        .button {
          background-color: red;
          color: #FFF;
        }`;
        return (
          <View style={{ flex: 1 }}>
            <View style={styles.preview}>
          {this.state.signature ? (
            <Image
              resizeMode={"contain"}
              style={{ width: 335, height: 114 }}
              source={{ uri: this.state.signature }}
            />
          ) : null}
        </View>
            <Signature
              onOK={this.handleSignature}
              onEmpty={this.handleEmpty}
              descriptionText="Firma"
              clearText="Clear"
              confirmText="Guardar"
              webStyle={style}
            />

              <View>

              <TouchableHighlight style={{alignItems:'center'}} onPress={()=>{this.enviarFirma()}}><View><Text>aceptar</Text></View></TouchableHighlight>
          </View>
          </View>

        

          

          
        );
      }
    }
     
    const styles = StyleSheet.create({
      preview: {
        width: 335,
        height: 114,
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
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