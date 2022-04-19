import React from 'react';
import CartWidget from '../CartWidget';
import './NavBar.css'

function NavBar(props) {
    return (

        <div class="navBar">

            <div id="navDiv">

                <h3>Tienda Baltazar</h3>
                
                {/* <CartWidget /> */}

                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Promociones</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
        </div>
    );
}


export default NavBar;