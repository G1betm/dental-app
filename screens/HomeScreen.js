import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import styled from 'styled-components/native' ;
import { Entypo } from '@expo/vector-icons';
import { Appointment, SectionTitle } from "../components";


const DATA = [
    {
      title: "30 июня",
      data: [
        {
            time: '15:30',
            diagnosis: 'тут какой-то текст',
            active: true,
            user: {
                phone: '+998 90 567 12 43',
                fullname: 'Алишер Ахмедов',
                avatar: 'https://sun9-21.userapi.com/c857532/v857532576/125124/weqq4JUW9P0.jpg?ava=1',
                
            }

        },

        {
            time: '16:40',
            diagnosis: 'тут какой-то текст 2',
            user: {
                phone: '+998 90 643 32 54',
                fullname: 'Мухаммадяхё Аскаров ',
                avatar: 'https://sun9-7.userapi.com/c853528/v853528508/122d10/q7nQ4ruIRDg.jpg?ava=1',
            }
        },
        {
          time: '15:30',
          diagnosis: 'тут какой-то текст',
          
          user: {
              phone: '+998 90 567 12 43',
              fullname: 'Алишер Ахмедов',
              avatar: 'https://sun9-21.userapi.com/c857532/v857532576/125124/weqq4JUW9P0.jpg?ava=1',
          }
      },

      {
          time: '16:40',
          diagnosis: 'тут какой-то текст 2',
          user: {
              phone: '+998 90 643 32 54',
              fullname: 'Мухаммадяхё Аскаров ',
              avatar: 'https://sun9-7.userapi.com/c853528/v853528508/122d10/q7nQ4ruIRDg.jpg?ava=1',
          }
      },

    ]
    },
    {
      title: "1 июля",
      data: [
        {
            time: '15:30',
            diagnosis: 'тут какой-то текст 3',
            user: {
                phone: '+998 90 783 21 99',
                fullname: 'Артур Файзуллин',
                avatar: 'https://sun9-15.userapi.com/c840532/v840532687/752e4/ZjsSwtv6fFs.jpg?ava=1',
            }
        },
        {
          time: '15:30',
          diagnosis: 'тут какой-то текст',
          
          user: {
              phone: '+998 90 567 12 43',
              fullname: 'Алишер Ахмедов',
              avatar: 'https://sun9-21.userapi.com/c857532/v857532576/125124/weqq4JUW9P0.jpg?ava=1',
          }
      },

      {
          time: '16:40',
          diagnosis: 'тут какой-то текст 2',
          user: {
              phone: '+998 90 643 32 54',
              fullname: 'Мухаммадяхё Аскаров ',
              avatar: 'https://sun9-7.userapi.com/c853528/v853528508/122d10/q7nQ4ruIRDg.jpg?ava=1',
          }
      },
      {
        time: '15:30',
        diagnosis: 'тут какой-то текст',
        
        user: {
            phone: '+998 90 567 12 43',
            fullname: 'Алишер Ахмедов',
            avatar: 'https://sun9-21.userapi.com/c857532/v857532576/125124/weqq4JUW9P0.jpg?ava=1',
        }
    },

    {
        time: '16:40',
        diagnosis: 'тут какой-то текст 2',
        user: {
            phone: '+998 90 643 32 54',
            fullname: 'Мухаммадяхё Аскаров ',
            avatar: 'https://sun9-7.userapi.com/c853528/v853528508/122d10/q7nQ4ruIRDg.jpg?ava=1',
        }
    },
    ]
    }, 
  ];

const HomeScreen = ({navigation}) => (  
    <Container>               
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <Appointment navigate={navigation.navigate} item={item} /> } 
            renderSectionHeader={({ section: { title } }) => (
                <SectionTitle>{title}</SectionTitle>
            )}
        />
        <PlusButton style={{
            shadowColor: "#2A86FF",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.7,
            shadowRadius: 3,
            
            elevation: 7,
        }}>
            <Entypo name="plus" size={32} color="white" />
        </PlusButton>
    </Container>                         
);


HomeScreen.navigationOptions = {
    title: 'Пациенты',
    headerTintColor: '#2A86FF',
    headerTranparent: true,
    headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.8,
        
    }
    
  };

const Container = styled.View`
    flex: 1;
    background: #fff;
    
`;

const PlusButton = styled.TouchableOpacity`
    
    position: absolute;
    background: #2a86ff;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 64px;
    height: 64px;
    right: 25px;
    bottom: 25px;
`;

export default HomeScreen;


