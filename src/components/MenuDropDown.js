import React from 'react';
import MenuLink from './MenuLink.js';

class MenuDropDown extends React.Component {
    render() {
        const styles = {
            menu: {
                position: 'absolute',
                top: '78px',
                left: 0,
                width: '100%',
                backgroundColor: '#ffffff',
                transform: this.props.visible ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.3s ease-in-out',
                zIndex: -1
            },
            ul: {
                listStyleType: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row'
            },
            li: {
                padding: '0 1em'
            },
            link: {
                textDecoration: 'none',
                color: '#000000'
            }
        }
        return (
            <div style={styles.menu}>
                <ul style={styles.ul}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
};

export default MenuDropDown;