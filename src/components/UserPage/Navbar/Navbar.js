import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll' // Menú ancla
import "../../Navbar/Navbar.css";

export default class NavBar extends Component {
    render() {
        return (
            <nav id="navBar">
                <ul className="items">
                    <li className="item">
                        <AnchorLink href='#routine'>Entrenamiento</AnchorLink>
                    </li>
                    <li className="item">
                        <AnchorLink href='#comments'>Comentarios</AnchorLink>
                    </li>
                </ul>
            </nav>
        );
    }
}