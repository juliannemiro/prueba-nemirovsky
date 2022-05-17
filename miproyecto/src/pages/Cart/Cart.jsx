import React from "react";
import { useCartContext } from "../../Context/CartContexProvider";
import CartItem from "../../components/CartItem/CartItem";
import './Cart.css'
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartList, totalAcum } = useCartContext();
    console.log(cartList)
    return (
        <div>
            {cartList.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}

            {cartList.length > 0 ?
                <>
                    <div className="containerResumen">
                        <h1>Total: ${totalAcum()}</h1>
                        <button class="btn btn-info">Terminar mi compra</button>
                    </div>
                </>
                :
                <>
                    <h2>No tienes productos agregados al carrito</h2>
                    <br />
                    <button class="btn btn-info"><Link to='/'>Comenzar a comprar</Link></button>
                </>
            }
        </div>
    );
};


export default Cart