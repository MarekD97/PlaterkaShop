import React from 'react';

const Footer = () => {
    const styles = {
        footer: {
            display: 'flex',
            justifyContent: 'center',
            background: 'linear-gradient(to bottom, #ffffff, #f4f4f4)',
            position: 'absolute',
            bottom: 0,
            height: '3rem',
            width: '100%'
        }
    }
    return (
        <div style={styles.footer}>
            <p>© 2020 Created by Marek Dorosz</p>
        </div>
    );
}

export default Footer;