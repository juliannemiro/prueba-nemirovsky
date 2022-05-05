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
                    <li><NavLink to="/categoria/internacional" className={nav => nav.isActive ? 'nav-activo' : ''}>Internacionales</NavLink></li>
                    <li><NavLink to="/categoria/seleccion" className={nav => nav.isActive ? 'nav-activo' : ''}>Selecciones</NavLink></li>
                </ul>
                <CartWidget />
            </div>
        </div>
    );
}


export default NavBar;