import React from 'react';
import CartWidget from '../CartWidget';
import './NavBar.css'

function NavBar(props) {
    return (

        <div className="navBar">
      
            <div className="navBarItems">
                
                <h3>Todo Camisetas</h3>

                <ul>
                    <li><a href="../">Inicio</a></li>
                    <li><a href="../">Nacionales</a></li>
                    <li><a href="../">Internacionales</a></li>
                    <li><a href="../">Selecciones</a></li>
                </ul>

                <CartWidget />
            </div>
        </div>
    );
}


export default NavBar;