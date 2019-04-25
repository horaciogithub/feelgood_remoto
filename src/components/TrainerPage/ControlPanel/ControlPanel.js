import React, { Component } from 'react';
import axios from "axios";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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
            startDate: new Date(),


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

            // Generador de ejercicios
            exercGenerator: '',
            exercController: '',

            routineData: {
                type: '',
                routine: '',
                warm_up_name: '',
                warm_up_time: '',

                exerc1Name: '',
                exerc1Series: '',
                exerc1Loops: '',
                exerc1Rest: '',

                exerc2Name: '',
                exerc2Series: '',
                exerc2Loops: '',
                exerc2Rest: '',

                exerc3Name: '',
                exerc3Series: '',
                exerc3Loops: '',
                exerc3Rest: '',

                exerc4Name: '',
                exerc4Series: '',
                exerc4Loops: '',
                exerc4Rest: '',

                exerc5Name: '',
                exerc5Series: '',
                exerc5Loops: '',
                exerc5Rest: '',

                exerc6Name: '',
                exerc6Series: '',
                exerc6Loops: '',
                exerc6Rest: '',

                exerc7Name: '',
                exerc7Series: '',
                exerc7Loops: '',
                exerc7Rest: '',

                exerc8Name: '',
                exerc8Series: '',
                exerc8Loops: '',
                exerc8Rest: '',

                exerc9Name: '',
                exerc9Series: '',
                exerc9Loops: '',
                exerc9Rest: '',

                exerc10Name: '',
                exerc10Series: '',
                exerc10Loops: '',
                exerc10Rest: '',
            }
        }

        this.handleChange = this.handleChange.bind(this);

        this.setOptionsHandler = this.setOptionsHandler.bind(this)
        this.idTableHandler = this.idTableHandler.bind(this)
        this.showTableHandler = this.showTableHandler.bind(this)
        this.weekHandler = this.weekHandler.bind(this)
        this.postTableHandler = this.postTableHandler.bind(this)
        this.reloadClientsHandler = this.reloadClientsHandler.bind(this)
        this.reloadExercicesHandler = this.reloadExercicesHandler.bind(this)
        this.routineGeneratorHandler = this.routineGeneratorHandler.bind(this)
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

    handleChange(date) {
        this.setState({
            startDate: date
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
        let month = this.state.startDate.getMonth() + 1;
        let date = '';
        if (month < 10) {
            date = this.state.startDate.getFullYear() + '-0' + month + '-' + this.state.startDate.getDate();
        } else {
            date = this.state.startDate.getFullYear() + '-' + month + '-' + this.state.startDate.getDate();
        }

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
                "exerc_end": date
            }

            console.log(data)
            // Enviamos los datos al servicio

            PostData('postTable', data).then((result) => {
                // let responseJSON = result;
                this.reloadClientsHandler();
            })
        } else {
            const data = {
                "email": this.state.email,
            }

            axios.delete('http://localhost:8000/api/deleteTable', { data })
                .then(response => {
                    this.reloadClientsHandler();

                    // Limpia los estados de los días
                    this.setState({
                        email: '',
                        monday: '',
                        tuesday: '',
                        wednesday: '',
                        thursday: '',
                        friday: '',
                        saturday: '',
                        sunday: '',
                        // table_end: '2019-05-22'
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    reloadClientsHandler = () => {
        // Recarga la tabla de clientes
        axios.get("http://localhost:8000/api/clients")
            .then(response => {
                this.setState({
                    clients: response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    reloadExercicesHandler = () => {
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

    inputHandler = (e) => {
        // let routine = this.state.routineData


        this.setState({
            routineData: {
                ...this.state.routineData,
                [e.target.name]: e.target.value
            }
        })
    }

    // Generador de rutinas
    routineGeneratorHandler = (e) => {
        let exercicesHead = [];
        let exercController = [];

        for (let i = 0; i < e.target.value; i++) {
            exercicesHead.push(<th key={i}>Ejercicio{i + 1}</th>)

            exercController.push(
                <td key={i}>
                    <label>Nombre: </label>
                    <input name={'exerc' + (i + 1) + 'Name'} className="form-control" type="text" placeholder="Press militar" onChange={this.inputHandler} />
                    <label>Series: </label>
                    <input name={'exerc' + (i + 1) + 'Series'} className="form-control" type="text" placeholder="4" onChange={this.inputHandler} />
                    <label>Repeticiones: </label>
                    <input name={'exerc' + (i + 1) + 'Loops'} className="form-control" type="text" placeholder="12" onChange={this.inputHandler} />
                    <label>Descanso: </label>
                    <input name={'exerc' + (i + 1) + 'Rest'} className="form-control" type="text" placeholder="00:01:15" onChange={this.inputHandler} />
                </td>
            )
        }


        let table = (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Rutina</th>
                            <th>Calentamiento</th>
                            {exercicesHead}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <select name="type" onChange={this.inputHandler}>
                                    <option value="aeróbico">Aeróbico</option>
                                    <option value="anaeróbico">Anaeróbico</option>
                                </select>
                            </td>
                            <td>
                                <input name="routine" className="form-control" type="text" placeholder="Pecho" onChange={this.inputHandler} />
                            </td>
                            <td>
                                <label>Nombre:</label>
                                <input name="warm_up_name" className="form-control" type="text" placeholder="Cinta" onChange={this.inputHandler} />

                                <label>Tiempo:</label>
                                <input name="warm_up_time" className="form-control" type="text" placeholder="00:30:00" onChange={this.inputHandler} />
                            </td>
                            {exercController}
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-red" onClick={this.postRoutineHandeler}>Registrar rutina</button>
            </div>
        )

        this.setState({
            exercGenerator: table
        })
    }

    // Envia la rutina para su registro
    postRoutineHandeler = () => {
        let data = this.state.routineData
        console.log(data)

        if (this.state.routineData.exerc1Name && this.state.routineData.exerc2Name &&
            this.state.routineData.exerc3Name && this.state.routineData.exerc4Name &&
            this.state.routineData.exerc5Name && this.state.routineData.exerc6Name) {
            axios.post('http://localhost:8000/api/routineRegister', data)
                .then(response => {
                    this.reloadExercicesHandler()
                })

        } else {
            console.log("error de envío")
        }

    }

    render() {
        if (this.state.exercices.length > 0) {
            // console.log(this.state.clients)
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

                            {/* Ejercicios que pueden ser nulos */}
                            {this.state.table[0].exercice7.length > 0 ?
                                <tr>
                                    <td>{this.state.table[0].exercice7[0].name}</td>
                                    <td>{this.state.table[0].exercice7[0].series}</td>
                                    <td>{this.state.table[0].exercice7[0].loops}</td>
                                    <td>{this.state.table[0].exercice7[0].rest}</td>
                                </tr> :
                                <tr className="invisible-cell">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            }

                            {this.state.table[0].exercice8.length > 0 ?
                                <tr>
                                    <td>{this.state.table[0].exercice8[0].name}</td>
                                    <td>{this.state.table[0].exercice8[0].series}</td>
                                    <td>{this.state.table[0].exercice8[0].loops}</td>
                                    <td>{this.state.table[0].exercice8[0].rest}</td>
                                </tr> :
                                <tr className="invisible-cell">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            }

                            {this.state.table[0].exercice9.length > 0 ?
                                <tr>
                                    <td>{this.state.table[0].exercice9[0].name}</td>
                                    <td>{this.state.table[0].exercice9[0].series}</td>
                                    <td>{this.state.table[0].exercice9[0].loops}</td>
                                    <td>{this.state.table[0].exercice9[0].rest}</td>
                                </tr> :
                                <tr className="invisible-cell">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            }

                            {this.state.table[0].exercice10.length > 0 ?
                                <tr>
                                    <td>{this.state.table[0].exercice10[0].name}</td>
                                    <td>{this.state.table[0].exercice10[0].series}</td>
                                    <td>{this.state.table[0].exercice10[0].loops}</td>
                                    <td>{this.state.table[0].exercice10[0].rest}</td>
                                </tr> :
                                <tr className="invisible-cell">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            }
                        </tbody>
                    </table>
                )
            }

            return (
                <div className="container-fluid panel">
                    <div id="setRoutines" className="row selector-panel pt-5">

                        {/* Tablas de entrenamiento */}
                        <div className="table-responsive col-6">
                            {table}
                        </div>

                        <div className="col-6">

                            <div className="row control pr-3">
                                {/* Tipo de ejercicio */}
                                <select name="type" className="form-control col-3  mr-2" onChange={this.idTableHandler}>
                                    <option title="Tipo" value=''>Tipo de ejercicio: </option>
                                    {this.setOptionsHandler(this.state.exercices).map(exercice =>
                                        <option key={exercice} value={exercice}>{exercice}</option>
                                    )}
                                </select>

                                {/* Selección del usuario */}
                                <select className="form-control col-4  mr-2" onChange={this.weekHandler}>
                                    <option title="id" value=''>Usuario: </option>
                                    {this.state.clients.map(client =>
                                        <option key={client.id} value={client.email}>{client.email}</option>
                                    )}
                                </select>

                                {/* Selección del fin de entrenamiento */}
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                // dateFormat="yyyy-MM-d"
                                />

                                <div className="table-responsive selectors">
                                    <table className="table-bordered mt-3">
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
                                                    <select name='monday' className="form-control" onChange={this.showTableHandler}>
                                                        <option title="id" value=''>Tabla: </option>
                                                        {this.state.idTables.map(id =>
                                                            <option key={id} value={id}>Tabla: {id}</option>
                                                        )}
                                                    </select>
                                                </td>

                                                <td>
                                                    <select name='tuesday' className="form-control" onChange={this.showTableHandler}>
                                                        <option title="id" value=''>Tabla: </option>
                                                        {this.state.idTables.map(id =>
                                                            <option key={id} value={id}>Tabla: {id}</option>
                                                        )}
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="wednesday" className="form-control" onChange={this.showTableHandler}>
                                                        <option title="id" value=''>Tabla: </option>
                                                        {this.state.idTables.map(id =>
                                                            <option key={id} value={id}>Tabla: {id}</option>
                                                        )}
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="thursday" className="form-control" onChange={this.showTableHandler}>
                                                        <option title="id" value=''>Tabla: </option>
                                                        {this.state.idTables.map(id =>
                                                            <option key={id} value={id}>Tabla: {id}</option>
                                                        )}
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="friday" className="form-control" onChange={this.showTableHandler}>
                                                        <option title="id" value=''>Tabla: </option>
                                                        {this.state.idTables.map(id =>
                                                            <option key={id} value={id}>Tabla: {id}</option>
                                                        )}
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="saturday" className="form-control" onChange={this.showTableHandler}>
                                                        <option title="id" value=''>Tabla: </option>
                                                        {this.state.idTables.map(id =>
                                                            <option key={id} value={id}>Tabla: {id}</option>
                                                        )}
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="sunday" className="form-control" onChange={this.showTableHandler}>
                                                        <option title="id" value=''>Tabla: </option>
                                                        {this.state.idTables.map(id =>
                                                            <option key={id} value={id}>Tabla: {id}</option>
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
                                </div>

                                <div className="mt-4">
                                    <button className="btn btn-red mr-4" name="generar" onClick={this.postTableHandler}>Generar</button>
                                    <button className="btn btn-red" name="limpiar" onClick={this.postTableHandler}>Limpiar</button>
                                </div>

                                {/* {days} */}
                            </div>

                            {/* Tabla de clientes */}
                            <div className="mt-5">
                                {/* <Clients clients={clients} check={this.checkHandler} /> */}
                                <Clients clients={clients} />
                            </div>
                        </div>
                    </div>

                    <div id="routineGenerator p-3">
                        <h4 className="text-center pt-5 pb-5">Crea una rutina de entrenamiento:</h4>

                        <label>Introduce cuántos ejercicios quieres crear:</label>
                        <input type="number" placeholder="6" min="6" max="10" onChange={this.routineGeneratorHandler} />
                        <div className="table-responsive">
                            {this.state.exercGenerator}
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