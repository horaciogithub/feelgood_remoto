import React, { Component } from "react";
import axios from "axios";
import { MDBBtn } from "mdbreact";

import "./users.css";

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8000/api/users")
            .then(response => {
                this.setState({
                    users: response.data
                });
            });
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                <table id="example" className="table table-striped table-dark table-hover">
                    <thead>
                        <tr>
                            <th colSpan="9" className="text-center text-uppercase">
                                <h2 className="pt-2 pb-2">Usuarios</h2>
                            </th>
                        </tr>
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
                            <th className="text-center" scope="col">
                                <h6>Eliminar</h6>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.email}>
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
                                <td className="text-center align-middle p-3">{user.complaints}</td>
                                <td className="text-center align-middle p-3">{user.warnings}</td>
                                <td className="col text-center align-middle">
                                    <MDBBtn outline size="lg" color="warning" >Dar aviso</MDBBtn>
                                </td>
                                <td className="col text-center align-middle pl-5">
                                    <MDBBtn outline size="lg" color="danger">Eliminar</MDBBtn>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Users;
