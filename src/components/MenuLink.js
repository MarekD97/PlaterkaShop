import React from 'react';
import { Link } from 'react-router-dom';

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
                    onClick={this.props.handleClick}
                    className={styles.linkItem}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
};

export default MenuLink;