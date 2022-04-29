import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ productos }) => {

    return (
        <>
            {productos?.map((producto) => {
                return <Item key={producto.id}
                    imagen={producto.imagen}
                    destino={producto.destino}
                    duracion={producto.duracion}
                    hotelEstrellas={producto.hotelEstrellas}
                    precio={producto.precio}
                    traslado={producto.traslado}
                />;
            })}
        </>
    )
};

export default ItemList;