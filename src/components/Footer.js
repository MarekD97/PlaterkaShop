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
            <>
                <a className="socialMedia" href="https://www.facebook.com/marcin.gordziejewski.9?fref=hovercard&hc_location=chat">
                    <img
                        src="https://image.flaticon.com/icons/svg/124/124010.svg"
                        width="48"
                        height="48"
                        style={{ backgroundColor: '#ffffff' }} />
                    <div className="socialMediaText">
                        Zajrzyj na mój profil ;)
                    </div>
                </a>

                <div style={styles.footer}>
                    <p>© 2019 Created by Marek Dorosz</p>
                </div>
            </>
        );
    }
};

export default Footer;