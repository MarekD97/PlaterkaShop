import React from 'react';
import './App.css';

export class ContactPage extends React.Component {
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
          <h3>Kontakt z właścicielem strony:</h3>
          <p>Marcin Gordziejewski tel. XXX XXX XXX</p>
          <h3>Kontakt z autorem strony:</h3>
          <p>Marek Dorosz: <u>mdorosz2@wp.pl</u></p>
        </div>
      </div>
    )
  }
}

export class OthersPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          Coś tam
        </div>
      </div>
    );
  }
};
