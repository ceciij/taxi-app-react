import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import {
    Link
  } from "react-router-dom";
import logo from '../../Assets/images/logo.svg'

function Header() {
    return (

            <div className="nav-bar">
                <div className="header">
                    <div className="logo">
                        <img src={ logo } alt="Logo" width="80px"/>        
                    </div>
                    <div className="sign-in">
                        <p>Bienvenido <strong>Pedro</strong></p>
                        <i><EmailIcon/></i>
                        <i><AccountCircleIcon/></i>
                    </div>
                    <i className="burger" ><MenuIcon/></i>
                </div>
                <div className="menu">
                    <ul className="menu-ul">
                            <Link className="menu-item" to="/Reserve">Inicio</Link>
                            <Link className="menu-item" to="/Reserve">Tarifas</Link>
                            <Link className="menu-item" to="/Plans">Planes</Link>
                            <Link className="menu-item" to="/Drivers">Conductores</Link>
                            <Link className="menu-item" to="/MyTrips">Mis viajes</Link>
                            <Link className="menu-item" to="/LostFound">Lost/Found</Link>
                    </ul>
                </div>
            </div>
        
    )
}

export default Header;