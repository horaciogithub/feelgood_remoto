import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

/* Estilos */
import "./Header.css";

/* Componentes */
import Login from './Login/Login';

export default class Header extends Component {
    render() {
        return (
            <header id="mainHeader" className="container-expand-sm">
                <div className="overlay"></div>
                <div className="header-bar">

                    <Login />

                    {/*  Muestra el modal del registro */}
                    <a
                        className="modal-link pt-2 pb-2"
                        data-toggle="modal"
                        data-target="#myModal"
                        href="enlace 0">
                        ¿Te gustaría registrarte?
                    </a>
                </div>

                <div className="wrapper">
                    <div className="wrapper-img col-6">
                        <div className="d-flex justify-content-center">
                            <img src="/img/feelgood.png" alt="FeelGood-banner" />
                        </div>

                        <h1>FeelGood</h1>
                        <p>Te ayudamos a sentirte bien</p>
                    </div>
                </div>
                <div>
                    <AnchorLink href='#about'>
                        <p className="icon"><i className="fas fa-chevron-down"></i></p>
                    </AnchorLink>
                </div>
            </header >
        );
    }
}
