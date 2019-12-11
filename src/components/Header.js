import React from 'react';
import MenuButton from './MenuButton.js';

class Header extends React.Component {
    render() {
        const styles = {
            nav: this.props.isOpen ? "menu-bar" : "menu-bar menu-hidden",
            ul: 'menu-items',
            logo: {
                width: "100%",
                height: "100%",
            }
        };
        return (
            <div>
                <MenuButton active={this.props.isOpen} handleClick={this.props.handleClick} />
                <div className={this.props.isOpen ? "menu-logo" : "menu-logo menu-logo-hidden"}>
                    <img src={'./images/logo.png'} style={styles.logo} />
                </div>
                <nav className={styles.nav} >
                    <ul className={styles.ul}>
                        {this.props.children}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;