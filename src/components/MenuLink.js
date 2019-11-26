import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class MenuLink extends React.Component {
    render() {
        const styles = {
            link: {
                textDecoration: 'none',
                color: '#000000'
            },
            li: {
                margin: '0 1.5em',
                transition: 'text-shadow 0.3s ease-in-out',
                transition: 'transform 0.3s ease-in-out',
                color: '#000000',
                textDecoration: 'none'
            }
        }
        return (
            <li style={styles.li}>
                <Link to={this.props.linkTo} onClick={this.props.onClick} style={styles.link}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
};

export default MenuLink;