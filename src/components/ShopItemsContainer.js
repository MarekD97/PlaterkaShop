import React from 'react';
import ShopItem from './ShopItem.js';

class ShopItemsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
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
                textAlign: 'left',
                padding: window.innerWidth < 576 ? '1em 1em 0 1em' : '0 6em',
                width: '100%'
            },
            container: {
                display: 'flex',
                alignItems: 'center',
                flexFlow: 'row wrap',
                justifyContent: 'center'
            }
        }
        return (
            <div style={styles.container} >
                <h1 style={styles.header}>Odzież i akcesoria z Twojej szkoły</h1>
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
};

export default ShopItemsContainer;