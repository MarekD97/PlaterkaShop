import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './MenuBar.css';
import Hamburger from './Hamburger.js';

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        const linkStyle = {
            textDecoration: 'none',
            color: '#000000'
        }
        let menuItemsStyle = "menuItems";
        let menuLogoStyle = "menuLogo";
        if (!this.state.isOpen) {
            menuItemsStyle += " menu-hidden";
            menuLogoStyle += " menu-logo-hidden";
        }
        return (
            <div>
                <nav className="menuBar">
                    <div className={menuLogoStyle}>Platerka</div>
                    <Hamburger isOpen={this.state.isOpen} handler={this.handleClick} />
                    <ul className={menuItemsStyle}>
                        <li className="menuItem" >
                            <Link to="/" style={linkStyle} onClick={this.handleClick}>Wszystko</Link>
                        </li>
                        <li className="menuItem">Chłopak</li>
                        <li className="menuItem">Dziewczyna</li>
                        <li className="menuItem">
                            <Link to="/others" style={linkStyle} onClick={this.handleClick}>Inne</Link>
                        </li>
                        <li className="menuItem">
                            <Link to="/contact" style={linkStyle} onClick={this.handleClick}>Kontakt</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
};

export default MenuBar;