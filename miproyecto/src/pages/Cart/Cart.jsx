import React from "react";
import { useCartContext } from "../../Context/CartContexProvider";
import CartItem from "../../components/CartItem/CartItem";
import './Cart.css'
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartList, totalAcum, limpiarCarrito } = useCartContext();

    return (
        <div className="CartContainer">
            {cartList.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}  <br/>
            {cartList.length > 0 ?
                <>
                        <h2 className="total">Total: ${totalAcum()}</h2> <br/>
                        <hr/>
                        <div className="containerResumenBotones">
                        <button id="#btnCancelar" className="btn btn-outline-danger" onClick={() => limpiarCarrito()} >Botón de arrepentimiento</button><br />
                        <Link to='/formCompra'><button className="btn btn-success">Realizar comprar</button></Link>
                    </div>

                </>
                :
                <>
                    <h2>No tienes productos agregados al carrito</h2>
                    <br />
                    <Link to='/'><button className="btn btn-success">Comenzar a comprar</button></Link>
                </>
            }
        </div>
    );
};


export default Cart