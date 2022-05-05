import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, nombre, imagen, descripcion, precio }) => {

    return (

        <div class="card" style={{ 'maxWidth': '18rem', 'margin': '10px', 'display': 'inline-block' }}>
            <div class="card-header"><h4>{nombre}</h4> </div>
            <div class="card-body">
                <Link to={'/item/' + id}>
                    <img src={imagen} width="200" height="200" />
                </Link>
                <ul class="list-group">
                    <li class="list-group-item"> {descripcion} </li>
                    <li class="list-group-item"> {precio}</li>
                    <li class="list-group-item">
                        <Link to={'/item/' + id}>
                            <button class="btn btn-outline-info btn-sm"> Mas información  </button>
                        </Link>
                    </li>
                </ul>

            </div>

        </div>

    );
};

export default Item;

