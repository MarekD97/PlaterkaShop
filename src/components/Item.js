import React from 'react';
import { data } from '../data.js'

class List extends React.Component {
    render() {
        const id = this.props.location.pathname.substring(9, this.props.location.pathname.length);
        if (data[id] == undefined) {
            return (
                <div className="content">
                    <div className="header">
                        <h1>Taki produkt nie istnieje</h1>
                    </div>
                </div>)
        } else {
            const imageStyle = {
                width: '370px',
                height: '400px',
                objectFit: 'contain',
                margin: 0
            };
            const h3Style = {
                textAlign: 'left',
                padding: '0.4em 0 0.4em 1.6em',
                margin: 0,
                marginBottom: '1.6em'
            };
            let descriptionStyle = {
                width: '100%',
                padding: '1em 0',
                textAlign: 'center',
                opacity: 1
            }
            return (
                <div className="content">
                    <div className="header">
                        <h1>{data[id].title}</h1>
                    </div>
                    <img
                        src={data[id].frontImage}
                        className="objectImage"
                        style={imageStyle} />
                    <p style={descriptionStyle}>{data[id].description}</p>
                </div>
            );
        }
    }
};

export default List;