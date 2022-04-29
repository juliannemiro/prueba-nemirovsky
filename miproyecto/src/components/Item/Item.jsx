import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import './Item.css';

const Item = ({ destino, imagen, duracion, hotelEstrellas, precio, traslado }) => {

    return (

        <div className="row mt-2 justify-content-center " id="container">

            <div className='card'>
                <h3 className="card-title">{destino}</h3>
                <div >
                    <img src={imagen} width="250" height="150" />
                    <ul class="list-group">
                        <li class="list-group-item"> {duracion} </li>
                        <li class="list-group-item"> Hotel {hotelEstrellas} estrellas</li>
                        <li class="list-group-item"> {precio}</li>
                        <li class="list-group-item"> {traslado}</li>
                    </ul>

                </div>
                <ItemCount stock={5} inicial={1} />
            </div>
        </div>
    );
};

export default Item;