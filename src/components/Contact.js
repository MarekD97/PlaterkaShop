import React from 'react';
import ContactForm from './ContactForm.js';
import styled from 'styled-components';

class Contact extends React.Component {
    render() {
        const styles = {
            fbLink: {
                display: 'flex',
                flexDirection: 'row',
                padding: '0.7em',
                textDecoration: 'none',
                color: '#000000'
            },
            fbLabel: {
                marginLeft: '1em'
            }
        }
        const Container = styled.div`
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            @media only screen and (min-width: 576px) {
                flex-direction: row;
            }
        `;
        const Content = styled.div`
            padding: 0.7em;
            @media only screen and (min-width: 576px) {
                margin-left: 3em;
            }
        `;
        return (
            <Container>
                <ContactForm />
                <Content>
                    <h3>Zapisy również u osób:</h3>
                    <a style={styles.fbLink} href="https://www.facebook.com/marcin.gordziejewski.9">
                        <img
                            src="https://image.flaticon.com/icons/svg/124/124010.svg"
                            width="48"
                            height="48"
                            alt="logo Facebook"
                            style={{ backgroundColor: '#ffffff' }} />
                        <p style={styles.fbLabel}>Marcin Gordziejewski</p>
                    </a>
                    <a style={styles.fbLink} href="https://www.facebook.com/profile.php?id=100006640781491">
                        <img
                            src="https://image.flaticon.com/icons/svg/124/124010.svg"
                            width="48"
                            height="48"
                            alt="logo Facebook"
                            style={{ backgroundColor: '#ffffff' }} />
                        <p style={styles.fbLabel}>Zuzia Pawłowska</p>
                    </a>

                    <h3>Autor strony:</h3>
                    <p>Marek Dorosz: <a href="mailto:marekdorosz9@gmail.com"><u>marekdorosz9@gmail.com</u></a></p>
                </Content>
            </Container>
        )
    }
}

export default Contact;