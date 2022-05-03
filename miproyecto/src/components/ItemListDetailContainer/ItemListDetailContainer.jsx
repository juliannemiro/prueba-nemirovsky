import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemListDetailContainer.css"


function getItemDetalle() {
    const myPromise = new Promise((resolve, response) => {
        const item = {
            id: 8,
            categoria: 'seleccion',
            nombre: 'Argentina',
            descripcion: 'Camiseta principal de la Selección Argentina Mundial 2018',
            imagen: 'https://sporting.vteximg.com.br/arquivos/ids/261478-1500-1500/6FS6565-000-1.jpg?v=637521098468570000',
            stock: 5,
            precio: '$10.999',
        };
        setTimeout(() => {  
            resolve(item)
        }, 2000)
    });
    return myPromise
}

const ItemDetailContainer = ({}) => {
    const [itemDetalle, setItemDetalle] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getItemDetalle()
            .then(res => {
                setItemDetalle(res)
            })

    }, [id]);


    return (
        <div className='itemDetailContainer' >
            <ItemDetail itemDetalle={itemDetalle} />
        </div>
    );
}

export default ItemDetailContainer;