import React, { useState } from 'react';
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContexProvider';

const ItemDetail = ({ itemDetalle }) => {
    const [cantidadProducto, setCantidadProducto] = useState(null);
    const { addToCart, unidadesItem } = useCartContext();

    function addHandler(count) {
        if (count + unidadesItem(itemDetalle.id) > itemDetalle.stock) {
            const availableToAdd = itemDetalle.stock - unidadesItem(itemDetalle.id);
            if (availableToAdd === 0)
                return alert(`Ya tienes este producto en el carrito y no hay mas stock disponible`);
            else
                return alert(`Ya tienes este producto en el carrito. Sólo puedes sumar ${availableToAdd} unidades mas.`);
        }
        setCantidadProducto(count);
        addToCart(itemDetalle, count);
    }

    return (
        <div className="itemDetailContainer">
            <div className="itemImagenContainer">
                <img src={itemDetalle?.imagen} id="#producto" alt="productos" />
            </div>

            <div className="itemBodyContainer">

                <h2>{itemDetalle?.nombre}</h2><br />
                <h4>{itemDetalle?.descripcion} </h4>

                <br />
                <h4>Precio:  {itemDetalle?.precio}</h4>
                <br />
                <h5> Stock disponibe: {itemDetalle?.stock} unidades</h5>
                <br />
                {
                    cantidadProducto ?
                        <>
                            <Link to='/'><button className="btn btn-outline-success">Seguir comprando</button> </Link>
                            <br />
                            <Link to='/cart'><button className="btn btn-outline-success">Finalizar compra</button>  </Link>
                        </>
                        :
                        <>
                            <select className="form-select " style={{ "width": "100px" }} placeholder="Talle" >
                                <option> Talle</option>
                                <option value="1">XS</option>
                                <option value="2">S</option>
                                <option value="3">M</option>
                                <option value="4">L</option>
                                <option value="5">XL</option>
                                <option value="6">XXL</option>
                            </select>
                            <br />
                            <ItemCount stock={itemDetalle?.stock} inicial={1} onAdd={addHandler} />
                        </>
                }

            </div>
        </div>
    );
}

export default ItemDetail; 