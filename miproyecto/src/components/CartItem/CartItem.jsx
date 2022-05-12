 import React from 'react';
 
 const CartItem = ({item}) => {
     return (
         <>
            <h2>{item.nombre} - {item.descripcion} - {item.quantity} unidades</h2> 
         </>
     );
 };
 
 export default CartItem;