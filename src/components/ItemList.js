import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './MenuBar.css';

class ItemList extends React.Component {
    render() {
        const styles = {
            h3: {
                padding: '1em 0'
            },
            p: {
                color: '#cc0000'
            },
            div: {
                width: '100%',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            },
            imgContainer: {
                margin: 0,
                overflow: 'hidden'
            },
            item: {
                margin: '1em',
                borderRadius: '0.4em',
                textDecoration: 'none',
                color: '#000000',
                width: '360px',
                height: '640px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'
            }
        }
        return (
            <Link
                to={`/id:${this.props.id}`}
                className="object"
                style={styles.item}>
                <div style={styles.imgContainer}>
                    <img
                        src={this.props.front}
                        className="objectImage"
                        style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.4)' }} />
                </div>
                <div style={styles.div}>
                    <h3 style={styles.h3}>{this.props.children}</h3>
                    <p style={styles.p}>{this.props.price}</p>
                </div>
            </Link>
        );
    }
};

export default ItemList;