import React from 'react';

class Contact extends React.Component {
    render() {
        const contactStyle = {
            width: '100%',
            display: '-webkit-box',
            display: '-moz-box',
            display: '-ms-flexbox',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '4em'
        }
        return (
            <div>
                <div style={contactStyle}>
                    <h3>Właściciel strony:</h3>
                    <p>Marcin Gordziejewski</p>
                    <h3>Autor strony:</h3>
                    <p>Marek Dorosz: <u>mdorosz2@wp.pl</u></p>
                </div>
            </div>
        )
    }
}

export default Contact;