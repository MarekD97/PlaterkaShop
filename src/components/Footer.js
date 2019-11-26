import React from 'react';

class Footer extends React.Component {
    render() {
        const styles = {
            footer: {
                display: 'flex',
                padding: '0 0 0 4em',
                background: 'linear-gradient(to bottom, #ffffff, #f0f0f0)'
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