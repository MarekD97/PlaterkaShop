import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ItemList extends React.Component {
    render() {
        const divStyle = {
            margin: '1em',
            borderRadius: '0.4em',
            textDecoration: 'none',
            color: '#000000',
            width: '360px',
            height: '560px',
            display: 'flex',
            flexDirection: 'column'
        }
        const imageStyle = {
            margin: 0
        };
        const h3Style = {
            boxSizing: 'border-box',
            width: '100%',
            textAlign: 'center',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 1em'
        };
        let descriptionStyle = {
            position: 'absolute',
            bottom: '3em',
            background: 'linear-gradient(to top, #ffffff, #f0f0f0a0)',
            width: '100%',
            padding: '1em 0',
            textAlign: 'center',
            display: 'none'
        }
        return (
            <Link
                to={`/product/${this.props.id}`}
                className="object"
                style={divStyle}>
                <div style={imageStyle}>
                    <img
                        src={this.props.front}
                        className="objectImage"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={h3Style}>
                    <h3>{this.props.children}</h3>
                </div>
            </Link>
        );
    }
};

export default ItemList;