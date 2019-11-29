import React from 'react';
import './MenuButton.min.css';

class MenuButton extends React.Component {
    render() {
        const styles = {
            button: 'menu-button',
            line: !this.props.active ? 'menu-button__line' : 'menu-button--active'
        }
        return (
            <button className={styles.button} onClick={this.props.handler} >
                <div className={styles.line}></div>
            </button>
        );
    }
};

export default MenuButton;