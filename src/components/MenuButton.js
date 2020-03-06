import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: none;
    border: 0;
    height: 40px;
    margin: 12px;
    padding: 0 8px;
    width: 40px;
    cursor: pointer;
    z-index: 2;

    @media only screen and (min-width: 576px) {
        display: none;
        cursor: default;
    }
`;
const Line = styled.div`
    display: block;
    position: relative;
    background: #000000;
    height: 2px;
    width: 24px;
    transform: rotate(${props => props.active ? '45deg' : '0deg'});
    transition: transform 0.3s ease-in-out, opacity 0.3s;

    &:: before,
    &:: after {
        content: '';
        left: 0;
        opacity: 1;
        position: absolute;
        background: #000000;
        height: 2px;
        width: 24px;
        transition: transform 0.3s ease-in-out, opacity 0.3s;
    }

    &:: before {
        bottom: 8px;
        opacity: ${props => props.active ? 0 : 1};
        transform: rotate(${props => props.active ? '-45deg' : '0deg'}) translate(${props => props.active ? '-4px, 4px' : '0, 0'});
    }

    &:: after {
        top: 8px;
        transform: rotate(${props => props.active ? '-90deg' : '0deg'}) translate(${props => props.active ? '8px, 0' : '0, 0'});
    }
`;

class MenuButton extends React.Component {
    render() {
        return (
            <Button onClick={this.props.handleClick} >
                <Line active={this.props.active} />
            </Button>
        );
    }
};

export default MenuButton;