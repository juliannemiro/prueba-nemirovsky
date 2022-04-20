import React from 'react';
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <p>
            <h2> {greeting} </h2>
        </p>
    );
};

export default ItemListContainer;