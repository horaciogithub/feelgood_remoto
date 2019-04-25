import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

/* Funciones */
import { PostData } from '../../../services/PostData';

/* Estilos */
import './Register.css';
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

            /* Para los ususarios clients */
            sex: '',
            heigth: '',
            weigth: '',

            isLogged: false,
            redirect: false,
            userData: {},

            UserType: '',
        }

        this.register = this.register.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    register() {
        console.log(this.state)
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
        console.log(this.state)
    }

    clientFormHandler = () => {
        const form = (
            <div id="formulario-cliente" className="row">
                <div className="col-4">
                    <div id="male">
                        <input type='radio' name='sex' value='m' onChange={this.onChange} /> Hombre <i className='fa fa-mars' aria-hidden='true'></i>
                    </div>
                    <div id="female">
                        <input type='radio' name='sex' value='f' onChange={this.onChange} /> Mujer <i className='fa fa-mars' aria-hidden='true'></i></div>
                </div>
                <div id="heigth" className="row col-4">
                    <input type='number' className='form-control' name='heigth' min='1' max='3' placeholder='Estatura' required onChange={this.onChange} />
                </div>
                <div id="weigth" className="row col-4">
                    <input type='number' className='form-control' name='weigth' min='20' max='300' placeholder='Peso' required onChange={this.onChange} />
                </div>
            </div>
        );
        return form;
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

        /* Formulario para el usuario tipo client */
        let form = '';
        if (this.state.type === 'user') {
            form = this.clientFormHandler();
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
                                <div className="col-lg-10 m-auto form-register">

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
                                            autoComplete="off"
                                            required
                                            placeholder="Helio"
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
                                            autoComplete="off"
                                            required
                                            placeholder="Santana"
                                        />
                                    </div>

                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text">Email</span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            maxLength="40"
                                            onChange={this.onChange}
                                            autoComplete="off"
                                            required
                                            placeholder="dominio@gmail.com"
                                        />
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
                                            autoComplete="off"
                                            required
                                            placeholder="* * * * * * * * *" />
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
                                            autoComplete="off"
                                            required
                                            placeholder="* * * * * * * * *" />
                                    </div>

                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Fecha nacimiento</span>
                                        </div>
                                        <input
                                            className="form-control calendar"
                                            type="date"
                                            name="birth_date"
                                            onChange={this.onChange}
                                            autoComplete="off"
                                            required="" />
                                    </div>

                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Tipo de usuario</span>
                                        </div>
                                        <select
                                            id="tipo-usuario"
                                            className="form-control tipo"
                                            name="type"
                                            onChange={this.onChange}
                                            autoComplete="off">
                                            <option readOnly>Regístrate como:</option>
                                            <option value="user">Cliente</option>
                                            <option value="trainer">Entrenador</option>
                                        </select>
                                    </div>

                                    {/* Formulario extra (client) */}
                                    {form}

                                    <div>
                                        <button
                                            type="submit"
                                            className="btn btn-red send wrapperButton"
                                            onClick={this.register}
                                            autoComplete="off"
                                        >
                                            Enviar
                                        </button>
                                    </div>
                                    <div id="alert"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}