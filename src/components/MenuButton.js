import React from 'react';
import './MenuButton.css';

class MenuButton extends React.Component {

    render() {
        return (
            <button className="menu-button" onClick={this.props.handler}>
                <div className={this.props.isOpen ? "menu-button-line is-open" : "menu-button-line"}></div>
            </button>
        );
    }
};

export default MenuButton;