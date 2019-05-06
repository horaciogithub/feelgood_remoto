import React, { Component } from "react";
import Pagination from "react-js-pagination"; // Importa paginación
import axios from "axios";

import "./Users.css";

export default class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: [],

            // Atributos de la paginación
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 5,
        };
        this.handlePageChange = this.handlePageChange.bind(this)
        this.deleteUserHandler = this.deleteUserHandler.bind(this)
        this.warningUserHandler = this.warningUserHandler.bind(this)
        this.reloadUsersHandler = this.reloadUsersHandler.bind(this)
    }

    componentWillMount() {
        axios.get(`http://localhost:8000/api/users?page=` + 1)
            .then(response => {
                this.setState({
                    users: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page,
                });
            });
    }

    // Paginación de usuarios
    handlePageChange(pageNumber) {
        axios.get(`http://localhost:8000/api/users?page=` + pageNumber)
            .then(response => {
                this.setState({
                    users: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page,
                });
            });
    }

    // Elimina un ususario determinado
    deleteUserHandler = (e) => {

        axios.delete('http://localhost:8000/api/userDelete', { data: { id: e.target.value } })
            .then(response => {
                this.reloadUsersHandler();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // Añade un warning a un usuario
    warningUserHandler = (e) => {

        const data = { id: e.target.value }

        axios.put('http://localhost:8000/api/userWarning', data)
            .then(response => {
                this.reloadUsersHandler();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // Recarga el estado tras alguna acción
    reloadUsersHandler = () => {

        // Recarga la tabla de usuarios
        axios.get(`http://localhost:8000/api/users?page=` + this.state.activePage)
            .then(response => {
                this.setState({
                    users: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page,
                });
            });
    }

    render() {
        if (this.state.users.length > 0) {
            const { users } = this.state;
            return (
                <div className="container">
                    <div id="users" className="table-responsive">

                        {/* Botones de paginación */}
                        <div>
                            <Pagination
                                itemClass="page-item"
                                linkClass="page-link"
                                activePage={this.state.activePage}
                                itemsCountPerPage={this.state.itemsCountPerPage}
                                totalItemsCount={this.state.totalItemsCount}
                                pageRangeDisplayed={this.state.pageRangeDisplayed}
                                onChange={this.handlePageChange}
                            />
                        </div>

                        {/* Tabla de usuarios */}
                        <table className="table table-striped table-dark table-hover">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className="text-center" scope="col">
                                        Email
                                    </th>
                                    <th className="text-center" scope="col">
                                        Nombre
                                    </th>
                                    <th className="text-center" scope="col">
                                        Apellido
                                    </th>
                                    <th className="text-center" scope="col">
                                        Tipo
                                    </th>
                                    <th className="text-center" scope="col">
                                        Avisos
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td>
                                            <img
                                                className="admin-profiles-images"
                                                alt={user.name}
                                                src={user.img}
                                            />
                                        </td>
                                        <td className="text-center align-middle">{user.email}</td>
                                        <td className="text-center align-middle">{user.name}</td>
                                        <td className="text-center align-middle">{user.surname}</td>
                                        <td className="text-center align-middle">{user.type}</td>
                                        <td className="text-center align-middle">{user.warnings}</td>
                                        <td className="text-center align-middle">
                                            <button
                                                className="btn btn-warning"
                                                value={user.id}
                                                onClick={this.warningUserHandler}>
                                                <i className="fas fa-exclamation-triangle"></i>
                                            </button>
                                        </td>
                                        <td className="text-center align-middle">
                                            <button
                                                className="btn btn-red"
                                                value={user.id}
                                                onClick={this.deleteUserHandler}>
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="spinner m-auto pt-5">
                    <div className="spinner-border text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
    }
}