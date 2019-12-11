import React from 'react';
import Header from './Header.js';
import MenuLink from './MenuLink.js';

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
            <Header isOpen={this.state.isOpen} handleClick={this.handleClick}>
                <MenuLink linkTo="/" handleClick={this.handleClick}>Wszystko</MenuLink>
                <MenuLink linkTo="/meska" handleClick={this.handleClick}>Chłopak</MenuLink>
                <MenuLink linkTo="/damska" handleClick={this.handleClick}>Dziewczyna</MenuLink>
                <MenuLink linkTo="/akcesoria" handleClick={this.handleClick}>Akcesoria</MenuLink>
                <MenuLink linkTo="/kontakt" handleClick={this.handleClick}>Kontakt</MenuLink>
            </Header>
        );
    }
};

export default HeaderContainer;