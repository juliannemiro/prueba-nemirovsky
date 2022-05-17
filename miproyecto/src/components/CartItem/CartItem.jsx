import React from 'react';
import { useCartContext } from '../../Context/CartContexProvider';
import "./CartItem.css"

const CartItem = ({ item }) => {
    const { deleteItem, PrecioAcumItem } = useCartContext();

    return (
        <section className='cartSection'>
            <div className='cartFoto'>
                <img src={item?.imagen} alt="productos" />
            </div>
            <div className='cartDescripcion'>
                {item?.cantidad === 1 ?
                    <h3>{item?.nombre} </h3>
                    :
                    <h3>{item?.nombre}  x {item?.cantidad} unidades </h3>
                }

                <h5> {item?.descripcion} </h5>
                <h5> Precio unitario: ${item?.precio} </h5>
            </div>
            <div className='cartPrecioAcum'>
                ${PrecioAcumItem(item?.id)}
            </div>
            <div className='cartAcciones'>
                <button class="btn btn-outline-danger" onClick={() => deleteItem(item.id) } >Eliminar</button>
            </div>
        </section>
    );
};

export default CartItem;