import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }
    render() {
        const { status } = this.state;
        const styles = {
            container: {
                background: '#f4f4f4',
                padding: '0.7em'
            },
            form: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
            },
            input: {
                padding: '0.5em',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: '2px',
                borderColor: '#0f0f0f',
                fontSize: '1em'
            },
            textarea: {
                padding: '0.5em',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: '2px',
                resize: 'vertical',
                marginBottom: '1em',
                borderColor: '#0f0f0f'
            },
            button: {
                width: '50%',
                marginLeft: 'auto',
                padding: '0.5em',
                borderRadius: '2px',
                borderStyle: 'solid',
                borderWidth: '1px',
                fontSize: '1em'
            }
        }
        return (
            <div style={styles.container}>
                <h3>Formularz zgłoszeniowy</h3>
                <p>Podaj swoje dane, w wiadomości napisz co chcesz zamówić:</p>
                <form
                    style={styles.form}
                    onSubmit={this.submitForm}
                    action="https://formspree.io/mzbgkazd"
                    method="POST"
                >
                    <label>Imię:</label>
                    <input type="text" name="firstname" style={styles.input} />
                    <label>Nazwisko:</label>
                    <input type="text" name="lastname" style={styles.input} />
                    <label>Klasa:</label>
                    <input type="text" name="class" style={styles.input} />
                    <label>Email:</label>
                    <input type="email" name="email" style={styles.input} />
                    <label>Wiadomość:</label>
                    <textarea type="text" name="message" rows="3" style={styles.textarea} />
                    {status === "SUCCESS" ? <p>Wiadomość została wysłana</p> : <button style={styles.button}>Wyślij</button>}
                    {status === "ERROR" && <p>Ups! Wystąpił błąd</p>}
                </form>
            </div>
        )
    }
    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

}

export default ContactForm;