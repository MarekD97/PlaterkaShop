import React from 'react';
import './MenuBar.css';
import MenuButton from './MenuButton.js';
import MenuLink from './MenuLink.js';

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            scrolled: false,
            openMenu: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.dropDownMenu = this.dropDownMenu.bind(this);
    }
    handleClick(e) {
        this.setState({ isOpen: !this.state.isOpen });
        this.setState({ openMenu: false });
    }
    dropDownMenu() {
        this.setState({ openMenu: !this.state.openMenu });
    }
    render() {
        const styles = {
            logo: {
                width: "100%",
                height: "100%",
            },
            menuDropDown: {
                marginTop: 0,
            }
        }
        return (
            <div>
                <MenuButton isOpen={this.state.isOpen} handler={this.handleClick} />
                <div className={this.state.isOpen ? "menu-logo" : "menu-logo menu-logo-hidden"}>
                    <img src={require('../images/logo.png')} style={styles.logo} />
                </div>
                <nav className={this.state.isOpen ? "menu-bar" : "menu-bar menu-hidden"} >
                    <ul className="menu-items">
                        <MenuLink linkTo="/" onClick={this.handleClick}>Wszystko</MenuLink>
                        <MenuLink linkTo="/" onClick={this.handleClick}>Chłopak</MenuLink>
                        <MenuLink linkTo="/" onClick={this.handleClick}>Dziewczyna</MenuLink>
                        <MenuLink linkTo="/others" onClick={this.handleClick}>Inne</MenuLink>
                        <MenuLink linkTo="/contact" onClick={this.handleClick}>Kontakt</MenuLink>
                    </ul>
                </nav>
            </div>
        );
    }
};

export default MenuBar;