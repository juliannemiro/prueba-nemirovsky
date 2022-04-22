import React from 'react';
import './ItemListContainer.css'
import ItemCount from '../itemCount';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <ItemCount stock={5} inicial={1} />
        </div>
    );
};

export default ItemListContainer;