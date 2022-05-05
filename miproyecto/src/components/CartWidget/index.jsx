import React from 'react';
import './CartWidget.css'
import { BsCart2 } from "react-icons/bs";
import Cart from './cart.ico'


const CartWidget = () => {
    return (
        <>
            <img src={Cart} id="cart" />
        </>
    );
};

export default CartWidget;