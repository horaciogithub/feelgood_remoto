import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

/* DatePicker */
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

/* Funciones */
import { PostData } from '../../../services/PostData';

/* Estilos */
import './Register.css';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            /* DatePicker date object */
            startDate: new Date(),

            name: '',
            surname: '',
            type: '',
            email: '',
            password: '',
            c_password: '',
            birth_date: '',

            /* Para los ususarios clients */
            gender: '',
            heigth: '',
            weigth: '',

            //isLogged: false,
            redirect: false,
            userData: {},

            UserType: '',
        }

        /* DatePicker event handler */
        this.handleChange = this.handleChange.bind(this);

        this.register = this.register.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleChange(date) {

        let month = this.state.startDate.getMonth() + 1;
        let formatedBirth = '';
        if (month < 10) {
            formatedBirth = this.state.startDate.getFullYear() + '-0' + month + '-' + this.state.startDate.getDate();
        } else {
            formatedBirth = this.state.startDate.getFullYear() + '-' + month + '-' + this.state.startDate.getDate();
        }

        this.setState({
            startDate: date,
            birth_date: formatedBirth
        });
    }

    checkForm = () => {
        if (!this.state.name) {
            document.getElementById('name').placeholder = "Campo vacío";
            document.getElementById('name').classList.add("text-error")
        }

        if (!this.state.surname) {
            document.getElementById('surname').placeholder = "Campo vacío";
            document.getElementById('surname').classList.add("text-error")
        }

        if (!this.state.email) {
            document.getElementById('emailRegister').placeholder = "Campo vacío";
            document.getElementById('emailRegister').classList.add("text-error")
        }

        if (!this.state.password) {
            document.getElementById('passRegister').placeholder = "Campo vacío";
            document.getElementById('passRegister').classList.add("text-error")
        }

        if (!this.state.c_password) {
            document.getElementById('cPassRegister').placeholder = "Campo vacío";
            document.getElementById('cPassRegister').classList.add("text-error")
        }
    }

    register() {

        this.checkForm();

        PostData('register', this.state).then((result) => {
            let responseJSON = result;

            if (responseJSON.userData) {

                // Pasa los datos en sessión
                sessionStorage.setItem("userData", JSON.stringify(responseJSON));

                /* Logeo tras el registro */
                this.setState({
                    UserType: responseJSON.userData.type,
                    //isLogged: true,
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
    }

    clientFormHandler = () => {
        const form = (
            <div id="formulario-cliente" className="row">
                <div className="col-12 col-md-4 pr-0 mr-3 mb-3 mb-md-0">

                    <div className="custom-control custom-radio custom-control-inline ml-1 ml-md-0">
                        <input id="male" className="custom-control-input" type='radio' name='gender' value='m' onChange={this.onChange} />
                        <label className="custom-control-label gender" htmlFor="male">Hombre <i className='fa fa-mars' aria-hidden='true'></i></label>
                    </div>

                    <div className="custom-control custom-radio custom-control-inline ml-5 ml-md-0">
                        <input id="female" className="custom-control-input" type='radio' name='gender' value='f' onChange={this.onChange} />
                        <label className="custom-control-label gender" htmlFor="female">Mujer <i className="fas fa-venus"></i></label>
                    </div>

                </div>
                <div id="heigth" className="row col-6 ml-1 mr-1 col-md-4 ml-md-0 mr-md-0">
                    <input type='number' className='form-control' name='heigth' min='1' max='3' placeholder='Estatura' required onChange={this.onChange} />
                </div>
                <div id="weigth" className="row col-6 col-md-4">
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

                // Redirige a la página del entrenador
                if (this.state.type === 'trainer') {
                    return <Redirect to="/trainer" />;
                }

                // Redirige a la página de clientes
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
                            <h4 className="modal-title"><i className="fas fa-edit"></i> Regístrate</h4>
                            <button type="button" className="close" data-dismiss="modal" title="Cerrar">&times;</button>
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-10 m-auto form-register">

                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text">Nombre</span>
                                        </div>
                                        <input
                                            id="name"
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            maxLength="15"
                                            onChange={this.onChange}
                                            autoComplete="off"
                                            required
                                            placeholder="Nombre"
                                        />
                                    </div>

                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text">Apellido</span>
                                        </div>
                                        <input
                                            id="surname"
                                            className="form-control"
                                            type="text"
                                            name="surname"
                                            maxLength="15"
                                            onChange={this.onChange}
                                            autoComplete="off"
                                            required
                                            placeholder="1er Apellido"
                                        />
                                    </div>

                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text">Email</span>
                                        </div>
                                        <input
                                            id="emailRegister"
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            maxLength="40"
                                            onChange={this.onChange}
                                            autoComplete="off"
                                            required
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text">Contraseña</span>
                                        </div>
                                        <input
                                            id="passRegister"
                                            className="form-control"
                                            type="password"
                                            name="password"
                                            maxLength="15"
                                            onChange={this.onChange}
                                            autoComplete="off"
                                            required
                                            placeholder="Contraseña" />
                                    </div>

                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text">Repite contraseña</span>
                                        </div>
                                        <input
                                            id="cPassRegister"
                                            className="form-control"
                                            type="password"
                                            name="c_password"
                                            maxLength="15"
                                            onChange={this.onChange}
                                            autoComplete="off"
                                            required
                                            placeholder="Repite contraseña" />
                                    </div>

                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text">Fecha nacimiento</span>
                                        </div>
                                        <DatePicker
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                            locale="es"
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </div>

                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text">Tipo de usuario</span>
                                        </div>
                                        <select
                                            id="tipo-usuario"
                                            className="form-control tipo"
                                            name="type"
                                            onChange={this.onChange}
                                            autoComplete="off">
                                            <option readOnly>Tipo de usuario:</option>
                                            <option value="user">Cliente</option>
                                            <option value="trainer">Entrenador</option>
                                        </select>
                                    </div>

                                    {/* Formulario extra (client) */}
                                    {form}

                                    <div className="d-flex justify-content-center">
                                        <button
                                            type="submit"
                                            className="btn btn-red send wrapperButton mt-3"
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