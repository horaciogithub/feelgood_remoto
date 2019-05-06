import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll' // Menú ancla
import "../../Navbar/Navbar.css";

export default class NavBar extends Component {
    render() {
        return (
            <nav id="navBar">
                <ul className="items">
                    <li className="item">
                        <AnchorLink className="nav-link" href='#users'>Control de usuarios</AnchorLink>
                    </li>
                    <li className="item">
                        <AnchorLink className="nav-link" href='#comments'>Control de mensajes</AnchorLink>
                    </li>
                </ul>
            </nav>
        );
    }
}