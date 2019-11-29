import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            source: this.props.front,
            descriptionOpacity: 0
        };
    }
    render() {
        const divStyle = {
            margin: '1em',
            borderRadius: '0.4em'
        }
        const imageStyle = {
            width: '370px',
            height: '400px',
            objectFit: 'cover',
            margin: 0
        };
        const h3Style = {
            textAlign: 'left',
            padding: '0.4em 0 0.4em 1.6em',
            margin: 0,
            marginBottom: '1.6em'
        };
        let descriptionStyle = {
            position: 'absolute',
            bottom: '3em',
            background: 'linear-gradient(to top, #ffffff, #f0f0f0a0)',
            width: '100%',
            padding: '1em 0',
            textAlign: 'center',
            opacity: this.state.descriptionOpacity
        }
        return (
            <Link
                to={`/product/${this.props.id}`}
                className="object"
                style={divStyle}>
                <img
                    src={this.state.source}
                    className="objectImage"
                    style={imageStyle}
                    onMouseEnter={() => {
                        this.setState({
                            source: this.props.back,
                            descriptionOpacity: 1
                        });
                    }}
                    onMouseOut={() => {
                        this.setState({
                            source: this.props.front,
                            descriptionOpacity: 0
                        });
                    }} />
                <p style={descriptionStyle}>{this.props.description}</p>
                <h3 style={h3Style}>{this.props.children}</h3>
            </Link>
        );
    }
};

export default ItemList;