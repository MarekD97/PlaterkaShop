import React from 'react';
import styled from 'styled-components';

class ItemContainer extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        const id = this.props.match.params.id.substring(1);
        const product = this.props.data[id];
        const Container = styled.div`
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                @media only screen and (min-width: 576px) {
                    flex-direction: row;
                }
            `;
        if (product === undefined) {
            return (
                <Container>
                    <div className="header">
                        <h1>Taki produkt nie istnieje</h1>
                    </div>
                </Container>)
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
                <Container>
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
                        {product.material !== undefined ? <h3 style={styles.h3}>Materiał</h3> : null}
                        {product.material !== undefined ? <p style={styles.p}>{product.material}</p> : null}
                        <br />
                        {product.weight !== undefined ? <h3 style={styles.h3}>Gramatura</h3> : null}
                        {product.weight !== undefined ? <p style={styles.p}>{product.weight}</p> : null}
                        <br />
                        {product.description.length > 0 ? <h3 style={styles.h3}>Opis</h3> : null}
                        {product.description.length > 0 ? product.description.map(item => <p key={item.key} style={styles.p}>{item}</p>) : null}
                        <br />
                        {product.measurements !== undefined ? <h3 style={styles.h3}>Rozmiary</h3> : null}
                        {product.category !== 'others' ?
                            <a href={product.measurements}>
                                LINK
                            </a>

                            : product.measurements !== undefined ? <p style={styles.p}>{product.measurements}</p> : null}
                    </div>
                </Container>
            );
        }
    }
};

export default ItemContainer;