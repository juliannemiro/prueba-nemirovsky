import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ itemDetalle }) => {

    return (
        <>
            <div className="itemImagenContainer">
                <img src={itemDetalle?.imagen} />
            </div>

            <div className="itemDetalleContainer">
                <h2>{itemDetalle?.nombre}</h2>
                <h4>{itemDetalle?.descripcion} </h4>
                <br />
                <h4> {itemDetalle?.precio}</h4>
                <br />
                <h5> Stock disponibe: {itemDetalle?.stock} unidades</h5>

                <ItemCount stock={itemDetalle?.stock} inicial={1} onAdd={() => { }} />
            </div>
        </>
    );
}

export default ItemDetail;