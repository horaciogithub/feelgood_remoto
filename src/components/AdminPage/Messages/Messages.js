import React, { Component } from "react";
import Pagination from "react-js-pagination"; // Importa paginación
import axios from "axios";

/* Estilos */
import "./Messages.css"

export default class Messages extends Component {
    constructor() {
        super();
        this.state = {
            messages: [],

            // Atributos de la paginación
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 5,
        };
        this.handlePageChange = this.handlePageChange.bind(this)
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/messages?page=` + 1)
            .then(response => {
                this.setState({
                    messages: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page,
                });
            });
    }

    // Paginación de mensajes
    handlePageChange(pageNumber) {
        axios.get(`http://localhost:8000/api/messages?page=` + pageNumber)
            .then(response => {
                this.setState({
                    messages: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page,
                });
            });
    }

    // Borra un mensaje determinado
    deleteCommentHandler = (e) => {
        axios.delete('http://localhost:8000/api/messageDelete', { data: { id: e.target.value } })
            .then(response => {
                this.reloadMessagesHandler();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // Vuelve a cargar los mensajes
    reloadMessagesHandler = () => {
        axios.get(`http://localhost:8000/api/messages?page=` + this.state.activePage)
            .then(response => {
                this.setState({
                    messages: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page,
                });
            });
    }

    render() {
        const { messages } = this.state;

        if (this.state.messages.length > 0) {
            return (
                <div id="comments" className="table-responsive col-8 m-auto p-0">

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

                    {/* Tabla de comentarios */}
                    <table className="table table-dark table-hover">
                        <thead>
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
                                    <td className="text-center align-middle"> {message.email} </td>
                                    <td className="text-left align-middle"> {message.subject} </td>
                                    <td className="text-center align-middle">
                                        <button
                                            className="btn btn-green"
                                            value={message.id}
                                            onClick={this.deleteCommentHandler}
                                        >
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
                <div id="comments" className="info-container">
                    <p className="info"><i className="fas fa-info-circle"></i> No hay mensajes registrados en el sistema</p>
                </div>
            )
        }

    }
}