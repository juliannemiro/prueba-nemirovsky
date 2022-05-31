import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, nombre, imagen, descripcion, precio }) => {

    return (
        <div className="card" style={{ 'maxWidth': '18rem', 'margin': '10px', 'display': 'inline-block' }}>
            <div className="card-header"><h4>{nombre}</h4> </div>
            <div className="card-body">
                <Link to={'/item/' + id}>
                    <img src={imagen} alt="item" width="200" height="200" />
                </Link>
                <h5> {descripcion} </h5>
                <h6> ${precio} </h6>
                <Link to={'/item/' + id}>
                    <button className="btn btn-outline-success btn-sm"> + Info  </button>
                </Link>
            </div>

        </div>

    );
};

export default Item;

