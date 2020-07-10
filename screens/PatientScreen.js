import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native' ;
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';  

import {GrayText, Button, Badge} from '../components';


const PatientScreen = ({navigation}) => (
    <View style={{flex: 1}}> 
            <PatientDetails>
                <PatientFullName>
                    {navigation.getParam('user', {}).fullname}
                </PatientFullName>

                <GrayText> {navigation.getParam('user', {}).phone}</GrayText>

                <PatientButtons>
                <FormulaButtonView>
                        <Button>Формула зубов</Button>
                    </FormulaButtonView>
                    <PhoneButtonView>
                        <Button color='#84d269'><FontAwesome name="phone" size={22} color="white" /></Button>
                    </PhoneButtonView>          
                </PatientButtons>

            </PatientDetails>
            
        
        <PatientAppointments>
            <Container>
                <AppointmentCard>
                    <AppointmentCardRow>
                        <MaterialCommunityIcons name="tooth" size={20} color="gray" />
                        <AppointentCardLabel>
                            Зуб: <Text style={{fontWeight: 'bold'}}>12</Text> 
                        </AppointentCardLabel>
                    </AppointmentCardRow>
                    <AppointmentCardRow>
                    <MaterialCommunityIcons name="clipboard-text" size={20} color="gray" />
                        <AppointentCardLabel>
                            Диагноз: <Text style={{fontWeight: 'bold'}}>Пульпит</Text> 
                        </AppointentCardLabel>
                    </AppointmentCardRow>
                    <AppointmentCardRow style={{marginTop: 15, justifyContent: 'space-between'}}>
                        <Badge active style={{width: 180}}>11.10.2019 - 15:40</Badge>
                        <Badge color='green'>1500 Р</Badge>
                    </AppointmentCardRow>                  
                </AppointmentCard>
            </Container>
            
        </PatientAppointments>
    </View>
);

const AppointmentCardRow = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 6.5px;
    margin-top: 4.5px;
`;
const AppointentCardLabel = styled.Text`
    font-size: 15px;
    margin-left: 10px;
    
`;
const AppointmentCard = styled.View`
    padding: 20px 25px;
    background: #fff;
    border-radius: 10px;
    shadow-color: gray;
    elevation: 0.8;
    shadow-radius: 5;
    shadow-opacity: 0.4;
`;

const PatientFullName = styled.Text`
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 5px;
`;
const Container = styled.View`
    flex: 1;
    padding: 25px;   
`;
const PatientButtons = styled.View`
    margin-top: 20px;
    display: flex;
    flex-direction: row;    
`;
const FormulaButtonView = styled.View`
    flex: 1;
`;

const PhoneButtonView = styled.View`
    width: 50px;
    margin-left: 10px;
`;
const FormulaButton = styled(Button)`
    width: 84%;
    margin-right: 10px;
`;
const PhoneButton = styled(Button)`
    background-color: #84d269;
    height: 50px;
    width: 50px;
`;
const PatientAppointments = styled.View`
    flex: 1;
    background: #f8fafd;
    
`;
const PatientDetails = styled(Container)`
    background: #fff;
    flex: 0.3;
`;

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