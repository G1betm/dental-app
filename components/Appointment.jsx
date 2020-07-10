import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import styled from 'styled-components/native' ;

import GrayText from './GrayText';
import Badge from './Badge';




export default function Appointment({  navigate, item }) {
    const {user, diagnosis, active, time} = item;
    return (         
    <GroupItem onPress={navigate.bind(this, 'Patient', item )}>
        <Avatar
         source={{
         uri: user.avatar
        }}
        />
        <View style={{flex: 1}}>
            <FullName>{ user.fullname }</FullName>
            <GrayText>{ diagnosis }</GrayText>
        </View>
        <Badge active={active}>{ time }</Badge>
    </GroupItem>


    );
    
};

Appointment.defaultProps = {
    title: 'Untitled',
    items: []
};




const GroupItem = styled.TouchableOpacity`
    padding: 20px;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #ebebeb;
    
`;
const Avatar = styled.Image`
    border-radius: 50px;
    width: 50px;
    height: 50px;
    margin-right: 15px;
`;
const FullName = styled.Text`
    font-weight: 600;
    font-size: 16px;
`;


