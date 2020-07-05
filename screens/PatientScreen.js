import React from 'react';
import {Text } from 'react-native';

const PatientScreen = () => (
    <Text>
        PatientScreen
    </Text>
)
PatientScreen.navigationOptions = {
    title: 'Карта пациента',
    headerTintColor: '#2A86FF',
    headerTranparent: true,
    headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.8,
        
    }
    
  };

export default PatientScreen;