import React from "react";
import { useCartContext } from "../../Context/CartContexProvider";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
    const { cartList } = useCartContext();
    console.log("cartList", cartList)
    return (
        cartList.map(item => <CartItem item={item} key={item.id} />)
    )

}

export default Cart