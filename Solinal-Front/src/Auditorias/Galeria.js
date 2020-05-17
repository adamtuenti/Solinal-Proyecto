import React, { Component } from "react";
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import {View, Text, StyleSheet, Dimensions, Button, Image } from "react-native";

export default class Galeria extends Component {
 
 constructor(props) {
    
  super(props);
  this.state = {
   hasCameraPermission: null,
   image: null,
   foto:''
  }
 }
async componentDidMount() {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  this.setState({ hasCameraPermission: status === "granted" });
 }

 _getPhotoLibrary = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
   allowsEditing: true,
   aspect: [9,16]
  });
  if (!result.cancelled) {
   this.setState({ image: result.uri,foto:'si' });
  }
  console.log(result.uri);
  console.log('-')
  console.log(this.state.image)
 // urifirma='https://laverdadnoticias.com/__export/1586892765870/sites/laverdad/img/2020/04/14/cosplay_vegeta_super_saiyan.png_423682103.png'
  
 }

 enviarFoto=()=>{
        
        urifirma=this.state.image;

        if(this.state.foto!=''){
          this.props.navigation.navigate('Crear')

        }
        else{
          alert('foto no')
        }
        
        
       
      }

 render(){
     const { image, hasCameraPermission } = this.state;

  if (hasCameraPermission === null) {
   return <View />
  }
  else if (hasCameraPermission === false) {
   return <Text>Acceso a la galeria ha sido denegado.</Text>;
  }
  else {
    return (
    <View style={{ flex: 1 }}>
     <View style={styles.activeImageContainer}>
      {image ? (
       <Image source={{ uri: image }} style={{ flex: 1 }} />
      ) : (
       <View />
      )}
    </View>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     <Button 
       onPress={this._getPhotoLibrary.bind(this)} 
       title="Selector de fotos"
     />

     <Button 
      onPress={()=>{this.enviarFoto()}}
       title="Ok"
     />
     
    </View>
   </View>
   );
  }
 }

}

const styles = StyleSheet.create({
 activeImageContainer: {
  flex: 1,
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height / 2,
  backgroundColor: "#eee",
  borderBottomWidth: 0.5,
  borderColor: "#fff"
 },
});