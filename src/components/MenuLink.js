import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './MenuLink.min.css';

class MenuLink extends React.Component {
    render() {
        const styles = {
            linkItem: 'menu-link__item',
            link: 'menu-link'
        }
        return (
            <li className={styles.link}>
                <Link
                    to={this.props.linkTo}
                    onClick={this.props.onClick}
                    className={styles.linkItem}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
};

export default MenuLink;