import React from 'react';
import '../../GeneralComponents/Header/header.css';
import './header.css';

const header = (props) => {
    return (
        <header id="mainHeader" className="container-expand-sm">
            <div className="overlay"></div>
            <div className="header-bar">
                <div className="logo row col-sm-5">
                    <div className="sm-3">
                        <img src="img/feelgood.png" alt="Logo" />
                    </div>
                    <h1>FeelGood</h1>
                </div>

                {/* When users are logged */}

                <div className="form-inline login" method="post">
                    <div className="col-3">
                        <img src={props.user.img} alt={props.user.name} />
                    </div>
                    <h5>{props.user.name} {props.user.surname}</h5>

                    {/* User */}
                    <button id="logout" type="submit" name="submit" className="btn btn-green dropdown">
                        <a href="enlace 1">
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </a>
                    </button>

                    <div className="dropdown-content">
                        <a id="settings" href="enlace 1">
                            <i className="fa fa-pencil" aria-hidden="true"></i> Editar perfil
                        </a>
                        <a href="../php/logout.php">
                            <i className="fa fa-sign-out" aria-hidden="true"></i> Salir
                        </a>
                        <a id="accoSettings" href="enlace 1">
                            <i className="fa fa-trash-o" aria-hidden="true"></i> Eliminar cuenta
                        </a>
                    </div>
                </div>

            </div>

            {/* Wrapper */}
            <div className="wrapper">
                {/* <p>Ánimo, tu puedes con todo</p> */}

                {/* <p className="icon">
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </p> */}
            </div>
        </header>

    );
}

export default header;