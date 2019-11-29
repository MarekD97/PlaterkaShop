import React from 'react';
import MenuBar from './MenuBar.js';
import Footer from './Footer.js';
import MenuButton from './MenuButton.js';
import MenuLink from './MenuLink.js';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }
    render() {
        const styles = {
            logo: {
                width: "100%",
                height: "100%",
            }
        }
        return (
            <>
                <MenuButton active={this.state.isMenuOpen} handler={this.handleClick} />
                <div className={this.state.isMenuOpen ? "menu-logo" : "menu-logo menu-logo-hidden"}>
                    <img src={require('../images/logo.png')} style={styles.logo} />
                </div>
                <MenuBar active={this.state.isMenuOpen}>
                    <MenuLink linkTo="/" onClick={this.handleClick}>Wszystko</MenuLink>
                    <MenuLink linkTo="/" onClick={this.handleClick}>Chłopak</MenuLink>
                    <MenuLink linkTo="/" onClick={this.handleClick}>Dziewczyna</MenuLink>
                    <MenuLink linkTo="/" onClick={this.handleClick}>Inne</MenuLink>
                    <MenuLink linkTo="/contact" onClick={this.handleClick}>Kontakt</MenuLink>
                </MenuBar>
                {this.props.children}
                <Footer />
            </>
        );
    }
};

export default Main;