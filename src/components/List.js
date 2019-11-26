import React from 'react';
import ItemList from './ItemList.js';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        const data = [{
            title: 'Bluza beżowa',
            frontImage: require('../images/products/male/m01_front.png'),
            backImage: require('../images/products/male/m01_back.png'),
            description: 'Bluza jest beżowa',
            gender: 'male'
        },
        {
            title: 'Bluza beżowa z ramką',
            frontImage: require('../images/products/male/m02_front.png'),
            backImage: require('../images/products/male/m02_back.png'),
            description: 'Bluza jest beżowa z ramką',
            gender: 'male'
        },
        {
            title: 'Bluza bordowa',
            frontImage: require('../images/products/male/m03_front.png'),
            backImage: require('../images/products/male/m03_back.png'),
            description: 'Bluza jest bordowa',
            gender: 'male'
        },
        {
            title: 'Bluza bordowa z ramką',
            frontImage: require('../images/products/male/m04_front.png'),
            backImage: require('../images/products/male/m04_back.png'),
            description: 'Bluza jest bordowa z ramką',
            gender: 'male'
        },
        {
            title: 'Bluza czarna',
            frontImage: require('../images/products/male/m05_front.png'),
            backImage: require('../images/products/male/m05_back.png'),
            description: 'Bluza jest czarna',
            gender: 'male'
        },
        {
            title: 'Bluza czarna z ramką',
            frontImage: require('../images/products/male/m06_front.png'),
            backImage: require('../images/products/male/m06_back.png'),
            description: 'Bluza jest czarna z ramką',
            gender: 'male'
        },
        {
            title: 'Bluza bordowa z ramką',
            frontImage: require('../images/products/male/m07_front.png'),
            backImage: require('../images/products/male/m07_back.png'),
            description: 'Bluza jest bordowa z ramką',
            gender: 'male'
        }];
        return (
            <div className="content">
                <div className="header">
                    <h1>Bluzy i Koszulki</h1>
                </div>
                {data.map((item) =>
                    <ItemList
                        front={item.frontImage}
                        back={item.backImage}
                        price={item.price}
                        description={item.description}>
                        {item.title}
                    </ItemList>)}
            </div>
        );
    }
};

export default List;