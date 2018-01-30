import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
    render() {
        var data = ["test1", "test2", "test3", "test4", "test5"];
        var itemList = data.map(item => <Item item={item} key={item} />);
        return (
            <div>
                {itemList}
            </div>
        )
    }
}

export default ItemList;