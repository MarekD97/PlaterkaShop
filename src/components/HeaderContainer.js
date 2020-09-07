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
                <MenuLink linkTo="/" handleClick={this.handleClick}>Start</MenuLink>
                <MenuLink linkTo="/bluzy" handleClick={this.handleClick}>Bluzy</MenuLink>
                {/* <MenuLink linkTo="/koszulki" handleClick={this.handleClick}>Koszulki</MenuLink>
                <MenuLink linkTo="/akcesoria" handleClick={this.handleClick}>Akcesoria</MenuLink>
                <MenuLink linkTo="/kontakt" handleClick={this.handleClick}>Kontakt</MenuLink> */}
            </Header>
        );
    }
};

export default HeaderContainer;