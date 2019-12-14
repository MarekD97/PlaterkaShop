import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './MenuBar.css';

class ItemList extends React.Component {
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
                // borderRadius: '0.4em',
                textDecoration: 'none',
                color: '#000000',
                width: '336px',
                height: '383px',
                display: 'flex',
                flexDirection: 'column',
                borderStyle: 'none'
                // boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'
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

export default ItemList;