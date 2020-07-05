import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import styled from 'styled-components/native' ;



export default function Group({ user, diagnosis, active, time, navigate }) {
    return (        
        
        

    <GroupItem onPress={navigate.bind(this, 'Patient')}>
        <Avatar
         source={{
         uri: user.avatar
        }}
        />
        <View style={{flex: 1}}>
            <FullName>{ user.fullname }</FullName>
            <GrayText>{ diagnosis }</GrayText>
        </View>
        <GroupDate active={active}>{ time }</GroupDate>
    </GroupItem>


    );
    
};

Group.defaultProps = {
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
const GrayText = styled.Text`
    font-size: 16px;
    color: #8B979F;

`;
const GroupDate = styled.Text`
    background: ${props => props.active ? '#2A86FF;' : '#E9F5FF'};
    color: ${props => props.active ? '#fff;' : '#4294ff'};
    border-radius: 18px;
    padding: 7px 17px;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    font-weight: bold;


`;

