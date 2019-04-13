import axios from "axios";
import React, { Component } from "react";
import { MDBBtn } from "mdbreact";

class Messages extends Component {
    constructor() {
        super();
        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8000/api/messages")
            .then(response => {
                this.setState({
                    messages: response.data
                });
            });
    }

    render() {
        const { messages } = this.state;
        return (
            <div>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th colSpan="9" className="text-center text-uppercase">
                                <h2 className="pt-2 pb-2">Comentarios</h2>
                            </th>
                        </tr>
                        <tr>
                            <th className="text-center" scope="col">
                                <h6>Email</h6>
                            </th>
                            <th className="text-center" scope="col">
                                <h6>Mensaje</h6>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map(message => (
                            <tr key={message.id}>
                                <td className="text-center align-middle"> {message.author} </td>
                                <td className="text-left align-middle"> {message.subject} </td>
                                <td className="text-center align-middle">
                                    <MDBBtn value={message.id} outline size="lg" color="danger">Eliminar</MDBBtn>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Messages;
