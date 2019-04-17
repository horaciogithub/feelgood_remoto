import React from 'react';
import "./header.css";


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
                    <p className="icon">
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </p>
                </div>
            </div>
        </header >
    );
}

export default header;