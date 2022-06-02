import React from 'react';
import './CartWidget.css'
import Cart from './cart.ico'
import { useCartContext } from '../../Context/CartContexProvider';


const CartWidget = () => {
    const { totalAcumItem } = useCartContext();
    return (
        <div className='cartContainer'>
            {totalAcumItem() > 0 &&
                <>
                    <img src={Cart} id="cart" /> 
                    <span className='acumItems'>{totalAcumItem()}</span>
                </>
            }
        </div>
    );
};

export default CartWidget;