import React from 'react';
import ShopItem from './ShopItem.js';

class ShopItemsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    search(e) {
        this.setState({ search: e.target.value.toLowerCase() });
        console.log(this.state.search);
    }
    render() {
        var itemFilter = this.props.data.filter(item => {
            if (this.state.search !== '')
                return item.title.toLowerCase().search(this.state.search) !== -1;
            else
                return this.props.category === '' ? item.category : item.category === this.props.category;
        });
        const styles = {
            header: {
                textAlign: 'center',
                width: '100%'
            },
            container: {
                display: 'flex',
                alignItems: 'center',
                flexFlow: 'row wrap',
                justifyContent: 'center'
            }
        }
        if (this.props.category !== 'others') {
            var itemMale = itemFilter.filter(item => {
                return item.gender === 'male';
            });
            var itemFemale = itemFilter.filter(item => {
                return item.gender === 'female';
            });
            return (
                <div style={styles.container} >
                    <h1 style={styles.header}>Męskie</h1>
                    {itemMale.map((item, index) =>
                        <ShopItem
                            key={index}
                            id={item.id}
                            source={window.location.origin + item.images[0]}
                            price={item.price}
                            description={item.description}>
                            {item.title}
                        </ShopItem>
                    )}
                    <h1 style={styles.header}>Damskie</h1>
                    {itemFemale.map((item, index) =>
                        <ShopItem
                            key={index}
                            id={item.id}
                            source={window.location.origin + item.images[0]}
                            price={item.price}
                            description={item.description}>
                            {item.title}
                        </ShopItem>
                    )}
                </div >
            )
        } else {
            return (
                <div style={styles.container} >
                    {itemFilter.map((item, index) =>
                        <ShopItem
                            key={index}
                            id={item.id}
                            source={window.location.origin + item.images[0]}
                            price={item.price}
                            description={item.description}>
                            {item.title}
                        </ShopItem>
                    )}
                </div >
            )
        }
    }
};

export default ShopItemsContainer;