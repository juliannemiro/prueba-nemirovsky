import React, { useState } from 'react';
import "./ItemCount.css"

const ItemCount = ({ stock, inicial, onAdd }) => {

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
            <button onClick={() => restarItem()} className="btn btn-light"> - </button>
            <input className='contador' type="text" value={count} readOnly />
            <button onClick={() => sumarItem()} className="btn btn-light"> + </button><br /><br />

            {count > 0 &&
                <button onClick={() => (stock >= count) && onAdd(count)} className="btn btn-info"> Agragar al carrito </button>
            } {count === 0 &&
                <button className="btn btn-secondary disable" > Agragar al carrito </button>  // le cambie a estilo secondary para que se note mas la diferencia
            }
        </div>
    );
};

export default ItemCount;