import React from 'react';
import styled from 'styled-components';

class MenuButton extends React.Component {
    render() {
        const Button = styled.button`
            position: absolute;
            top: 0;
            right: 0;
            background: none;
            border: 0;
            height: 40px;
            margin: 12px;
            padding: 0 8px;
            width: 40px;
            cursor: pointer;
            z-index: 2;
            position: fixed;
        
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
            transition: transform 0.3s ease-in-out, opacity 0.3s;
            transform: ${this.props.active ? 'rotate(45deg)' : null};

            &:: before,
            &:: after {
                content: '';
                left: 0;
                opacity: 1;
                position: absolute;
                background: #000000;
                height: 2px;
                width: 24px;
                transition: transform 0.3s ease -in -out, opacity 0.3s;
            }

            &:: before {
                bottom: 8px;
                opacity: ${ this.props.active ? 0 : 1};
                transform: ${ this.props.active ? 'rotate(-45deg) translate(-4px, 4px)' : null};
            }

            &:: after {
                top: 8px;
                transform: ${ this.props.active ? 'rotate(-90deg) translateX(8px)' : null};
            }
            `;
        return (
            <Button onClick={this.props.handleClick} >
                <Line />
            </Button>
        );
    }
};

export default MenuButton;