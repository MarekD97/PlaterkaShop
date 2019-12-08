import React from 'react';
import data from '../data.json';

class List extends React.Component {
    render() {
        JSON.parse(JSON.stringify(data));
        const id = this.props.location.pathname.substring(9, this.props.location.pathname.length);
        if (data[id] == undefined) {
            return (
                <div className="content">
                    <div className="header">
                        <h1>Taki produkt nie istnieje</h1>
                    </div>
                </div>)
        } else {
            const styles = {
                image: {
                    width: '370px',
                    height: '400px',
                    objectFit: 'contain',
                    margin: 0
                },
                h1: {
                    textAlign: 'left',
                    padding: '0.4em 0 0.4em 1.6em',
                    margin: 0,
                    marginBottom: '1.6em'
                },
                description: {
                    padding: '1em 0',
                    textAlign: 'justify',
                    whiteSpace: 'pre-wrap'
                },
                div: {
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'row'
                },
                flex: {
                    flexShrink: 1
                }
            }
            return (
                <div className="content">
                    <div className="header">
                        <h1>{data[id].title}</h1>
                    </div>
                    <div style={styles.div}>
                        <div style={styles.flex}>
                            <img
                                src={window.location.origin + data[id].frontImage}
                                className="objectImage"
                                style={styles.image} />
                        </div>
                        <div style={styles.flex}>
                            <p style={styles.description}>
                                {data[id].description.map(item => <p>{item}</p>
                                )}</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
};

export default List;