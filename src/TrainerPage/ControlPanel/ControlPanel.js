import React, { Component } from 'react';
import axios from "axios";

/* Styles */
import "./ControlPanel.css";

import Clients from '../Clients/Clients';

export default class cPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clients: [],
            exercices: [],
            idTables: [],
            table: []
        }

        this.setOptionsHandler = this.setOptionsHandler.bind(this)
    }

    componentWillMount() {

        // Carga los clientes
        axios.get("http://localhost:8000/api/clients")
            .then(response => {
                this.setState({
                    clients: response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        // Carga las tablas de ejercicios 
        axios.get("http://localhost:8000/api/exercices")
            .then(response => {
                this.setState({
                    exercices: response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    setOptionsHandler = (exercices) => {

        let options = [];

        if (exercices[0]) {
            for (let i = 0; i < exercices.length; i++) {
                options[i] = exercices[i].type;

            }
        }
        // Devuelve los elementos sin repetir
        return [...new Set(options)];
    }

    idTableHandler = (e) => {
        let value = e.target.value
        let options = [];

        if (value) {
            for (let i = 0; i < this.state.exercices.length; i++) {
                if (this.state.exercices[i].type === value) {
                    options[i] = this.state.exercices[i].id
                }
            }
        }

        this.setState({
            idTables: options
        })
    }

    showTableHandler = (e) => {
        let value = parseInt(e.target.value)
        let options = [];

        if (value) {
            for (let i = 0; i < this.state.exercices.length; i++) {
                if (this.state.exercices[i].id === value) {
                    options[0] = this.state.exercices[i]
                }
            }
        }

        this.setState({
            table: options
        })

    }

    render() {
        const clients = this.state.clients;

        if (this.state.exercices.length > 0) {
            console.log(this.state)
            let table;
            if (this.state.table.length > 0) {

                table = (
                    <table className="table">
                        <thead>
                            <tr>
                                <td colSpan="4">Calentamiento</td>
                            </tr>
                            <tr>
                                <td colSpan="2">{this.state.table[0].warmUp[0].name}</td>
                                <td colSpan="2">{this.state.table[0].warmUp[0].time}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="4">Rutina de {this.state.table[0].routine}</td>
                            </tr>
                            <tr>
                                <td>Ejercicio</td>
                                <td>Series</td>
                                <td>Repeticiones</td>
                                <td>Dsecanso</td>
                            </tr>
                            <tr>
                                <td>{this.state.table[0].exercice1[0].name}</td>
                                <td>{this.state.table[0].exercice1[0].series}</td>
                                <td>{this.state.table[0].exercice1[0].loops}</td>
                                <td>{this.state.table[0].exercice1[0].rest}</td>
                            </tr>
                            <tr>
                                <td>{this.state.table[0].exercice2[0].name}</td>
                                <td>{this.state.table[0].exercice2[0].series}</td>
                                <td>{this.state.table[0].exercice2[0].loops}</td>
                                <td>{this.state.table[0].exercice2[0].rest}</td>
                            </tr>
                            <tr>
                                <td>{this.state.table[0].exercice3[0].name}</td>
                                <td>{this.state.table[0].exercice3[0].series}</td>
                                <td>{this.state.table[0].exercice3[0].loops}</td>
                                <td>{this.state.table[0].exercice3[0].rest}</td>
                            </tr>
                            <tr>
                                <td>{this.state.table[0].exercice4[0].name}</td>
                                <td>{this.state.table[0].exercice4[0].series}</td>
                                <td>{this.state.table[0].exercice4[0].loops}</td>
                                <td>{this.state.table[0].exercice4[0].rest}</td>
                            </tr>
                            <tr>
                                <td>{this.state.table[0].exercice5[0].name}</td>
                                <td>{this.state.table[0].exercice5[0].series}</td>
                                <td>{this.state.table[0].exercice5[0].loops}</td>
                                <td>{this.state.table[0].exercice5[0].rest}</td>
                            </tr>
                            <tr>
                                <td>{this.state.table[0].exercice6[0].name}</td>
                                <td>{this.state.table[0].exercice6[0].series}</td>
                                <td>{this.state.table[0].exercice6[0].loops}</td>
                                <td>{this.state.table[0].exercice6[0].rest}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            }

            return (
                <div className="container-fluid mt-5 panel">
                    <div className="row">
                        {/* Tabla de clientes */}
                        <div className="col-6">
                            <Clients clients={clients} check={this.checkHandler} />
                        </div>

                        <div className="col-6">

                            <div className="row control">
                                {/* Tipo de ejercicio */}
                                <select className="form-control col-2 mr-2" onChange={this.idTableHandler}>
                                    <option title="Tipo" value=''>Tipo: </option>
                                    {this.setOptionsHandler(this.state.exercices).map(exercice =>
                                        <option key={exercice} value={exercice}>{exercice}</option>
                                    )}
                                </select>

                                {/* Id del ejercicio */}
                                <select className="form-control col-3 mr-2" onChange={this.showTableHandler}>
                                    <option title="id" value=''>Id de tabla: </option>
                                    {this.state.idTables.map(id =>
                                        <option key={id} value={id}>{id}</option>
                                    )}
                                </select>

                                {/* Días de la semana */}
                                <select className="form-control col-2 mr-2">
                                    <option value="lunes">Lunes</option>
                                    <option value="martes">Martes</option>
                                    <option value="mirecoles">Miércoles</option>
                                    <option value="jueves">Jueves</option>
                                    <option value="viernes">Viernes</option>
                                    <option value="sabado">Sábado</option>
                                    <option value="domingo">Domingo</option>
                                </select>

                                {/* Selección del usuario */}
                                <select className="form-control col-2" >
                                    <option title="id" value=''>Email: </option>
                                    {this.state.clients.map(client =>
                                        !client.emailTable ?
                                            <option key={client.id} value={client.email}>{client.email}</option>
                                            : ""
                                    )}
                                </select>
                            </div>

                            {/* Tablas de entrenamiento */}
                            <div className="table-responsive mt-5">
                                {table}
                            </div>


                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="spinner-border text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }
    }
}