import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class MenuLink extends React.Component {
    render() {
        const styles = {
            linkItem: {
                textDecoration: 'none',
                color: '#000000'
            },
            link: 'menu-link'
        }
        const LinkContainer = styled.li`
            margin: 1.4em 0;
            transition: text-shadow 0.3s ease-in-out;
            transition: transform 0.3s ease-in-out;
            color: #000000;
            text-decoration: none;
            &:hover {
                text-shadow: 1px 1px 24px #080808;
                cursor: pointer;
                transform: scale(1.1);
            }
            @media only screen and (min-width: 576px) {
                margin: 0 1.5em;
            }
        `;
        return (
            <LinkContainer>
                <Link
                    to={this.props.linkTo}
                    onClick={this.props.handleClick}
                    style={styles.linkItem}>
                    {this.props.children}
                </Link>
            </LinkContainer>
        );
    }
};

export default MenuLink;