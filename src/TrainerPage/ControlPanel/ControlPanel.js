import React, { Component } from 'react';
import axios from "axios";

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
                    <table border='1'>
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
                <div>
                    {/* Tipo de ejercicio */}
                    <select onChange={this.idTableHandler}>
                        <option title="Tipo" value=''>Tipo: </option>
                        {this.setOptionsHandler(this.state.exercices).map(exercice =>
                            <option key={exercice} value={exercice}>{exercice}</option>
                        )}
                    </select>

                    {/* Id del ejercicio */}
                    <select onChange={this.showTableHandler}>
                        <option title="id" value=''>Id de tabla: </option>
                        {this.state.idTables.map(id =>
                            <option key={id} value={id}>{id}</option>
                        )}
                    </select>

                    {table}
                    {/* Día de la semana */}
                    {/* <select>
                        <option title="id" value=''>Id de tabla: </option>
                        {this.state.exercices.map(day =>
                            <option key={day} value={day}>{day}</option>
                        )}
                    </select> */}

                    <Clients clients={clients} check={this.checkHandler} />
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