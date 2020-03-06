import React from 'react';
import MenuButton from './MenuButton.js';
import SearchButton from './SearchButton.js';
import styled from 'styled-components';

const Nav = styled.nav`
    text-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    transition: transform 0.3s ease-in-out;
    @media only screen and (max-width: 576px) {
        transform: ${props => props.isOpen ? null : 'translateX(100%)'};
    }
`;

const Logo = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    font-size: 1em;
    color: white;
    align-items: center;
    margin: 0.3em;
    z-index: 2;
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;

    @media only screen and (max-width: 576px) {
        left: 50%;
        transform: ${props => props.isOpen ? 'scale(2) translateX(-50%)' : 'translateX(-50%) translateY(-150%) rotate(-90deg)'};
    }
`;
const MenuButtons = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 2;
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    justify-content: flex-end;
`;
const List = styled.ul`
    width: 100%;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #060606;
    list-style-type: none;
    background: #f0f0f0;
    flex-direction: column;
    padding: 1em 0;
    height: 100vh;
    @media only screen and (min-width: 576px) {
        background: linear-gradient(to top, #ffffff, #f0f0f0);
        flex-direction: row;
        padding: 1.6em 0;
        height: auto;
    }
`;
class Header extends React.Component {
    render() {
        const styles = {
            logo: {
                width: "64px",
                height: "64px",
                objectFit: 'contain'
            }
        };
        const SearchInput = styled.input`
        `;
        return (
            <div>
                <Logo isOpen={this.props.isOpen}>
                    <img src={'./images/platerkapodstawa2 (2).png'} alt='logo Platerki' style={styles.logo} />
                </Logo>
                <MenuButtons isOpen={this.props.isOpen}>
                    {/* <SearchButton visible={!this.props.isOpen} /> */}
                    <MenuButton active={this.props.isOpen} handleClick={this.props.handleClick} />
                </MenuButtons>
                <Nav isOpen={this.props.isOpen}>
                    <List>
                        {this.props.children}
                    </List>
                </Nav>
            </div>
        )
    }
}

export default Header;