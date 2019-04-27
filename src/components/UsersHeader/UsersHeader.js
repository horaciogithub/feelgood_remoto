import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

/* Estilos */
import '../Index/Header/Header.css';
import './UsersHeader.css';

export default class Header extends Component {
    render() {
        return (
            <header id="mainHeader" className="container-expand-sm">
                <div className="overlay"></div>
                <div className="header-bar pt-3 pb-3">
                    <div className="logo row col-sm-5">
                        <div className="sm-3">
                            <img src="img/feelgood.png" alt="Logo" />
                        </div>
                        <h1>FeelGood</h1>
                    </div>

                    <div className="col-5 ml-5 form-inline login" method="post">
                        <div className="col-3 profile">
                            <img src={this.props.user.img} alt={this.props.user.name} />
                        </div>
                        <h5>{this.props.user.name} {this.props.user.surname}</h5>
                        <button className="btn btn-red ml-3" onClick={this.props.logout}>Salir <i className="fas fa-sign-out-alt"></i></button>
                    </div>
                </div>

                <div>
                    <AnchorLink href='#navBar'>
                        <p className="icon"><i className="fas fa-chevron-down"></i></p>
                    </AnchorLink>
                </div>
            </header>
        );
    }
}