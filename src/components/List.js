import React from 'react';
import ItemList from './ItemList.js';
import data from '../data.json';

class List extends React.Component {
    render() {
        JSON.parse(JSON.stringify(data));
        console.log(data);
        var path = this.props.location.pathname.substring(1, this.props.location.pathname.length);
        console.log(path);
        if (path == '') {
            return (
                <div className="content">
                    <div className="header">
                        <h1>Bluzy i Koszulki</h1>
                    </div>
                    {data.map((item, index) =>
                        <ItemList
                            key={index}
                            id={item.id}
                            front={window.location.origin + item.frontImage}
                            back={window.location.origin + item.backImage}
                            price={item.price}
                            description={item.description}>
                            {item.title}
                        </ItemList>)}
                </div>
            );
        } else {
            var itemFilter = data.filter((item, index) => {
                return item.gender == path;
            });
            return (
                <div className="content">
                    <div className="header">
                        <h1>Bluzy i Koszulki</h1>
                    </div>
                    {itemFilter.map((item, index) =>
                        <ItemList
                            key={index}
                            id={item.id}
                            front={window.location.origin + item.frontImage}
                            back={window.location.origin + item.backImage}
                            price={item.price}
                            description={item.description}>
                            {item.title}
                        </ItemList>
                    )}
                </div>
            )
        }
    }
};

export default List;