import React from 'react';
import CartWidget from '../CartWidget';
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/index';

function NavBar(props) {
    return (

        <div className="navBar">
      
            <div className="navBarItems">
            <Link to="/" >
            <Logo />
            </Link>
                <ul>
                <li><NavLink to="/" className={nav => nav.isActive ? 'nav-activo' : ''}>Inicio</NavLink></li>
                    <li><NavLink to="/categoria/nacional" className={nav => nav.isActive ? 'nav-activo' : ''}>Nacionales</NavLink></li>
                    <li><NavLink to="/categoria/seleccion" className={nav => nav.isActive ? 'nav-activo' : ''}>Selecciones</NavLink></li>
                    <li><NavLink to="/categoria/retro" className={nav => nav.isActive ? 'nav-activo' : ''}>Retro</NavLink></li>
                </ul>
                <Link to="/cart" >
                <CartWidget />
                </Link>
            </div>
        </div>
    );
}


export default NavBar;