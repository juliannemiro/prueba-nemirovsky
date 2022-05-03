import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ productos }) => {

    return (
        <>
            {productos?.map((producto) => {
                return <Item key={producto.id}
                    id={producto.id}
                    categoria={producto.categoria}
                    nombre={producto.nombre}
                    descripcion={producto.descripcion}
                    imagen={producto.imagen}
                    stock={producto.stock}
                    precio={producto.precio}
                />;
            })}

        </>
    )
};

export default ItemList;