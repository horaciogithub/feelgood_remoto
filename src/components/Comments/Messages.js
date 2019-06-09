import React, { Component } from 'react';
import Pagination from "react-js-pagination"; // Importa paginación
import axios from "axios";

/* STYLES */
import './Messages.css';


export default class Messages extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            subject: '',
            author: '',

            // Atributos de la paginación
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 5,
        }
        this.handlePageChange = this.handlePageChange.bind(this)
        this.commentHandler = this.commentHandler.bind(this)
        this.reloadMessagesHandler = this.reloadMessagesHandler.bind(this)
        this.submitCommentHandler = this.submitCommentHandler.bind(this)
        this.deleteCommentHandler = this.deleteCommentHandler.bind(this)
        this.formatTimestamp = this.formatTimestamp.bind(this)

    }

    componentDidMount() {
        axios.get(`http://serviciowebfeelgood.000webhostapp.com/api/messages?page=` + 1)
            .then(response => {
                this.setState({
                    messages: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page,
                });
            });
    }

    componentWillMount() {
        if (sessionStorage.getItem("userData")) {
            const data = JSON.parse(sessionStorage.getItem("userData"))

            this.setState({
                author: data.userData.email,
            })
        }
    }

    // Paginación de mensajes
    handlePageChange(pageNumber) {
        axios.get(`http://serviciowebfeelgood.000webhostapp.com/api/messages?page=` + pageNumber)
            .then(response => {
                this.setState({
                    messages: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page,
                });
            });
    }

    // Recarga los mensajes tras cualquier operación
    reloadMessagesHandler = () => {
        axios.get(`http://serviciowebfeelgood.000webhostapp.com/api/messages?page=` + this.state.activePage)
            .then(response => {
                this.setState({
                    messages: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page,
                });
            });
    }

    commentHandler = (e) => {
        this.setState({ subject: e.target.value });
    }

    submitCommentHandler = () => {

        const data = {
            author: this.state.author,
            subject: this.state.subject
        }

        if (this.state.author && this.state.subject) {
            axios.post('http://serviciowebfeelgood.000webhostapp.com/api/messageRegistration', data)
                .then(response => {
                    this.reloadMessagesHandler();
                })

        } else {
            console.log("error de envío")
        }

        document.getElementById("comment").value = '';
    }

    deleteCommentHandler = (e) => {

        axios.delete('http://serviciowebfeelgood.000webhostapp.com/api/messageDelete', { data: { id: e.currentTarget.value } })
            .then(response => {
                this.reloadMessagesHandler();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    formatTimestamp = (date) => {
        const month = [];
        month[0] = "Enero";
        month[1] = "Febrero";
        month[2] = "Marzo";
        month[3] = "Abril";
        month[4] = "Mayo";
        month[5] = "Junio";
        month[6] = "Julio";
        month[7] = "Agosto";
        month[8] = "Septiembre";
        month[9] = "Octubre";
        month[10] = "Noviembre";
        month[11] = "Diciembre";

        let timestamp = date.split(' ');
        let day = timestamp[0].split('-');

        let fullDate = new Date(timestamp);
        let hour = timestamp[1].split(':');
        hour = hour[0] + ':' + hour[1];

        let message = "El " + day[2] + " de " + month[fullDate.getMonth()] + " a las " + hour;
        return message;
    }

    render() {
        const result = [];

        const messages = this.state.messages;

        for (let i = 0; i < messages.length; i++) {

            /* Permite borrar el mensaje que pertenece a este autor */
            if (messages[i].email === this.state.author) {
                result.push(
                    <div key={messages[i].id} className="message-container">
                        <img src={messages[i].img} alt={messages[i].author} />
                        <div className="text">
                            <span className="usuario">{messages[i].name} {messages[i].surname} <i className="fas fa-angle-right"></i> {messages[i].type}</span>
                            <p>{messages[i].subject}</p>
                            <span className="hora"><i className="far fa-clock"></i> {this.formatTimestamp(messages[i].created_at)}</span>
                        </div>
                        <button
                            className="btn btn-red trash"
                            type="button"
                            value={messages[i].id}
                            onClick={this.deleteCommentHandler}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                )
            }
            else {
                result.push(
                    <div key={messages[i].id} className="message-container">
                        <img src={messages[i].img} alt={messages[i].author} />
                        <div className="text">
                            <span className="usuario">{messages[i].name} {messages[i].surname} <i className="fas fa-angle-right"></i> {messages[i].type}</span>
                            <p>{messages[i].subject}</p>
                            <span className="hora"><i className="far fa-clock"></i> {this.formatTimestamp(messages[i].created_at)}</span>
                        </div>
                    </div>
                )
            }
        }
        return (
            <div id="comments">
                <div className="container">

                    {result}

                    {/* Botones de paginación */}
                    {this.state.messages.length > 0 ?
                        <div className="d-flex justify-content-center pagination-comments">
                            <Pagination
                                itemClass="page-item"
                                linkClass="page-link"
                                activePage={this.state.activePage}
                                itemsCountPerPage={this.state.itemsCountPerPage}
                                totalItemsCount={this.state.totalItemsCount}
                                pageRangeDisplayed={this.state.pageRangeDisplayed}
                                onChange={this.handlePageChange}
                            />
                        </div> :
                        <div>
                            <p className="text-center"><i className="fas fa-info-circle"></i> No hay mensajes</p>
                        </div>
                    }

                    <div className="form-group">
                        <textarea
                            id="comment"
                            className="form-control"
                            rows="2"
                            onChange={this.commentHandler}>
                        </textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button
                            className="boton"
                            type="button"
                            onClick={this.submitCommentHandler}>
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}