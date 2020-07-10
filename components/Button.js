import React from 'react';
import styled from 'styled-components/native' ;
import { Entypo } from '@expo/vector-icons';

const Button = ({ children, color }) => {
    return (
        <ButtonWrapper color={color}>
            <ButtonText>{ children }</ButtonText>
        </ButtonWrapper>
    );
}

Button.defaultProps = {
    color: '#2A86FF'
};


const ButtonWrapper = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: ${props => props.color};
    height: 50px;
    
`;
const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;

`;
export default Button;