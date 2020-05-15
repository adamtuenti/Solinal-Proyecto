import React from 'react';
import { Camera } from 'expo-camera';
import * as Expo from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import Constants from 'expo-constants';
import { View, TouchableWithoutFeedback, TouchableOpacity, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');
const { FlashMode: CameraFlashModes, Type: CameraTypes } = Camera.Constants;

export default ({ 
    capturing = false, 
    cameraType = CameraTypes.back, 
    flashMode = CameraFlashModes.off, 
    setFlashMode, setCameraType, 
    onCaptureIn, onCaptureOut, onLongCapture, onShortCapture,  
}) => (
    <Grid style={{width: winWidth, position: 'absolute', height: 100, bottom: 0,}}>
        <Row>
            <Col style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                <TouchableOpacity onPress={() => setFlashMode( 
                    flashMode === CameraFlashModes.on ? CameraFlashModes.off : CameraFlashModes.on 
                )}>
                    <Ionicons
                        name={flashMode == CameraFlashModes.on ? "md-flash" : 'md-flash-off'}
                        color="white"
                        size={30}
                    />
                </TouchableOpacity>
            </Col>
            <Col size={2} style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                <TouchableWithoutFeedback
                    onPressIn={onCaptureIn}
                    onPressOut={onCaptureOut}
                    onLongPress={onLongCapture}
                    onPress={onShortCapture}>
                    <View style={[{width: 60, height: 60, borderWidth: 2, borderRadius: 60, borderColor: "#FFFFFF",}, capturing && 
                    { width: 80, height: 80,}]}>
                        {capturing && <View style={{width: 76, height: 76, borderWidth: 2, borderRadius: 76, backgroundColor: "red", borderColor: "transparent",}} />}
                    </View>
                </TouchableWithoutFeedback>
            </Col>
            <Col style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                <TouchableOpacity onPress={() => setCameraType(
                    cameraType === CameraTypes.back ? CameraTypes.front : CameraTypes.back
                )}>
                    <Ionicons
                        name="md-reverse-camera"
                        color="white"
                        size={30}
                    />
                </TouchableOpacity>
            </Col>
        </Row>
    </Grid>
);