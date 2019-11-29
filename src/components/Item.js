import React from 'react';
import ItemList from './ItemList.js';
import { data } from '../data.js'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event, index) {
        this.setState({ selected: true });
        console.log(this.state.selected);
        console.log(index);
    }
    render() {
        const id = this.props.location.pathname.substring(9, this.props.location.pathname.length);
        if (id == undefined) {
            return (
                <div className="content">
                    <div className="header">
                        <h1>Brak takiego produktu</h1>
                    </div>
                </div>)
        } else {
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
                width: '100%',
                padding: '1em 0',
                textAlign: 'center',
                opacity: this.state.descriptionOpacity
            }
            return (
                <div className="content">
                    <div className="header">
                        <h1>Bluzy i Koszulki</h1>
                    </div>
                    <img
                        src={data[id].frontImage}
                        className="objectImage"
                        style={imageStyle} />
                    <p style={descriptionStyle}>{data[id].description}</p>
                    <h3 style={h3Style}>{data[id].title}</h3>
                </div>
            );
        }
    }
};

export default List;