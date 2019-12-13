import React from 'react';
import ItemList from './ItemList.js';
import data from '../templateData.json';

class List extends React.Component {
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
        JSON.parse(JSON.stringify(data));
        console.log(data);
        var path = this.props.location.pathname.substring(1, this.props.location.pathname.length);
        console.log(path);
        var itemFilter = data.filter((item, index) => {
            if (this.state.search != '')
                return item.title.toLowerCase().search(this.state.search) !== -1;
            else {
                if (path == "meska")
                    return item.gender == "m";
                else if (path == "damska")
                    return item.gender == "k";
                else if (path == "akcesoria")
                    return item.gender == "u";
                else
                    return item;
            }
        });
        const styles = {
            header: {
                textAlign: 'left',
                padding: window.innerWidth < 576 ? '1em 1em 0 1em' : '0 6em',
                width: '100%'
            }
        }
        return (
            <div className="content">
                <h1 style={styles.header}>Odzież i akcesoria z Twojej szkoły</h1>
                {itemFilter.map((item, index) =>
                    <ItemList
                        key={index}
                        id={item.id}
                        front={window.location.origin + item.images[0]}
                        price={item.price}
                        description={item.description}>
                        {item.title}
                    </ItemList>
                )}
            </div>
        )
    }
};

export default List;