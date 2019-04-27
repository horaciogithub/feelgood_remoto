import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll' // Menú ancla
import "./Navbar.css";

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
                            <AnchorLink className="nav-link" href='#about'>Quiénes somos</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href='#experiences'>Experiencias</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href='#events'>Eventos</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link" href='#footer'>Síguenos</AnchorLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}