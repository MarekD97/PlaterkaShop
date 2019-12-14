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
                    width: '436px',
                    height: '436px',
                    objectFit: 'contain',
                    margin: 0,
                    backgroundColor: '#F4F4F4'
                },
                title: {
                    textAlign: 'left',
                    margin: 0,
                    fontSize: '1.4em'
                },
                div: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                },
                header: {
                    padding: '0 1em',
                },
                h3: {
                    margin: 0,
                    fontWeight: 'bold'
                },
                p: {
                    margin: 0
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
                            <h3 style={styles.title}>{data[id].title}</h3>
                            <p style={styles.p}>{data[id].price}</p><br />
                            <h3 style={styles.h3}>Materiał</h3>
                            <p style={styles.p}>{data[id].material}</p><br />
                            <h3 style={styles.h3}>Gramatura</h3>
                            <p style={styles.p}>{data[id].weight}</p><br />
                            <h3 style={styles.h3}>Opis</h3>
                            {data[id].description.map(item => <p style={styles.p}>{item}</p>)}<br />
                            <h3 style={styles.h3}>Rozmiary</h3>
                            <p style={styles.p}>{data[id].measurements}</p>
                        </div>
                    </div>
                </div >
            );
        }
    }
};

export default List;