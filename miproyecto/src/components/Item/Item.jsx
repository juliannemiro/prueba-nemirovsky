import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, nombre, imagen, descripcion, precio }) => {

    return (

        <div className="card" style={{ 'maxWidth': '18rem', 'margin': '10px', 'display': 'inline-block' }}>
            <div className="card-header"><h4>{nombre}</h4> </div>
            <div className="card-body">
                <Link to={'/item/' + id}>
                    <img src={imagen} width="200" height="200" />
                </Link>
                <ul className="list-group">
                    <li className="list-group-item"> {descripcion} </li>
                    <li className="list-group-item"> {precio}</li>
                    <li className="list-group-item">
                        <Link to={'/item/' + id}>
                            <button className="btn btn-outline-info btn-sm"> Mas información  </button>
                        </Link>
                    </li>
                </ul>

            </div>

        </div>

    );
};

export default Item;

