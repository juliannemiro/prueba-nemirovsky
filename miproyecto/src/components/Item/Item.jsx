import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount';
import './Item.css';

const Item = ({ id, categoria, nombre, imagen, descripcion, precio }) => {

    return (

        <div className="row mt-2 justify-content-center " id="container">

            <div className='card'>
                <h3 className="card-title">{nombre}</h3>
                <div >
                    <img src={imagen} width="200" height="200" />
                    <ul class="list-group">
                        <li class="list-group-item"> {descripcion} </li>
                        <li class="list-group-item"> {precio}</li>
                    </ul>

                </div>
                <Link to={'/item/'+ id }>
                    <button class="btn btn-outline-info btn-sm"> Mas información  </button>
                </Link>

                {/* <ItemCount stock={5} inicial={1} /> */}
            </div>
        </div>
    );
};

export default Item;