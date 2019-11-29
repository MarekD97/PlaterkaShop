import React from 'react';
import './MenuBar.css';

class MenuBar extends React.Component {
    render() {
        const styles = {
            nav: this.props.active ? "menu-bar" : "menu-bar menu-hidden",
            ul: 'menu-items'
        }
        return (
            <nav className={styles.nav} >
                <ul className={styles.ul}>
                    {this.props.children}
                </ul>
            </nav>
        );
    }
};

export default MenuBar;