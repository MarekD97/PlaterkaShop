import React from 'react';
import data from '../templateData.json';

class List extends React.Component {
    render() {
        JSON.parse(JSON.stringify(data));
        const id = this.props.location.pathname.substring(4, this.props.location.pathname.length);
        console.log(data[0].description);
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
                    width: '370',
                    height: '400px',
                    objectFit: 'contain',
                    margin: 0,
                    transform: 'scale(1.4)'
                },
                h1: {
                    textAlign: 'left',
                    padding: '0.4em 0 0.4em 1.6em',
                    margin: 0,
                    marginBottom: '1.6em'
                },
                div: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    overflow: 'hidden'
                },
                header: {
                    padding: '0 1em',
                },
                h3: {
                    fontWeight: 'bold'
                }
            }
            return (
                <div className="content">
                    <div style={styles.div} className="divider">
                        <img
                            src={window.location.origin + data[id].images[0]}
                            className="objectImage"
                            style={styles.image} />
                        <div style={{ padding: '0 1em' }}>
                            <h1>{data[id].title}</h1>
                            <h3 style={styles.h3}>Opis</h3>
                            {data[id].description.map(item => <p>{item}</p>)}
                            <h3 style={styles.h3}>Materiał</h3>
                            <p>{data[id].material}</p>
                            <h3 style={styles.h3}>Gramatura</h3>
                            <p>{data[id].weight}</p>
                            <h3 style={styles.h3}>Rozmiary</h3>
                            <p>{data[id].measurements}</p>
                        </div>
                    </div>
                </div >
            );
        }
    }
};

export default List;