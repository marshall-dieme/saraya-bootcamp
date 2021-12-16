import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


import './navbar.css'

class Navbar extends Component {
    render() {
        return (
            <>
                <header>
                    <div className="logo-div">
                        <Link to="/" className="logo"><ion-icon name="desktop-outline"></ion-icon> <span>Saraya Bootcamp</span></Link>
                    </div>
                    <ul className="links">
                        <li className="nav-link">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/training">Training</NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/pricing">Pricing</NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </header>
            </>
        );
    }
}

export default Navbar;