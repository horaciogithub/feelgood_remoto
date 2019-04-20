import React, { Component } from 'react';
import axios from "axios";

/* Styles */
import "./ControlPanel.css";

/* Componentes */
import Clients from '../Clients/Clients';

/* Funciones */
import { PostData } from '../../../services/PostData';

export default class cPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clients: [],
            exercices: [],
            idTables: [],
            table: [],
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: '',
            saturday: '',
            sunday: '',
            email: '',
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

        this.setState({
            [e.target.name]: value
        })

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

    // Recoge las tablas asignadas semanalmente en la tabla de ejercicios del usuario
    weekHandler = (e) => {
        let value = e.target.value

        // Carga la tabla del cliente segun su email
        axios.post("http://localhost:8000/api/clientTable", { email: value })
            .then(response => {
                let data = response.data.data[0]

                this.setState({
                    email: value,
                    monday: data.monday,
                    tuesday: data.tuesday,
                    wednesday: data.wednesday,
                    thursday: data.thursday,
                    friday: data.friday,
                    saturday: data.saturday,
                    sunday: data.sunday,
                    // table_end: '2019-05-22'
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Inserta el id de la tabla en la tabla de ejercicios del usuario
    postTableHandler = (e) => {
        if (e.target.name === "generar") {
            const data = {
                "email": this.state.email,
                "monday": this.state.monday,
                "tuesday": this.state.tuesday,
                "wednesday": this.state.wednesday,
                "thursday": this.state.thursday,
                "friday": this.state.friday,
                "saturday": this.state.saturday,
                "sunday": this.state.sunday,
                "exerc_end": '2019-05-22'
            }

            // Enviamos los datos al servicio

            PostData('postTable', data).then((result) => {
                let responseJSON = result;
                console.log(responseJSON)
            })
        } else {
            const data = {
                "email": this.state.email,
            }

            axios.delete('http://localhost:8000/api/deleteTable', { data })
                .then(response => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        }


    }

    render() {
        // console.log(this.state.week)

        if (this.state.exercices.length > 0) {
            console.log(this.state.clients)
            const clients = this.state.clients;

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

                                {/* Selección del usuario */}
                                <select className="form-control col-2  mr-2" onChange={this.weekHandler}>
                                    <option title="id" value=''>Email: </option>
                                    {/* {this.state.clients.map(client =>
                                        !client.monday || !client.tuesday || !client.wednesday || !client.thursday || !client.friday || !client.saturday || !client.sunday ?
                                            <option key={client.id} value={client.email}>{client.email}</option>
                                            : ""
                                    )} */}
                                    {this.state.clients.map(client =>
                                        <option key={client.id} value={client.email}>{client.email}</option>
                                    )}
                                </select>

                                <table>
                                    <thead>
                                        <tr>
                                            <td>Lunes</td>
                                            <td>Martes</td>
                                            <td>Miércoles</td>
                                            <td>Jueves</td>
                                            <td>Viernes</td>
                                            <td>Sábado</td>
                                            <td>Domingo</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <select name='monday' className="form-control col-3 mr-2" onChange={this.showTableHandler}>
                                                    <option title="id" value=''>Id de tabla: </option>
                                                    {this.state.idTables.map(id =>
                                                        <option key={id} value={id}>{id}</option>
                                                    )}
                                                </select>
                                            </td>

                                            <td>
                                                <select name='tuesday' className="form-control col-3 mr-2" onChange={this.showTableHandler}>
                                                    <option title="id" value=''>Id de tabla: </option>
                                                    {this.state.idTables.map(id =>
                                                        <option key={id} value={id}>{id}</option>
                                                    )}
                                                </select>
                                            </td>
                                            <td>
                                                <select name="wednesday" className="form-control col-3 mr-2" onChange={this.showTableHandler}>
                                                    <option title="id" value=''>Id de tabla: </option>
                                                    {this.state.idTables.map(id =>
                                                        <option key={id} value={id}>{id}</option>
                                                    )}
                                                </select>
                                            </td>
                                            <td>
                                                <select name="thursday" className="form-control col-3 mr-2" onChange={this.showTableHandler}>
                                                    <option title="id" value=''>Id de tabla: </option>
                                                    {this.state.idTables.map(id =>
                                                        <option key={id} value={id}>{id}</option>
                                                    )}
                                                </select>
                                            </td>
                                            <td>
                                                <select name="friday" className="form-control col-3 mr-2" onChange={this.showTableHandler}>
                                                    <option title="id" value=''>Id de tabla: </option>
                                                    {this.state.idTables.map(id =>
                                                        <option key={id} value={id}>{id}</option>
                                                    )}
                                                </select>
                                            </td>
                                            <td>
                                                <select name="saturday" className="form-control col-3 mr-2" onChange={this.showTableHandler}>
                                                    <option title="id" value=''>Id de tabla: </option>
                                                    {this.state.idTables.map(id =>
                                                        <option key={id} value={id}>{id}</option>
                                                    )}
                                                </select>
                                            </td>
                                            <td>
                                                <select name="sunday" className="form-control col-3 mr-2" onChange={this.showTableHandler}>
                                                    <option title="id" value=''>Id de tabla: </option>
                                                    {this.state.idTables.map(id =>
                                                        <option key={id} value={id}>{id}</option>
                                                    )}
                                                </select>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>{this.state.monday}</td>
                                            <td>{this.state.tuesday}</td>
                                            <td>{this.state.wednesday}</td>
                                            <td>{this.state.thursday}</td>
                                            <td>{this.state.friday}</td>
                                            <td>{this.state.saturday}</td>
                                            <td>{this.state.sunday}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div>
                                    <button name="generar" onClick={this.postTableHandler}>Generar</button>
                                    <button name="limpiar" onClick={this.postTableHandler}>Limpiar</button>
                                </div>

                                {/* {days} */}
                            </div>

                            {/* Tablas de entrenamiento */}
                            <div className="table-responsive mt-5">
                                {table}
                            </div>


                        </div>
                    </div>
                </div >
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