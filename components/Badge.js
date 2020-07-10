import React from 'react';
import styled from 'styled-components/native' ;

const getColor = ({active, color}) => {
    const colors = {
        green: {
            background: 'rgba(132, 210, 105, 0.21 )',
            color: '#61BB42',
        },
        active: {
            background: '#2A86FF',
            color: '#E9F5FF',
        },
        default: {
            background: '#E9F5FF',
            color: '#4294ff',
            
        }

    };

    let result;
    if (active) {
        result =  colors.active
    } else if (color && colors[color]) {
        result = colors[color]
    } else {
        result = colors.default;
    } 

    return result;
};
     
export default styled.Text`
    background: ${props => getColor(props).background };
    color: ${props => getColor(props).color};
    border-radius: 18px;
    padding: 7px 17px;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    text-align: center;
`;