import React, { Component } from 'react';

/* Componentes */
import WarningMessage from '../WarningMessage/WarningMessage';

/* Estilos */
import '../Index/Header/Header.css';
import './UsersHeader.css';

export default class Header extends Component {
    render() {
        return (
            <header id="mainHeader" className="private-header">
                <div className="container">
                    <div className="login" method="post">
                        <img className="avatar" src={this.props.user.img} alt={this.props.user.name} />
                        <h5 className="nombre">{this.props.user.name} {this.props.user.surname} </h5>
                        <button className="boton" onClick={this.props.logout}>Salir</button>
                    </div>

                    {
                        this.props.user.warnings > 0 ? <WarningMessage warnings={this.props.user.warnings} /> : ''
                    }
                </div>
            </header>
        );
    }
}