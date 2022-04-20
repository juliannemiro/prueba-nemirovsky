import React from 'react';
import CartWidget from '../CartWidget';
import './NavBar.css'

function NavBar(props) {
    return (

        <div class="navBar">
      
            <div class="navBarItems">
                
                <h3>Mi Tienda</h3>

                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Promociones</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>

                <CartWidget />
            </div>
        </div>
    );
}


export default NavBar;