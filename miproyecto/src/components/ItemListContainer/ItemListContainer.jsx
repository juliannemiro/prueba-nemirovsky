import React, { useEffect, useState } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import getData from './data.js';

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        getData
        .then((response) => setProductos(response))
        // .catch((error)=> console.log=("error al obtener los productos: "), error)
    }, []);

    return (
        <div>
            
        <ItemList productos={productos} />
           
        </div>
    );
};

export default ItemListContainer;