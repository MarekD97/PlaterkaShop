import React from 'react';
import './Hamburger.css';

class Hamburger extends React.Component {

    render() {
        let lineClass = 'hamburger-line';
        if (this.props.isOpen) {
            lineClass += ' hamburger-open';
        }
        return (
            <button className="hamburger-button" onClick={this.props.handler}>
                <div className={lineClass}></div>
            </button>
        );
    }
};

export default Hamburger;