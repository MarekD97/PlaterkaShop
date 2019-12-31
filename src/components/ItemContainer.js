import React from 'react';

class ItemContainer extends React.Component {
    render() {
        const id = this.props.match.params.id.substring(1);
        const product = this.props.data[id];
        if (product === undefined) {
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
                    backgroundColor: '#F4F4F4',
                    transition: 'transform 0.6s ease-in-out'
                },
                title: {
                    textAlign: 'left',
                    margin: 0,
                    fontSize: '1.4em'
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
                <div className="item-container">
                    {product.images.map(item =>
                        <img
                            key={item.key}
                            src={window.location.origin + item}
                            alt="Zdjęcie produktu"
                            style={styles.image} />
                    )}
                    <div style={{ padding: '0 1em' }}>
                        <h3 style={styles.title}>{product.title}</h3>
                        <p style={styles.p}>{product.price}</p><br />
                        <h3 style={styles.h3}>Materiał</h3>
                        <p style={styles.p}>{product.material}</p><br />
                        <h3 style={styles.h3}>Gramatura</h3>
                        <p style={styles.p}>{product.weight}</p><br />
                        <h3 style={styles.h3}>Opis</h3>
                        {product.description.map(item => <p key={item.key} style={styles.p}>{item}</p>)}<br />
                        <h3 style={styles.h3}>Rozmiary</h3>
                        {product.category !== 'others' ?
                            <a href={product.measurements}>
                                LINK
                            </a>

                            : <p style={styles.p}>{product.measurements}</p>}
                    </div>
                </div>
            );
        }
    }
};

export default ItemContainer;