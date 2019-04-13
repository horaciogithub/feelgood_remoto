import React from 'react';
import "./header.css";
import Logo from './Images/feelgood.png';

/* Componentes */

import Login from './login';

const header = (props) => {
    return (
        <header id="mainHeader" className="container-expand-sm">
            <div className="overlay"></div>
            <div className="header-bar">

                <Login />

                {/*  Hiperlink to Open the Modal */}
                <a
                    className="modal-link"
                    data-toggle="modal"
                    data-target="#myModal"
                    href="enlace 0">
                    ¿Te gustaría registrarte?
                </a>
            </div>

            <div className="wrapper">
                <div className="wrapper wrapper-img">
                    <img src={Logo} alt="FeelGood-banner" />
                    <h1>FeelGood</h1>
                    <p>Te ayudamos a sentirte bien</p>
                    <p className="icon">
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </p>
                </div>
            </div>
        </header >
    );
}

export default header;