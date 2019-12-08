import React from 'react';
import MenuBar from './MenuBar.js';
import Footer from './Footer.js';
import MenuButton from './MenuButton.js';
import MenuLink from './MenuLink.js';
import { data } from '../data.js';

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
        var jakis_string = JSON.stringify(data)
        console.log(jakis_string)
        // var obiekt_JSON = JSON.parse(jakis_string)
        // console.log(obiekt_JSON)
        // var frontImage = obiekt_JSON[0].title
        // for (var obj in obiekt_JSON) {
        //     console.log(obj['title'])
        // }
        const styles = {
            logo: {
                width: "100%",
                height: "100%",
            }
        }
        return (
            <div style={{ position: 'relative', minHeight: '100vh' }}>
                <MenuButton active={this.state.isMenuOpen} handler={this.handleClick} />
                <div className={this.state.isMenuOpen ? "menu-logo" : "menu-logo menu-logo-hidden"}>
                    <img src={require('../images/logo.png')} style={styles.logo} />
                </div>
                <MenuBar active={this.state.isMenuOpen}>
                    <MenuLink linkTo="/" onClick={this.handleClick}>Wszystko</MenuLink>
                    <MenuLink linkTo="/male" onClick={this.handleClick}>Chłopak</MenuLink>
                    <MenuLink linkTo="/female" onClick={this.handleClick}>Dziewczyna</MenuLink>
                    <MenuLink linkTo="/" onClick={this.handleClick}>Inne</MenuLink>
                    <MenuLink linkTo="/contact" onClick={this.handleClick}>Kontakt</MenuLink>
                </MenuBar>
                <div style={{ paddingBottom: '3rem' }}>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
};

export default Main;