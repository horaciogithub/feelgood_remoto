import React from 'react';
import "./navbar.css";

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light">

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
                        <a
                            className="nav-link"
                            href="enlace 1">
                            Quiénes somos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="enlace 2">
                            Experiencias
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="enlace 3">
                            Eventos
                        </a>

                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="enlace 1">
                            Síguenos</a>

                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default navbar;