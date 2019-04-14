import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

/* FUNCIONES */
import { PostData } from '../../services/PostData';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            surname: '',
            type: '',
            email: '',
            password: '',
            c_password: '',
            birth_date: '',
            isLogged: false,
            redirect: false,
            userData: {},

            UserType: '',
        }

        this.register = this.register.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    register() {
        PostData('register', this.state).then((result) => {
            let responseJSON = result;
            console.log(responseJSON)

            if (responseJSON.userData) {

                // Pasa los datos en sessión
                sessionStorage.setItem("userData", JSON.stringify(responseJSON));

                /* Logeo tras el registro */
                this.setState({
                    UserType: responseJSON.userData.type,
                    isLogged: true,
                    redirect: true,
                });
            }

            else {

                /* Acceso denegado */
                console.log("no entras")
            }
        })
    }

    onChange(e) {
        this.setState({
            //Con e.target.name, recogemos el valor según el name del input
            [e.target.name]: e.target.value
        });
        //console.log(this.state)
    }

    render() {

        // Redirige a la página cuando el usuario haya sido logeado
        if (this.state.redirect) {
            if (sessionStorage.getItem("userData")) {
                if (this.state.type === 'trainer') {
                    return <Redirect to="/trainer" />;
                }
                if (this.state.type === 'user') {
                    return <Redirect to="/user" />;
                }
            }
        }

        return (
            <div id="myModal" className="modal fade">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Regístrate</h4>
                            <button type="button" className="close" data-dismiss="modal" title="Cerrar">&times;</button>
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-10 form-register">

                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Nombre</span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            maxLength="15"
                                            onChange={this.onChange}
                                            required
                                        />
                                    </div>

                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Apellido</span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="surname"
                                            maxLength="15"
                                            onChange={this.onChange}
                                            required />
                                    </div>

                                    <div className="input-group mb-3">
                                        <input
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            maxLength="40"
                                            onChange={this.onChange}
                                            required />
                                        <div className="input-group-append">
                                            <span className="input-group-text">@example.com</span>
                                        </div>
                                    </div>

                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Contraseña</span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="password"
                                            name="password"
                                            maxLength="15"
                                            onChange={this.onChange}
                                            required />
                                    </div>

                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Repite contraseña</span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="password"
                                            name="c_password"
                                            maxLength="15"
                                            onChange={this.onChange}
                                            required />
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <label>FECHA DE NACIMIENTO</label>
                                            <input
                                                className="form-control calendar"
                                                type="date"
                                                name="birth-date"
                                                onChange={this.onChange}
                                                required="" />
                                        </div>
                                        <div className="col-6">
                                            <label>REGISTRARSE COMO</label>
                                            <select
                                                id="tipo-usuario"
                                                className="form-control tipo"
                                                name="type"
                                                onChange={this.onChange}>

                                                <option value="user" defaultValue>Cliente</option>
                                                <option value="trainer">Entrenador</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div id="formulario-cliente" className="row">
                                        <div className="col-4">
                                            <div id="male"></div>
                                            <div id="female"></div>
                                        </div>
                                        <div id="heigth" className="row col-4"></div>
                                        <div id="weigth" className="row col-4"></div>
                                        <div id="number" className="row col-4"></div>
                                    </div>

                                    <button type="reset" className="btn btn-green cancel wrapperButton">Borrar</button>
                                    <button
                                        type="submit"
                                        className="btn btn-green send wrapperButton"
                                        onClick={this.register}
                                    >
                                        Enviar
                                        </button>
                                    <div id="alert"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}