import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll' // Menú ancla
import "../../Navbar/Navbar.css";

export default class NavBar extends Component {
    render() {
        return (
            <nav id="navBar" className="navbar navbar-expand-sm bg-light">

                {/* Smartphone Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar">

                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Items */}
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href='#users'>Control de usuarios</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href='#comments'>Control de mensajes</AnchorLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}