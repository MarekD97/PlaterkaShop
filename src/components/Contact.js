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
            paddingTop: '4em'
        }
        return (
            <div style={contactStyle}>
                <h3>Sklep z bluzami i koszulkami Platerki:</h3>
                <p>Marcin Gordziejewski</p>
                <a href="https://www.facebook.com/marcin.gordziejewski.9">
                    <img
                        src="https://image.flaticon.com/icons/svg/124/124010.svg"
                        width="48"
                        height="48"
                        style={{ backgroundColor: '#ffffff' }} />
                </a>
                <p>Zuzia Pawłowska</p>
                <a href="https://www.facebook.com/profile.php?id=100006640781491">
                    <img
                        src="https://image.flaticon.com/icons/svg/124/124010.svg"
                        width="48"
                        height="48"
                        style={{ backgroundColor: '#ffffff' }} />
                </a>
                <h3>Autor strony:</h3>
                <p>Marek Dorosz</p>
                <a href="mailto:mdorosz2@wp.pl"><u>mdorosz2@wp.pl</u></a>
            </div>
        )
    }
}

export default Contact;