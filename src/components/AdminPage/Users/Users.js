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
        this.deleteUserHandler = this.deleteUserHandler.bind(this)
        this.warningUserHandler = this.warningUserHandler.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this)
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

    deleteUserHandler = (e) => {

        axios.delete('http://localhost:8000/api/userDelete', { data: { id: e.target.value } })
            .then(response => {
                this.reloadUsersHandler();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    warningUserHandler = (e) => {

        console.log(e.target.value)

        const data = {
            id: e.target.value
        }

        axios.post('http://localhost:8000/api/userWarning', data)
            .then(response => {
                this.reloadUsersHandler();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    reloadUsersHandler = () => {

        // Recarga la tabla de usuarios
        axios.get("http://localhost:8000/api/users")
            .then(response => {
                this.setState({
                    users: response.data
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

    render() {
        if (this.state.users.length > 0) {
            const { users } = this.state;
            return (
                <div id="users" className="table-responsive col-8 m-auto p-5">

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
                                    <h6>Email</h6>
                                </th>
                                <th className="text-center" scope="col">
                                    <h6>Nombre</h6>
                                </th>
                                <th className="text-center" scope="col">
                                    <h6>Apellido</h6>
                                </th>
                                <th className="text-center" scope="col">
                                    <h6>Tipo</h6>
                                </th>
                                <th className="text-center" scope="col">
                                    <h6>Avisos</h6>
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
                                    <td className="text-center align-middle p-3">{user.warnings}</td>
                                    <td className="col text-center align-middle">
                                        <button
                                            className="btn btn-warning"
                                            value={user.id}
                                            onClick={this.warningUserHandler}>
                                            <i className="fas fa-exclamation-triangle"></i>
                                        </button>
                                    </td>
                                    <td className="col text-center align-middle pl-5">
                                        <button
                                            className="btn btn-green"
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
            );
        } else {
            return (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }

    }
}