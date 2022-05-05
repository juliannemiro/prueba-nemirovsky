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
                <h4>Precio:  {itemDetalle?.precio}</h4>
                <br />
                <h5> Stock disponibe: {itemDetalle?.stock} unidades</h5>
                <br />
                <select class="form-select " style={{"width":"100px"}} placeholder="Talle" >
                <option> Talle</option>
                    <option value="1">XS</option>
                    <option value="2">S</option>
                    <option value="3">M</option>
                    <option value="4">L</option>
                    <option value="5">XL</option>
                    <option value="6">XXL</option>
                </select>
                <br />
                <ItemCount stock={itemDetalle?.stock} inicial={1} onAdd={() => { }} />
            </div>
        </>
    );
}

export default ItemDetail;