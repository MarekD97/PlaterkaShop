import React from 'react';

class List extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="header">
                    <h1>Bluzy i Koszulki</h1>
                </div>
                <Element
                    front="https://drive.google.com/uc?id=1kSDgP5KxulcSwELCF-8ppAVRwv2a0G8w"
                    back="https://drive.google.com/uc?id=12ipnU0nX6jpN0mz1cw3s4BKJBoAdtbsN"
                    price="79.99"
                >Bluza beżowa</Element>
                <Element
                    front="https://drive.google.com/uc?id=1EzmYBoDWq26ICq1zn67CruCoSllcnJ3Z"
                    back="https://drive.google.com/uc?id=1gKnECGJ7qDLWZaQO_k9_zMcMzgnH7Onj"
                >Bluza beżowa z ramką</Element>
                <Element
                    front="https://drive.google.com/uc?id=1z82jrL_8BbgoYgGPpQzLRMxonlR6dhjn"
                    back="https://drive.google.com/uc?id=1v5X90Wjj2I-a08MYj14uU0zI73FX8llq"
                >Bluza bordowa</Element>
                <Element
                    front="https://drive.google.com/uc?id=1icJa0uBTJYscjiQy5HZslk9FohGjPeaQ"
                    back="https://drive.google.com/uc?id=1x_845picNQzh5Xr1_L7SzEt3BJABcnXP"
                >Bluza bordowa z ramką</Element>
                <Element
                    front="https://drive.google.com/uc?id=1MoDvWzLVp_kISIYeH6yIbe17bciKZCT8"
                    back="https://drive.google.com/uc?id=1Qyd0p_NozU6u8fac6MdulY3-GLrNNbHl"
                >Bluza czarna</Element>
                <Element
                    front="https://drive.google.com/uc?id=1rVYpeFddHmgYqLPHrcAcTQ1VCkyu7l0v"
                    back="https://drive.google.com/uc?id=18EIE0E2R3vC7LoBPjEiuNZwvUKEHvYCj"
                >Bluza czarna z ramką</Element>
            </div>
        );
    }
};

class Element extends React.Component {
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
            margin: 0
        };
        const priceStyle = {
            color: '#f06060',
            padding: '0 0 0.8em 1.9em',
            margin: 0
        }
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
            <div className="object" style={divStyle}>
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
                <p style={descriptionStyle}>Opis produktu</p>
                <h3 style={h3Style}>{this.props.children}</h3>
                <p style={priceStyle}>{this.props.price} zł</p>
            </div>
        );
    }
};

Element.defaultProps = {
    price: '0.00'
};

export default List;