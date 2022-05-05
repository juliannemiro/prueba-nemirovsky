import React from 'react';
// import './CartWidget.css'
import Logo from './logo.png'
import './logo.css'

const LogoWidget = () => {
    return (
        <div>
            <img src={Logo} id="logo"  />
            <h3>Todo Camisetas</h3>
        </div>
    );
};

export default LogoWidget;