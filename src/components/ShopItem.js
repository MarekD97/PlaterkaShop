import React from 'react';
import { Link } from 'react-router-dom';

class ShopItem extends React.Component {
    render() {
        const styles = {
            h3: {
                margin: 0
            },
            p: {
                margin: 0
            },
            div: {
                width: '100%',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.4em 0'
            },
            imgContainer: {
                margin: 0,
                overflow: 'hidden',
                backgroundColor: '#F4F4F4'
            },
            item: {
                margin: '16px 8px',
                textDecoration: 'none',
                color: '#000000',
                width: '336px',
                height: '383px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out'
            }
        }
        return (
            <Link
                to={`/id:${this.props.id}`}
                style={styles.item}>
                <div style={styles.imgContainer}>
                    <img
                        src={this.props.source}
                        alt="Zdjęcie produktu"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={styles.div}>
                    <h3 style={styles.h3}>{this.props.children}</h3>
                    <p style={styles.p}>{this.props.price}</p>
                </div>
            </Link>
        );
    }
};

export default ShopItem;