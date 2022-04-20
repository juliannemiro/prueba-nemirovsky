import React from 'react';
import './CartWidget.css'
import { BsCart2 } from "react-icons/bs";
import Cart from './cart.ico'


const CartWidget = () => {
    return (
        <>
        {/* <button type="button" id="Btncart" > */}
            <img src={Cart} id="cart" />
        {/* </button> */}
           {/* <button type="button" 
                class="btn btn-default btn-sm">
                <span class="glyphicon 
                    glyphicon-shopping-cart">
                </span>
                <b> Add to Cart </b>
            </button> */}
        </>
    );
};

export default CartWidget;