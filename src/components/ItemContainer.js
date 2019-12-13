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
                div: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                },
                header: {
                    padding: '0 1em',
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
                            {data[id].description.map(item => <p>{item}</p>)}
                            <p>Materiał: {data[id].material}</p>
                            <p>Gramatura: {data[id].weight}</p>
                            <p>Rozmiary: {data[id].measurements}</p>
                        </div>
                    </div>
                </div >
            );
        }
    }
};

export default List;