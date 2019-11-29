import React from 'react';

class Footer extends React.Component {
    render() {
        const styles = {
            footer: {
                display: 'flex',
                justifyContent: 'center',
                background: 'linear-gradient(to bottom, #ffffff, #f0f0f0)',
                position: 'absolute',
                bottom: 0,
                height: '3rem',
                width: '100%'
            }
        }
        return (
            <div style={styles.footer}>
                <p>© 2019 Created by Marek Dorosz</p>
            </div>
        );
    }
};

export default Footer;