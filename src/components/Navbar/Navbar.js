import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll' // Menú ancla
import "./Navbar.css";

export default class NavBar extends Component {
    render() {
        return (
            <nav id="navBar">
                <ul className="items">
                    <li className="item">
                        <AnchorLink href='#about'>Quiénes somos</AnchorLink>
                    </li>
                    <li className="item">
                        <AnchorLink href='#experiences'>Experiencias</AnchorLink>
                    </li>
                    <li className="item">
                        <AnchorLink href='#events'>Eventos</AnchorLink>
                    </li>
                    <li className="item">
                        <AnchorLink href='#footer'>Síguenos</AnchorLink>
                    </li>
                </ul>
            </nav>
        );
    }
}