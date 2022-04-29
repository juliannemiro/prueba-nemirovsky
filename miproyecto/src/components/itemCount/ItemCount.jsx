import React, { useState } from 'react';
import "./ItemCount.css"

const ItemCount = ({ stock, inicial }) => {

    const [count, setCount] = useState(inicial);

    const sumarItem = () => {
        if (count < stock) (
            setCount(count + 1)
        );
    }

    const restarItem = () => {
        if (count > 0) (
            setCount(count - 1)
        );
    }

    return (
        <div className='itemCount'>
            <button onClick={() => restarItem()} class="btn btn-light"> - </button>
            <input value={count} type="text" col-xs-1 text-center />
            <button onClick={() => sumarItem()} class="btn btn-light"> + </button>
            <br />

            <button onClick={() => alert("¡¡Todavía no!!")} class="btn btn-info"> Agragar al carrito </button>
        </div>
    );
};

export default ItemCount;