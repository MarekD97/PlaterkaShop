import React from 'react';
import ItemList from './ItemList.js';
import { data } from '../data.js'

class List extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="header">
                    <h1>Bluzy i Koszulki</h1>
                </div>
                {data.map((item, index) =>
                    <ItemList
                        key={index}
                        id={index}
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